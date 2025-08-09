"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Meteors } from "@/components/magicui/meteors";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  async function onSubmit(values: ForgotPasswordFormValues) {
    setIsSubmitting(true);
    try {
      // TODO: integrate supabase.auth.resetPasswordForEmail(values.email)
      await new Promise((r) => setTimeout(r, 800));
      toast.success("Reset instructions sent to your email");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Failed to send reset email");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 relative overflow-hidden">
      <Meteors number={12} className="opacity-25" />
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MarketingAILogo />
            <h1 className="text-2xl font-bold text-black">
              <AnimatedGradientText>Marketing AI</AnimatedGradientText>
            </h1>
          </div>
          <p className="text-gray-600">Reset your password</p>
        </div>
        {/* Forgot Password Card */}
        <Card className="bg-white border-gray-200 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-black text-center">
              Forgot your <AnimatedGradientText className="text-2xl font-bold">password</AnimatedGradientText>?
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              No worries, we&apos;ll send you reset instructions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <RainbowButton type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send reset instructions"
                  )}
                </RainbowButton>
              </form>
            </Form>
            <div className="text-center text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                href="/login"
                className="text-black hover:underline font-medium"
              >
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
