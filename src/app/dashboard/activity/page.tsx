"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type Activity = {
  id: string;
  type: "content" | "email" | "image" | "analytics" | "campaign";
  title: string;
  timestamp: string;
  detail: string;
};

const seed: Activity[] = [
  { id: "a1", type: "content", title: "Sinh bài viết blog", timestamp: "2024-06-10 14:21", detail: "Tạo outline 5 mục cho chủ đề Summer Sale" },
  { id: "a2", type: "email", title: "Gửi email demo", timestamp: "2024-06-10 14:25", detail: "To: customer@example.com • delivered" },
  { id: "a3", type: "image", title: "Tạo banner AI", timestamp: "2024-06-11 09:02", detail: "Prompt: banner tối giản, chủ đề giảm giá" },
  { id: "a4", type: "analytics", title: "Xem báo cáo", timestamp: "2024-06-12 11:40", detail: "Top 3 chiến dịch hiệu suất cao" },
  { id: "a5", type: "campaign", title: "Tạo chiến dịch", timestamp: "2024-06-12 12:05", detail: "Summer Sale 2024" },
];

export default function ActivityHistoryPage() {
  const [query, setQuery] = useState("");
  const activities = useMemo(() => {
    if (!query) return seed;
    const q = query.toLowerCase();
    return seed.filter((a) => a.title.toLowerCase().includes(q) || a.detail.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">Lịch sử hoạt động</h1>
          <p className="text-gray-600 mt-1">Lưu kết quả AI đã tạo (demo)</p>
        </div>

        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-black">Hoạt động gần đây</CardTitle>
            <CardDescription>Tìm kiếm theo tiêu đề hoặc mô tả</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4"><Input placeholder="Tìm kiếm hoạt động..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full" /></div>
            <ScrollArea className="h-[560px]">
              <div className="divide-y">
                {activities.map((a) => (
                  <div key={a.id} className="p-4 hover:bg-gray-50/60">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-black">{a.title}</div>
                        <div className="text-sm text-gray-600">{a.detail}</div>
                      </div>
                      <div className="text-xs text-gray-500">{a.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


