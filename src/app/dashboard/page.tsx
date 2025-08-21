"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Zap, 
  Users, 
  BarChart3, 
  Target, 
  Activity,
  Calculator,
  AlertCircle
} from "lucide-react";
import { useDashboardData } from "@/hooks/use-dashboard-data";
import { useAuth } from "@/contexts/auth-context";
import { formatDistanceToNow } from 'date-fns';
import { DashboardSkeleton } from "@/components/dashboard/dashboard-skeleton";

export default function DashboardPage() {
  const { user } = useAuth();
  const { 
    stats, 
    isLoading: dataLoading,
    error, 
    refreshData, 
    formatNumber, 
    getConversionRate 
  } = useDashboardData();

  // Show skeleton loading while dashboard data is being fetched
  if (dataLoading || !stats) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-8 w-8 mx-auto mb-4 text-red-600" />
          <p className="text-red-600 mb-4">Error loading dashboard</p>
          <Button onClick={refreshData} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Chào mừng trở lại, {user?.user_metadata?.firstName + ' ' + user?.user_metadata?.lastName || 'Người dùng'}!
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Đây là những gì đang diễn ra với các chiến dịch marketing của bạn.
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
                    {stats.campaignsCount}
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
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
                    {stats.activeCampaignsCount}
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Tổng Tiếp cận</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                    {formatNumber(stats.totalReach)}
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Tỷ lệ Chuyển đổi</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                    {getConversionRate()}%
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Recent Campaigns */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-gray-200">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-black">
                  Chiến dịch Gần đây
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm sm:text-base">
                  Các chiến dịch marketing mới nhất và hiệu suất của chúng
                </CardDescription>
              </CardHeader>
              <CardContent>
                {stats.recentCampaigns.length > 0 ? (
                  <div className="space-y-4">
                    {stats.recentCampaigns.map((campaign) => (
                      <div key={campaign.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Target className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-black">
                              {campaign.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {campaign.status} • {campaign.created_at ? formatDistanceToNow(new Date(campaign.created_at), { addSuffix: true }) : 'Gần đây'}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-black">
                            {campaign.type}
                          </p>
                          <p className="text-sm text-gray-600">
                            {campaign.budget ? `$${campaign.budget}` : 'Chưa có ngân sách'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Target className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">Chưa có chiến dịch nào</p>
                    <p className="text-sm text-gray-400">Tạo chiến dịch đầu tiên để bắt đầu</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-black">
                  Thao tác Nhanh
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Các tác vụ và phím tắt thường dùng
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  <Target className="w-4 h-4 mr-2" />
                  Tạo Chiến dịch
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Xem Phân tích
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Quản lý Đối tượng
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white"
                >
                  <Activity className="w-4 h-4 mr-2" />
                  Cài đặt
                </Button>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="bg-white border-gray-200 mt-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-black">
                  Gợi ý AI
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Khuyến nghị được hỗ trợ bởi AI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {stats.aiInsights.length > 0 ? (
                  stats.aiInsights.map((insight) => (
                    <div key={insight.id} className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">
                        {insight.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {insight.description}
                      </p>
                      {insight.confidence_score && (
                        <div className="mt-2 text-xs text-gray-500">
                          Độ tin cậy: {(insight.confidence_score * 100).toFixed(0)}%
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4">
                    <p className="text-sm text-gray-500">Chưa có gợi ý AI</p>
                    <p className="text-xs text-gray-400">AI sẽ cung cấp khuyến nghị khi bạn sử dụng nền tảng</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
