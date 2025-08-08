"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch-originui";
import { User, Mail, Phone, MapPin, Calendar, Edit } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Hồ sơ cá nhân</h1>
          <p className="text-muted-foreground">Quản lý thông tin cá nhân và tài khoản của bạn</p>
        </div>
        <Button>
          <Edit className="w-4 h-4 mr-2" />
          Chỉnh sửa
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Thông tin cá nhân */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Thông tin cá nhân
            </CardTitle>
            <CardDescription>
              Cập nhật thông tin cá nhân của bạn
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Nguyễn Văn A</h3>
                <p className="text-sm text-muted-foreground">Quản trị viên</p>
              </div>
            </div>
            <Separator />
            <div className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Họ</Label>
                  <Input id="firstName" defaultValue="Nguyễn" className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Tên</Label>
                  <Input id="lastName" defaultValue="Văn A" className="w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="nguyenvana@example.com" className="w-full" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input id="phone" defaultValue="+84 123 456 789" className="w-full" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Địa chỉ</Label>
                <Textarea id="address" defaultValue="123 Đường ABC, Quận 1, TP.HCM" className="w-full resize-none" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Thông tin tài khoản */}
        <Card>
          <CardHeader>
            <CardTitle>Thông tin tài khoản</CardTitle>
            <CardDescription>
              Quản lý cài đặt tài khoản và bảo mật
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Tên đăng nhập</Label>
              <Input id="username" defaultValue="nguyenvana" className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Mật khẩu hiện tại</Label>
              <Input id="currentPassword" type="password" className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">Mật khẩu mới</Label>
              <Input id="newPassword" type="password" className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Xác nhận mật khẩu mới</Label>
              <Input id="confirmPassword" type="password" className="w-full" />
            </div>
            <Button className="w-full">Cập nhật mật khẩu</Button>
          </CardContent>
        </Card>

        {/* Thông tin công ty */}
        <Card>
          <CardHeader>
            <CardTitle>Thông tin công ty</CardTitle>
            <CardDescription>
              Thông tin về công ty của bạn
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Tên công ty</Label>
              <Input id="companyName" defaultValue="Công ty TNHH ABC" className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Chức vụ</Label>
              <Input id="position" defaultValue="Marketing Manager" className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Phòng ban</Label>
              <Input id="department" defaultValue="Marketing" className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyAddress">Địa chỉ công ty</Label>
              <Textarea id="companyAddress" defaultValue="456 Đường XYZ, Quận 3, TP.HCM" className="w-full resize-none" />
            </div>
          </CardContent>
        </Card>

        {/* Cài đặt thông báo */}
        <Card>
          <CardHeader>
            <CardTitle>Cài đặt thông báo</CardTitle>
            <CardDescription>
              Quản lý cách bạn nhận thông báo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email thông báo</p>
                <p className="text-sm text-muted-foreground">Nhận thông báo qua email</p>
              </div>
              <Switch checked={true} onCheckedChange={(checked) => console.log('Email:', checked)} />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Thông báo push</p>
                <p className="text-sm text-muted-foreground">Thông báo trên trình duyệt</p>
              </div>
              <Switch checked={true} onCheckedChange={(checked) => console.log('Push:', checked)} />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Thông báo SMS</p>
                <p className="text-sm text-muted-foreground">Nhận thông báo qua SMS</p>
              </div>
              <Switch checked={false} onCheckedChange={(checked) => console.log('SMS:', checked)} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
