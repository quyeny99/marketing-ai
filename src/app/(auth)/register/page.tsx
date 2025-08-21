"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { GoogleIcon, MarketingAILogo } from "@/components/icons";
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
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Meteors } from "@/components/magicui/meteors";
import { useSupabaseAuth } from "@/hooks/use-supabase-auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { useAuth } from "@/contexts/auth-context";

const registerSchema = z.object({
  firstName: z.string().min(1, { message: "Vui lòng nhập tên" }),
  lastName: z.string().min(1, { message: "Vui lòng nhập họ" }),
  email: z.string().email({ message: "Email không hợp lệ" }),
  password: z.string().min(6, { message: "Mật khẩu tối thiểu 6 ký tự" }),
  confirmPassword: z.string().min(6, { message: "Xác nhận mật khẩu tối thiểu 6 ký tự" }),
  terms: z.boolean().refine(val => val, { message: "Bạn phải đồng ý với điều khoản" }),
  newsletter: z.boolean().optional(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Mật khẩu xác nhận không khớp",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const { signUpWithPassword } = useSupabaseAuth();
  const { user } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (user) router.replace("/dashboard");
  }, [user, router]);
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      newsletter: false,
    },
  });

  async function onSubmit(values: RegisterFormValues) {
    setIsSubmitting(true);
    const err = await signUpWithPassword(
      values.email, 
      values.password, 
      values.firstName, 
      values.lastName,
      values.newsletter || false,
      values.terms
    );
    setIsSubmitting(false);
    if (err) {
      toast.error(err);
      return;
    }
    toast.success("Sign up successful. Please check your email to confirm.");
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 relative overflow-hidden">
      <Meteors number={20} className="opacity-20" />
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MarketingAILogo />
            <h1 className="text-2xl font-bold text-black">
              <SparklesText className="text-2xl inline" sparklesCount={5}>Marketing AI</SparklesText>
            </h1>
          </div>
          <p className="text-gray-600">Create your account to get started</p>
        </div>
        {/* Register Card */}
        <Card className="bg-white border-gray-200 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-black text-center">
              Create your <AnimatedGradientText className="text-2xl font-bold">account</AnimatedGradientText>
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Join thousands of marketers using AI to drive results
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...form}>
              <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Create a strong password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Confirm your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row items-center space-x-2 space-y-0">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-gray-600 ml-2">
                          I agree to the {" "}
                          <Link href="/terms" className="text-black hover:underline">
                            Terms of Service
                          </Link>
                          {" "}and{" "}
                          <Link href="/privacy" className="text-black hover:underline">
                            Privacy Policy
                          </Link>
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                        />
                      </FormControl>
                      <FormLabel className="text-sm text-gray-600">
                        Send me marketing emails and updates
                      </FormLabel>
                    </FormItem>
                  )}
                />
                <RainbowButton type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Creating...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </RainbowButton>
              </form>
            </Form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="border-gray-300 text-black hover:bg-gray-50 w-full">
                <GoogleIcon />
                Continue with Google
              </Button>
            </div>
            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-black hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>By creating an account, you agree to our</p>
          <div className="flex justify-center space-x-2 mt-1">
            <Link href="/terms" className="text-black hover:underline">
              Terms of Service
            </Link>
            <span>and</span>
            <Link href="/privacy" className="text-black hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 