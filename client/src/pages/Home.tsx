import Hero from "@/components/Hero";
import InsightCard from "@/components/InsightCard";
import TutorialCard from "@/components/TutorialCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { insights, tutorials } from "@/data/content";

export default function Home() {
  const featuredInsights = insights.slice(0, 2);
  const featuredTutorials = tutorials.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-12 md:py-24 px-4 md:px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 md:mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-mono mb-3">
                最新心得分享
              </h2>
              <p className="text-muted-foreground">
                探索程式開發的心得與經驗
              </p>
            </div>
            <Link href="/insights" data-testid="link-view-all-insights">
              <Button variant="outline" className="gap-2">
                查看全部
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredInsights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 md:mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-mono mb-3">
                精選教學課程
              </h2>
              <p className="text-muted-foreground">
                系統化學習程式設計技能
              </p>
            </div>
            <Link href="/tutorials" data-testid="link-view-all-tutorials">
              <Button variant="outline" className="gap-2">
                查看全部
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTutorials.map((tutorial) => (
              <TutorialCard key={tutorial.slug} tutorial={tutorial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
