import { createClient } from '@/utils/supabase/client';
import type {
  UserProfile,
  UserProfileInsert,
  UserProfileUpdate,
  Campaign,
  CampaignInsert,
  CampaignUpdate,
  CampaignMetric,
  CampaignMetricInsert,
  Audience,
  AudienceInsert,
  AIInsight,
  AIInsightInsert,
  Notification,
  NotificationInsert,
} from '@/types/database';

// Helper function to get Supabase client
const getSupabaseClient = () => createClient();

// User Profile Services
export const userProfileService = {
  // Get user profile by ID
  async getById(id: string): Promise<UserProfile | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }

    return data;
  },

  // Get user profile by auth user ID
  async getByAuthId(authId: string): Promise<UserProfile | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', authId)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }

    return data;
  },

  // Update user profile
  async update(id: string, updates: UserProfileUpdate): Promise<UserProfile | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('user_profiles')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating user profile:', error);
      return null;
    }

    return data;
  },

  // Create user profile (usually handled by trigger)
  async create(profile: UserProfileInsert): Promise<UserProfile | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('user_profiles')
      .insert(profile)
      .select()
      .single();

    if (error) {
      console.error('Error creating user profile:', error);
      return null;
    }

    return data;
  },
};

// Campaign Services
export const campaignService = {
  // Get campaigns for a user
  async getByUserId(userId: string): Promise<Campaign[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('campaigns')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching campaigns:', error);
      return [];
    }

    return data || [];
  },

  // Get campaign by ID
  async getById(id: string): Promise<Campaign | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('campaigns')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching campaign:', error);
      return null;
    }

    return data;
  },

  // Create new campaign
  async create(campaign: CampaignInsert): Promise<Campaign | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('campaigns')
      .insert(campaign)
      .select()
      .single();

    if (error) {
      console.error('Error creating campaign:', error);
      return null;
    }

    return data;
  },

  // Update campaign
  async update(id: string, updates: CampaignUpdate): Promise<Campaign | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('campaigns')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating campaign:', error);
      return null;
    }

    return data;
  },

  // Delete campaign
  async delete(id: string): Promise<boolean> {
    const supabase = getSupabaseClient();
    const { error } = await supabase
      .from('campaigns')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting campaign:', error);
      return false;
    }

    return true;
  },
};

// Campaign Metrics Services
export const campaignMetricsService = {
  // Get metrics for a campaign
  async getByCampaignId(campaignId: string): Promise<CampaignMetric[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('campaign_metrics')
      .select('*')
      .eq('campaign_id', campaignId)
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching campaign metrics:', error);
      return [];
    }

    return data || [];
  },

  // Add metric for a campaign
  async add(metric: CampaignMetricInsert): Promise<CampaignMetric | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('campaign_metrics')
      .insert(metric)
      .select()
      .single();

    if (error) {
      console.error('Error adding campaign metric:', error);
      return null;
    }

    return data;
  },
};

// Audience Services
export const audienceService = {
  // Get audiences for a user
  async getByUserId(userId: string): Promise<Audience[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('audiences')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching audiences:', error);
      return [];
    }

    return data || [];
  },

  // Create new audience
  async create(audience: AudienceInsert): Promise<Audience | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('audiences')
      .insert(audience)
      .select()
      .single();

    if (error) {
      console.error('Error creating audience:', error);
      return null;
    }

    return data;
  },
};

// AI Insights Services
export const aiInsightService = {
  // Get AI insights for a user
  async getByUserId(userId: string): Promise<AIInsight[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('ai_insights')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching AI insights:', error);
      return [];
    }

    return data || [];
  },

  // Create new AI insight
  async create(insight: AIInsightInsert): Promise<AIInsight | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('ai_insights')
      .insert(insight)
      .select()
      .single();

    if (error) {
      console.error('Error creating AI insight:', error);
      return null;
    }

    return data;
  },
};

// Notification Services
export const notificationService = {
  // Get notifications for a user
  async getByUserId(userId: string): Promise<Notification[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching notifications:', error);
      return [];
    }

    return data || [];
  },

  // Mark notification as read
  async markAsRead(id: string): Promise<boolean> {
    const supabase = getSupabaseClient();
    const { error } = await supabase
      .from('notifications')
      .update({ is_read: true, read_at: new Date().toISOString() })
      .eq('id', id);

    if (error) {
      console.error('Error marking notification as read:', error);
      return false;
    }

    return true;
  },

  // Create new notification
  async create(notification: NotificationInsert): Promise<Notification | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('notifications')
      .insert(notification)
      .select()
      .single();

    if (error) {
      console.error('Error creating notification:', error);
      return null;
    }

    return data;
  },
};

// Dashboard Stats Service
export const dashboardStatsService = {
  // Get dashboard stats for a user
  async getDashboardStats(userId: string) {
    try {
      const supabase = getSupabaseClient();
      
      // Get campaigns count
      const { count: campaignsCount } = await supabase
        .from('campaigns')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId);

      // Get active campaigns count
      const { count: activeCampaignsCount } = await supabase
        .from('campaigns')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('status', 'active');

      // Get total reach (sum of campaign metrics)
      const { data: campaignIds } = await supabase
        .from('campaigns')
        .select('id')
        .eq('user_id', userId);

      let totalReach = 0;
      if (campaignIds && campaignIds.length > 0) {
        const { data: metrics } = await supabase
          .from('campaign_metrics')
          .select('impressions')
          .in('campaign_id', campaignIds.map(c => c.id));

        if (metrics) {
          totalReach = metrics.reduce((sum, metric) => sum + (metric.impressions || 0), 0);
        }
      }

      // Get recent campaigns
      const { data: recentCampaigns } = await supabase
        .from('campaigns')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(3);

      // Get AI insights
      const { data: aiInsights } = await supabase
        .from('ai_insights')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(3);

      return {
        campaignsCount: campaignsCount || 0,
        activeCampaignsCount: activeCampaignsCount || 0,
        totalReach,
        recentCampaigns: recentCampaigns || [],
        aiInsights: aiInsights || [],
      };
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      return {
        campaignsCount: 0,
        activeCampaignsCount: 0,
        totalReach: 0,
        recentCampaigns: [],
        aiInsights: [],
      };
    }
  },
};
