"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Download, Plus, Calendar, DollarSign, Users, Zap } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Quản lý thanh toán</h1>
          <p className="text-muted-foreground">Quản lý gói dịch vụ và thanh toán của bạn</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Nâng cấp gói
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Gói hiện tại */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Gói hiện tại
            </CardTitle>
            <CardDescription>
              Thông tin về gói dịch vụ bạn đang sử dụng
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Pro Plan</h3>
                <p className="text-muted-foreground">Gói chuyên nghiệp cho doanh nghiệp</p>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                Đang hoạt động
              </span>
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Giá</p>
                <p className="text-2xl font-bold">$29/tháng</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Chu kỳ thanh toán</p>
                <p className="text-lg font-semibold">Hàng tháng</p>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <h4 className="font-medium">Tính năng bao gồm:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-500" />
                  Tạo nội dung AI không giới hạn
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-500" />
                  Tối đa 10 thành viên
                </li>
                <li className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-green-500" />
                  Hỗ trợ ưu tiên
                </li>
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-green-500" />
                  Xuất báo cáo chi tiết
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Thông tin thanh toán */}
        <Card>
          <CardHeader>
            <CardTitle>Thông tin thanh toán</CardTitle>
            <CardDescription>
              Phương thức thanh toán hiện tại
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <CreditCard className="w-8 h-8 text-blue-500" />
              <div>
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-sm text-muted-foreground">Expires 12/25</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Cập nhật phương thức thanh toán
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Lịch sử thanh toán */}
      <Card>
        <CardHeader>
          <CardTitle>Lịch sử thanh toán</CardTitle>
          <CardDescription>
            Xem lại các khoản thanh toán trước đây
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <DollarSign className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Pro Plan - Tháng 12/2024</p>
                  <p className="text-sm text-muted-foreground">Thanh toán thành công</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$29.00</p>
                <p className="text-sm text-muted-foreground">Dec 1, 2024</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <DollarSign className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Pro Plan - Tháng 11/2024</p>
                  <p className="text-sm text-muted-foreground">Thanh toán thành công</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$29.00</p>
                <p className="text-sm text-muted-foreground">Nov 1, 2024</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <DollarSign className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Pro Plan - Tháng 10/2024</p>
                  <p className="text-sm text-muted-foreground">Thanh toán thành công</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$29.00</p>
                <p className="text-sm text-muted-foreground">Oct 1, 2024</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Tải xuống báo cáo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Các gói dịch vụ */}
      <Card>
        <CardHeader>
          <CardTitle>Các gói dịch vụ</CardTitle>
          <CardDescription>
            So sánh và chọn gói phù hợp với nhu cầu của bạn
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Free Plan */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Gói cơ bản miễn phí</CardDescription>
                <div className="text-3xl font-bold">$0<span className="text-lg font-normal text-muted-foreground">/tháng</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-500" />
                    10 nội dung AI/tháng
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    1 thành viên
                  </li>
                  <li className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-green-500" />
                    Báo cáo cơ bản
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Chọn gói</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="px-2 py-1 text-xs font-medium bg-blue-500 text-white rounded-full">
                  Gói hiện tại
                </span>
              </div>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Gói chuyên nghiệp</CardDescription>
                <div className="text-3xl font-bold">$29<span className="text-lg font-normal text-muted-foreground">/tháng</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-500" />
                    Nội dung AI không giới hạn
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    Tối đa 10 thành viên
                  </li>
                  <li className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-green-500" />
                    Hỗ trợ ưu tiên
                  </li>
                  <li className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-green-500" />
                    Báo cáo chi tiết
                  </li>
                </ul>
                <Button className="w-full">Gói hiện tại</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>Gói doanh nghiệp</CardDescription>
                <div className="text-3xl font-bold">$99<span className="text-lg font-normal text-muted-foreground">/tháng</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-500" />
                    Tất cả tính năng Pro
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    Thành viên không giới hạn
                  </li>
                  <li className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-green-500" />
                    Hỗ trợ 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-green-500" />
                    API access
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Liên hệ</Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
