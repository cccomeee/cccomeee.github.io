import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, TrendingUp, Code2, FileCode, Server, Database } from "lucide-react";
import type { Tutorial } from "@/types/content";

interface TutorialCardProps {
  tutorial: Tutorial;
}

const iconMap: Record<string, React.ReactNode> = {
  JavaScript: <Code2 className="w-6 h-6 text-primary" />,
  React: <FileCode className="w-6 h-6 text-primary" />,
  TypeScript: <Code2 className="w-6 h-6 text-primary" />,
  "Node.js": <Server className="w-6 h-6 text-primary" />,
  SQL: <Database className="w-6 h-6 text-primary" />,
  Git: <Code2 className="w-6 h-6 text-primary" />,
};

export default function TutorialCard({ tutorial }: TutorialCardProps) {
  const difficultyColors = {
    初級: "bg-green-500/10 text-green-500 border-green-500/20",
    中級: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    高級: "bg-red-500/10 text-red-500 border-red-500/20",
  };

  const icon = iconMap[tutorial.language] || <BookOpen className="w-6 h-6 text-primary" />;

  return (
    <Card
      className="group p-6 hover-elevate transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-card-border flex flex-col h-full"
      data-testid={`card-tutorial-${tutorial.title}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
          {icon}
        </div>
        <Badge
          variant="outline"
          className={difficultyColors[tutorial.difficulty]}
          data-testid="badge-difficulty"
        >
          <TrendingUp className="w-3 h-3 mr-1" />
          {tutorial.difficulty}
        </Badge>
      </div>

      <h3 className="text-xl font-mono font-semibold mb-3 group-hover:text-primary transition-colors">
        {tutorial.title}
      </h3>

      <p className="text-muted-foreground mb-4 flex-1">{tutorial.description}</p>

      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Badge variant="secondary" data-testid="badge-language">
            {tutorial.language}
          </Badge>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{tutorial.duration}</span>
        </div>
      </div>

      <Link href={`/tutorials/${tutorial.slug}`}>
        <Button
          className="w-full gap-2"
          data-testid="button-start-tutorial"
        >
          開始學習
          <BookOpen className="w-4 h-4" />
        </Button>
      </Link>
    </Card>
  );
}
