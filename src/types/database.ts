// Database Types for Marketing AI Platform
// Generated from Supabase database schema

export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string;
          full_name: string | null;
          avatar_url: string | null;
          role: string | null;
          company_name: string | null;
          industry: string | null;
          phone: string | null;
          timezone: string | null;
          language: string | null;
          preferences: Json | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: string | null;
          company_name?: string | null;
          industry?: string | null;
          phone?: string | null;
          timezone?: string | null;
          language?: string | null;
          preferences?: Json | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: string | null;
          company_name?: string | null;
          industry?: string | null;
          phone?: string | null;
          timezone?: string | null;
          language?: string | null;
          preferences?: Json | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      campaigns: {
        Row: {
          id: string;
          user_id: string | null;
          name: string;
          description: string | null;
          type: string;
          status: string | null;
          start_date: string | null;
          end_date: string | null;
          budget: number | null;
          target_audience: Json | null;
          goals: Json | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          name: string;
          description?: string | null;
          type: string;
          status?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          budget?: number | null;
          target_audience?: Json | null;
          goals?: Json | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          name?: string;
          description?: string | null;
          type?: string;
          status?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          budget?: number | null;
          target_audience?: Json | null;
          goals?: Json | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      campaign_metrics: {
        Row: {
          id: string;
          campaign_id: string | null;
          date: string;
          impressions: number | null;
          clicks: number | null;
          conversions: number | null;
          spend: number | null;
          revenue: number | null;
          ctr: number | null;
          cpc: number | null;
          cpa: number | null;
          roi: number | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          campaign_id?: string | null;
          date: string;
          impressions?: number | null;
          clicks?: number | null;
          conversions?: number | null;
          spend?: number | null;
          revenue?: number | null;
          ctr?: number | null;
          cpc?: number | null;
          cpa?: number | null;
          roi?: number | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          campaign_id?: string | null;
          date?: string;
          impressions?: number | null;
          clicks?: number | null;
          conversions?: number | null;
          spend?: number | null;
          revenue?: number | null;
          ctr?: number | null;
          cpc?: number | null;
          cpa?: number | null;
          roi?: number | null;
          created_at?: string | null;
        };
      };
      audiences: {
        Row: {
          id: string;
          user_id: string | null;
          name: string;
          description: string | null;
          criteria: Json | null;
          total_contacts: number | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          name: string;
          description?: string | null;
          criteria?: Json | null;
          total_contacts?: number | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          name?: string;
          description?: string | null;
          criteria?: Json | null;
          total_contacts?: number | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      contacts: {
        Row: {
          id: string;
          user_id: string | null;
          audience_id: string | null;
          email: string | null;
          first_name: string | null;
          last_name: string | null;
          phone: string | null;
          company: string | null;
          position: string | null;
          tags: string[] | null;
          status: string | null;
          source: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          audience_id?: string | null;
          email?: string | null;
          first_name?: string | null;
          last_name?: string | null;
          phone?: string | null;
          company?: string | null;
          position?: string | null;
          tags?: string[] | null;
          status?: string | null;
          source?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          audience_id?: string | null;
          email?: string | null;
          first_name?: string | null;
          last_name?: string | null;
          phone?: string | null;
          company?: string | null;
          position?: string | null;
          tags?: string[] | null;
          status?: string | null;
          source?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      content: {
        Row: {
          id: string;
          user_id: string | null;
          campaign_id: string | null;
          title: string;
          content_type: string | null;
          content_data: Json | null;
          status: string | null;
          published_at: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          campaign_id?: string | null;
          title: string;
          content_type?: string | null;
          content_data?: Json | null;
          status?: string | null;
          published_at?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          campaign_id?: string | null;
          title?: string;
          content_type?: string | null;
          content_data?: Json | null;
          status?: string | null;
          published_at?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      ai_insights: {
        Row: {
          id: string;
          user_id: string | null;
          insight_type: string;
          title: string;
          description: string;
          confidence_score: number | null;
          impact_score: number | null;
          category: string | null;
          data_sources: Json | null;
          recommendations: Json | null;
          is_applied: boolean | null;
          applied_at: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          insight_type: string;
          title: string;
          description: string;
          confidence_score?: number | null;
          impact_score?: number | null;
          category?: string | null;
          data_sources?: Json | null;
          recommendations?: Json | null;
          is_applied?: boolean | null;
          applied_at?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          insight_type?: string;
          title?: string;
          description?: string;
          confidence_score?: number | null;
          impact_score?: number | null;
          category?: string | null;
          data_sources?: Json | null;
          recommendations?: Json | null;
          is_applied?: boolean | null;
          applied_at?: string | null;
          created_at?: string | null;
        };
      };
      notifications: {
        Row: {
          id: string;
          user_id: string | null;
          title: string;
          message: string;
          type: string | null;
          category: string | null;
          is_read: boolean | null;
          read_at: string | null;
          action_url: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          title: string;
          message: string;
          type?: string | null;
          category?: string | null;
          is_read?: boolean | null;
          read_at?: string | null;
          action_url?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          title?: string;
          message?: string;
          type?: string | null;
          category?: string | null;
          is_read?: boolean | null;
          read_at?: string | null;
          action_url?: string | null;
          created_at?: string | null;
        };
      };
      performance_summaries: {
        Row: {
          id: string;
          user_id: string | null;
          period_type: string;
          period_start: string;
          period_end: string;
          total_campaigns: number | null;
          total_reach: number | null;
          total_impressions: number | null;
          total_clicks: number | null;
          total_conversions: number | null;
          total_spend: number | null;
          total_revenue: number | null;
          avg_ctr: number | null;
          avg_cpc: number | null;
          avg_cpa: number | null;
          avg_roi: number | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          period_type: string;
          period_start: string;
          period_end: string;
          total_campaigns?: number | null;
          total_reach?: number | null;
          total_impressions?: number | null;
          total_clicks?: number | null;
          total_conversions?: number | null;
          total_spend?: number | null;
          total_revenue?: number | null;
          avg_ctr?: number | null;
          avg_cpc?: number | null;
          avg_cpa?: number | null;
          avg_roi?: number | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          period_type?: string;
          period_start?: string;
          period_end?: string;
          total_campaigns?: number | null;
          total_reach?: number | null;
          total_impressions?: number | null;
          total_clicks?: number | null;
          total_conversions?: number | null;
          total_spend?: number | null;
          total_revenue?: number | null;
          avg_ctr?: number | null;
          avg_cpc?: number | null;
          avg_cpa?: number | null;
          avg_roi?: number | null;
          created_at?: string | null;
        };
      };
      user_settings: {
        Row: {
          id: string;
          user_id: string | null;
          setting_key: string;
          setting_value: Json | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          setting_key: string;
          setting_value?: Json | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          setting_key?: string;
          setting_value?: Json | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

// Type aliases for better readability
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

// Specific table types
export type UserProfile = Database['public']['Tables']['user_profiles']['Row'];
export type Campaign = Database['public']['Tables']['campaigns']['Row'];
export type CampaignMetric = Database['public']['Tables']['campaign_metrics']['Row'];
export type Audience = Database['public']['Tables']['audiences']['Row'];
export type Contact = Database['public']['Tables']['contacts']['Row'];
export type Content = Database['public']['Tables']['content']['Row'];
export type AIInsight = Database['public']['Tables']['ai_insights']['Row'];
export type Notification = Database['public']['Tables']['notifications']['Row'];
export type PerformanceSummary = Database['public']['Tables']['performance_summaries']['Row'];
export type UserSetting = Database['public']['Tables']['user_settings']['Row'];

// Insert types
export type UserProfileInsert = Database['public']['Tables']['user_profiles']['Insert'];
export type CampaignInsert = Database['public']['Tables']['campaigns']['Insert'];
export type CampaignMetricInsert = Database['public']['Tables']['campaign_metrics']['Insert'];
export type AudienceInsert = Database['public']['Tables']['audiences']['Insert'];
export type ContactInsert = Database['public']['Tables']['contacts']['Insert'];
export type ContentInsert = Database['public']['Tables']['content']['Insert'];
export type AIInsightInsert = Database['public']['Tables']['ai_insights']['Insert'];
export type NotificationInsert = Database['public']['Tables']['notifications']['Insert'];
export type PerformanceSummaryInsert = Database['public']['Tables']['performance_summaries']['Insert'];
export type UserSettingInsert = Database['public']['Tables']['user_settings']['Insert'];

// Update types
export type UserProfileUpdate = Database['public']['Tables']['user_profiles']['Update'];
export type CampaignUpdate = Database['public']['Tables']['campaigns']['Update'];
export type CampaignMetricUpdate = Database['public']['Tables']['campaign_metrics']['Update'];
export type AudienceUpdate = Database['public']['Tables']['audiences']['Update'];
export type ContactUpdate = Database['public']['Tables']['contacts']['Update'];
export type ContentUpdate = Database['public']['Tables']['content']['Update'];
export type AIInsightUpdate = Database['public']['Tables']['ai_insights']['Update'];
export type NotificationUpdate = Database['public']['Tables']['notifications']['Update'];
export type PerformanceSummaryUpdate = Database['public']['Tables']['performance_summaries']['Update'];
export type UserSettingUpdate = Database['public']['Tables']['user_settings']['Update'];

// Extended types with relationships
export interface UserProfileWithRelations extends UserProfile {
  campaigns?: Campaign[];
  audiences?: Audience[];
  contacts?: Contact[];
  content?: Content[];
  ai_insights?: AIInsight[];
  notifications?: Notification[];
  performance_summaries?: PerformanceSummary[];
  user_settings?: UserSetting[];
}

export interface CampaignWithRelations extends Campaign {
  user_profile?: UserProfile;
  campaign_metrics?: CampaignMetric[];
  content?: Content[];
}

export interface AudienceWithRelations extends Audience {
  user_profile?: UserProfile;
  contacts?: Contact[];
}

export interface ContactWithRelations extends Contact {
  user_profile?: UserProfile;
  audience?: Audience;
}
