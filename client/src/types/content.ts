export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  content: string;
}

export interface Diary {
  slug: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
}

export interface Tutorial {
  slug: string;
  title: string;
  description: string;
  language: string;
  difficulty: "初級" | "中級" | "高級";
  duration: string;
  content: string;
  publishedAt?: string;
}

