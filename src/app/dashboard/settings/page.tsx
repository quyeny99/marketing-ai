"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch-originui";
import { Settings, Palette, Database, Shield, Key, Monitor, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient as createSupabaseBrowser } from "@/utils/supabase/client";

export default function SettingsPage() {
  const [supabaseStatus, setSupabaseStatus] = useState<"unknown" | "ok" | "error">("unknown");
  useEffect(() => {
    const client = createSupabaseBrowser();
    // Simple ping: get current time from Postgres via RPC if available; fallback to auth check
    client.auth.getSession().then(({ error }) => {
      setSupabaseStatus(error ? "error" : "ok");
    });
  }, []);
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Quản lý cài đặt hệ thống và tùy chọn ứng dụng</p>
        </div>
        <Button>
          <Save className="w-4 h-4 mr-2" />
          Lưu thay đổi
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Cài đặt chung
            </CardTitle>
            <CardDescription>
              Cấu hình cơ bản cho ứng dụng
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="appName">Tên ứng dụng</Label>
              <Input id="appName" defaultValue="Marketing AI" className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Múi giờ</Label>
              <Select defaultValue="asia-ho_chi_minh">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn múi giờ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asia-ho_chi_minh">Asia/Ho_Chi_Minh (+07:00)</SelectItem>
                  <SelectItem value="utc">UTC (+00:00)</SelectItem>
                  <SelectItem value="america-new_york">America/New_York (-05:00)</SelectItem>
                  <SelectItem value="europe-london">Europe/London (+00:00)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Ngôn ngữ</Label>
              <Select defaultValue="vi">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn ngôn ngữ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vi">Tiếng Việt</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="zh">中文</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Đơn vị tiền tệ</Label>
              <Select defaultValue="vnd">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn tiền tệ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vnd">VND (₫)</SelectItem>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="jpy">JPY (¥)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Giao diện
            </CardTitle>
            <CardDescription>
              Tùy chỉnh giao diện và theme
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Theme</Label>
              <Select defaultValue="light">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Sidebar thu gọn</p>
                <p className="text-sm text-muted-foreground">Mặc định thu gọn sidebar</p>
              </div>
              <Switch checked={false} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Animations</p>
                <p className="text-sm text-muted-foreground">Bật hiệu ứng chuyển động</p>
              </div>
              <Switch checked={true} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Compact mode</p>
                <p className="text-sm text-muted-foreground">Giao diện thu gọn</p>
              </div>
              <Switch checked={false} />
            </div>
          </CardContent>
        </Card>

        {/* API & Integrations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              API & Tích hợp
            </CardTitle>
            <CardDescription>
              Cài đặt API và tích hợp bên ngoài
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-md border p-3 text-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span>Supabase</span>
              </div>
              <span className={supabaseStatus === "ok" ? "text-green-600" : supabaseStatus === "error" ? "text-red-600" : "text-muted-foreground"}>
                {supabaseStatus === "ok" ? "Connected" : supabaseStatus === "error" ? "Not connected" : "Checking..."}
              </span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="openaiKey">OpenAI API Key</Label>
              <Input id="openaiKey" type="password" placeholder="sk-..." className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="anthropicKey">Anthropic API Key</Label>
              <Input id="anthropicKey" type="password" placeholder="sk-ant-..." className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="googleKey">Google API Key</Label>
              <Input id="googleKey" type="password" placeholder="AIza..." className="w-full" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Webhook notifications</p>
                <p className="text-sm text-muted-foreground">Gửi webhook khi có sự kiện</p>
              </div>
              <Switch checked={true} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="webhookUrl">Webhook URL</Label>
              <Input id="webhookUrl" placeholder="https://your-app.com/webhook" className="w-full" />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Bảo mật
            </CardTitle>
            <CardDescription>
              Cài đặt bảo mật và quyền truy cập
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-factor authentication</p>
                <p className="text-sm text-muted-foreground">Xác thực 2 yếu tố</p>
              </div>
              <Switch checked={false} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Session timeout</p>
                <p className="text-sm text-muted-foreground">Tự động đăng xuất sau 30 phút</p>
              </div>
              <Switch checked={true} />
            </div>
            <div className="space-y-2">
              <Label>Mức độ mật khẩu</Label>
              <Select defaultValue="medium">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn mức độ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Thấp</SelectItem>
                  <SelectItem value="medium">Trung bình</SelectItem>
                  <SelectItem value="high">Cao</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>IP Whitelist</Label>
              <Textarea placeholder="192.168.1.1&#10;10.0.0.1" className="w-full resize-none" rows={3} />
            </div>
          </CardContent>
        </Card>

        {/* Performance Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="w-5 h-5" />
              Hiệu suất
            </CardTitle>
            <CardDescription>
              Cài đặt tối ưu hiệu suất
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Cache TTL (phút)</Label>
              <Input type="number" defaultValue="60" className="w-full" />
            </div>
            <div className="space-y-2">
              <Label>Max concurrent requests</Label>
              <Input type="number" defaultValue="10" className="w-full" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Enable caching</p>
                <p className="text-sm text-muted-foreground">Cache API responses</p>
              </div>
              <Switch checked={true} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Background sync</p>
                <p className="text-sm text-muted-foreground">Đồng bộ dữ liệu ở background</p>
              </div>
              <Switch checked={true} />
            </div>
          </CardContent>
        </Card>

        {/* Data & Privacy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5" />
              Dữ liệu & Quyền riêng tư
            </CardTitle>
            <CardDescription>
              Quản lý dữ liệu và quyền riêng tư
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Analytics tracking</p>
                <p className="text-sm text-muted-foreground">Thu thập dữ liệu sử dụng</p>
              </div>
              <Switch checked={true} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Error reporting</p>
                <p className="text-sm text-muted-foreground">Tự động báo cáo lỗi</p>
              </div>
              <Switch checked={true} />
            </div>
            <div className="space-y-2">
              <Label>Data retention (ngày)</Label>
              <Input type="number" defaultValue="365" className="w-full" />
            </div>
            <Separator />
            <div className="space-y-2">
              <Button variant="destructive" className="w-full">
                Xóa tất cả dữ liệu
              </Button>
              <p className="text-xs text-muted-foreground">
                Hành động này không thể hoàn tác
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
