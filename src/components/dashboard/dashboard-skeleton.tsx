import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Stats Grid Skeleton
export function StatsGridSkeleton() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} className="bg-white border-gray-200">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <Skeleton className="h-3 w-20 mb-2" />
                <Skeleton className="h-8 w-16" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Recent Campaigns Skeleton
export function RecentCampaignsSkeleton() {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader className="p-4 sm:p-6">
        <Skeleton className="h-6 w-40 mb-2" />
        <Skeleton className="h-4 w-64" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <div className="text-right">
                <Skeleton className="h-5 w-20 mb-2" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Quick Actions Skeleton
export function QuickActionsSkeleton() {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <Skeleton className="h-6 w-32 mb-2" />
        <Skeleton className="h-4 w-48" />
      </CardHeader>
      <CardContent className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-full" />
        ))}
      </CardContent>
    </Card>
  );
}

// AI Insights Skeleton
export function AIInsightsSkeleton() {
  return (
    <Card className="bg-white border-gray-200 mt-6">
      <CardHeader>
        <Skeleton className="h-6 w-28 mb-2" />
        <Skeleton className="h-4 w-40" />
      </CardHeader>
      <CardContent className="space-y-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="p-4 bg-gray-50 rounded-lg">
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-24 mt-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Full Dashboard Skeleton
export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header Skeleton */}
        <div className="mb-6 sm:mb-8">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-5 w-80" />
        </div>

        {/* Stats Grid Skeleton */}
        <StatsGridSkeleton />

        {/* Main Content Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Recent Campaigns Skeleton */}
          <div className="lg:col-span-2">
            <RecentCampaignsSkeleton />
          </div>

          {/* Right Sidebar Skeleton */}
          <div>
            <QuickActionsSkeleton />
            <AIInsightsSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
