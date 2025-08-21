"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  MousePointer,
  DollarSign,
  Calendar,
  Target,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
} from "lucide-react";
import type { Campaign, CampaignMetric } from "@/types/database";

interface CampaignAnalyticsProps {
  campaigns: Campaign[];
  metrics: CampaignMetric[];
  selectedCampaignId?: string;
  onCampaignSelect?: (campaignId: string) => void;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const timeRanges = [
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
  { value: "1y", label: "Last year" },
];

export function CampaignAnalytics({
  campaigns,
  metrics,
  selectedCampaignId,
  onCampaignSelect,
}: CampaignAnalyticsProps) {
  const [timeRange, setTimeRange] = useState("30d");
  const [chartType, setChartType] = useState<"bar" | "line" | "area" | "pie">("bar");

  // Filter metrics by selected campaign and time range
  const filteredMetrics = useMemo(() => {
    let filtered = metrics;
    
    if (selectedCampaignId) {
      filtered = filtered.filter(m => m.campaign_id === selectedCampaignId);
    }
    
    // Filter by time range (simplified - in real app, you'd filter by actual dates)
    const daysAgo = parseInt(timeRange.replace("d", "")) || 30;
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysAgo);
    
    filtered = filtered.filter(m => {
      if (!m.created_at) return false;
      return new Date(m.created_at) >= cutoffDate;
    });
    
    return filtered;
  }, [metrics, selectedCampaignId, timeRange]);

  // Aggregate metrics by date
  const aggregatedData = useMemo(() => {
    const dataMap = new Map<string, {
      date: string;
      impressions: number;
      clicks: number;
      conversions: number;
      spend: number;
      revenue: number;
    }>();

    filteredMetrics.forEach(metric => {
      const date = new Date(metric.created_at || "").toLocaleDateString();
      const existing = dataMap.get(date) || {
        date,
        impressions: 0,
        clicks: 0,
        conversions: 0,
        spend: 0,
        revenue: 0,
      };

      existing.impressions += metric.impressions || 0;
      existing.clicks += metric.clicks || 0;
      existing.conversions += metric.conversions || 0;
      existing.spend += metric.spend || 0;
      existing.revenue += metric.revenue || 0;

      dataMap.set(date, existing);
    });

    return Array.from(dataMap.values()).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [filteredMetrics]);

  // Calculate KPIs
  const kpis = useMemo(() => {
    if (aggregatedData.length === 0) return null;

    const totalImpressions = aggregatedData.reduce((sum, d) => sum + d.impressions, 0);
    const totalClicks = aggregatedData.reduce((sum, d) => sum + d.clicks, 0);
    const totalConversions = aggregatedData.reduce((sum, d) => sum + d.conversions, 0);
    const totalSpend = aggregatedData.reduce((sum, d) => sum + d.spend, 0);
    const totalRevenue = aggregatedData.reduce((sum, d) => sum + d.revenue, 0);

    const ctr = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
    const conversionRate = totalClicks > 0 ? (totalConversions / totalClicks) * 100 : 0;
    const roas = totalSpend > 0 ? totalRevenue / totalSpend : 0;
    const cpa = totalConversions > 0 ? totalSpend / totalConversions : 0;

    return {
      impressions: totalImpressions,
      clicks: totalClicks,
      conversions: totalConversions,
      spend: totalSpend,
      revenue: totalRevenue,
      ctr,
      conversionRate,
      roas,
      cpa,
    };
  }, [aggregatedData]);

  // Campaign performance comparison
  const campaignPerformance = useMemo(() => {
    const campaignMap = new Map<string, {
      name: string;
      impressions: number;
      clicks: number;
      conversions: number;
      spend: number;
      revenue: number;
    }>();

    metrics.forEach(metric => {
      if (!metric.campaign_id) return;
      
      const campaign = campaigns.find(c => c.id === metric.campaign_id);
      if (!campaign) return;

      const existing = campaignMap.get(metric.campaign_id) || {
        name: campaign.name,
        impressions: 0,
        clicks: 0,
        conversions: 0,
        spend: 0,
        revenue: 0,
      };

      existing.impressions += metric.impressions || 0;
      existing.clicks += metric.clicks || 0;
      existing.conversions += metric.conversions || 0;
      existing.spend += metric.spend || 0;
      existing.revenue += metric.revenue || 0;

      campaignMap.set(metric.campaign_id, existing);
    });

    return Array.from(campaignMap.values())
      .map(campaign => ({
        ...campaign,
        ctr: campaign.impressions > 0 ? (campaign.clicks / campaign.impressions) * 100 : 0,
        conversionRate: campaign.clicks > 0 ? (campaign.conversions / campaign.clicks) * 100 : 0,
        roas: campaign.spend > 0 ? campaign.revenue / campaign.spend : 0,
      }))
      .sort((a, b) => b.revenue - a.revenue);
  }, [campaigns, metrics]);

  const renderChart = () => {
    if (aggregatedData.length === 0) {
      return (
        <div className="text-center py-12">
          <BarChart3 className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500">No data available for the selected time range</p>
        </div>
      );
    }

    const commonProps = {
      data: aggregatedData,
      margin: { top: 5, right: 30, left: 20, bottom: 5 },
    };

    switch (chartType) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart {...commonProps}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="impressions" stroke="#8884d8" name="Impressions" />
              <Line type="monotone" dataKey="clicks" stroke="#82ca9d" name="Clicks" />
              <Line type="monotone" dataKey="conversions" stroke="#ffc658" name="Conversions" />
            </LineChart>
          </ResponsiveContainer>
        );

      case "area":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart {...commonProps}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="impressions" stackId="1" stroke="#8884d8" fill="#8884d8" name="Impressions" />
              <Area type="monotone" dataKey="clicks" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Clicks" />
              <Area type="monotone" dataKey="conversions" stackId="1" stroke="#ffc658" fill="#ffc658" name="Conversions" />
            </AreaChart>
          </ResponsiveContainer>
        );

      case "pie":
        const pieData = [
          { name: "Impressions", value: kpis?.impressions || 0 },
          { name: "Clicks", value: kpis?.clicks || 0 },
          { name: "Conversions", value: kpis?.conversions || 0 },
        ];
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );

      default: // bar chart
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart {...commonProps}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="impressions" fill="#8884d8" name="Impressions" />
              <Bar dataKey="clicks" fill="#82ca9d" name="Clicks" />
              <Bar dataKey="conversions" fill="#ffc658" name="Conversions" />
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Campaign Analytics</h2>
          <p className="text-gray-600">
            Track performance and optimize your marketing campaigns
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {timeRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Campaign Selector */}
      {campaigns.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Select Campaign</CardTitle>
            <CardDescription>
              Choose a specific campaign to analyze or view all campaigns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={!selectedCampaignId ? "default" : "outline"}
                onClick={() => onCampaignSelect?.("")}
                size="sm"
              >
                All Campaigns
              </Button>
              {campaigns.map((campaign) => (
                <Button
                  key={campaign.id}
                  variant={selectedCampaignId === campaign.id ? "default" : "outline"}
                  onClick={() => onCampaignSelect?.(campaign.id)}
                  size="sm"
                >
                  {campaign.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* KPI Cards */}
      {kpis && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Impressions</p>
                  <p className="text-2xl font-bold">{kpis.impressions.toLocaleString()}</p>
                </div>
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Clicks</p>
                  <p className="text-2xl font-bold">{kpis.clicks.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">CTR: {kpis.ctr.toFixed(2)}%</p>
                </div>
                <MousePointer className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Conversions</p>
                  <p className="text-2xl font-bold">{kpis.conversions.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Rate: {kpis.conversionRate.toFixed(2)}%</p>
                </div>
                <Target className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ROAS</p>
                  <p className="text-2xl font-bold">{kpis.roas.toFixed(2)}x</p>
                  <p className="text-sm text-gray-500">
                    Spend: ${kpis.spend.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Chart Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
          <CardDescription>
            Visualize your campaign performance over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-gray-600">Chart type:</span>
            <Button
              variant={chartType === "bar" ? "default" : "outline"}
              size="sm"
              onClick={() => setChartType("bar")}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Bar
            </Button>
            <Button
              variant={chartType === "line" ? "default" : "outline"}
              size="sm"
              onClick={() => setChartType("line")}
            >
              <Activity className="w-4 h-4 mr-2" />
              Line
            </Button>
            <Button
              variant={chartType === "area" ? "default" : "outline"}
              size="sm"
              onClick={() => setChartType("area")}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Area
            </Button>
            <Button
              variant={chartType === "pie" ? "default" : "outline"}
              size="sm"
              onClick={() => setChartType("pie")}
            >
              <PieChartIcon className="w-4 h-4 mr-2" />
              Pie
            </Button>
          </div>
          {renderChart()}
        </CardContent>
      </Card>

      {/* Campaign Performance Comparison */}
      {campaignPerformance.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Campaign Performance Comparison</CardTitle>
            <CardDescription>
              Compare performance across all campaigns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Campaign</th>
                    <th className="text-right py-2">Impressions</th>
                    <th className="text-right py-2">Clicks</th>
                    <th className="text-right py-2">CTR</th>
                    <th className="text-right py-2">Conversions</th>
                    <th className="text-right py-2">Conv. Rate</th>
                    <th className="text-right py-2">ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  {campaignPerformance.map((campaign, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-2 font-medium">{campaign.name}</td>
                      <td className="text-right py-2">{campaign.impressions.toLocaleString()}</td>
                      <td className="text-right py-2">{campaign.clicks.toLocaleString()}</td>
                      <td className="text-right py-2">{campaign.ctr.toFixed(2)}%</td>
                      <td className="text-right py-2">{campaign.conversions.toLocaleString()}</td>
                      <td className="text-right py-2">{campaign.conversionRate.toFixed(2)}%</td>
                      <td className="text-right py-2">{campaign.roas.toFixed(2)}x</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
