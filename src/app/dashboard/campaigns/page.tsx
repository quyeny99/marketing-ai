"use client";

import { useMemo, useState } from "react";
import { type DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { DateRangePicker } from "@/components/ui/date-range-picker";

import { AuroraText } from "@/components/magicui/aurora-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { ChartIcon, UsersIcon, ZapIcon } from "@/components/icons";

type CampaignStatus = "draft" | "active" | "paused" | "completed";

interface Campaign {
  id: string;
  name: string;
  objective: string;
  channel: "Email" | "Ads" | "Social" | "SMS";
  budget: number; // USD
  startDate: string; // yyyy-mm-dd
  endDate: string; // yyyy-mm-dd
  status: CampaignStatus;
  progressPercent: number; // 0-100
}

const initialCampaigns: Campaign[] = [
  {
    id: "cmp_001",
    name: "Summer Sale 2024",
    objective: "Conversions",
    channel: "Email",
    budget: 5000,
    startDate: "2024-06-01",
    endDate: "2024-06-30",
    status: "active",
    progressPercent: 62,
  },
  {
    id: "cmp_002",
    name: "Product Launch Q3",
    objective: "Awareness",
    channel: "Social",
    budget: 12000,
    startDate: "2024-07-10",
    endDate: "2024-09-10",
    status: "paused",
    progressPercent: 35,
  },
  {
    id: "cmp_003",
    name: "Back-to-School Deals",
    objective: "Traffic",
    channel: "Ads",
    budget: 8000,
    startDate: "2024-08-01",
    endDate: "2024-08-31",
    status: "draft",
    progressPercent: 0,
  },
  {
    id: "cmp_004",
    name: "Holiday Promo",
    objective: "Revenue",
    channel: "SMS",
    budget: 3000,
    startDate: "2023-12-01",
    endDate: "2023-12-31",
    status: "completed",
    progressPercent: 100,
  },
];

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | CampaignStatus>("all");
  const [channelFilter, setChannelFilter] = useState<"all" | Campaign["channel"]>("all");

  // Create campaign dialog state
  const [isOpen, setIsOpen] = useState(false);
  const [newCampaign, setNewCampaign] = useState<Omit<Campaign, "id" | "progressPercent" | "status"> & { status?: CampaignStatus; progressPercent?: number }>(
    {
      name: "",
      objective: "",
      channel: "Email",
      budget: 0,
      startDate: "",
      endDate: "",
    }
  );
  const [newStatus, setNewStatus] = useState<CampaignStatus>("draft");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const filteredCampaigns = useMemo(() => {
    return campaigns.filter((c) => {
      const matchesQuery = !query
        ? true
        : c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.objective.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === "all" ? true : c.status === statusFilter;
      const matchesChannel = channelFilter === "all" ? true : c.channel === channelFilter;
      return matchesQuery && matchesStatus && matchesChannel;
    });
  }, [campaigns, query, statusFilter, channelFilter]);

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);
  }

  function statusBadgeClasses(status: CampaignStatus): string {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-200";
      case "paused":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "draft":
        return "bg-gray-100 text-gray-700 border-gray-200";
      case "completed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  }

  function handleCreateCampaign() {
    if (!newCampaign.name || !newCampaign.startDate || !newCampaign.endDate) return;
    const created: Campaign = {
      id: `cmp_${Math.random().toString(36).slice(2, 8)}`,
      name: newCampaign.name,
      objective: newCampaign.objective || "",
      channel: newCampaign.channel,
      budget: Number(newCampaign.budget) || 0,
      startDate: newCampaign.startDate,
      endDate: newCampaign.endDate,
      status: newStatus,
      progressPercent: newStatus === "draft" ? 0 : newStatus === "completed" ? 100 : 5,
    };
    setCampaigns((prev) => [created, ...prev]);
    setIsOpen(false);
    setNewCampaign({ name: "", objective: "", channel: "Email", budget: 0, startDate: "", endDate: "" });
    setNewStatus("draft");
    setDateRange(undefined);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              Quản lý <AuroraText className="inline">chiến dịch</AuroraText>
            </h2>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Tạo & theo dõi chiến dịch của bạn, sử dụng AI để tối ưu hiệu quả.</p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <ShinyButton className="bg-white border-black text-black hover:shadow-lg w-full sm:w-auto">
                  <span className="hidden sm:inline">Tạo chiến dịch</span>
                  <span className="sm:hidden">Tạo</span>
                </ShinyButton>
              </DialogTrigger>
              <DialogContent className="w-[95vw] max-w-xl mx-auto">
                <DialogHeader>
                  <DialogTitle>Tạo chiến dịch mới</DialogTitle>
                  <DialogDescription>Nhập thông tin cơ bản để khởi tạo chiến dịch.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Tên chiến dịch</Label>
                      <Input id="name" placeholder="VD: Summer Sale" value={newCampaign.name} onChange={(e) => setNewCampaign((s) => ({ ...s, name: e.target.value }))} className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="objective">Mục tiêu</Label>
                      <Input id="objective" placeholder="VD: Conversions" value={newCampaign.objective} onChange={(e) => setNewCampaign((s) => ({ ...s, objective: e.target.value }))} className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Label>Kênh</Label>
                      <Select value={newCampaign.channel} onValueChange={(v) => setNewCampaign((s) => ({ ...s, channel: v as Campaign["channel"] }))}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Chọn kênh" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Email">Email</SelectItem>
                          <SelectItem value="Ads">Ads</SelectItem>
                          <SelectItem value="Social">Social</SelectItem>
                          <SelectItem value="SMS">SMS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Ngân sách (USD)</Label>
                      <Input id="budget" type="number" min={0} value={String(newCampaign.budget)} onChange={(e) => setNewCampaign((s) => ({ ...s, budget: Number(e.target.value) }))} className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Label>Trạng thái</Label>
                      <Select value={newStatus} onValueChange={(v) => setNewStatus(v as CampaignStatus)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Chọn trạng thái" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Nháp</SelectItem>
                          <SelectItem value="active">Đang chạy</SelectItem>
                          <SelectItem value="paused">Tạm dừng</SelectItem>
                          <SelectItem value="completed">Hoàn tất</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Thời gian chiến dịch</Label>
                    <DateRangePicker
                      dateRange={dateRange}
                      onDateRangeChange={(range) => {
                        setDateRange(range);
                        if (range?.from) {
                          setNewCampaign((s) => ({ 
                            ...s, 
                            startDate: range.from!.toISOString().split('T')[0] 
                          }));
                        }
                        if (range?.to) {
                          setNewCampaign((s) => ({ 
                            ...s, 
                            endDate: range.to!.toISOString().split('T')[0] 
                          }));
                        }
                      }}
                      placeholder="Chọn ngày bắt đầu và kết thúc"
                      className="w-full"
                    />
                  </div>
                </div>
                <DialogFooter className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-0">
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full sm:w-auto" onClick={() => setIsOpen(false)}>
                    Hủy
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto" onClick={handleCreateCampaign}>
                    Tạo
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Filters */}
        <Card className="bg-white border-gray-200 mb-4 sm:mb-6">
          <CardContent className="p-3 sm:p-4">
            <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
              <div className="flex-1 lg:max-w-none">
                <Input placeholder="Tìm kiếm chiến dịch..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <div className="w-full sm:w-[180px] lg:w-[200px]">
                  <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as typeof statusFilter)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="active">Đang chạy</SelectItem>
                      <SelectItem value="paused">Tạm dừng</SelectItem>
                      <SelectItem value="draft">Nháp</SelectItem>
                      <SelectItem value="completed">Hoàn tất</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full sm:w-[160px] lg:w-[180px]">
                  <Select value={channelFilter} onValueChange={(v) => setChannelFilter(v as typeof channelFilter)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Kênh" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả kênh</SelectItem>
                      <SelectItem value="Email">Email</SelectItem>
                      <SelectItem value="Ads">Ads</SelectItem>
                      <SelectItem value="Social">Social</SelectItem>
                      <SelectItem value="SMS">SMS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* List */}
          <Card className="bg-white border-gray-200 lg:col-span-2">
            <CardHeader className="p-3 sm:p-6">
              <CardTitle className="text-lg sm:text-xl font-bold text-black">Danh sách chiến dịch</CardTitle>
              <CardDescription className="text-gray-600 text-sm sm:text-base">{filteredCampaigns.length} chiến dịch được tìm thấy</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[400px] sm:h-[500px] lg:h-[580px]">
                <div className="divide-y">
                  {filteredCampaigns.map((c) => (
                    <div key={c.id} className="p-3 sm:p-4 hover:bg-gray-50/60 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-black truncate text-sm sm:text-base max-w-[200px] sm:max-w-[300px] lg:max-w-[480px]">{c.name}</h3>
                            <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${statusBadgeClasses(c.status)}`}>
                              {c.status === "active" && <span className="size-1.5 rounded-full bg-green-600" />}
                              {c.status === "paused" && <span className="size-1.5 rounded-full bg-yellow-600" />}
                              {c.status === "draft" && <span className="size-1.5 rounded-full bg-gray-600" />}
                              {c.status === "completed" && <span className="size-1.5 rounded-full bg-blue-600" />}
                              {c.status}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">
                            <span className="block sm:inline">Mục tiêu: {c.objective || "—"}</span>
                            <span className="hidden sm:inline"> • </span>
                            <span className="block sm:inline">Kênh: {c.channel}</span>
                            <span className="hidden sm:inline"> • </span>
                            <span className="block sm:inline">Ngân sách: {formatCurrency(c.budget)}</span>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{c.startDate} → {c.endDate}</p>
                          <div className="mt-2 sm:mt-3">
                            <div className="h-2 w-full rounded bg-gray-100">
                              <div className="h-2 rounded bg-black" style={{ width: `${c.progressPercent}%` }} />
                            </div>
                            <div className="mt-1 text-xs text-gray-600">Tiến độ: {c.progressPercent}%</div>
                          </div>
                        </div>
                        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0 w-full sm:w-auto">
                          <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white h-8 px-2 sm:px-3 text-xs sm:text-sm flex-1 sm:flex-none">
                            <span className="hidden sm:inline">Chỉnh sửa</span>
                            <span className="sm:hidden">Sửa</span>
                          </Button>
                          <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white h-8 px-2 sm:px-3 text-xs sm:text-sm flex-1 sm:flex-none">
                            <span className="hidden sm:inline">Báo cáo</span>
                            <span className="sm:hidden">BC</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Tracking / Insights */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-white border-gray-200">
              <CardHeader className="p-3 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-black">Theo dõi tổng quan</CardTitle>
                <CardDescription className="text-gray-600 text-sm sm:text-base">Chỉ số hiệu suất chính (KPI)</CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-3 sm:p-4 rounded-lg border border-gray-200 text-center sm:text-left">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-900 flex items-center justify-center mb-2 sm:mb-3 mx-auto sm:mx-0">
                      <ZapIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-black">8</div>
                    <div className="text-xs sm:text-sm text-gray-600">Đang chạy</div>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg border border-gray-200 text-center sm:text-left">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 flex items-center justify-center mb-2 sm:mb-3 mx-auto sm:mx-0">
                      <ChartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-black">3.2%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Tỉ lệ chuyển đổi</div>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg border border-gray-200 text-center sm:text-left">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-500 flex items-center justify-center mb-2 sm:mb-3 mx-auto sm:mx-0">
                      <UsersIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-black">2.4M</div>
                    <div className="text-xs sm:text-sm text-gray-600">Tổng reach</div>
                  </div>
                </div>
                <Separator className="my-4 sm:my-6" />
                <div>
                  <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Dự báo AI</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Hệ thống dự báo tăng trưởng <span className="font-medium text-black">+12% reach</span> nếu tăng ngân sách cho kênh Social thêm
                    <span className="font-medium text-black"> 10%</span> trong 7 ngày tới.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-gray-50 border-gray-200">
              <CardHeader className="p-3 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-black">Tăng tốc với Magic UI</CardTitle>
                <CardDescription className="text-gray-600 text-sm sm:text-base">Sử dụng hiệu ứng trực quan để thu hút người dùng</CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-black font-semibold text-sm sm:text-base">Aurora highlight</div>
                    <p className="text-xs sm:text-sm text-gray-600">Dùng <span className="font-medium text-black">AuroraText</span> & <span className="font-medium text-black">ShinyButton</span>.</p>
                  </div>
                  <ShinyButton className="bg-white border-black text-black hover:shadow-lg w-full sm:w-auto text-sm">
                    Xem demo
                  </ShinyButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


