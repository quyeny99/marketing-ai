import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-black"></div>
              <h1 className="text-xl font-bold text-black">Marketing AI</h1>
            </Link>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              <Link href="/(auth)/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: December 2024</p>
          </div>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using Marketing AI's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">2. Use License</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Marketing AI's website for personal, non-commercial transitory viewing only.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on Marketing AI's website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">3. Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials on Marketing AI's website are provided on an 'as is' basis. Marketing AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">4. Limitations</h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Marketing AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Marketing AI's website, even if Marketing AI or a Marketing AI authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">5. Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Please review our <Link href="/privacy" className="text-black hover:underline">Privacy Policy</Link>, which also governs your use of the Service, to understand our practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">6. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">Email: legal@marketingai.com</p>
                  <p className="text-gray-700">Address: 123 AI Street, Tech City, TC 12345</p>
                </div>
              </section>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
              <Link href="/(auth)/register">Get Started</Link>
            </Button>
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