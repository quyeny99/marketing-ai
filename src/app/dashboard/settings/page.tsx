"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch-originui";
import { 
  Settings, 
  Bell, 
  Shield, 
  Globe, 
  Palette,
  Database,
  Zap,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Info,
  Lock,
  Users,
  Mail,
  Smartphone,
  Monitor,
  Smartphone as MobileIcon,
  Download,
  BarChart3
} from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: true,
    updates: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    dataSharing: false,
    analytics: true,
    thirdParty: false
  });

  const [appearance, setAppearance] = useState({
    theme: "light",
    language: "vi",
    timezone: "Asia/Ho_Chi_Minh",
    dateFormat: "DD/MM/YYYY"
  });

  const [integrations, setIntegrations] = useState({
    googleAnalytics: true,
    facebookPixel: false,
    mailchimp: true,
    slack: false
  });

  const handleSaveSettings = (category: string) => {
    // Here you would typically save to backend
    console.log(`Saving ${category} settings...`);
    // You can add toast notification here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Cài đặt Hệ thống
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Tùy chỉnh cài đặt tài khoản, thông báo và bảo mật
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Notifications Settings */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-blue-600" />
                  Cài đặt Thông báo
                </CardTitle>
                <CardDescription>
                  Quản lý cách bạn nhận thông báo từ hệ thống
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Thông báo qua Email</p>
                        <p className="text-sm text-gray-500">Nhận thông báo quan trọng qua email</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Monitor className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Thông báo Push</p>
                        <p className="text-sm text-gray-500">Thông báo trên trình duyệt</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Thông báo SMS</p>
                        <p className="text-sm text-gray-500">Nhận thông báo khẩn cấp qua SMS</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Thông báo Marketing</p>
                        <p className="text-sm text-gray-500">Nhận thông tin về sản phẩm và dịch vụ mới</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <RefreshCw className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Cập nhật Hệ thống</p>
                        <p className="text-sm text-gray-500">Thông báo về cập nhật và bảo trì</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.updates}
                      onCheckedChange={(checked) => setNotifications({...notifications, updates: checked})}
                    />
                  </div>
                </div>

                <Separator />

                <div className="flex justify-end">
                  <Button 
                    onClick={() => handleSaveSettings('notifications')}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Lưu Cài đặt
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security Settings */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Bảo mật & Quyền riêng tư
                </CardTitle>
                <CardDescription>
                  Kiểm soát quyền riêng tư và bảo mật tài khoản
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hiển thị Hồ sơ
                    </label>
                    <Select
                      value={privacy.profileVisibility}
                      onValueChange={(value) => setPrivacy({...privacy, profileVisibility: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Công khai</SelectItem>
                        <SelectItem value="friends">Chỉ bạn bè</SelectItem>
                        <SelectItem value="private">Riêng tư</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Chia sẻ Dữ liệu</p>
                        <p className="text-sm text-gray-500">Cho phép chia sẻ dữ liệu với đối tác</p>
                      </div>
                    </div>
                    <Switch
                      checked={privacy.dataSharing}
                      onCheckedChange={(checked) => setPrivacy({...privacy, dataSharing: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Analytics</p>
                        <p className="text-sm text-gray-500">Thu thập dữ liệu để cải thiện dịch vụ</p>
                      </div>
                    </div>
                    <Switch
                      checked={privacy.analytics}
                      onCheckedChange={(checked) => setPrivacy({...privacy, analytics: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Bên thứ ba</p>
                        <p className="text-sm text-gray-500">Cho phép tích hợp với dịch vụ bên thứ ba</p>
                      </div>
                    </div>
                    <Switch
                      checked={privacy.thirdParty}
                      onCheckedChange={(checked) => setPrivacy({...privacy, thirdParty: checked})}
                    />
                  </div>
                </div>

                <Separator />

                <div className="flex justify-end">
                  <Button 
                    onClick={() => handleSaveSettings('privacy')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Lưu Cài đặt
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Appearance Settings */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-purple-600" />
                  Giao diện & Ngôn ngữ
                </CardTitle>
                <CardDescription>
                  Tùy chỉnh giao diện và ngôn ngữ hiển thị
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Giao diện
                    </label>
                    <Select
                      value={appearance.theme}
                      onValueChange={(value) => setAppearance({...appearance, theme: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Sáng</SelectItem>
                        <SelectItem value="dark">Tối</SelectItem>
                        <SelectItem value="auto">Tự động</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ngôn ngữ
                    </label>
                    <Select
                      value={appearance.language}
                      onValueChange={(value) => setAppearance({...appearance, language: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vi">Tiếng Việt</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="zh">中文</SelectItem>
                        <SelectItem value="ja">日本語</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Múi giờ
                    </label>
                    <Select
                      value={appearance.timezone}
                      onValueChange={(value) => setAppearance({...appearance, timezone: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Asia/Ho_Chi_Minh">Việt Nam (GMT+7)</SelectItem>
                        <SelectItem value="Asia/Bangkok">Thái Lan (GMT+7)</SelectItem>
                        <SelectItem value="Asia/Singapore">Singapore (GMT+8)</SelectItem>
                        <SelectItem value="Asia/Tokyo">Nhật Bản (GMT+9)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Định dạng Ngày
                    </label>
                    <Select
                      value={appearance.dateFormat}
                      onValueChange={(value) => setAppearance({...appearance, dateFormat: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                        <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-end">
                  <Button 
                    onClick={() => handleSaveSettings('appearance')}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Lưu Cài đặt
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Integrations Settings */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-600" />
                  Tích hợp & API
                </CardTitle>
                <CardDescription>
                  Quản lý các tích hợp và kết nối API
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Google Analytics</p>
                        <p className="text-sm text-gray-500">Theo dõi hiệu suất website</p>
                      </div>
                    </div>
                    <Switch
                      checked={integrations.googleAnalytics}
                      onCheckedChange={(checked) => setIntegrations({...integrations, googleAnalytics: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Facebook Pixel</p>
                        <p className="text-sm text-gray-500">Theo dõi chuyển đổi Facebook Ads</p>
                      </div>
                    </div>
                    <Switch
                      checked={integrations.facebookPixel}
                      onCheckedChange={(checked) => setIntegrations({...integrations, facebookPixel: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-orange-600" />
                      <div>
                        <p className="font-medium text-gray-900">Mailchimp</p>
                        <p className="text-sm text-gray-500">Tích hợp email marketing</p>
                      </div>
                    </div>
                    <Switch
                      checked={integrations.mailchimp}
                      onCheckedChange={(checked) => setIntegrations({...integrations, mailchimp: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-900">Slack</p>
                        <p className="text-sm text-gray-500">Thông báo qua Slack</p>
                      </div>
                    </div>
                    <Switch
                      checked={integrations.slack}
                      onCheckedChange={(checked) => setIntegrations({...integrations, slack: checked})}
                    />
                  </div>
                </div>

                <Separator />

                <div className="flex justify-end">
                  <Button 
                    onClick={() => handleSaveSettings('integrations')}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Lưu Cài đặt
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Settings Overview */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-gray-600" />
                  Tổng quan Cài đặt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Thông báo</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Đã cấu hình
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Bảo mật</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Đã cấu hình
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Giao diện</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Cần cập nhật
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tích hợp</span>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                    Một phần
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Thao tác Nhanh
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Khôi phục Mặc định
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Xuất Cài đặt
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Database className="w-4 h-4 mr-2" />
                  Sao lưu Cài đặt
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Info className="w-4 h-4 mr-2" />
                  Hướng dẫn Sử dụng
                </Button>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Trạng thái Hệ thống
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Hoạt động
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">API</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Hoạt động
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Storage</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    75% sử dụng
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Uptime</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    99.9%
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  Hỗ trợ & Giúp đỡ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Info className="w-4 h-4 mr-2" />
                  Trung tâm Trợ giúp
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Liên hệ Hỗ trợ
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Cộng đồng
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Cập nhật Hệ thống
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />
        <div className="text-sm text-gray-600">
          Gợi ý: Cập nhật cài đặt thường xuyên để đảm bảo bảo mật và tối ưu hóa trải nghiệm sử dụng. Sao lưu cài đặt trước khi thay đổi lớn.
        </div>
      </div>
    </div>
  );
}
