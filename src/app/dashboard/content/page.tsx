"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function ContentAIPage() {
  const [model, setModel] = useState("ChatGPT");
  const [topic, setTopic] = useState("");
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  function handleGenerate() {
    setLoading(true);
    setTimeout(() => {
      setOutput(
        `(${model}) Bản nháp nội dung cho chủ đề: "${topic || "(chưa đặt)"}"\n\n${
          prompt || "Vui lòng nhập prompt để AI sáng tạo nội dung phù hợp."
        }\n\n— Demo output —`
      );
      setLoading(false);
    }, 600);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">
            <AuroraText className="inline">Tạo nội dung AI</AuroraText>
          </h1>
          <p className="text-gray-600 mt-1">ChatGPT / GPT-4 / Claude tích hợp (demo UI).</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Thiết lập</CardTitle>
              <CardDescription>Chọn mô hình và nhập yêu cầu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Mô hình</Label>
                  <Select value={model} onValueChange={setModel}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Chọn mô hình" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ChatGPT">ChatGPT</SelectItem>
                      <SelectItem value="GPT-4">GPT-4</SelectItem>
                      <SelectItem value="Claude">Claude</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Chủ đề</Label>
                  <Input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="VD: Summer Sale" className="w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Prompt</Label>
                <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={8} placeholder="Mô tả ngắn gọn nội dung cần tạo..." className="w-full resize-none" />
              </div>
              <div className="flex gap-2">
                <ShinyButton className="bg-white border-black text-black" onClick={handleGenerate}>
                  {loading ? "Đang tạo..." : "Tạo nội dung"}
                </ShinyButton>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white" onClick={() => setOutput("")}>Xoá kết quả</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Kết quả</CardTitle>
              <CardDescription>Nội dung do AI tạo (demo)</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap text-sm text-gray-800 min-h-56 p-4 border border-gray-200 rounded-md bg-gray-50">{output || "(Chưa có kết quả)"}</pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


