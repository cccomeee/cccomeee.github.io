# 內容管理說明

本專案使用 YAML 檔案來管理內容，所有內容都存放在 `content/` 資料夾下。

## 資料夾結構

- `content/insights/` - 心得文章（一個 YAML 檔案對應一篇心得）
- `content/diaries/` - 日記文章（一個 YAML 檔案對應一篇日記）
- `content/tutorials/` - 教學文章（一個 YAML 檔案對應一篇教學）

## YAML 檔案格式

### 心得 (Insights)

檔案名稱會成為 URL slug，例如：`React-Hooks-的使用心得.yaml` 會對應到 `/insights/React-Hooks-的使用心得`

```yaml
title: 文章標題
excerpt: 文章摘要
tags:
  - 標籤1
  - 標籤2
publishedAt: "2024-11-07"
content: |
  # 標題
  
  這裡可以使用 Markdown 語法撰寫內容...
```

### 日記 (Diaries)

檔案名稱會成為 URL slug，例如：`完成-React-專案重構.yaml` 會對應到 `/diary/完成-React-專案重構`

```yaml
title: 日記標題
date: "2024-11-07"
tags:
  - 標籤1
  - 標籤2
content: |
  # 標題
  
  這裡可以使用 Markdown 語法撰寫內容...
```

### 教學 (Tutorials)

檔案名稱會成為 URL slug，例如：`JavaScript-基礎入門.yaml` 會對應到 `/tutorials/JavaScript-基礎入門`

```yaml
title: 教學標題
description: 教學描述
language: JavaScript
difficulty: 初級  # 初級、中級、高級
duration: "2小時"
content: |
  # 標題
  
  這裡可以使用 Markdown 語法撰寫內容...
```

## 內容生成

執行以下命令來生成內容 JSON 檔案：

```bash
npm run content:generate
```

或者在開發和建置時會自動執行：

```bash
npm run dev    # 開發時會自動生成
npm run build  # 建置時會自動生成
```

## 注意事項

1. **檔案名稱即為 URL slug**：檔案名稱（不含副檔名）會直接成為 URL 路徑的一部分
2. **Markdown 支援**：`content` 欄位支援完整的 Markdown 語法
3. **日期格式**：使用 ISO 格式（YYYY-MM-DD）或完整日期時間格式
4. **標籤**：tags 是一個字串陣列

