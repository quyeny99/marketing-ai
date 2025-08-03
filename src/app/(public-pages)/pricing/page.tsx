import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

export default function PricingPage() {
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
              <Link href="/features" className="text-gray-600 hover:text-black transition-colors">Features</Link>
              <Link href="/pricing" className="text-black font-medium">Pricing</Link>
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
              Bảng giá
              <span className="block bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                minh bạch
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Chọn gói phù hợp với nhu cầu của doanh nghiệp. 
              Tất cả gói đều bao gồm dùng thử miễn phí 14 ngày.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="relative">
                <div className="flex items-center space-x-2">
                  <div className="text-gray-600">Thanh toán hàng tháng</div>
                  <Switch id="airplane-mode" />
                  <div className="text-black font-medium">Thanh toán hàng năm</div>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                Tiết kiệm 20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-black">Free</CardTitle>
                <div className="text-4xl font-bold text-black mb-2">$0</div>
                <CardDescription className="text-gray-600">Miễn phí mãi mãi</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col h-full">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tối đa 1,000 email/tháng
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI Copywriting cơ bản
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Chatbot 50 tin nhắn/tháng
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Báo cáo cơ bản
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hỗ trợ email
                  </li>
                </ul>
                <Button className="w-full bg-gray-100 text-black hover:bg-gray-200 mt-auto">
                  <Link href="/register">Bắt đầu miễn phí</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-white border-black shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                  Phổ biến nhất
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-black">Pro</CardTitle>
                <div className="text-4xl font-bold text-black mb-2">$49</div>
                <CardDescription className="text-gray-600">/tháng</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col h-full">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tối đa 50,000 email/tháng
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI Copywriting nâng cao
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Visual Content AI
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Chatbot không giới hạn
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Predictive Analytics
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    A/B Testing
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hỗ trợ ưu tiên
                  </li>
                </ul>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  <Link href="/register">Bắt đầu dùng thử</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-black">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-black mb-2">$199</div>
                <CardDescription className="text-gray-600">/tháng</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col h-full">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Email không giới hạn
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tất cả tính năng AI
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom AI Models
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced Analytics
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    API Access
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated Support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom Integrations
                  </li>
                </ul>
                <Button className="w-full bg-gray-100 text-black hover:bg-gray-200">
                  <Link href="/contact">Liên hệ bán hàng</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">So sánh tính năng</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Xem chi tiết các tính năng có trong từng gói
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Tính năng</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Email Marketing</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">1,000/tháng</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">50,000/tháng</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Không giới hạn</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">AI Copywriting</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Cơ bản</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Nâng cao</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Visual Content AI</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">-</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">AI Chatbot</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">50 tin nhắn/tháng</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Không giới hạn</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Không giới hạn</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Predictive Analytics</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">-</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">A/B Testing</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">-</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">API Access</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">-</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">-</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Hỗ trợ</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Email</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Ưu tiên</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Câu hỏi thường gặp</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tìm câu trả lời cho những thắc mắc phổ biến
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Có thể hủy gói bất cứ lúc nào không?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Có, bạn có thể hủy gói bất cứ lúc nào. Chúng tôi không tính phí hủy gói và bạn vẫn có thể sử dụng dịch vụ cho đến hết kỳ thanh toán hiện tại.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Có dùng thử miễn phí không?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Có, tất cả gói trả phí đều có dùng thử miễn phí 14 ngày. Bạn có thể trải nghiệm đầy đủ tính năng mà không cần thẻ tín dụng.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Có thể nâng cấp hoặc hạ cấp gói không?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Có, bạn có thể nâng cấp hoặc hạ cấp gói bất cứ lúc nào. Việc thay đổi sẽ có hiệu lực ngay lập tức và chúng tôi sẽ tính toán lại phí một cách công bằng.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Hỗ trợ khách hàng như thế nào?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gói Free có hỗ trợ qua email. Gói Pro có hỗ trợ ưu tiên qua email và chat. Gói Enterprise có dedicated support với account manager riêng.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn doanh nghiệp đã tin tưởng Marketing AI 
            để tăng trưởng doanh số và tối ưu hóa chiến lược marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/register">Bắt đầu miễn phí</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black">
              <Link href="/contact">Liên hệ tư vấn</Link>
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