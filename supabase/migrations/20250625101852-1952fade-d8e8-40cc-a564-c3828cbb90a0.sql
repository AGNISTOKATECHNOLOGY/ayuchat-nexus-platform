
-- Create user roles enum
CREATE TYPE public.app_role AS ENUM ('super_admin', 'admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check user roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM public.user_roles
        WHERE user_id = _user_id
        AND role = _role
    )
$$;

-- Create function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role(_user_id UUID)
RETURNS app_role
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
    SELECT role
    FROM public.user_roles
    WHERE user_id = _user_id
    LIMIT 1
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
    ON public.user_roles
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Super admins can view all roles"
    ON public.user_roles
    FOR SELECT
    USING (public.has_role(auth.uid(), 'super_admin'));

CREATE POLICY "Super admins can manage all roles"
    ON public.user_roles
    FOR ALL
    USING (public.has_role(auth.uid(), 'super_admin'));

-- Insert demo users (these will be created when the actual users sign up)
-- We'll need to create the auth users first, then assign roles

-- Update the handle_new_user function to assign default role
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Insert into profiles
    INSERT INTO public.profiles (id, first_name, last_name)
    VALUES (
        NEW.id,
        NEW.raw_user_meta_data->>'first_name',
        NEW.raw_user_meta_data->>'last_name'
    );
    
    -- Assign default user role
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'user');
    
    RETURN NEW;
END;
$$;

-- Add RLS policies to existing tables for role-based access
CREATE POLICY "Super admins can view all contacts"
    ON public.contacts
    FOR SELECT
    USING (public.has_role(auth.uid(), 'super_admin'));

CREATE POLICY "Admins can view their own contacts"
    ON public.contacts
    FOR SELECT
    USING (public.has_role(auth.uid(), 'admin') AND auth.uid() = user_id);

CREATE POLICY "Super admins can manage all contacts"
    ON public.contacts
    FOR ALL
    USING (public.has_role(auth.uid(), 'super_admin'));

CREATE POLICY "Admins can manage their own contacts"
    ON public.contacts
    FOR ALL
    USING (public.has_role(auth.uid(), 'admin') AND auth.uid() = user_id);

-- Similar policies for campaigns
CREATE POLICY "Super admins can view all campaigns"
    ON public.campaigns
    FOR SELECT
    USING (public.has_role(auth.uid(), 'super_admin'));

CREATE POLICY "Admins can view their own campaigns"
    ON public.campaigns
    FOR SELECT
    USING (public.has_role(auth.uid(), 'admin') AND auth.uid() = user_id);

CREATE POLICY "Super admins can manage all campaigns"
    ON public.campaigns
    FOR ALL
    USING (public.has_role(auth.uid(), 'super_admin'));

CREATE POLICY "Admins can manage their own campaigns"
    ON public.campaigns
    FOR ALL
    USING (public.has_role(auth.uid(), 'admin') AND auth.uid() = user_id);

-- Enable RLS on all tables if not already enabled
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.phone_numbers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics ENABLE ROW LEVEL SECURITY;
