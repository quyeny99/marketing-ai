import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  MarketingAILogo,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "@/components/icons";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <MarketingAILogo className="h-8 w-8" />
              <h1 className="text-xl font-bold text-black">Marketing AI</h1>
            </Link>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">
              <AuroraText className="text-4xl">Contact Us</AuroraText>
            </h1>
            <p className="text-gray-600">
              Get in touch with our team. We&apos;re here to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">
                  Send us a message
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium text-black"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium text-black"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-black"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-black"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-black"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      className="border-gray-300 focus:border-black focus:ring-black resize-none"
                    />
                  </div>

                  <ShimmerButton type="submit" className="w-full">
                    Send Message
                  </ShimmerButton>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black">
                    Get in touch
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    We&apos;d love to hear from you. Here&apos;s how you can
                    reach us.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                      <MailIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Email</h3>
                      <p className="text-gray-600">support@marketingai.com</p>
                      <p className="text-gray-600">sales@marketingai.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Office</h3>
                      <p className="text-gray-600">123 AI Street</p>
                      <p className="text-gray-600">Tech City, TC 12345</p>
                      <p className="text-gray-600">United States</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black">
                    FAQ
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Quick answers to common questions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-black">
                      How do I get started?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Sign up for a free trial and explore our AI-powered
                      marketing tools.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">
                      What&apos;s included in the free trial?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Full access to all features for 14 days, no credit card
                      required.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">
                      Do you offer support?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Yes! We provide 24/7 customer support via email and live
                      chat.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-500">
          <p>&copy; 2024 Marketing AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
