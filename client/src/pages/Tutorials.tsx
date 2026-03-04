import TutorialCard from "@/components/TutorialCard";
import CodeBlock from "@/components/CodeBlock";
import { Code2 } from "lucide-react";
import { tutorials } from "@/data/content";

export default function Tutorials() {
  const sampleCode = `// React Hooks 範例
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      點擊次數: {count}
    </button>
  );
}`;

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-primary">程式教學</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-mono mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              教學課程
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            系統化的程式教學內容，從基礎到進階全方位學習
          </p>

          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold font-mono mb-4 text-left">
              程式碼範例預覽
            </h2>
            <CodeBlock code={sampleCode} language="javascript" />
          </div>
        </div>

        <h2 className="text-3xl font-bold font-mono mb-8">所有課程</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.slug} tutorial={tutorial} />
          ))}
        </div>
      </div>
    </div>
  );
}
