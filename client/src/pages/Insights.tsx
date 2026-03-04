import InsightCard from "@/components/InsightCard";
import { Lightbulb } from "lucide-react";
import { insights } from "@/data/content";

export default function Insights() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Lightbulb className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-primary">程式開發心得</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-mono mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              心得分享
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            分享程式開發過程中的經驗、思考與學習心得
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </div>
    </div>
  );
}
