"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch-originui";
import { 
  Bell, 
  Mail, 
  Smartphone, 
  Monitor, 
  Zap,
  Check,
  X,
  Trash2,
  Settings,
  Filter,
  Search,
  Eye,
  EyeOff,
  Archive,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Info,
  Clock,
  Star,
  MessageCircle,
  Target,
  TrendingUp,
  Users,
  FileText,
  ImageIcon,
  BarChart3,
  Download
} from "lucide-react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "campaign",
      title: "Chiến dịch 'Khuyến mãi Mùa hè' đã hoàn thành",
      message: "Chiến dịch marketing của bạn đã hoàn thành thành công với 2,450 khách hàng tiếp cận.",
      timestamp: "2 giờ trước",
      isRead: false,
      priority: "high",
      icon: "🎯",
      category: "Marketing"
    },
    {
      id: 2,
      type: "email",
      title: "Email Newsletter tháng 6 đã được gửi",
      message: "Email marketing đã được gửi thành công đến 2,450 khách hàng với tỷ lệ mở 28.5%.",
      timestamp: "4 giờ trước",
      isRead: false,
      priority: "medium",
      icon: "📧",
      category: "Email"
    },
    {
      id: 3,
      type: "content",
      title: "Nội dung AI mới đã được tạo",
      message: "Blog post về 'Digital Marketing 2024' đã được tạo thành công với AI.",
      timestamp: "6 giờ trước",
      isRead: true,
      priority: "low",
      icon: "📝",
      category: "Content"
    },
    {
      id: 4,
      type: "image",
      title: "Hình ảnh AI đã được tạo xong",
      message: "4 hình ảnh banner quảng cáo đã được tạo thành công với AI.",
      timestamp: "8 giờ trước",
      isRead: true,
      priority: "low",
      icon: "🖼️",
      category: "Design"
    },
    {
      id: 5,
      type: "analytics",
      title: "Báo cáo hiệu suất tháng 5 đã sẵn sàng",
      message: "Báo cáo chi tiết về hiệu suất marketing tháng 5 đã được cập nhật.",
      timestamp: "1 ngày trước",
      isRead: true,
      priority: "medium",
      icon: "📊",
      category: "Analytics"
    },
    {
      id: 6,
      type: "system",
      title: "Cập nhật hệ thống đã hoàn thành",
      message: "Hệ thống đã được cập nhật lên phiên bản mới nhất với các tính năng bảo mật.",
      timestamp: "2 ngày trước",
      isRead: true,
      priority: "high",
      icon: "⚙️",
      category: "System"
    },
    {
      id: 7,
      type: "billing",
      title: "Thanh toán gói Pro đã thành công",
      message: "Thanh toán $29 cho gói Pro tháng 6/2024 đã được xử lý thành công.",
      timestamp: "3 ngày trước",
      isRead: true,
      priority: "medium",
      icon: "💳",
      category: "Billing"
    },
    {
      id: 8,
      type: "support",
      title: "Ticket hỗ trợ #1234 đã được trả lời",
      message: "Nhóm hỗ trợ đã trả lời câu hỏi của bạn về tích hợp API.",
      timestamp: "4 ngày trước",
      isRead: true,
      priority: "medium",
      icon: "🆘",
      category: "Support"
    }
  ]);

  const [settings, setSettings] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: true,
    updates: false,
    system: true,
    billing: true,
    support: true
  });

  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, isRead: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return "Cao";
      case "medium":
        return "Trung bình";
      case "low":
        return "Thấp";
      default:
        return "Không xác định";
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === "all" || notification.type === filter;
    const matchesSearch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                Thông báo
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Quản lý tất cả thông báo và cài đặt thông báo
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                {unreadCount} chưa đọc
              </Badge>
              <Button onClick={markAllAsRead} variant="outline" size="sm">
                <Check className="w-4 h-4 mr-2" />
                Đánh dấu tất cả đã đọc
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Main Notifications */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters and Search */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={filter === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("all")}
                      className="text-xs"
                    >
                      Tất cả
                    </Button>
                    <Button
                      variant={filter === "campaign" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("campaign")}
                      className="text-xs"
                    >
                      🎯 Marketing
                    </Button>
                    <Button
                      variant={filter === "email" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("email")}
                      className="text-xs"
                    >
                      📧 Email
                    </Button>
                    <Button
                      variant={filter === "content" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("content")}
                      className="text-xs"
                    >
                      📝 Content
                    </Button>
                    <Button
                      variant={filter === "system" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("system")}
                      className="text-xs"
                    >
                      ⚙️ Hệ thống
                    </Button>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Tìm kiếm thông báo..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications List */}
            <div className="space-y-4">
              {filteredNotifications.length === 0 ? (
                <Card className="bg-white border-gray-200">
                  <CardContent className="p-8 text-center">
                    <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Không có thông báo</h3>
                    <p className="text-gray-500">Không có thông báo nào phù hợp với bộ lọc hiện tại.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredNotifications.map((notification) => (
                  <Card 
                    key={notification.id} 
                    className={`bg-white border-gray-200 transition-all duration-200 ${
                      notification.isRead ? 'opacity-75' : 'ring-2 ring-blue-200'
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        {/* Notification Icon */}
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">
                          {notification.icon}
                        </div>

                        {/* Notification Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h3 className={`font-medium text-gray-900 text-sm sm:text-base ${
                                notification.isRead ? '' : 'font-semibold'
                              }`}>
                                {notification.title}
                              </h3>
                              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                                {notification.message}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              <Badge variant="secondary" className={`text-xs ${getPriorityColor(notification.priority)}`}>
                                {getPriorityLabel(notification.priority)}
                              </Badge>
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {notification.timestamp}
                              </span>
                            </div>
                          </div>

                          {/* Notification Meta */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Target className="w-3 h-3" />
                                {notification.category}
                              </span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-2">
                              {!notification.isRead && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 px-2 text-blue-600 hover:text-blue-700"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Eye className="w-3 h-3" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 px-2 text-gray-500 hover:text-gray-700"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Load More */}
            {filteredNotifications.length > 0 && (
              <div className="text-center">
                <Button variant="outline" className="px-6">
                  Xem thêm thông báo
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notification Settings */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Cài đặt Thông báo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Email</span>
                  </div>
                  <Switch
                    checked={settings.email}
                    onCheckedChange={(checked) => setSettings({...settings, email: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Monitor className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Push</span>
                  </div>
                  <Switch
                    checked={settings.push}
                    onCheckedChange={(checked) => setSettings({...settings, push: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">SMS</span>
                  </div>
                  <Switch
                    checked={settings.sms}
                    onCheckedChange={(checked) => setSettings({...settings, sms: checked})}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Marketing</span>
                  </div>
                  <Switch
                    checked={settings.marketing}
                    onCheckedChange={(checked) => setSettings({...settings, marketing: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Cập nhật</span>
                  </div>
                  <Switch
                    checked={settings.updates}
                    onCheckedChange={(checked) => setSettings({...settings, updates: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Hệ thống</span>
                  </div>
                  <Switch
                    checked={settings.system}
                    onCheckedChange={(checked) => setSettings({...settings, system: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Thanh toán</span>
                  </div>
                  <Switch
                    checked={settings.billing}
                    onCheckedChange={(checked) => setSettings({...settings, billing: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Hỗ trợ</span>
                  </div>
                  <Switch
                    checked={settings.support}
                    onCheckedChange={(checked) => setSettings({...settings, support: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Notification Stats */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  Thống kê Thông báo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tổng cộng</span>
                  <span className="text-sm font-medium text-gray-900">{notifications.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Chưa đọc</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    {unreadCount}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Đã đọc</span>
                  <span className="text-sm font-medium text-gray-900">{notifications.length - unreadCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Ưu tiên cao</span>
                  <Badge variant="secondary" className="bg-red-100 text-red-700">
                    {notifications.filter(n => n.priority === 'high').length}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-600" />
                  Thao tác Nhanh
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Archive className="w-4 h-4 mr-2" />
                  Lưu trữ tất cả
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Xóa đã đọc
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Xuất thông báo
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Làm mới
                </Button>
              </CardContent>
            </Card>

            {/* Notification Tips */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  Gợi ý
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-600 space-y-2">
                  <p>💡 Bật thông báo push để không bỏ lỡ thông tin quan trọng</p>
                  <p>🔔 Kiểm tra thông báo thường xuyên để cập nhật tình trạng</p>
                  <p>⚙️ Tùy chỉnh cài đặt theo nhu cầu sử dụng</p>
                  <p>📱 Sử dụng email cho thông báo quan trọng</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />
        <div className="text-sm text-gray-600">
          Gợi ý: Quản lý thông báo hiệu quả giúp bạn không bỏ lỡ thông tin quan trọng. Sử dụng bộ lọc để tập trung vào những thông báo cần thiết nhất.
        </div>
      </div>
    </div>
  );
}
