import contentData from "./content.json";
import type { Insight, Diary, Tutorial } from "@/types/content";

export const insights = contentData.insights as Insight[];
export const diaries = contentData.diaries as Diary[];
export const tutorials = contentData.tutorials as Tutorial[];

