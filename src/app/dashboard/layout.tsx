"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useMemo, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/auth-context";
import { useSupabaseAuth } from "@/hooks/use-supabase-auth";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MarketingAILogo } from "@/components/icons";
import {
  Gauge,
  BarChart3,
  Megaphone,
  Settings,
  HelpCircle,
  Search,
  Rocket,
  LayoutGrid,
  Wand2,
  Mail,
  FolderKanban,
  GalleryVerticalEnd,
  User,
  CreditCard,
  ChevronRight,
  LogOut,
  Bell,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isLoading, isInitialized } = useAuth();
  const { signOut } = useSupabaseAuth();

  const { name, email, avatarUrl, initials } = useMemo(() => {
    const email = user?.email ?? "";
    const fullName = (user?.user_metadata?.full_name as string | undefined) || "";
    const name = fullName || (email ? email.split("@")[0] : "User");
    const avatarUrl = (user?.user_metadata?.avatar_url as string | undefined) || "/placeholder-avatar.jpg";
    const initials = (name || "U")
      .split(" ")
      .filter(Boolean)
      .map((s: string) => s[0]!.toUpperCase())
      .slice(0, 2)
      .join("");
    return { name, email, avatarUrl, initials };
  }, [user]);

  const handleSignOut = useCallback(async () => {
    try {
      const error = await signOut();
      if (error) {
        toast.error(error);
        return;
      }
      
      toast.success("Signed out");
      // Redirect immediately after successful sign out
      router.push("/login");
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out");
    }
  }, [router, signOut]);

  const isActive = (href: string) => pathname === href;

  // Function to get breadcrumb data based on current path
  const getBreadcrumbData = () => {
    const pathSegments = pathname.split('/').filter(Boolean);
    
    if (pathSegments.length === 1 && pathSegments[0] === 'dashboard') {
      return [
        { label: 'Dashboard', href: '/dashboard' }
      ];
    }
    
    if (pathSegments.length >= 2 && pathSegments[0] === 'dashboard') {
      const page = pathSegments[1];
              const breadcrumbMap: { [key: string]: string } = {
          'content': 'Content AI',
          'email': 'Email Marketing AI',
          'image': 'Image AI',
          'campaigns': 'Campaigns',
          'analytics': 'Analytics',
          'activity': 'Activity',
          'profile': 'Hồ sơ cá nhân',
          'billing': 'Quản lý thanh toán',
          'settings': 'Settings',
          'notifications': 'Thông báo',
          'help': 'Get Help',
          'search': 'Search',
        };
      
      const pageLabel = breadcrumbMap[page] || page.charAt(0).toUpperCase() + page.slice(1);
      
      return [
        { label: 'Dashboard', href: '/dashboard' },
        { label: pageLabel, href: pathname }
      ];
    }
    
    return [
      { label: 'Dashboard', href: '/dashboard' }
    ];
  };

  const breadcrumbs = getBreadcrumbData();

  // Use useEffect for redirects to avoid setState during render
  useEffect(() => {
    if (isInitialized && !isLoading && !user) {
      router.replace("/login");
    }
  }, [isInitialized, isLoading, user, router]);

  // Show loading state while auth is initializing
  if (!isInitialized || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render anything while redirecting
  if (!user) {
    return null;
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="offcanvas" side="left" className="bg-white text-black">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-2">
            <MarketingAILogo className="h-6 w-6" />
            <span className="font-semibold">Marketing AI</span>
          </div>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          {/* Tổng quan */}
          <SidebarGroup>
            <SidebarGroupLabel>Tổng quan</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link href="/dashboard/content" passHref>
                    <SidebarMenuButton asChild isActive={isActive("/dashboard/content")}>
                      <span className="inline-flex items-center gap-2">
                        <Rocket className="w-4 h-4" />
                        <span>Quick Create</span>
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard" passHref>
                    <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
                      <span className="inline-flex items-center gap-2">
                        <Gauge className="w-4 h-4" />
                        <span>Dashboard</span>
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/campaigns" passHref>
                    <SidebarMenuButton asChild isActive={isActive("/dashboard/campaigns")}>
                      <span className="inline-flex items-center gap-2">
                        <Megaphone className="w-4 h-4" />
                        <span>Campaigns</span>
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/analytics" passHref>
                    <SidebarMenuButton asChild isActive={isActive("/dashboard/analytics")}>
                      <span className="inline-flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" />
                        <span>Analytics</span>
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/activity" passHref>
                    <SidebarMenuButton asChild isActive={isActive("/dashboard/activity")}>
                      <span className="inline-flex items-center gap-2">
                        <FolderKanban className="w-4 h-4" />
                        <span>Activity</span>
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Công cụ AI */}
          <SidebarGroup>
            <SidebarGroupLabel>Công cụ AI</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link href="/dashboard/content" passHref>
                    <SidebarMenuButton asChild isActive={isActive("/dashboard/content")}>
                      <span className="inline-flex items-center gap-2">
                        <Wand2 className="w-4 h-4" />
                        <span>Content AI</span>
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/email" passHref>
                    <SidebarMenuButton asChild isActive={isActive("/dashboard/email")}>
                      <span className="inline-flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>Email Marketing AI</span>
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/image" passHref>
                    <SidebarMenuButton asChild isActive={isActive("/dashboard/image")}>
                      <span className="inline-flex items-center gap-2">
                        <GalleryVerticalEnd className="w-4 h-4" />
                        <span>Image AI</span>
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer actions */}
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/dashboard/profile" passHref>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/profile")}>
                  <span className="inline-flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Hồ sơ cá nhân</span>
                  </span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/billing" passHref>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/billing")}>
                  <span className="inline-flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <span>Quản lý thanh toán</span>
                  </span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/settings" passHref>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/settings")}>
                  <span className="inline-flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/help" passHref>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/help")}>
                  <span className="inline-flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    <span>Get Help</span>
                  </span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/search" passHref>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/search")}>
                  <span className="inline-flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    <span>Search</span>
                  </span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
          <div className="mt-2 flex items-center gap-2 px-2 py-1 text-xs text-gray-600">
            <div className="h-6 w-6 rounded-full bg-black overflow-hidden">
              {/* Decorative dot; avatar shown in topbar */}
            </div>
            <div>
              <div className="font-medium text-black truncate max-w-[140px]">{isLoading ? "Loading..." : name}</div>
              <div className="truncate max-w-[160px]">{isLoading ? "" : email}</div>
            </div>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="w-full">
        <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <SidebarTrigger />
              <LayoutGrid className="w-4 h-4 text-gray-600 hidden sm:block" />
              <div className="h-4 w-px bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
                {breadcrumbs.map((breadcrumb, index) => (
                  <div key={breadcrumb.href} className="flex items-center gap-1 sm:gap-2">
                    {index > 0 && (
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    )}
                    <Link
                      href={breadcrumb.href}
                      className={`text-xs sm:text-sm font-medium transition-colors hover:text-black truncate max-w-[120px] sm:max-w-none ${
                        index === breadcrumbs.length - 1 
                          ? 'text-black' 
                          : 'text-gray-600'
                      }`}
                    >
                      {breadcrumb.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 hover:opacity-80 transition-opacity rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shrink-0">
                  <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                    <AvatarImage src={avatarUrl} alt="User avatar" />
                    <AvatarFallback className="text-xs sm:text-sm">{initials}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none truncate">{name}</p>
                    <p className="text-xs leading-none text-muted-foreground truncate">{email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Hồ sơ cá nhân</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/billing" className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <span>Quản lý thanh toán</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings" className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/notifications" className="flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    <span>Thông báo</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 text-red-600 focus:text-red-600 cursor-pointer">
                  <LogOut className="w-4 h-4" />
                  <span>Đăng xuất</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}


