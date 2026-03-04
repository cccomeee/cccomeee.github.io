import { useRoute } from "wouter";
import { Link } from "wouter";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MarkdownContent from "@/components/MarkdownContent";
import { insights } from "@/data/content";

export default function InsightDetail() {
  const [, params] = useRoute("/insights/:slug");
  const insight = insights.find((i) => i.slug === params?.slug);

  if (!insight) {
    return (
      <div className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">心得不存在</h1>
          <Link href="/insights">
            <Button>返回心得列表</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/insights">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            返回心得列表
          </Button>
        </Link>

        <article>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Lightbulb className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono text-primary">程式開發心得</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-4">
              {insight.title}
            </h1>
            <p className="text-muted-foreground mb-4">{insight.publishedAt}</p>
            <div className="flex flex-wrap gap-2">
              {insight.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <MarkdownContent content={insight.content} />
          </div>
        </article>
      </div>
    </div>
  );
}

