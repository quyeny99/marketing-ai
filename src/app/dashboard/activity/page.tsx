"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Activity, 
  Clock, 
  TrendingUp, 
  Users, 
  Target,
  Lightbulb,
  BarChart3,
  Calendar,
  Filter,
  RefreshCw,
  Eye,
  Download,
  Share2,
  Heart,
  MessageCircle,
  Zap,
  Mail,
  Image as ImageIcon,
  FileText,
  DollarSign
} from "lucide-react";

export default function ActivityPage() {
  const activities = [
    {
      id: 1,
      type: "campaign",
      action: "created",
      title: "Chiến dịch Khuyến mãi Mùa hè 2024",
      description: "Tạo chiến dịch marketing mới với ngân sách $5,000",
      timestamp: "2 giờ trước",
      status: "active",
      icon: "🎯",
      category: "Marketing"
    },
    {
      id: 2,
      type: "email",
      action: "sent",
      title: "Email Newsletter tháng 6",
      description: "Gửi email marketing đến 2,450 khách hàng",
      timestamp: "4 giờ trước",
      status: "completed",
      icon: "📧",
      category: "Email"
    },
    {
      id: 3,
      type: "content",
      action: "generated",
      title: "Blog post về Digital Marketing",
      description: "Tạo nội dung blog 800 từ với AI",
      timestamp: "6 giờ trước",
      status: "completed",
      icon: "📝",
      category: "Content"
    },
    {
      id: 4,
      type: "image",
      action: "created",
      title: "Banner quảng cáo Facebook",
      description: "Tạo 4 hình ảnh banner với AI",
      timestamp: "8 giờ trước",
      status: "completed",
      icon: "🖼️",
      category: "Design"
    },
    {
      id: 5,
      type: "analytics",
      action: "updated",
      title: "Báo cáo hiệu suất tháng 5",
      description: "Cập nhật dashboard analytics",
      timestamp: "1 ngày trước",
      status: "completed",
      icon: "📊",
      category: "Analytics"
    },
    {
      id: 6,
      type: "campaign",
      action: "paused",
      title: "Chiến dịch Black Friday",
      description: "Tạm dừng chiến dịch do hiệu suất thấp",
      timestamp: "2 ngày trước",
      status: "paused",
      icon: "⏸️",
      category: "Marketing"
    },
    {
      id: 7,
      type: "email",
      action: "scheduled",
      title: "Email chào mừng khách hàng mới",
      description: "Lên lịch gửi email vào 9:00 sáng mai",
      timestamp: "3 ngày trước",
      status: "scheduled",
      icon: "⏰",
      category: "Email"
    },
    {
      id: 8,
      type: "content",
      action: "published",
      title: "Video tutorial về Marketing AI",
      description: "Xuất bản video lên YouTube và social media",
      timestamp: "4 ngày trước",
      status: "completed",
      icon: "🎥",
      category: "Content"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "completed":
        return "bg-blue-100 text-blue-700";
      case "paused":
        return "bg-yellow-100 text-yellow-700";
      case "scheduled":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Đang hoạt động";
      case "completed":
        return "Hoàn thành";
      case "paused":
        return "Tạm dừng";
      case "scheduled":
        return "Đã lên lịch";
      default:
        return "Không xác định";
    }
  };

  const getActionLabel = (action: string) => {
    switch (action) {
      case "created":
        return "đã tạo";
      case "sent":
        return "đã gửi";
      case "generated":
        return "đã tạo";
      case "updated":
        return "đã cập nhật";
      case "paused":
        return "đã tạm dừng";
      case "scheduled":
        return "đã lên lịch";
      case "published":
        return "đã xuất bản";
      default:
        return "đã thực hiện";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Hoạt động Gần đây
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Theo dõi tất cả hoạt động marketing và AI của bạn
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Hoạt động hôm nay</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">12</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Tuần này</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">47</p>
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
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Tháng này</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">156</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Tỷ lệ hoàn thành</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">94%</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Actions */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              <Filter className="w-3 h-3 mr-1" />
              Tất cả
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <Target className="w-3 h-3 mr-1" />
              Marketing
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <Mail className="w-3 h-3 mr-1" />
              Email
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <FileText className="w-3 h-3 mr-1" />
              Content
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <ImageIcon className="w-3 h-3 mr-1" />
              Design
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              <RefreshCw className="w-3 h-3 mr-1" />
              Làm mới
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <Download className="w-3 h-3 mr-1" />
              Xuất báo cáo
            </Button>
          </div>
        </div>

        {/* Activity List */}
        <div className="space-y-4">
          {activities.map((activity) => (
            <Card key={activity.id} className="bg-white border-gray-200 hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  {/* Activity Icon */}
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">
                    {activity.icon}
                  </div>

                  {/* Activity Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                          {activity.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm mt-1">
                          {activity.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <Badge variant="secondary" className={`text-xs ${getStatusColor(activity.status)}`}>
                          {getStatusLabel(activity.status)}
                        </Badge>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {activity.timestamp}
                        </span>
                      </div>
                    </div>

                    {/* Activity Meta */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <BarChart3 className="w-3 h-3" />
                          {activity.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          {activity.action} {getActionLabel(activity.action)}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500 hover:text-gray-700">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500 hover:text-gray-700">
                          <Share2 className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500 hover:text-gray-700">
                          <Heart className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="px-6">
            Xem thêm hoạt động
          </Button>
        </div>

        <Separator className="my-8" />
        
        {/* Activity Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
                Gợi ý Tối ưu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> Chiến dịch email có tỷ lệ mở cao nhất vào thứ 3 và thứ 4. Hãy lên lịch gửi email vào những ngày này.
                </p>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Insight:</strong> Nội dung video có tỷ lệ tương tác cao hơn 3 lần so với nội dung text. Hãy tăng cường tạo video content.
                </p>
              </div>
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Thống kê:</strong> 78% hoạt động marketing được thực hiện vào buổi sáng (8-11h) cho kết quả tốt nhất.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Xu hướng Hoạt động
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Tạo nội dung AI</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  +45%
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Email marketing</span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  +32%
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Tạo hình ảnh AI</span>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  +28%
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Phân tích dữ liệu</span>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  +18%
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />
        <div className="text-sm text-gray-600">
          Gợi ý: Theo dõi hoạt động thường xuyên giúp bạn hiểu rõ hiệu suất marketing và tối ưu hóa chiến lược. Sử dụng bộ lọc để tập trung vào những hoạt động quan trọng nhất.
        </div>
      </div>
    </div>
  );
}


