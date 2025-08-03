import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-black"></div>
              <h1 className="text-xl font-bold text-black">Marketing AI</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
              <Link href="/features" className="text-black font-medium">Features</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</Link>
              <Link href="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                <Link href="/login">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Tính năng AI
              <span className="block bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                mạnh mẽ
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Khám phá bộ công cụ AI toàn diện giúp tự động hóa và tối ưu hóa 
              mọi khía cạnh của chiến lược marketing của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                <Link href="/pricing">Bắt đầu dùng thử</Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-black hover:bg-gray-800 text-white">
                <Link href="/demo">Xem demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Content Tools */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">AI Content Creation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tạo nội dung chất lượng cao với sự hỗ trợ của AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <CardTitle className="text-black">AI Copywriting</CardTitle>
                <CardDescription className="text-gray-600">
                  Tạo nội dung quảng cáo, email, social media với AI thông minh
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Tự động tạo copy dựa trên brand voice</li>
                  <li>• Tối ưu hóa cho từng platform</li>
                  <li>• A/B testing tự động</li>
                  <li>• Đa ngôn ngữ</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Visual Content AI</CardTitle>
                <CardDescription className="text-gray-600">
                  Tạo hình ảnh, infographic, video với AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Tạo hình ảnh từ text prompt</li>
                  <li>• Thiết kế infographic tự động</li>
                  <li>• Video generation</li>
                  <li>• Brand consistency</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Content Optimization</CardTitle>
                <CardDescription className="text-gray-600">
                  Tối ưu hóa nội dung cho SEO và engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• SEO optimization tự động</li>
                  <li>• Keyword research</li>
                  <li>• Content scoring</li>
                  <li>• Performance tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Email Marketing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">AI Email Marketing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tự động hóa email marketing với AI thông minh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Smart Email Campaigns</CardTitle>
                <CardDescription className="text-gray-600">
                  Tạo và quản lý email campaigns thông minh
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Personalization tự động</li>
                  <li>• Send time optimization</li>
                  <li>• Subject line testing</li>
                  <li>• Dynamic content</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Audience Segmentation</CardTitle>
                <CardDescription className="text-gray-600">
                  Phân khúc khách hàng thông minh với AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Behavioral segmentation</li>
                  <li>• Predictive analytics</li>
                  <li>• Lifecycle targeting</li>
                  <li>• Real-time updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Performance Analytics</CardTitle>
                <CardDescription className="text-gray-600">
                  Phân tích hiệu suất email chi tiết
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Open rate prediction</li>
                  <li>• Click-through optimization</li>
                  <li>• Revenue attribution</li>
                  <li>• A/B testing insights</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">AI Chatbot</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chatbot thông minh hỗ trợ khách hàng 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Smart Conversations</CardTitle>
                <CardDescription className="text-gray-600">
                  Chatbot hiểu ngữ cảnh và trả lời thông minh
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Natural language processing</li>
                  <li>• Context awareness</li>
                  <li>• Multi-language support</li>
                  <li>• Sentiment analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Lead Generation</CardTitle>
                <CardDescription className="text-gray-600">
                  Tự động thu thập và qualify leads
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Lead qualification</li>
                  <li>• Appointment booking</li>
                  <li>• Product recommendations</li>
                  <li>• Sales funnel integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Analytics & Insights</CardTitle>
                <CardDescription className="text-gray-600">
                  Phân tích hiệu suất chatbot chi tiết
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Conversation analytics</li>
                  <li>• Customer satisfaction</li>
                  <li>• Response time tracking</li>
                  <li>• Improvement suggestions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Analytics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">AI Analytics</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Phân tích dữ liệu thông minh và dự đoán xu hướng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Predictive Analytics</CardTitle>
                <CardDescription className="text-gray-600">
                  Dự đoán xu hướng và hành vi khách hàng
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Customer lifetime value</li>
                  <li>• Churn prediction</li>
                  <li>• Demand forecasting</li>
                  <li>• Trend analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <CardTitle className="text-black">ROI Optimization</CardTitle>
                <CardDescription className="text-gray-600">
                  Tối ưu hóa ROI cho mọi chiến dịch marketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Campaign performance</li>
                  <li>• Budget optimization</li>
                  <li>• Attribution modeling</li>
                  <li>• Revenue tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <CardTitle className="text-black">Real-time Reports</CardTitle>
                <CardDescription className="text-gray-600">
                  Báo cáo thời gian thực và dashboard tương tác
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Live dashboards</li>
                  <li>• Custom reports</li>
                  <li>• Automated insights</li>
                  <li>• Mobile alerts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sẵn sàng khám phá sức mạnh AI?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Bắt đầu dùng thử miễn phí và trải nghiệm các tính năng AI mạnh mẽ 
            giúp tăng trưởng doanh nghiệp của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/register">Bắt đầu miễn phí</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black">
              <Link href="/demo">Xem demo</Link>
            </Button>
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