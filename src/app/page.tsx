import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Globe } from "@/components/magicui/globe";
import Link from "next/link";
import { MarketingAILogo, ZapIcon, UsersIcon, ChartIcon } from "@/components/icons";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Meteors } from "@/components/magicui/meteors";
import { Marquee } from "@/components/magicui/marquee";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MarketingAILogo className="h-6 w-6 sm:h-8 sm:w-8" />
              <h1 className="text-lg sm:text-xl font-bold text-black">Marketing AI</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <Link href="/features" className="text-gray-600 hover:text-black transition-colors text-sm lg:text-base">Features</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-black transition-colors text-sm lg:text-base">Pricing</Link>
              <Link href="/about" className="text-gray-600 hover:text-black transition-colors text-sm lg:text-base">About</Link>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white text-sm">
                <Link href="/login">Get Started</Link>
              </Button>
            </nav>
            <Button variant="outline" className="md:hidden border-black text-black hover:bg-black hover:text-white text-sm">
              <Link href="/login">Start</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  <SparklesText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" sparklesCount={8}>
                    AI-Powered
                  </SparklesText>
                  <span className="block">
                    <AnimatedGradientText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      Marketing
                    </AnimatedGradientText>
                  </span>
                  Solutions
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg">
                  Transform your marketing strategy with cutting-edge AI technology. 
                  Automate campaigns, analyze data, and drive results like never before.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <RainbowButton size="lg">
                  <Link href="/register">Start Free Trial</Link>
                </RainbowButton>
                <ShinyButton size="lg" className="bg-white border-gray-200 text-black hover:shadow-lg">
                  Watch Demo
                </ShinyButton>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-xs sm:text-sm text-gray-600">
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

            <div className="relative order-first lg:order-last hidden md:block">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full">
                <Globe className="!absolute !inset-0 !mx-auto !w-full !max-w-[600px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Powerful <AnimatedGradientText className="text-3xl sm:text-4xl font-bold">Features</AnimatedGradientText>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to supercharge your marketing campaigns with AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl relative overflow-hidden">
              <Meteors number={10} />
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

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl relative overflow-hidden">
              <Meteors number={8} />
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

            <Card className="bg-white border-gray-200 hover:border-black transition-colors shadow-lg hover:shadow-xl relative overflow-hidden">
              <Meteors number={12} />
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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trusted by companies marquee */}
          <div className="mb-12">
            <p className="text-center text-gray-600 mb-8">Trusted by leading companies worldwide</p>
            <Marquee className="py-4" pauseOnHover>
              <div className="flex items-center space-x-8 mx-8">
                <div className="text-2xl font-bold text-gray-400">Microsoft</div>
                <div className="text-2xl font-bold text-gray-400">Google</div>
                <div className="text-2xl font-bold text-gray-400">Amazon</div>
                <div className="text-2xl font-bold text-gray-400">Netflix</div>
                <div className="text-2xl font-bold text-gray-400">Spotify</div>
                <div className="text-2xl font-bold text-gray-400">Airbnb</div>
                <div className="text-2xl font-bold text-gray-400">Uber</div>
                <div className="text-2xl font-bold text-gray-400">Shopify</div>
              </div>
            </Marquee>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-black">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-black">500M+</div>
              <div className="text-gray-600">Emails Sent</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-black">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-black">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-black border-black shadow-2xl relative overflow-hidden">
            <Meteors number={20} />
            <CardContent className="p-8 sm:p-12 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Transform Your <SparklesText className="text-2xl sm:text-3xl inline" colors={{ first: "#ffffff", second: "#d1d5db" }} sparklesCount={6}>Marketing</SparklesText>?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Join thousands of marketers who are already using AI to drive incredible results. 
                Start your free trial today and see the difference AI can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Input 
                  placeholder="Enter your email" 
                  className="max-w-md bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <RainbowButton size="lg">
                  <Link href="/register">Get Started Free</Link>
                </RainbowButton>
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
