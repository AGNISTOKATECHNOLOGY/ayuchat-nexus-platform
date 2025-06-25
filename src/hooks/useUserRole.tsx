
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export type UserRole = 'super_admin' | 'admin' | 'user';

export const useUserRole = () => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchUserRole = async () => {
    if (!user) {
      setUserRole(null);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error fetching user role:', error);
        setUserRole('user'); // Default role
      } else {
        setUserRole(data.role as UserRole);
      }
    } catch (error: any) {
      console.error('Error:', error);
      toast({
        title: "Error fetching user role",
        description: error.message,
        variant: "destructive"
      });
      setUserRole('user');
    } finally {
      setLoading(false);
    }
  };

  const hasRole = (role: UserRole): boolean => {
    if (userRole === 'super_admin') return true; // Super admin has all permissions
    return userRole === role;
  };

  const isSuperAdmin = (): boolean => userRole === 'super_admin';
  const isAdmin = (): boolean => userRole === 'admin' || userRole === 'super_admin';
  const isUser = (): boolean => userRole === 'user';

  useEffect(() => {
    fetchUserRole();
  }, [user]);

  return {
    userRole,
    loading,
    hasRole,
    isSuperAdmin,
    isAdmin,
    isUser,
    refetch: fetchUserRole
  };
};
