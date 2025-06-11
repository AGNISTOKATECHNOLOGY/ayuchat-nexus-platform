
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

export interface Campaign {
  id: string;
  name: string;
  campaign_type: 'broadcast' | 'sequence' | 'automation';
  status: 'draft' | 'scheduled' | 'active' | 'completed' | 'paused';
  template_id?: string;
  phone_number_id?: string;
  target_contacts: string[];
  scheduled_at?: string;
  sent_count: number;
  delivered_count: number;
  read_count: number;
  response_count: number;
  created_at: string;
  updated_at: string;
}

export const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchCampaigns = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('campaigns')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCampaigns(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching campaigns",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const addCampaign = async (campaignData: Omit<Campaign, 'id' | 'created_at' | 'updated_at' | 'sent_count' | 'delivered_count' | 'read_count' | 'response_count'>) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('campaigns')
        .insert([{ ...campaignData, user_id: user.id }])
        .select()
        .single();

      if (error) throw error;

      setCampaigns(prev => [data, ...prev]);
      toast({
        title: "Campaign created",
        description: `${campaignData.name} has been created successfully.`
      });

      return { data, error: null };
    } catch (error: any) {
      toast({
        title: "Error creating campaign",
        description: error.message,
        variant: "destructive"
      });
      return { data: null, error };
    }
  };

  const updateCampaign = async (id: string, updates: Partial<Campaign>) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('campaigns')
        .update(updates)
        .eq('id', id)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) throw error;

      setCampaigns(prev => prev.map(campaign => 
        campaign.id === id ? { ...campaign, ...data } : campaign
      ));

      toast({
        title: "Campaign updated",
        description: "Campaign has been updated successfully."
      });

      return { data, error: null };
    } catch (error: any) {
      toast({
        title: "Error updating campaign",
        description: error.message,
        variant: "destructive"
      });
      return { data: null, error };
    }
  };

  const deleteCampaign = async (id: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('campaigns')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;

      setCampaigns(prev => prev.filter(campaign => campaign.id !== id));
      toast({
        title: "Campaign deleted",
        description: "Campaign has been deleted successfully."
      });

      return { error: null };
    } catch (error: any) {
      toast({
        title: "Error deleting campaign",
        description: error.message,
        variant: "destructive"
      });
      return { error };
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, [user]);

  return {
    campaigns,
    loading,
    addCampaign,
    updateCampaign,
    deleteCampaign,
    refetch: fetchCampaigns
  };
};
