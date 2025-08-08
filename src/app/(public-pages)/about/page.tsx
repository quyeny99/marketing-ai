import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { MarketingAILogo } from "@/components/icons";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Meteors } from "@/components/magicui/meteors";
import { DockDemo } from "@/components/DockDemo";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MarketingAILogo className="h-8 w-8" />
              <h1 className="text-xl font-bold text-black">
                <AnimatedGradientText>Marketing AI</AnimatedGradientText>
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
              <Link href="/features" className="text-gray-600 hover:text-black transition-colors">Features</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</Link>
              <Link href="/about" className="text-black font-medium">About</Link>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                <Link href="/login">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <Meteors number={10} className="opacity-20" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              <SparklesText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight" sparklesCount={8}>
                Xây dựng niềm tin
              </SparklesText>
              <span className="block mt-2">
                <AnimatedGradientText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  thông qua AI
                </AnimatedGradientText>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Chúng tôi tin rằng AI có thể cách mạng hóa marketing, giúp doanh nghiệp 
              kết nối với khách hàng một cách thông minh và hiệu quả hơn bao giờ hết.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <div className="mt-4 flex justify-center">
        <DockDemo />
      </div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">Sứ mệnh của chúng tôi</h2>
              <p className="text-lg text-gray-600">
                Marketing AI được thành lập với sứ mệnh đơn giản: 
                <span className="font-semibold text-black"> làm cho marketing trở nên thông minh hơn.</span>
              </p>
              <p className="text-gray-600">
                Chúng tôi tin rằng mọi doanh nghiệp, dù lớn hay nhỏ, đều xứng đáng có được 
                những công cụ marketing AI mạnh mẽ để phát triển và thành công.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <RainbowButton size="lg">
                  <Link href="/features">Khám phá tính năng</Link>
                </RainbowButton>
                <ShinyButton className="bg-white border-gray-200 text-black hover:shadow-lg">
                  <Link href="/pricing">Xem bảng giá</Link>
                </ShinyButton>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">10K+</div>
                    <div className="text-gray-600">Khách hàng tin tưởng</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">500M+</div>
                    <div className="text-gray-600">Email được gửi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">98%</div>
                    <div className="text-gray-600">Tỷ lệ thành công</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">24/7</div>
                    <div className="text-gray-600">Hỗ trợ khách hàng</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Đội ngũ của chúng tôi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những chuyên gia hàng đầu trong lĩnh vực AI và Marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl relative overflow-hidden">
              <Meteors number={5} />
              <CardHeader className="text-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">NT</span>
                </div>
                <CardTitle className="text-black">Nguyễn Thành</CardTitle>
                <CardDescription className="text-gray-600">CEO & Founder</CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-600">
                  Chuyên gia AI với 10+ năm kinh nghiệm trong lĩnh vực marketing automation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl relative overflow-hidden">
              <Meteors number={5} />
              <CardHeader className="text-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-blue-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">LM</span>
                </div>
                <CardTitle className="text-black">Lê Minh</CardTitle>
                <CardDescription className="text-gray-600">CTO</CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-600">
                  Kỹ sư phần mềm với chuyên môn về machine learning và AI systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl relative overflow-hidden">
              <Meteors number={5} />
              <CardHeader className="text-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-red-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">TH</span>
                </div>
                <CardTitle className="text-black">Trần Hương</CardTitle>
                <CardDescription className="text-gray-600">Head of Marketing</CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-600">
                  Chuyên gia marketing digital với kinh nghiệm 8+ năm trong lĩnh vực.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Giá trị cốt lõi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những nguyên tắc định hướng mọi quyết định của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Đổi mới</CardTitle>
                <CardDescription className="text-gray-600">
                  Không ngừng nghiên cứu và phát triển các giải pháp AI tiên tiến nhất.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Cộng đồng</CardTitle>
                <CardDescription className="text-gray-600">
                  Xây dựng cộng đồng marketing AI mạnh mẽ và hỗ trợ lẫn nhau.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Hiệu quả</CardTitle>
                <CardDescription className="text-gray-600">
                  Tập trung vào kết quả thực tế và ROI cho khách hàng.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sẵn sàng bắt đầu hành trình?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn doanh nghiệp đã tin tưởng Marketing AI 
            để phát triển chiến lược marketing thông minh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RainbowButton size="lg">
              <Link href="/register">Bắt đầu miễn phí</Link>
            </RainbowButton>
            <ShinyButton className="bg-white border-gray-200 text-black hover:shadow-lg">
              <Link href="/contact">Liên hệ tư vấn</Link>
            </ShinyButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-black"></div>
                <h3 className="text-xl font-bold text-black">Marketing AI</h3>
              </div>
              <p className="text-gray-600">
                Chuyển đổi marketing với sức mạnh của trí tuệ nhân tạo.
              </p>
            </div>
            <div>
              <h4 className="text-black font-semibold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/features" className="hover:text-black transition-colors">Tính năng</Link></li>
                <li><Link href="/pricing" className="hover:text-black transition-colors">Bảng giá</Link></li>
                <li><Link href="/api" className="hover:text-black transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-semibold mb-4">Công ty</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/about" className="hover:text-black transition-colors">Về chúng tôi</Link></li>
                <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-black transition-colors">Tuyển dụng</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/help" className="hover:text-black transition-colors">Trung tâm trợ giúp</Link></li>
                <li><Link href="/contact" className="hover:text-black transition-colors">Liên hệ</Link></li>
                <li><Link href="/status" className="hover:text-black transition-colors">Trạng thái</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Marketing AI. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 