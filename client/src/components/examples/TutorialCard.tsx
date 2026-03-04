import TutorialCard from "../TutorialCard";

export default function TutorialCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <TutorialCard
        tutorial={{
          slug: "example-tutorial",
          title: "JavaScript 基礎入門",
          description: "從零開始學習 JavaScript，掌握變數、函數、迴圈等基本概念，為前端開發打下堅實基礎。",
          language: "JavaScript",
          difficulty: "初級",
          duration: "2小時",
          content: "# Example content",
        }}
      />
    </div>
  );
}
