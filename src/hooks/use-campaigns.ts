"use client";

import { useState, useEffect, useCallback } from "react";
import useSWR from "swr";
import { useAuth } from "@/contexts/auth-context";
import { campaignService, campaignMetricsService } from "@/lib/services/database";
import type { Campaign, CampaignInsert, CampaignUpdate, CampaignMetric } from "@/types/database";

interface UseCampaignsReturn {
  campaigns: Campaign[];
  metrics: CampaignMetric[];
  isLoading: boolean;
  error: any;
  createCampaign: (data: CampaignInsert) => Promise<void>;
  updateCampaign: (id: string, data: CampaignUpdate) => Promise<void>;
  deleteCampaign: (id: string) => Promise<void>;
  refreshCampaigns: () => void;
  refreshMetrics: () => void;
}

export function useCampaigns(): UseCampaignsReturn {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // Fetch campaigns
  const {
    data: campaigns = [],
    error: campaignsError,
    mutate: mutateCampaigns,
  } = useSWR(
    user ? `campaigns-${user.id}` : null,
    async () => {
      if (!user) return [];
      return await campaignService.getByUserId(user.id);
    },
    {
      refreshInterval: 30000, // Refresh every 30 seconds
      revalidateOnFocus: true,
    }
  );

  // Fetch campaign metrics
  const {
    data: metrics = [],
    error: metricsError,
    mutate: mutateMetrics,
  } = useSWR(
    user ? `campaign-metrics-${user.id}` : null,
    async () => {
      if (!user) return [];
      return await campaignMetricsService.getByCampaignId(user.id);
    },
    {
      refreshInterval: 30000, // Refresh every 30 seconds
      revalidateOnFocus: true,
    }
  );

  // Create campaign
  const createCampaign = useCallback(async (data: CampaignInsert) => {
    if (!user) throw new Error("User not authenticated");
    
    setIsLoading(true);
    try {
      const newCampaign = await campaignService.create(data);
      
      // Optimistically update the local state
      await mutateCampaigns([...campaigns, newCampaign], false);
      
      // Revalidate to ensure consistency
      await mutateCampaigns();
    } catch (error) {
      console.error("Failed to create campaign:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [user, campaigns, mutateCampaigns]);

  // Update campaign
  const updateCampaign = useCallback(async (id: string, data: CampaignUpdate) => {
    if (!user) throw new Error("User not authenticated");
    
    setIsLoading(true);
    try {
      const updatedCampaign = await campaignService.update(id, data);
      
      // Optimistically update the local state
      const updatedCampaigns = campaigns.map(campaign =>
        campaign.id === id ? { ...campaign, ...(updatedCampaign || {}) } : campaign
      );
      await mutateCampaigns(updatedCampaigns, false);
      
      // Revalidate to ensure consistency
      await mutateCampaigns();
    } catch (error) {
      console.error("Failed to update campaign:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [user, campaigns, mutateCampaigns]);

  // Delete campaign
  const deleteCampaign = useCallback(async (id: string) => {
    if (!user) throw new Error("User not authenticated");
    
    setIsLoading(true);
    try {
      await campaignService.delete(id);
      
      // Optimistically update the local state
      const updatedCampaigns = campaigns.filter(campaign => campaign.id !== id);
      await mutateCampaigns(updatedCampaigns, false);
      
      // Revalidate to ensure consistency
      await mutateCampaigns();
    } catch (error) {
      console.error("Failed to delete campaign:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [user, campaigns, mutateCampaigns]);

  // Refresh functions
  const refreshCampaigns = useCallback(() => {
    mutateCampaigns();
  }, [mutateCampaigns]);

  const refreshMetrics = useCallback(() => {
    mutateMetrics();
  }, [mutateMetrics]);

  // Set up real-time subscriptions (if using Supabase realtime)
  useEffect(() => {
    if (!user) return;

    // This would be where you set up Supabase realtime subscriptions
    // For now, we'll just use SWR's built-in refresh intervals
    
    // Example of how you might set up realtime:
    // const subscription = supabase
    //   .channel('campaigns')
    //   .on('postgres_changes', 
    //     { event: '*', schema: 'public', table: 'campaigns', filter: `user_id=eq.${user.id}` },
    //     () => {
    //       mutateCampaigns();
    //     }
    //   )
    //   .subscribe();

    // return () => {
    //   subscription.unsubscribe();
    // };
  }, [user]);

  return {
    campaigns,
    metrics,
    isLoading,
    error: campaignsError || metricsError,
    createCampaign,
    updateCampaign,
    deleteCampaign,
    refreshCampaigns,
    refreshMetrics,
  };
}
