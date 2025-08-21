"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Loader2, DollarSign, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const campaignSchema = z.object({
  name: z.string().min(3, "Campaign name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  type: z.enum(["email", "social", "content", "ads", "other"]),
  status: z.enum(["draft", "active", "paused", "completed"]),
  budget: z.number().min(0, "Budget must be positive"),
  target_audience: z.string().min(1, "Please select target audience"),
  start_date: z.date(),
  end_date: z.date().optional(),
  goals: z.array(z.string()).min(1, "Please add at least one goal"),
  channels: z.array(z.string()).min(1, "Please select at least one channel"),
});

type CampaignFormData = z.infer<typeof campaignSchema>;

interface CampaignFormProps {
  onSubmit: (data: CampaignFormData) => Promise<void>;
  initialData?: Partial<CampaignFormData>;
  isLoading?: boolean;
}

const campaignTypes = [
  { value: "email", label: "Email Marketing", icon: "📧" },
  { value: "social", label: "Mạng xã hội", icon: "📱" },
  { value: "content", label: "Marketing nội dung", icon: "📝" },
  { value: "ads", label: "Quảng cáo kỹ thuật số", icon: "💰" },
  { value: "other", label: "Khác", icon: "🎯" },
];

const campaignStatuses = [
  { value: "draft", label: "Nháp", color: "bg-gray-100 text-gray-800" },
  { value: "active", label: "Đang chạy", color: "bg-green-100 text-green-800" },
  { value: "paused", label: "Tạm dừng", color: "bg-yellow-100 text-yellow-800" },
  { value: "completed", label: "Hoàn thành", color: "bg-blue-100 text-blue-800" },
];

const channels = [
  { value: "facebook", label: "Facebook", icon: "📘", color: "bg-blue-50 border-blue-200" },
  { value: "instagram", label: "Instagram", icon: "📷", color: "bg-pink-50 border-pink-200" },
  { value: "twitter", label: "Twitter", icon: "🐦", color: "bg-sky-50 border-sky-200" },
  { value: "linkedin", label: "LinkedIn", icon: "💼", color: "bg-blue-50 border-blue-200" },
  { value: "email", label: "Email", icon: "📧", color: "bg-purple-50 border-purple-200" },
  { value: "google_ads", label: "Google Ads", icon: "🔍", color: "bg-red-50 border-red-200" },
  { value: "youtube", label: "YouTube", icon: "📺", color: "bg-red-50 border-red-200" },
];

export function CampaignForm({ onSubmit, initialData, isLoading = false }: CampaignFormProps) {
  const [goals, setGoals] = useState<string[]>(initialData?.goals || []);
  const [newGoal, setNewGoal] = useState("");

  const form = useForm<CampaignFormData>({
    resolver: zodResolver(campaignSchema),
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      type: (initialData?.type as any) || "email",
      status: (initialData?.status as any) || "draft",
      budget: initialData?.budget || 0,
      target_audience: initialData?.target_audience || "",
      start_date: initialData?.start_date || new Date(),
      goals: initialData?.goals || [],
      channels: initialData?.channels || [],
    },
  });

  const handleAddGoal = () => {
    if (newGoal.trim() && !goals.includes(newGoal.trim())) {
      const updatedGoals = [...goals, newGoal.trim()];
      setGoals(updatedGoals);
      form.setValue("goals", updatedGoals);
      setNewGoal("");
    }
  };

  const handleRemoveGoal = (goalToRemove: string) => {
    const updatedGoals = goals.filter(goal => goal !== goalToRemove);
    setGoals(updatedGoals);
    form.setValue("goals", updatedGoals);
  };

  const handleSubmit = async (data: CampaignFormData) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Campaign creation failed:", error);
    }
  };

  return (
    <div className="w-full max-w-none mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 sm:space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm sm:text-base font-semibold text-gray-900">Tên Chiến dịch *</FormLabel>
                  <FormControl>
                    <Input placeholder="Khuyến mãi mùa hè 2024" {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm sm:text-base font-semibold text-gray-900">Loại Chiến dịch *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Chọn loại chiến dịch" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {campaignTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <span className="flex items-center gap-2">
                            <span>{type.icon}</span>
                            <span className="text-sm sm:text-base">{type.label}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm sm:text-base font-semibold text-gray-900">Mô tả *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Mô tả mục tiêu chiến dịch, đối tượng mục tiêu và thông điệp chính..."
                    className="min-h-[100px] sm:min-h-[120px] w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Status and Budget */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm sm:text-base font-semibold text-gray-900">Trạng thái *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Chọn trạng thái" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {campaignStatuses.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status.color}`}>
                            {status.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm sm:text-base font-semibold text-gray-900">Ngân sách (USD) *</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        type="number"
                        placeholder="1000"
                        className="pl-10 w-full"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <FormField
              control={form.control}
              name="start_date"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel className="text-sm sm:text-base font-semibold text-gray-900">Ngày Bắt đầu *</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal text-sm sm:text-base",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Chọn ngày</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date: Date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="end_date"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel className="text-sm sm:text-base font-semibold text-gray-900">Ngày Kết thúc (Tùy chọn)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal text-sm sm:text-base",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Chọn ngày</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date: Date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Target Audience */}
          <FormField
            control={form.control}
            name="target_audience"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm sm:text-base font-semibold text-gray-900">Đối tượng Mục tiêu *</FormLabel>
                <FormControl>
                  <Input placeholder="VD: Chuyên gia trẻ tuổi 25-35, quan tâm đến công nghệ" {...field} className="w-full" />
                </FormControl>
                <FormDescription className="text-xs sm:text-sm text-gray-600">
                  Mô tả khách hàng lý tưởng của bạn
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Goals */}
          <div className="w-full">
            <FormLabel className="text-sm sm:text-base font-semibold text-gray-900">Mục tiêu Chiến dịch *</FormLabel>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Input
                  placeholder="Thêm mục tiêu (VD: Tăng nhận diện thương hiệu)"
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddGoal())}
                  className="flex-1"
                />
                <Button type="button" onClick={handleAddGoal} variant="outline" className="px-4 whitespace-nowrap">
                  Thêm
                </Button>
              </div>
              {goals.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {goals.map((goal, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      <span>{goal}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveGoal(goal)}
                        className="text-blue-600 hover:text-blue-800 ml-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {form.formState.errors.goals && (
                <p className="text-sm text-red-600">{form.formState.errors.goals.message}</p>
              )}
            </div>
          </div>

          {/* Channels */}
          <div className="w-full">
            <FormLabel className="text-sm sm:text-base font-semibold text-gray-900">Kênh Marketing *</FormLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mt-3">
              {channels.map((channel) => (
                <FormField
                  key={channel.value}
                  control={form.control}
                  name="channels"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className={cn(
                          "flex items-center space-x-3 p-3 sm:p-4 border rounded-lg transition-all duration-200 cursor-pointer min-w-0",
                          field.value?.includes(channel.value) 
                            ? "border-blue-300 bg-blue-50 shadow-sm" 
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        )}>
                          <input
                            type="checkbox"
                            id={channel.value}
                            checked={field.value?.includes(channel.value)}
                            onChange={(e) => {
                              const checked = e.target.checked;
                              const currentChannels = field.value || [];
                              if (checked) {
                                field.onChange([...currentChannels, channel.value]);
                              } else {
                                field.onChange(currentChannels.filter(c => c !== channel.value));
                              }
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 flex-shrink-0"
                          />
                          <label htmlFor={channel.value} className="text-sm font-medium leading-none cursor-pointer flex items-center gap-2 flex-1 min-w-0">
                            <span className="text-base sm:text-lg flex-shrink-0">{channel.icon}</span>
                            <span className="truncate text-xs sm:text-sm">{channel.label}</span>
                          </label>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            {form.formState.errors.channels && (
              <p className="text-sm text-red-600 mt-2">{form.formState.errors.channels.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 w-full pt-4 sm:pt-6 border-t border-gray-200">
            <Button type="button" variant="outline" className="px-4 sm:px-6 py-2 w-full sm:w-auto">
              Lưu Nháp
            </Button>
            <Button type="submit" disabled={isLoading} className="px-4 sm:px-6 py-2 bg-black hover:bg-gray-800 w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Đang tạo...
                </>
              ) : (
                "Tạo Chiến dịch"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
