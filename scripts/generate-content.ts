import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  insights: any[];
  diaries: any[];
  tutorials: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    insights: [],
    diaries: [],
    tutorials: [],
  };

  // Load insights
  try {
    const insightsDir = resolve(contentPath, "insights");
    const insightFiles = await readdir(insightsDir);
    for (const file of insightFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(insightsDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const insight = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          insight.slug = slug;
          data.insights.push(insight);
        }
      }
    }
    // Sort by publishedAt descending
    data.insights.sort((a, b) => {
      try {
        const dateA = new Date(a.publishedAt || 0).getTime();
        const dateB = new Date(b.publishedAt || 0).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load insights:", error);
  }

  // Load diaries
  try {
    const diariesDir = resolve(contentPath, "diaries");
    const diaryFiles = await readdir(diariesDir);
    for (const file of diaryFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(diariesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const diary = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          diary.slug = slug;
          data.diaries.push(diary);
        }
      }
    }
    // Sort by date descending
    data.diaries.sort((a, b) => {
      try {
        const dateA = new Date(a.date || 0).getTime();
        const dateB = new Date(b.date || 0).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load diaries:", error);
  }

  // Load tutorials
  try {
    const tutorialsDir = resolve(contentPath, "tutorials");
    const tutorialFiles = await readdir(tutorialsDir);
    for (const file of tutorialFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(tutorialsDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const tutorial = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          tutorial.slug = slug;
          data.tutorials.push(tutorial);
        }
      }
    }
    // Sort by publishedAt descending (if exists) or title
    data.tutorials.sort((a, b) => {
      if (a.publishedAt && b.publishedAt) {
        try {
          const dateA = new Date(a.publishedAt).getTime();
          const dateB = new Date(b.publishedAt).getTime();
          return dateB - dateA;
        } catch {
          return 0;
        }
      }
      return (a.title || "").localeCompare(b.title || "");
    });
  } catch (error) {
    console.warn("Failed to load tutorials:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Insights: ${data.insights.length}`);
  console.log(`  - Diaries: ${data.diaries.length}`);
  console.log(`  - Tutorials: ${data.tutorials.length}`);
}

generateContent().catch(console.error);

