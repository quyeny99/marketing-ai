"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch-originui";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Bell, 
  Check, 
  X, 
  Mail, 
  MessageSquare, 
  Smartphone, 
  Calendar,
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle,
  Settings,
  Trash2
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Campaign launched successfully",
    message: "Summer Sale campaign đã được khởi chạy thành công",
    time: "2 phút trước",
    read: false,
  },
  {
    id: 2,
    type: "info",
    title: "New user registered",
    message: "Có 5 người dùng mới đăng ký trong 1 giờ qua",
    time: "15 phút trước",
    read: false,
  },
  {
    id: 3,
    type: "warning",
    title: "API rate limit warning",
    message: "OpenAI API sắp đạt giới hạn hàng ngày",
    time: "1 giờ trước",
    read: true,
  },
  {
    id: 4,
    type: "error",
    title: "Email delivery failed",
    message: "Không thể gửi email đến 12 người nhận",
    time: "2 giờ trước",
    read: true,
  },
  {
    id: 5,
    type: "info",
    title: "Monthly report ready",
    message: "Báo cáo tháng 12 đã sẵn sàng để xem",
    time: "1 ngày trước",
    read: true,
  },
];

export default function NotificationsPage() {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Thông báo</h1>
          <p className="text-muted-foreground">Quản lý thông báo và cài đặt nhận thông báo</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Check className="w-4 h-4 mr-2" />
            Đánh dấu tất cả đã đọc
          </Button>
          <Button variant="outline">
            <Trash2 className="w-4 h-4 mr-2" />
            Xóa tất cả
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Notifications List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Thông báo gần đây
              </CardTitle>
              <CardDescription>
                {notifications.filter(n => !n.read).length} thông báo chưa đọc
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px]">
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 p-4 rounded-lg border transition-colors hover:bg-gray-50 ${
                        !notification.read ? "bg-blue-50 border-blue-200" : "bg-white"
                      }`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-black">{notification.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                          </div>
                          <div className="flex gap-1 ml-4">
                            {!notification.read && (
                              <Button size="sm" variant="ghost">
                                <Check className="w-4 h-4" />
                              </Button>
                            )}
                            <Button size="sm" variant="ghost">
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Notification Settings */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Thống kê</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Tổng thông báo</span>
                <span className="font-semibold">{notifications.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Chưa đọc</span>
                <span className="font-semibold text-blue-600">
                  {notifications.filter(n => !n.read).length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Hôm nay</span>
                <span className="font-semibold">4</span>
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Cài đặt thông báo
              </CardTitle>
              <CardDescription>
                Tùy chỉnh cách nhận thông báo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Campaign updates</p>
                      <p className="text-xs text-muted-foreground">Thông báo về chiến dịch</p>
                    </div>
                    <Switch checked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">System alerts</p>
                      <p className="text-xs text-muted-foreground">Cảnh báo hệ thống</p>
                    </div>
                    <Switch checked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Weekly reports</p>
                      <p className="text-xs text-muted-foreground">Báo cáo hàng tuần</p>
                    </div>
                    <Switch checked={false} />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Push Notifications
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Instant alerts</p>
                      <p className="text-xs text-muted-foreground">Thông báo tức thì</p>
                    </div>
                    <Switch checked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Daily summary</p>
                      <p className="text-xs text-muted-foreground">Tóm tắt hàng ngày</p>
                    </div>
                    <Switch checked={true} />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  SMS
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Critical alerts</p>
                      <p className="text-xs text-muted-foreground">Cảnh báo quan trọng</p>
                    </div>
                    <Switch checked={false} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input 
                      id="phone" 
                      placeholder="+84 123 456 789" 
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Lịch trình
              </CardTitle>
              <CardDescription>
                Thời gian nhận thông báo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Do not disturb</p>
                  <p className="text-sm text-muted-foreground">22:00 - 08:00</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekend notifications</p>
                  <p className="text-sm text-muted-foreground">Thông báo cuối tuần</p>
                </div>
                <Switch checked={false} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
