export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      analytics: {
        Row: {
          active_contacts: number | null
          automation_triggered: number | null
          campaigns_sent: number | null
          created_at: string | null
          date: string
          id: string
          messages_delivered: number | null
          messages_read: number | null
          messages_sent: number | null
          new_contacts: number | null
          responses_received: number | null
          user_id: string
        }
        Insert: {
          active_contacts?: number | null
          automation_triggered?: number | null
          campaigns_sent?: number | null
          created_at?: string | null
          date: string
          id?: string
          messages_delivered?: number | null
          messages_read?: number | null
          messages_sent?: number | null
          new_contacts?: number | null
          responses_received?: number | null
          user_id: string
        }
        Update: {
          active_contacts?: number | null
          automation_triggered?: number | null
          campaigns_sent?: number | null
          created_at?: string | null
          date?: string
          id?: string
          messages_delivered?: number | null
          messages_read?: number | null
          messages_sent?: number | null
          new_contacts?: number | null
          responses_received?: number | null
          user_id?: string
        }
        Relationships: []
      }
      automation: {
        Row: {
          actions: Json | null
          automation_type: Database["public"]["Enums"]["automation_type"]
          conversion_count: number | null
          created_at: string | null
          id: string
          last_triggered_at: string | null
          name: string
          response_count: number | null
          status: Database["public"]["Enums"]["automation_status"] | null
          trigger_conditions: Json | null
          trigger_type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          actions?: Json | null
          automation_type: Database["public"]["Enums"]["automation_type"]
          conversion_count?: number | null
          created_at?: string | null
          id?: string
          last_triggered_at?: string | null
          name: string
          response_count?: number | null
          status?: Database["public"]["Enums"]["automation_status"] | null
          trigger_conditions?: Json | null
          trigger_type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          actions?: Json | null
          automation_type?: Database["public"]["Enums"]["automation_type"]
          conversion_count?: number | null
          created_at?: string | null
          id?: string
          last_triggered_at?: string | null
          name?: string
          response_count?: number | null
          status?: Database["public"]["Enums"]["automation_status"] | null
          trigger_conditions?: Json | null
          trigger_type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      campaigns: {
        Row: {
          campaign_type: Database["public"]["Enums"]["campaign_type"]
          created_at: string | null
          delivered_count: number | null
          id: string
          name: string
          phone_number_id: string | null
          read_count: number | null
          response_count: number | null
          scheduled_at: string | null
          sent_count: number | null
          status: Database["public"]["Enums"]["campaign_status"] | null
          target_contacts: string[] | null
          template_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          campaign_type: Database["public"]["Enums"]["campaign_type"]
          created_at?: string | null
          delivered_count?: number | null
          id?: string
          name: string
          phone_number_id?: string | null
          read_count?: number | null
          response_count?: number | null
          scheduled_at?: string | null
          sent_count?: number | null
          status?: Database["public"]["Enums"]["campaign_status"] | null
          target_contacts?: string[] | null
          template_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          campaign_type?: Database["public"]["Enums"]["campaign_type"]
          created_at?: string | null
          delivered_count?: number | null
          id?: string
          name?: string
          phone_number_id?: string | null
          read_count?: number | null
          response_count?: number | null
          scheduled_at?: string | null
          sent_count?: number | null
          status?: Database["public"]["Enums"]["campaign_status"] | null
          target_contacts?: string[] | null
          template_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_phone_number_id_fkey"
            columns: ["phone_number_id"]
            isOneToOne: false
            referencedRelation: "phone_numbers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaigns_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "templates"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          last_message_at: string | null
          name: string
          phone: string
          status: Database["public"]["Enums"]["contact_status"] | null
          tags: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          last_message_at?: string | null
          name: string
          phone: string
          status?: Database["public"]["Enums"]["contact_status"] | null
          tags?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          last_message_at?: string | null
          name?: string
          phone?: string
          status?: Database["public"]["Enums"]["contact_status"] | null
          tags?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          campaign_id: string | null
          contact_id: string
          content: string
          created_at: string | null
          delivered_at: string | null
          id: string
          phone_number_id: string
          read_at: string | null
          response_at: string | null
          response_content: string | null
          sent_at: string | null
          status: Database["public"]["Enums"]["message_status"] | null
          user_id: string
        }
        Insert: {
          campaign_id?: string | null
          contact_id: string
          content: string
          created_at?: string | null
          delivered_at?: string | null
          id?: string
          phone_number_id: string
          read_at?: string | null
          response_at?: string | null
          response_content?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["message_status"] | null
          user_id: string
        }
        Update: {
          campaign_id?: string | null
          contact_id?: string
          content?: string
          created_at?: string | null
          delivered_at?: string | null
          id?: string
          phone_number_id?: string
          read_at?: string | null
          response_at?: string | null
          response_content?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["message_status"] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_phone_number_id_fkey"
            columns: ["phone_number_id"]
            isOneToOne: false
            referencedRelation: "phone_numbers"
            referencedColumns: ["id"]
          },
        ]
      }
      phone_numbers: {
        Row: {
          country: string
          created_at: string | null
          display_name: string
          id: string
          phone_number: string
          plan: string | null
          status: Database["public"]["Enums"]["phone_number_status"] | null
          updated_at: string | null
          user_id: string
          verified: boolean | null
          webhook_url: string | null
        }
        Insert: {
          country: string
          created_at?: string | null
          display_name: string
          id?: string
          phone_number: string
          plan?: string | null
          status?: Database["public"]["Enums"]["phone_number_status"] | null
          updated_at?: string | null
          user_id: string
          verified?: boolean | null
          webhook_url?: string | null
        }
        Update: {
          country?: string
          created_at?: string | null
          display_name?: string
          id?: string
          phone_number?: string
          plan?: string | null
          status?: Database["public"]["Enums"]["phone_number_status"] | null
          updated_at?: string | null
          user_id?: string
          verified?: boolean | null
          webhook_url?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          company: string | null
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          timezone: string | null
          updated_at: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          timezone?: string | null
          updated_at?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          timezone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at_period_end: boolean | null
          created_at: string | null
          current_period_end: string
          current_period_start: string
          id: string
          plan_name: string
          status: Database["public"]["Enums"]["subscription_status"] | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          cancel_at_period_end?: boolean | null
          created_at?: string | null
          current_period_end: string
          current_period_start: string
          id?: string
          plan_name: string
          status?: Database["public"]["Enums"]["subscription_status"] | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          cancel_at_period_end?: boolean | null
          created_at?: string | null
          current_period_end?: string
          current_period_start?: string
          id?: string
          plan_name?: string
          status?: Database["public"]["Enums"]["subscription_status"] | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      templates: {
        Row: {
          category: string
          content: string
          created_at: string | null
          id: string
          language: string | null
          last_used_at: string | null
          name: string
          status: Database["public"]["Enums"]["template_status"] | null
          template_type: Database["public"]["Enums"]["template_type"] | null
          updated_at: string | null
          usage_count: number | null
          user_id: string
          variables: string[] | null
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          id?: string
          language?: string | null
          last_used_at?: string | null
          name: string
          status?: Database["public"]["Enums"]["template_status"] | null
          template_type?: Database["public"]["Enums"]["template_type"] | null
          updated_at?: string | null
          usage_count?: number | null
          user_id: string
          variables?: string[] | null
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          id?: string
          language?: string | null
          last_used_at?: string | null
          name?: string
          status?: Database["public"]["Enums"]["template_status"] | null
          template_type?: Database["public"]["Enums"]["template_type"] | null
          updated_at?: string | null
          usage_count?: number | null
          user_id?: string
          variables?: string[] | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { _user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
      update_daily_analytics: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      app_role: "super_admin" | "admin" | "user"
      automation_status: "active" | "paused" | "draft"
      automation_type: "chatbot" | "workflow"
      campaign_status: "draft" | "scheduled" | "active" | "completed" | "paused"
      campaign_type: "broadcast" | "sequence" | "automation"
      contact_status: "active" | "inactive" | "blocked"
      message_status: "sent" | "delivered" | "read" | "failed"
      phone_number_status: "active" | "pending" | "inactive"
      subscription_status: "active" | "cancelled" | "past_due"
      template_status: "pending" | "approved" | "rejected"
      template_type: "text" | "media" | "interactive"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["super_admin", "admin", "user"],
      automation_status: ["active", "paused", "draft"],
      automation_type: ["chatbot", "workflow"],
      campaign_status: ["draft", "scheduled", "active", "completed", "paused"],
      campaign_type: ["broadcast", "sequence", "automation"],
      contact_status: ["active", "inactive", "blocked"],
      message_status: ["sent", "delivered", "read", "failed"],
      phone_number_status: ["active", "pending", "inactive"],
      subscription_status: ["active", "cancelled", "past_due"],
      template_status: ["pending", "approved", "rejected"],
      template_type: ["text", "media", "interactive"],
    },
  },
} as const
