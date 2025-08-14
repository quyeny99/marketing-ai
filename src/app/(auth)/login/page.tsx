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
import { useAuth } from "@/contexts/auth-context";
import { useSupabaseAuth } from "@/hooks/use-supabase-auth";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Meteors } from "@/components/magicui/meteors";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ" }),
  password: z.string().min(6, { message: "Mật khẩu tối thiểu 6 ký tự" }),
  remember: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const searchParams = useSearchParams();
  const checkEmail = searchParams.get("checkEmail") || "";
  const { user, isLoading } = useAuth();
  const { signInWithPassword, signInWithGoogle } = useSupabaseAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOAuthing, setIsOAuthing] = useState(false);
  useEffect(() => {
    if (user && !isLoading) {
      router.replace("/dashboard");
    }
  }, [user, isLoading, router]);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: checkEmail || "",
      password: "",
      remember: false,
    },
  });

  async function onSubmit(values: LoginFormValues) {
    setIsSubmitting(true);
    const err = await signInWithPassword(values.email, values.password);
    setIsSubmitting(false);
    if (err) {
      toast.error(err);
      return;
    }
    toast.success("Logged in successfully");
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 relative overflow-hidden">
      <Meteors number={15} className="opacity-30" />
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MarketingAILogo />
            <h1 className="text-2xl font-bold text-black">
              <AnimatedGradientText>Marketing AI</AnimatedGradientText>
            </h1>
          </div>
          <p className="text-gray-600">Welcome back to your dashboard</p>
        </div>

        {/* Login Card */}
        <Card className="bg-white border-gray-200 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-black text-center">
              Sign in to your account
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Enter your credentials to access your dashboard
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
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="remember"
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
                        <FormLabel className="text-sm text-gray-600">Remember me</FormLabel>
                      </FormItem>
                    )}
                  />
                  <Link 
                    href="/forgot-password" 
                    className="text-sm text-black hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <RainbowButton type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Signing in...
                    </span>
                  ) : (
                    "Sign in"
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
              <Button
                variant="outline"
                className="border-gray-300 text-black hover:bg-gray-50 w-full"
                onClick={async () => {
                  if (isOAuthing) return;
                  setIsOAuthing(true);
                  const err = await signInWithGoogle();
                  setIsOAuthing(false);
                  if (err) toast.error(err);
                }}
                disabled={isSubmitting || isOAuthing}
              >
                {isOAuthing ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Redirecting...
                  </span>
                ) : (
                  <>
                    <GoogleIcon />
                    Continue with Google
                  </>
                )}
              </Button>
            </div>
            <div className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-black hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>By signing in, you agree to our</p>
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