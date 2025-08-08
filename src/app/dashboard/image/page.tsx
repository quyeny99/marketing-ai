"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ImageAIPage() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("DALL·E");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function generateImage() {
    if (!prompt) return;
    setLoading(true);
    setTimeout(() => {
      // demo placeholder image
      setImageUrl("/window.svg");
      setLoading(false);
    }, 700);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">Ảnh quảng cáo AI</h1>
          <p className="text-gray-600 mt-1">Tạo ảnh bằng prompt (DALL·E / SDXL) - demo UI</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Thiết lập</CardTitle>
              <CardDescription>Chọn model và nhập prompt</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Prompt</Label>
                <Input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Banner summer sale phong cách tối giản..." className="w-full" />
              </div>
              <div className="space-y-2">
                <Label>Model</Label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="DALL·E">DALL·E</SelectItem>
                    <SelectItem value="SDXL">SDXL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button disabled={!prompt || loading} className="bg-black text-white hover:bg-gray-800" onClick={generateImage}>
                {loading ? "Đang tạo..." : "Tạo ảnh"}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Kết quả</CardTitle>
              <CardDescription>Ảnh demo sẽ hiển thị dưới đây</CardDescription>
            </CardHeader>
            <CardContent>
              {!imageUrl ? (
                <div className="h-80 grid place-items-center text-gray-500">(Chưa có ảnh)</div>
              ) : (
                <div className="flex items-center justify-center">
                  <img src={imageUrl} alt="AI result" className="max-h-80 rounded border border-gray-200 bg-gray-50" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


