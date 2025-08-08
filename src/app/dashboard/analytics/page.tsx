import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">Phân tích & báo cáo</h1>
          <p className="text-gray-600 mt-1">Hiệu suất chiến dịch (demo UI)</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Tổng reach</CardTitle>
              <CardDescription>30 ngày gần nhất</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-black">2.4M</div>
              <div className="text-green-600 text-sm mt-1">+12% so với kỳ trước</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">CTR trung bình</CardTitle>
              <CardDescription>Click-through rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-black">3.8%</div>
              <div className="text-green-600 text-sm mt-1">+0.4 điểm</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Chuyển đổi</CardTitle>
              <CardDescription>Conversion rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-black">3.2%</div>
              <div className="text-red-600 text-sm mt-1">-0.2 điểm</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Xu hướng theo thời gian</CardTitle>
              <CardDescription>Biểu đồ (placeholder)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-56 rounded border border-dashed border-gray-300 grid place-items-center text-gray-500">
                Chart placeholder
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Top chiến dịch</CardTitle>
              <CardDescription>Hiệu suất cao nhất</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Summer Sale 2024", reach: "1.1M", growth: "+15%" },
                  { name: "Product Launch Q3", reach: "860K", growth: "+8%" },
                  { name: "Brand Awareness", reach: "740K", growth: "+6%" },
                ].map((c) => (
                  <div key={c.name} className="p-3 border border-gray-200 rounded-md">
                    <div className="font-medium text-black">{c.name}</div>
                    <div className="text-sm text-gray-600">Reach: {c.reach} • {c.growth}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <Separator className="my-8" />
        <div className="text-sm text-gray-600">Gợi ý: có thể tích hợp biểu đồ thật (Recharts, Visx, ECharts) và dữ liệu từ API.</div>
      </div>
    </div>
  );
}


