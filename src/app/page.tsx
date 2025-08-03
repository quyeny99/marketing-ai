import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Globe } from "@/components/magicui/globe";
import Link from "next/link";
import { MarketingAILogo, ZapIcon, UsersIcon, ChartIcon, ArrowRightIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MarketingAILogo className="h-8 w-8" />
              <h1 className="text-xl font-bold text-black">Marketing AI</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/features" className="text-gray-600 hover:text-black transition-colors">Features</Link>
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
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                  AI-Powered
                  <span className="block bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                    Marketing
                  </span>
                  Solutions
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Transform your marketing strategy with cutting-edge AI technology. 
                  Automate campaigns, analyze data, and drive results like never before.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                  <Link href="/register">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <span>AI-Powered</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[600px] w-full">
                <Globe className="!absolute !inset-0 !mx-auto !w-full !max-w-[600px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-black">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to supercharge your marketing campaigns with AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4">
                  <ZapIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-black">AI Campaign Optimization</CardTitle>
                <CardDescription className="text-gray-600">
                  Automatically optimize your campaigns for maximum ROI using advanced AI algorithms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4">
                  <ChartIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-black">Advanced Analytics</CardTitle>
                <CardDescription className="text-gray-600">
                  Get deep insights into your marketing performance with real-time analytics and AI-powered predictions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-600 flex items-center justify-center mb-4">
                  <UsersIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-black">Smart Audience Targeting</CardTitle>
                <CardDescription className="text-gray-600">
                  Reach the right audience at the right time with AI-powered audience segmentation and targeting.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-black">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-black">500M+</div>
              <div className="text-gray-600">Emails Sent</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-black">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-black">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-black border-black shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of marketers who are already using AI to drive incredible results. 
                Start your free trial today and see the difference AI can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Input 
                  placeholder="Enter your email" 
                  className="max-w-md bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                                 <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                   <Link href="/register">Get Started Free</Link>
                 </Button>
              </div>
            </CardContent>
          </Card>
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
                Transforming marketing with the power of artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-black font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-black transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
                <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-black transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Marketing AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
