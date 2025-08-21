"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Send, 
  Users, 
  TrendingUp, 
  Target,
  Sparkles,
  Copy,
  Download,
  RefreshCw,
  Lightbulb,
  BarChart3,
  Eye,
  MousePointer
} from "lucide-react";

export default function EmailMarketingPage() {
  const [emailType, setEmailType] = useState("newsletter");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState("");

  const emailTypes = [
    { value: "newsletter", label: "Newsletter", icon: "📧", description: "Email thông báo định kỳ" },
    { value: "promotional", label: "Khuyến mãi", icon: "💰", description: "Email khuyến mãi sản phẩm" },
    { value: "welcome", label: "Chào mừng", icon: "👋", description: "Email chào mừng khách hàng mới" },
    { value: "abandoned", label: "Giỏ hàng bỏ quên", icon: "🛒", description: "Nhắc nhở giỏ hàng" },
    { value: "reengagement", label: "Kích hoạt lại", icon: "🔄", description: "Email kích hoạt khách hàng cũ" },
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedEmail(`Subject: ${emailType === 'newsletter' ? 'Tin tức mới nhất từ chúng tôi' : 'Khuyến mãi đặc biệt dành cho bạn'}

Chào bạn,

${emailType === 'newsletter' ? 
  'Đây là newsletter hàng tuần với những tin tức mới nhất và insights hữu ích từ ngành marketing.' :
  'Chúng tôi có một ưu đãi đặc biệt dành riêng cho bạn!'
}

${emailType === 'newsletter' ? 
  '📊 Thống kê tuần này:\n• Tăng trưởng doanh số: +15%\n• Khách hàng mới: +23%\n• Tỷ lệ mở email: 28%' :
  '🎉 Ưu đãi đặc biệt:\n• Giảm giá 20% cho tất cả sản phẩm\n• Miễn phí vận chuyển cho đơn hàng trên 500K\n• Tặng quà trị giá 100K'
}

${emailType === 'newsletter' ? 
  '💡 Tips marketing hữu ích:\n• Cách tối ưu hóa chiến dịch Facebook Ads\n• 5 xu hướng marketing 2024\n• Case study thành công từ khách hàng' :
  '⏰ Thời gian áp dụng:\n• Chỉ trong 48 giờ tới\n• Số lượng có hạn\n• Đặt hàng ngay để không bỏ lỡ!'
}

${emailType === 'newsletter' ? 
  'Hãy đọc thêm các bài viết chi tiết trên blog của chúng tôi để cập nhật kiến thức marketing mới nhất.' :
  'Đây là cơ hội tốt nhất để sở hữu sản phẩm chất lượng với giá tốt nhất!'
}

Trân trọng,
Đội ngũ Marketing AI

---
Để hủy đăng ký, vui lòng click vào đây
Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM
Email: contact@marketingai.com`);
      setIsGenerating(false);
    }, 3000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedEmail);
    // You can add toast notification here
  };

  const handleDownload = () => {
    const blob = new Blob([generatedEmail], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `email-${emailType}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Email Marketing AI
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Tạo email marketing chất lượng cao với AI để tăng tỷ lệ mở và click
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Email đã gửi</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">12.5K</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Tỷ lệ mở</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">28.5%</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Tỷ lệ click</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">4.2%</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <MousePointer className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Doanh số</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">$8.2K</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Email Creation Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  Tạo Email Marketing AI
                </CardTitle>
                <CardDescription>
                  Chọn loại email và mô tả để AI tạo nội dung phù hợp với đối tượng mục tiêu
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email Type Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {emailTypes.map((type) => (
                    <div
                      key={type.value}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                        emailType === type.value
                          ? "border-blue-300 bg-blue-50 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                      onClick={() => setEmailType(type.value)}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <div className="font-medium text-gray-900">{type.label}</div>
                        <div className="text-xs text-gray-600 mt-1">{type.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Email Details */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tiêu đề email *
                    </label>
                    <Input 
                      placeholder="VD: Khuyến mãi đặc biệt - Giảm giá 20% cho tất cả sản phẩm" 
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mô tả chi tiết
                    </label>
                    <Textarea 
                      placeholder="Mô tả mục tiêu email, đối tượng mục tiêu, sản phẩm/dịch vụ, tone giọng điệu, v.v..." 
                      className="min-h-[100px] w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Đối tượng mục tiêu
                      </label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn đối tượng" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tất cả khách hàng</SelectItem>
                          <SelectItem value="new">Khách hàng mới</SelectItem>
                          <SelectItem value="returning">Khách hàng quay lại</SelectItem>
                          <SelectItem value="vip">Khách hàng VIP</SelectItem>
                          <SelectItem value="inactive">Khách hàng không hoạt động</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tone giọng điệu
                      </label>
                      <Select defaultValue="friendly">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn tone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="friendly">Thân thiện</SelectItem>
                          <SelectItem value="professional">Chuyên nghiệp</SelectItem>
                          <SelectItem value="casual">Thân mật</SelectItem>
                          <SelectItem value="urgent">Khẩn cấp</SelectItem>
                          <SelectItem value="exclusive">Độc quyền</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Call-to-Action
                      </label>
                      <Select defaultValue="shop-now">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn CTA" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="shop-now">Mua ngay</SelectItem>
                          <SelectItem value="learn-more">Tìm hiểu thêm</SelectItem>
                          <SelectItem value="download">Tải xuống</SelectItem>
                          <SelectItem value="register">Đăng ký</SelectItem>
                          <SelectItem value="contact">Liên hệ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Thời gian gửi
                      </label>
                      <Select defaultValue="immediate">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn thời gian" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Gửi ngay</SelectItem>
                          <SelectItem value="morning">Sáng sớm (8-9h)</SelectItem>
                          <SelectItem value="lunch">Giờ trưa (12-13h)</SelectItem>
                          <SelectItem value="evening">Chiều tối (18-19h)</SelectItem>
                          <SelectItem value="custom">Tùy chỉnh</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Đang tạo email...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Tạo Email với AI
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Email Insights & Tips */}
          <div className="space-y-6">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Gợi ý Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tiêu đề:</strong> Sử dụng từ ngữ kích thích sự tò mò và tạo cảm giác khẩn cấp.
                  </p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Nội dung:</strong> Ngắn gọn, rõ ràng và có CTA mạnh mẽ để tăng tỷ lệ click.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Thời gian:</strong> Gửi email vào thời điểm khách hàng có khả năng mở cao nhất.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  Thống kê Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tỷ lệ mở trung bình</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    28.5%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tỷ lệ click trung bình</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    4.2%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tỷ lệ hủy đăng ký</span>
                  <Badge variant="secondary" className="bg-red-100 text-red-700">
                    0.8%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">ROI trung bình</span>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    4200%
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-600 space-y-2">
                  <p>✅ Sử dụng tên khách hàng trong email</p>
                  <p>✅ Tạo tiêu đề hấp dẫn và ngắn gọn</p>
                  <p>✅ Có CTA rõ ràng và dễ thấy</p>
                  <p>✅ Tối ưu hóa cho mobile</p>
                  <p>✅ A/B test thường xuyên</p>
                  <p>✅ Theo dõi và phân tích hiệu suất</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Generated Email Display */}
        {generatedEmail && (
          <div className="mt-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Email đã tạo</span>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleCopy}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Sao chép
                    </Button>
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Tải xuống
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">
                    {generatedEmail}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <Separator className="my-8" />
        <div className="text-sm text-gray-600">
          Gợi ý: Email marketing hiệu quả cần có nội dung hấp dẫn, đúng thời điểm và đúng đối tượng. Sử dụng AI để tạo nội dung ban đầu, sau đó tùy chỉnh theo brand voice của bạn.
        </div>
      </div>
    </div>
  );
}


