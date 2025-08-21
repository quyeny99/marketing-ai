"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Filter,
  MoreHorizontal,
  Plus,
  Target,
  BarChart3,
  Users,
  Calendar,
  DollarSign,
  Play,
  Pause,
  Square,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import { format } from "date-fns";
import type { Campaign } from "@/types/database";

interface CampaignListProps {
  campaigns: Campaign[];
  onEdit?: (campaign: Campaign) => void;
  onDelete?: (campaignId: string) => void;
  onView?: (campaign: Campaign) => void;
  onCreateNew?: () => void;
}

const statusColors = {
  draft: "bg-gray-100 text-gray-800",
  active: "bg-green-100 text-green-800",
  paused: "bg-yellow-100 text-yellow-800",
  completed: "bg-blue-100 text-blue-800",
};

const statusLabels = {
  draft: "Nháp",
  active: "Đang chạy",
  paused: "Tạm dừng",
  completed: "Hoàn thành",
};

const typeIcons = {
  email: "📧",
  social: "📱",
  content: "📝",
  ads: "💰",
  other: "🎯",
};

export function CampaignList({
  campaigns,
  onEdit,
  onDelete,
  onView,
  onCreateNew,
}: CampaignListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("created_at");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Filter and sort campaigns
  const filteredAndSortedCampaigns = useMemo(() => {
    let filtered = campaigns.filter((campaign) => {
      const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           campaign.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "all" || campaign.status === statusFilter;
      const matchesType = typeFilter === "all" || campaign.type === typeFilter;
      
      return matchesSearch && matchesStatus && matchesType;
    });

    // Sort campaigns
    filtered.sort((a, b) => {
      let aValue: any = a[sortBy as keyof Campaign];
      let bValue: any = b[sortBy as keyof Campaign];

      // Handle date sorting
      if (sortBy === "created_at" || sortBy === "start_date") {
        aValue = new Date(aValue || 0).getTime();
        bValue = new Date(bValue || 0).getTime();
      }

      // Handle number sorting
      if (sortBy === "budget") {
        aValue = Number(aValue) || 0;
        bValue = Number(bValue) || 0;
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [campaigns, searchTerm, statusFilter, typeFilter, sortBy, sortOrder]);

  const handleStatusChange = (campaignId: string, newStatus: string) => {
    // This would typically call an API to update the campaign status
    console.log(`Updating campaign ${campaignId} status to ${newStatus}`);
  };

  const getStatusActions = (campaign: Campaign) => {
    switch (campaign.status) {
      case "draft":
        return (
          <DropdownMenuItem onClick={() => handleStatusChange(campaign.id, "active")}>
            <Play className="mr-2 h-4 w-4" />
            Kích hoạt
          </DropdownMenuItem>
        );
      case "active":
        return (
          <DropdownMenuItem onClick={() => handleStatusChange(campaign.id, "paused")}>
            <Pause className="mr-2 h-4 w-4" />
            Tạm dừng
          </DropdownMenuItem>
        );
      case "paused":
        return (
          <DropdownMenuItem onClick={() => handleStatusChange(campaign.id, "active")}>
            <Play className="mr-2 h-4 w-4" />
            Tiếp tục
          </DropdownMenuItem>
        );
      default:
        return null;
    }
  };

  const formatBudget = (budget: number | null) => {
    if (!budget) return "Chưa thiết lập";
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "USD",
    }).format(budget);
  };

  const formatDate = (date: string | null) => {
    if (!date) return "Chưa thiết lập";
    return format(new Date(date), "dd/MM/yyyy");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Chiến dịch</h2>
          <p className="text-gray-600">
            Quản lý và theo dõi các chiến dịch marketing của bạn
          </p>
        </div>
        <Button onClick={onCreateNew} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Tạo Chiến dịch
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Bộ lọc & Tìm kiếm
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Tìm kiếm chiến dịch..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tất cả Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả Trạng thái</SelectItem>
                <SelectItem value="draft">Nháp</SelectItem>
                <SelectItem value="active">Đang chạy</SelectItem>
                <SelectItem value="paused">Tạm dừng</SelectItem>
                <SelectItem value="completed">Hoàn thành</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tất cả Loại" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả Loại</SelectItem>
                <SelectItem value="email">Email Marketing</SelectItem>
                <SelectItem value="social">Mạng xã hội</SelectItem>
                <SelectItem value="content">Marketing nội dung</SelectItem>
                <SelectItem value="ads">Quảng cáo kỹ thuật số</SelectItem>
                <SelectItem value="other">Khác</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sắp xếp theo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="created_at">Ngày tạo</SelectItem>
                <SelectItem value="name">Tên</SelectItem>
                <SelectItem value="budget">Ngân sách</SelectItem>
                <SelectItem value="start_date">Ngày bắt đầu</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort Order Toggle */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-600">Thứ tự sắp xếp:</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? "↑ Tăng dần" : "↓ Giảm dần"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Campaigns Table */}
      <Card>
        <CardHeader>
          <CardTitle>Chiến dịch ({filteredAndSortedCampaigns.length})</CardTitle>
          <CardDescription>
            Hiển thị {filteredAndSortedCampaigns.length} trong tổng số {campaigns.length} chiến dịch
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredAndSortedCampaigns.length === 0 ? (
            <div className="text-center py-12">
              <Target className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy chiến dịch</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || statusFilter !== "all" || typeFilter !== "all"
                  ? "Hãy điều chỉnh bộ lọc hoặc từ khóa tìm kiếm"
                  : "Bắt đầu bằng cách tạo chiến dịch đầu tiên"}
              </p>
              {!searchTerm && statusFilter === "all" && typeFilter === "all" && (
                <Button onClick={onCreateNew}>
                  <Plus className="w-4 h-4 mr-2" />
                  Tạo Chiến dịch
                </Button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Chiến dịch</TableHead>
                    <TableHead>Loại</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Ngân sách</TableHead>
                    <TableHead>Ngày bắt đầu</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAndSortedCampaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Target className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{campaign.name}</div>
                            <div className="text-sm text-gray-500 line-clamp-2">
                              {campaign.description}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>{typeIcons[campaign.type as keyof typeof typeIcons]}</span>
                          <span className="capitalize">{campaign.type}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={statusColors[campaign.status as keyof typeof statusColors]}>
                          {statusLabels[campaign.status as keyof typeof statusLabels]}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4 text-gray-400" />
                          {formatBudget(campaign.budget)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          {formatDate(campaign.start_date)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Thao tác</DropdownMenuLabel>
                            {onView && (
                              <DropdownMenuItem onClick={() => onView(campaign)}>
                                <Eye className="mr-2 h-4 w-4" />
                                Xem chi tiết
                              </DropdownMenuItem>
                            )}
                            {onEdit && (
                              <DropdownMenuItem onClick={() => onEdit(campaign)}>
                                <Edit className="mr-2 h-4 w-4" />
                                Chỉnh sửa
                              </DropdownMenuItem>
                            )}
                            {getStatusActions(campaign)}
                            <DropdownMenuSeparator />
                            {onDelete && (
                              <DropdownMenuItem
                                onClick={() => onDelete(campaign.id)}
                                className="text-red-600"
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Xóa
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
