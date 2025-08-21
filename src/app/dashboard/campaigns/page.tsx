"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CampaignForm } from "@/components/campaigns/campaign-form";
import { CampaignList } from "@/components/campaigns/campaign-list";
import { CampaignAnalytics } from "@/components/campaigns/campaign-analytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Plus, 
  Target, 
  BarChart3, 
  Settings, 
  TrendingUp, 
  Lightbulb,
  Zap,
  Sparkles,
  Users,
  Calendar,
  DollarSign,
  AlertCircle,
  RefreshCw
} from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useCampaigns } from "@/hooks/use-campaigns";
import { toast } from "sonner";
import type { Campaign } from "@/types/database";

// Campaigns Page Skeleton Component
function CampaignsSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header Skeleton */}
        <div className="mb-6 sm:mb-8">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-5 w-80" />
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="bg-white border-gray-200">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <Skeleton className="h-3 w-20 mb-2" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Create Button Skeleton */}
        <div className="mb-6 sm:mb-8">
          <Skeleton className="h-10 w-48" />
        </div>

        {/* Main Content Skeleton */}
        <Card className="bg-white border-gray-200">
          <CardHeader className="p-4 sm:p-6">
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-48" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                      <Skeleton className="h-5 w-32 mb-2" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                  <div className="text-right">
                    <Skeleton className="h-5 w-20 mb-2" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Error Component
function CampaignsError({ error, onRetry }: { error: string; onRetry: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Oops! Something went wrong</h3>
        <p className="text-gray-600 mb-6">{error}</p>
        <Button 
          onClick={onRetry} 
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      </div>
    </div>
  );
}

export default function CampaignsPage() {
  const { user } = useAuth();
  const { campaigns, metrics, isLoading, error, createCampaign, updateCampaign, deleteCampaign, refreshCampaigns } = useCampaigns();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);
  const [selectedCampaignId, setSelectedCampaignId] = useState<string>("");

  const handleCreateCampaign = async (data: any) => {
    try {
      await createCampaign({
        ...data,
        user_id: user?.id || "",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
      setIsCreateDialogOpen(false);
      toast.success("Campaign created successfully!");
    } catch (error) {
      console.error("Failed to create campaign:", error);
      toast.error("Failed to create campaign");
    }
  };

  const handleEditCampaign = async (data: any) => {
    if (!editingCampaign) return;
    
    try {
      await updateCampaign(editingCampaign.id, {
        ...data,
        updated_at: new Date().toISOString(),
      });
      setEditingCampaign(null);
      toast.success("Campaign updated successfully!");
    } catch (error) {
      console.error("Failed to update campaign:", error);
      toast.error("Failed to update campaign");
    }
  };

  const handleDeleteCampaign = async (campaignId: string) => {
    if (!confirm("Are you sure you want to delete this campaign?")) return;
    
    try {
      await deleteCampaign(campaignId);
      toast.success("Campaign deleted successfully!");
    } catch (error) {
      console.error("Failed to delete campaign:", error);
      toast.error("Failed to delete campaign");
    }
  };

  const handleViewCampaign = (campaign: Campaign) => {
    setSelectedCampaignId(campaign.id);
  };

  // Calculate summary metrics
  const summaryMetrics = {
    total: Array.isArray(campaigns) ? campaigns.length : 0,
    active: Array.isArray(campaigns) ? campaigns.filter(c => c.status === 'active').length : 0,
    draft: Array.isArray(campaigns) ? campaigns.filter(c => c.status === 'draft').length : 0,
    completed: Array.isArray(campaigns) ? campaigns.filter(c => c.status === 'completed').length : 0,
  };

  // Show skeleton loading while data is being fetched
  if (isLoading) {
    return <CampaignsSkeleton />;
  }

  // Show error state
  if (error) {
    return <CampaignsError error={error} onRetry={refreshCampaigns} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Quản lý Chiến dịch
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Tạo, quản lý và phân tích các chiến dịch marketing của bạn
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Tổng Chiến dịch</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                    {summaryMetrics.total}
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Chiến dịch Đang chạy</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                    {summaryMetrics.active}
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Chiến dịch Nháp</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                    {summaryMetrics.draft}
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Đã hoàn thành</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                    {summaryMetrics.completed}
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Create Campaign Button */}
        <div className="mb-6 sm:mb-8">
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg shadow-sm">
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Tạo Chiến dịch Mới
              </Button>
            </DialogTrigger>
            <DialogContent className="!max-w-[95vw] sm:!max-w-[90vw] md:!max-w-[85vw] lg:!max-w-[80vw] xl:!max-w-[1280px] max-h-[95vh] sm:max-h-[98vh] overflow-y-auto w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[1280px] p-0">
              <DialogHeader className="p-4 sm:p-6 pb-4">
                <DialogTitle className="text-xl sm:text-2xl font-bold text-black">Tạo Chiến dịch Mới</DialogTitle>
              </DialogHeader>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <CampaignForm onSubmit={handleCreateCampaign} />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Edit Campaign Dialog */}
        <Dialog open={!!editingCampaign} onOpenChange={(open) => !open && setEditingCampaign(null)}>
          <DialogContent className="!max-w-[95vw] sm:!max-w-[90vw] md:!max-w-[85vw] lg:!max-w-[80vw] xl:!max-w-[1280px] max-h-[95vh] sm:max-h-[98vh] overflow-y-auto w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[1280px] p-0">
            <DialogHeader className="p-4 sm:p-6 pb-4">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-black">Chỉnh sửa Chiến dịch</DialogTitle>
            </DialogHeader>
            {editingCampaign && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <CampaignForm
                  onSubmit={handleEditCampaign}
                  initialData={editingCampaign as any}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Main Content Tabs */}
        <Card className="bg-white border-gray-200">
          <CardHeader className="p-4 sm:p-6">
            <Tabs defaultValue="campaigns" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-100 border border-gray-200 h-full">
                <TabsTrigger 
                  value="campaigns" 
                  className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
                >
                  <Target className="w-4 h-4 mr-2" />
                  Chiến dịch
                  <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700">
                    {summaryMetrics.total}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger 
                  value="analytics" 
                  className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Phân tích
                  <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                    Trực tiếp
                  </Badge>
                </TabsTrigger>
                <TabsTrigger 
                  value="settings" 
                  className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Cài đặt
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>

          <CardContent className="p-4 sm:p-6">
            <Tabs defaultValue="campaigns" className="w-full">
              {/* Campaigns Tab */}
              <TabsContent value="campaigns" className="mt-0">
                <CampaignList
                  campaigns={campaigns}
                  onEdit={setEditingCampaign}
                  onDelete={handleDeleteCampaign}
                  onView={handleViewCampaign}
                  onCreateNew={() => setIsCreateDialogOpen(true)}
                />
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="mt-0">
                <CampaignAnalytics
                  campaigns={campaigns}
                  metrics={metrics}
                  selectedCampaignId={selectedCampaignId}
                  onCampaignSelect={setSelectedCampaignId}
                />
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="mt-0">
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Settings className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">Cài đặt Chiến dịch</h3>
                  <p className="text-gray-600 mb-4">
                    Cấu hình mặc định, quy tắc tự động và tùy chọn cho chiến dịch
                  </p>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Sắp ra mắt...
                  </Badge>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Separator className="my-8" />
        <div className="text-sm text-gray-600">
          Gợi ý: Sử dụng tab phân tích để theo dõi hiệu suất chiến dịch và tối ưu hóa chiến lược marketing.
        </div>
      </div>
    </div>
  );
}


