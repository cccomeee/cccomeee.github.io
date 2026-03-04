import { useRoute } from "wouter";
import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MarkdownContent from "@/components/MarkdownContent";
import { diaries } from "@/data/content";

export default function DiaryDetail() {
  const [, params] = useRoute("/diary/:slug");
  const diary = diaries.find((d) => d.slug === params?.slug);

  if (!diary) {
    return (
      <div className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">日記不存在</h1>
          <Link href="/diary">
            <Button>返回日記列表</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/diary">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            返回日記列表
          </Button>
        </Link>

        <article>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono text-primary">學習日記</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-4">
              {diary.title}
            </h1>
            <p className="text-muted-foreground mb-4">{diary.date}</p>
            {diary.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {diary.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <MarkdownContent content={diary.content} />
          </div>
        </article>
      </div>
    </div>
  );
}

