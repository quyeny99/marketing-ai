"use client";

import useSWR from 'swr';
import { useAuth } from '@/contexts/auth-context';
import { dashboardStatsService } from '@/lib/services/database';
import type { Campaign, AIInsight } from '@/types/database';

interface DashboardStats {
  campaignsCount: number;
  activeCampaignsCount: number;
  totalReach: number;
  recentCampaigns: Campaign[];
  aiInsights: AIInsight[];
}

export function useDashboardData() {
  const { user } = useAuth();

  const { data: stats, mutate, error, isLoading } = useSWR<DashboardStats>(
    user ? `dashboard-stats-${user.id}` : null,
    async (): Promise<DashboardStats> => {
      if (!user) {
        return {
          campaignsCount: 0,
          activeCampaignsCount: 0,
          totalReach: 0,
          recentCampaigns: [],
          aiInsights: [],
        };
      }
      const result = await dashboardStatsService.getDashboardStats(user.id);
      return result || {
        campaignsCount: 0,
        activeCampaignsCount: 0,
        totalReach: 0,
        recentCampaigns: [],
        aiInsights: [],
      };
    },
    {
      refreshInterval: 30000, // Refresh every 30 seconds
      revalidateOnFocus: true,
    }
  );

  const refreshData = () => {
    mutate();
  };

  // Format numbers for display
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  // Calculate conversion rate
  const getConversionRate = (): number => {
    if (!stats) return 0;
    // This would need to be calculated from campaign metrics
    // For now, return a placeholder
    return 3.2;
  };

  return {
    stats: stats || {
      campaignsCount: 0,
      activeCampaignsCount: 0,
      totalReach: 0,
      recentCampaigns: [],
      aiInsights: [],
    },
    isLoading,
    error,
    refreshData,
    formatNumber,
    getConversionRate,
  };
}
