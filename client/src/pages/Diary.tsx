import DiaryEntry from "@/components/DiaryEntry";
import { BookOpen } from "lucide-react";
import { diaries } from "@/data/content";

export default function Diary() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-primary">學習日記</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-mono mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              日記
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            記錄每天的學習進度、遇到的問題與解決方案
          </p>
        </div>

        <div className="relative">
          {diaries.map((diary) => (
            <DiaryEntry key={diary.slug} diary={diary} />
          ))}
        </div>
      </div>
    </div>
  );
}
