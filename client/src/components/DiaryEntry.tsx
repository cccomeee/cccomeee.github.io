import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag } from "lucide-react";
import type { Diary } from "@/types/content";

interface DiaryEntryProps {
  diary: Diary;
}

export default function DiaryEntry({ diary }: DiaryEntryProps) {
  // Get preview (first 150 characters)
  const preview = diary.content.length > 150 
    ? diary.content.substring(0, 150) + "..." 
    : diary.content;

  return (
    <div className="flex gap-6" data-testid={`diary-entry-${diary.date}`}>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
          <Calendar className="w-5 h-5 text-primary" />
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-2" />
      </div>

      <Link href={`/diary/${diary.slug}`} className="flex-1">
        <Card className="p-6 mb-8 hover-elevate transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 border-card-border cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-mono font-semibold">{diary.title}</h3>
            <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
              {diary.date}
            </span>
          </div>

          <p className="text-foreground mb-4 leading-relaxed">{preview}</p>

          {diary.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-muted-foreground" />
              {diary.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs"
                  data-testid={`badge-diary-tag-${tag}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </Card>
      </Link>
    </div>
  );
}
