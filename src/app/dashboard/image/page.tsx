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
  Image as ImageIcon, 
  Download, 
  RefreshCw, 
  Sparkles,
  Copy,
  Palette,
  Camera,
  Target,
  Lightbulb,
  BarChart3,
  Heart,
  Share2,
  Eye
} from "lucide-react";

export default function ImageAIPage() {
  const [imageType, setImageType] = useState("product");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const imageTypes = [
    { value: "product", label: "Sản phẩm", icon: "🛍️", description: "Hình ảnh sản phẩm chuyên nghiệp" },
    { value: "social", label: "Mạng xã hội", icon: "📱", description: "Hình ảnh cho social media" },
    { value: "banner", label: "Banner quảng cáo", icon: "🎯", description: "Banner quảng cáo online" },
    { value: "logo", label: "Logo & Brand", icon: "🏷️", description: "Logo và nhận diện thương hiệu" },
    { value: "illustration", label: "Minh họa", icon: "🎨", description: "Hình minh họa sáng tạo" },
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const mockImages = [
        "https://via.placeholder.com/512x512/4F46E5/FFFFFF?text=AI+Generated+Image+1",
        "https://via.placeholder.com/512x512/7C3AED/FFFFFF?text=AI+Generated+Image+2",
        "https://via.placeholder.com/512x512/DC2626/FFFFFF?text=AI+Generated+Image+3",
        "https://via.placeholder.com/512x512/059669/FFFFFF?text=AI+Generated+Image+4"
      ];
      setGeneratedImages(mockImages);
      setIsGenerating(false);
    }, 4000);
  };

  const handleDownload = (imageUrl: string, index: number) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = `ai-image-${imageType}-${index + 1}.png`;
    a.click();
  };

  const handleCopy = (imageUrl: string) => {
    navigator.clipboard.writeText(imageUrl);
    // You can add toast notification here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Tạo Hình ảnh AI
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Sử dụng AI để tạo hình ảnh marketing chất lượng cao, độc đáo và phù hợp với brand
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Hình ảnh đã tạo</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">156</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Thời gian tiết kiệm</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">48h</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Tỷ lệ sử dụng</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">87%</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Chi phí tiết kiệm</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">$2.4K</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Image Creation Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-purple-600" />
                  Tạo Hình ảnh AI
                </CardTitle>
                <CardDescription>
                  Mô tả hình ảnh bạn muốn tạo và AI sẽ tạo ra những hình ảnh phù hợp
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Image Type Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {imageTypes.map((type) => (
                    <div
                      key={type.value}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                        imageType === type.value
                          ? "border-purple-300 bg-purple-50 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                      onClick={() => setImageType(type.value)}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <div className="font-medium text-gray-900">{type.label}</div>
                        <div className="text-xs text-gray-600 mt-1">{type.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Image Details */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mô tả hình ảnh *
                    </label>
                    <Textarea 
                      placeholder="VD: Hình ảnh sản phẩm smartphone hiện đại, thiết kế tối giản, nền trắng, ánh sáng tự nhiên, chất lượng cao" 
                      className="min-h-[100px] w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kích thước
                      </label>
                      <Select defaultValue="512x512">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn kích thước" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="256x256">256x256 (Nhỏ)</SelectItem>
                          <SelectItem value="512x512">512x512 (Trung bình)</SelectItem>
                          <SelectItem value="1024x1024">1024x1024 (Lớn)</SelectItem>
                          <SelectItem value="1024x1792">1024x1792 (Portrait)</SelectItem>
                          <SelectItem value="1792x1024">1792x1024 (Landscape)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phong cách nghệ thuật
                      </label>
                      <Select defaultValue="realistic">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn phong cách" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="realistic">Hiện thực</SelectItem>
                          <SelectItem value="artistic">Nghệ thuật</SelectItem>
                          <SelectItem value="cartoon">Hoạt hình</SelectItem>
                          <SelectItem value="abstract">Trừu tượng</SelectItem>
                          <SelectItem value="vintage">Cổ điển</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Màu sắc chủ đạo
                      </label>
                      <Select defaultValue="natural">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn màu sắc" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="natural">Tự nhiên</SelectItem>
                          <SelectItem value="vibrant">Rực rỡ</SelectItem>
                          <SelectItem value="muted">Nhẹ nhàng</SelectItem>
                          <SelectItem value="monochrome">Đơn sắc</SelectItem>
                          <SelectItem value="warm">Ấm áp</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Số lượng hình ảnh
                      </label>
                      <Select defaultValue="4">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn số lượng" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 hình</SelectItem>
                          <SelectItem value="2">2 hình</SelectItem>
                          <SelectItem value="4">4 hình</SelectItem>
                          <SelectItem value="6">6 hình</SelectItem>
                          <SelectItem value="8">8 hình</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Yêu cầu bổ sung (Tùy chọn)
                    </label>
                    <Input 
                      placeholder="VD: Không có text, không có watermark, chất lượng 4K" 
                      className="w-full"
                    />
                  </div>

                  <Button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Đang tạo hình ảnh...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Tạo Hình ảnh với AI
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
                  Gợi ý Tạo Ảnh
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Mô tả chi tiết:</strong> Càng mô tả cụ thể, AI càng tạo ra hình ảnh chính xác với ý định của bạn.
                  </p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Phong cách nhất quán:</strong> Sử dụng cùng phong cách để tạo bộ hình ảnh đồng nhất.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Kích thước phù hợp:</strong> Chọn kích thước phù hợp với mục đích sử dụng (social media, website, in ấn).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  Thống kê Sử dụng
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Sản phẩm</span>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    45%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Social media</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    32%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Banner quảng cáo</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    18%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Logo & Brand</span>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    5%
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
                  <p>✅ Mô tả rõ ràng và cụ thể</p>
                  <p>✅ Chọn phong cách phù hợp với brand</p>
                  <p>✅ Sử dụng kích thước tối ưu</p>
                  <p>✅ Tạo nhiều phiên bản để lựa chọn</p>
                  <p>✅ Kiểm tra chất lượng trước khi sử dụng</p>
                  <p>✅ Lưu trữ và quản lý có hệ thống</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Generated Images Display */}
        {generatedImages.length > 0 && (
          <div className="mt-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Hình ảnh đã tạo ({generatedImages.length})</span>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setGeneratedImages([])}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Tạo lại
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {generatedImages.map((imageUrl, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square rounded-lg overflow-hidden border border-gray-200">
                        <img
                          src={imageUrl}
                          alt={`AI Generated Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Overlay Actions */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
                          <Button
                            onClick={() => handleDownload(imageUrl, index)}
                            size="sm"
                            className="bg-white text-black hover:bg-gray-100"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={() => handleCopy(imageUrl)}
                            size="sm"
                            variant="outline"
                            className="bg-white border-white text-black hover:bg-gray-100"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Image Info */}
                      <div className="mt-2 text-center">
                        <p className="text-sm font-medium text-gray-900">Hình {index + 1}</p>
                        <p className="text-xs text-gray-500">512x512 • PNG</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <Separator className="my-8" />
        <div className="text-sm text-gray-600">
          Gợi ý: Hình ảnh AI có thể tiết kiệm thời gian và chi phí so với thuê designer. Tuy nhiên, hãy review kỹ trước khi sử dụng để đảm bảo phù hợp với brand guidelines của bạn.
        </div>
      </div>
    </div>
  );
}


