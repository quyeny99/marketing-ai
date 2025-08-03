"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { MarketingAILogo } from "@/components/icons";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ" }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: ForgotPasswordFormValues) {
    // Xử lý gửi email reset ở đây
    alert("Đã gửi hướng dẫn đặt lại mật khẩu! (demo)");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MarketingAILogo />
            <h1 className="text-2xl font-bold text-black">Marketing AI</h1>
          </div>
          <p className="text-gray-600">Reset your password</p>
        </div>
        {/* Forgot Password Card */}
        <Card className="bg-white border-gray-200 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-black text-center">
              Forgot your password?
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              No worries, we'll send you reset instructions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...form}>
              <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                  Send reset instructions
                </Button>
              </form>
            </Form>
            <div className="text-center text-sm text-gray-600">
              Remember your password?{" "}
              <Link href="/login" className="text-black hover:underline font-medium">
                Back to login
              </Link>
            </div>
          </CardContent>
        </Card>
        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Need help? Contact our support team</p>
          <Link href="/contact" className="text-black hover:underline">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
} 