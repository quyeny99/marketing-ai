"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function EmailAIPage() {
  const [subject, setSubject] = useState("");
  const [to, setTo] = useState("");
  const [provider, setProvider] = useState("Demo");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  function generateEmail() {
    setBody(
      `Subject: ${subject || "(no subject)"}\n\nXin chào,\n\nĐây là bản nháp email marketing được sinh tự động (demo).\nHãy cập nhật nội dung cho phù hợp chiến dịch.\n\nTrân trọng,\nMarketing AI`
    );
  }

  function sendEmail() {
    if (!to) return;
    setSending(true);
    setTimeout(() => {
      setLog((l) => [
        `${new Date().toLocaleTimeString()} • Sent to ${to} via ${provider} • result: delivered (demo)`,
        ...l,
      ]);
      setSending(false);
    }, 800);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">Email Marketing AI</h1>
          <p className="text-gray-600 mt-1">Sinh email + gửi + tracking (demo UI)</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="bg-white border-gray-200 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-black">Soạn thảo</CardTitle>
              <CardDescription>Tạo tiêu đề và nội dung email</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tiêu đề</Label>
                  <Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Khuyến mãi mùa hè..." className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label>Người nhận</Label>
                  <Input value={to} onChange={(e) => setTo(e.target.value)} placeholder="customer@example.com" className="w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Nội dung</Label>
                <Textarea rows={12} value={body} onChange={(e) => setBody(e.target.value)} placeholder="Nội dung email..." className="w-full resize-none" />
              </div>
              <div className="flex gap-2">
                <Button className="bg-black text-white hover:bg-gray-800" onClick={generateEmail}>Sinh bằng AI (demo)</Button>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white" onClick={() => setBody("")}>Xoá</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Gửi & Tracking</CardTitle>
              <CardDescription>Chọn nhà cung cấp gửi mail (demo)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Provider</Label>
                <Select value={provider} onValueChange={setProvider}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Demo">Demo</SelectItem>
                    <SelectItem value="SES">AWS SES</SelectItem>
                    <SelectItem value="SendGrid">SendGrid</SelectItem>
                    <SelectItem value="Resend">Resend</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button disabled={!to || !body || sending} className="w-full bg-black text-white hover:bg-gray-800" onClick={sendEmail}>
                {sending ? "Đang gửi..." : "Gửi email"}
              </Button>
              <Separator />
              <div>
                <div className="font-medium text-black mb-2">Lịch sử gửi</div>
                <div className="space-y-2 text-sm text-gray-700">
                  {log.length === 0 && <div>(Chưa có bản ghi)</div>}
                  {log.map((l, idx) => (
                    <div key={idx} className="p-2 rounded border border-gray-200 bg-gray-50">{l}</div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


