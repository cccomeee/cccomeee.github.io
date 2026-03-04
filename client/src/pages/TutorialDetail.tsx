import { useRoute } from "wouter";
import { Link } from "wouter";
import { ArrowLeft, Code2, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MarkdownContent from "@/components/MarkdownContent";
import { tutorials } from "@/data/content";

export default function TutorialDetail() {
  const [, params] = useRoute("/tutorials/:slug");
  const tutorial = tutorials.find((t) => t.slug === params?.slug);

  if (!tutorial) {
    return (
      <div className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">教學不存在</h1>
          <Link href="/tutorials">
            <Button>返回教學列表</Button>
          </Link>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    初級: "bg-green-500/10 text-green-500 border-green-500/20",
    中級: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    高級: "bg-red-500/10 text-red-500 border-red-500/20",
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/tutorials">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            返回教學列表
          </Button>
        </Link>

        <article>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono text-primary">程式教學</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-4">
              {tutorial.title}
            </h1>
            <p className="text-muted-foreground mb-6">{tutorial.description}</p>
            <div className="flex items-center gap-4 flex-wrap">
              <Badge variant="secondary">{tutorial.language}</Badge>
              <Badge variant="outline" className={difficultyColors[tutorial.difficulty as keyof typeof difficultyColors]}>
                <TrendingUp className="w-3 h-3 mr-1" />
                {tutorial.difficulty}
              </Badge>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{tutorial.duration}</span>
              </div>
            </div>
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <MarkdownContent content={tutorial.content} />
          </div>
        </article>
      </div>
    </div>
  );
}

