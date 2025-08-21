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
  Wand2, 
  FileText, 
  Image, 
  Video, 
  Share2, 
  Sparkles,
  Copy,
  Download,
  RefreshCw,
  Lightbulb,
  Target,
  Users,
  TrendingUp
} from "lucide-react";

export default function ContentAIPage() {
  const [contentType, setContentType] = useState("blog");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

  const contentTypes = [
    { value: "blog", label: "Blog Post", icon: "📝", description: "Bài viết blog dài" },
    { value: "social", label: "Social Media", icon: "📱", description: "Nội dung mạng xã hội" },
    { value: "email", label: "Email Marketing", icon: "📧", description: "Email marketing" },
    { value: "ad", label: "Quảng cáo", icon: "💰", description: "Copy quảng cáo" },
    { value: "product", label: "Mô tả sản phẩm", icon: "🛍️", description: "Mô tả sản phẩm" },
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent(`Đây là nội dung được tạo bởi AI cho loại ${contentType}...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Key Points:
• Điểm quan trọng 1
• Điểm quan trọng 2
• Điểm quan trọng 3

Kết luận: Nội dung này được tạo tự động bởi AI để hỗ trợ marketing của bạn.`);
      setIsGenerating(false);
    }, 3000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    // You can add toast notification here
  };

  const handleDownload = () => {
    const blob = new Blob([generatedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `content-ai-${contentType}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Tạo Nội dung AI
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Sử dụng AI để tạo nội dung marketing chất lượng cao
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Nội dung đã tạo</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">24</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Thời gian tiết kiệm</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">12h</p>
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
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Chất lượng</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">95%</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Đối tượng tiếp cận</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">2.4K</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Content Creation Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-purple-600" />
                  Tạo Nội dung AI
                </CardTitle>
                <CardDescription>
                  Chọn loại nội dung và mô tả để AI tạo nội dung phù hợp
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Content Type Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {contentTypes.map((type) => (
                    <div
                      key={type.value}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                        contentType === type.value
                          ? "border-purple-300 bg-purple-50 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                      onClick={() => setContentType(type.value)}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <div className="font-medium text-gray-900">{type.label}</div>
                        <div className="text-xs text-gray-600 mt-1">{type.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Content Details */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tiêu đề hoặc chủ đề *
                    </label>
                    <Input 
                      placeholder="VD: 10 cách tăng doanh số bán hàng online" 
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mô tả chi tiết
                    </label>
                    <Textarea 
                      placeholder="Mô tả chi tiết về nội dung bạn muốn tạo, đối tượng mục tiêu, tone giọng điệu, v.v..." 
                      className="min-h-[100px] w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Độ dài
                      </label>
                      <Select defaultValue="medium">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Chọn độ dài" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="short">Ngắn (100-200 từ)</SelectItem>
                          <SelectItem value="medium">Trung bình (300-500 từ)</SelectItem>
                          <SelectItem value="long">Dài (800-1200 từ)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tone giọng điệu
                      </label>
                      <Select defaultValue="professional">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Chọn tone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Chuyên nghiệp</SelectItem>
                          <SelectItem value="casual">Thân thiện</SelectItem>
                          <SelectItem value="creative">Sáng tạo</SelectItem>
                          <SelectItem value="persuasive">Thuyết phục</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Đang tạo nội dung...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Tạo Nội dung với AI
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights & Tips */}
          <div className="space-y-6">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Gợi ý AI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Mô tả càng chi tiết, AI càng tạo ra nội dung phù hợp với nhu cầu của bạn.
                  </p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Lưu ý:</strong> Nội dung được tạo bởi AI nên được review và chỉnh sửa trước khi sử dụng.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Thống kê:</strong> 95% người dùng tiết kiệm được ít nhất 2 giờ mỗi tuần khi sử dụng AI.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Xu hướng Nội dung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Video ngắn</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    +45%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Infographic</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    +32%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Case study</span>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    +28%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">User-generated</span>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    +18%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Generated Content Display */}
        {generatedContent && (
          <div className="mt-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Nội dung đã tạo</span>
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
                    {generatedContent}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <Separator className="my-8" />
        <div className="text-sm text-gray-600">
          Gợi ý: Sử dụng AI để tạo nội dung ban đầu, sau đó chỉnh sửa để phù hợp với brand voice và mục tiêu cụ thể của bạn.
        </div>
      </div>
    </div>
  );
}


