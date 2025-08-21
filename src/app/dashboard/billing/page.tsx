"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  DollarSign, 
  Calendar,
  Check,
  X,
  ArrowRight,
  Download,
  Receipt,
  Zap,
  Crown,
  Star,
  TrendingUp,
  Users,
  FileText,
  ImageIcon,
  Mail,
  BarChart3,
  Shield,
  Clock,
  AlertCircle,
  CheckCircle,
  Target
} from "lucide-react";

export default function BillingPage() {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const plans = [
    {
      id: "free",
      name: "Free",
      price: 0,
      currency: "USD",
      period: "month",
      description: "Dành cho người mới bắt đầu",
      features: [
        "5 chiến dịch marketing mỗi tháng",
        "10 nội dung AI mỗi tháng",
        "5 hình ảnh AI mỗi tháng",
        "Email support",
        "Dashboard cơ bản"
      ],
      limitations: [
        "Không có analytics nâng cao",
        "Không có A/B testing",
        "Không có priority support"
      ],
      popular: false,
      icon: "🚀"
    },
    {
      id: "pro",
      name: "Pro",
      price: 29,
      currency: "USD",
      period: "month",
      description: "Dành cho doanh nghiệp nhỏ và vừa",
      features: [
        "50 chiến dịch marketing mỗi tháng",
        "100 nội dung AI mỗi tháng",
        "50 hình ảnh AI mỗi tháng",
        "Priority support",
        "Analytics nâng cao",
        "A/B testing",
        "Email automation",
        "API access"
      ],
      limitations: [],
      popular: true,
      icon: "⭐"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 99,
      currency: "USD",
      period: "month",
      description: "Dành cho doanh nghiệp lớn",
      features: [
        "Chiến dịch không giới hạn",
        "Nội dung AI không giới hạn",
        "Hình ảnh AI không giới hạn",
        "24/7 priority support",
        "Analytics enterprise",
        "Custom integrations",
        "White-label solution",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      limitations: [],
      popular: false,
      icon: "👑"
    }
  ];

  const currentPlan = plans.find(plan => plan.id === selectedPlan);
  const invoices = [
    {
      id: "INV-001",
      date: "15/06/2024",
      amount: 29,
      status: "paid",
      description: "Gói Pro - Tháng 6/2024"
    },
    {
      id: "INV-002",
      date: "15/05/2024",
      amount: 29,
      status: "paid",
      description: "Gói Pro - Tháng 5/2024"
    },
    {
      id: "INV-003",
      date: "15/04/2024",
      amount: 29,
      status: "paid",
      description: "Gói Pro - Tháng 4/2024"
    },
    {
      id: "INV-004",
      date: "15/03/2024",
      amount: 0,
      status: "paid",
      description: "Gói Free - Tháng 3/2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "paid":
        return "Đã thanh toán";
      case "pending":
        return "Đang xử lý";
      case "failed":
        return "Thất bại";
      default:
        return "Không xác định";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Quản lý Thanh toán
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Quản lý gói dịch vụ, thanh toán và hóa đơn của bạn
          </p>
        </div>

        {/* Current Plan Status */}
        <div className="mb-8">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-yellow-600" />
                Gói Dịch vụ Hiện tại
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{currentPlan?.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {currentPlan?.name} Plan
                    </h3>
                    <p className="text-gray-600">{currentPlan?.description}</p>
                    <p className="text-sm text-gray-500">
                      Ngày hết hạn: 15/07/2024
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    ${currentPlan?.price}
                    <span className="text-sm font-normal text-gray-500">/{currentPlan?.period}</span>
                  </div>
                  <Button variant="outline" className="mt-2">
                    Nâng cấp Gói
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Plans Comparison */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">So sánh Gói Dịch vụ</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`bg-white border-gray-200 relative ${
                  plan.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-3 py-1">
                      Phổ biến nhất
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{plan.icon}</div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-gray-500">/{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Tính năng bao gồm:</h4>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900">Hạn chế:</h4>
                      {plan.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <X className="w-4 h-4 text-red-600 flex-shrink-0" />
                          <span className="text-sm text-gray-500">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-4">
                    {plan.id === selectedPlan ? (
                      <Button disabled className="w-full bg-gray-300 text-gray-600">
                        Gói hiện tại
                      </Button>
                    ) : (
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : 'bg-black hover:bg-gray-800'
                        } text-white`}
                      >
                        {plan.price === 0 ? 'Bắt đầu miễn phí' : 'Chọn gói này'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Usage Statistics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Thống kê Sử dụng</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Chiến dịch</p>
                    <p className="text-xl font-bold text-gray-900">24/50</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '48%' }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Nội dung AI</p>
                    <p className="text-xl font-bold text-gray-900">67/100</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Hình ảnh AI</p>
                    <p className="text-xl font-bold text-gray-900">32/50</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '64%' }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-xl font-bold text-gray-900">89/100</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Billing History */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Lịch sử Thanh toán</h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Xuất tất cả
            </Button>
          </div>
          
          <Card className="bg-white border-gray-200">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hóa đơn
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ngày
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mô tả
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Số tiền
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trạng thái
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">{invoice.id}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-500">{invoice.date}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-900">{invoice.description}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">
                            ${invoice.amount}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge variant="secondary" className={getStatusColor(invoice.status)}>
                            {getStatusLabel(invoice.status)}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <Receipt className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Phương thức Thanh toán</h2>
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-600" />
                Thẻ Tín dụng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">•••• •••• •••• 1234</p>
                    <p className="text-sm text-gray-500">Hết hạn: 12/26</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Chỉnh sửa
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                    Xóa
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="mt-4">
                <CreditCard className="w-4 h-4 mr-2" />
                Thêm thẻ mới
              </Button>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />
        <div className="text-sm text-gray-600">
          Gợi ý: Nâng cấp lên gói Pro hoặc Enterprise để có thêm tính năng và tăng giới hạn sử dụng. Theo dõi thống kê sử dụng để tối ưu hóa chi phí.
        </div>
      </div>
    </div>
  );
}
