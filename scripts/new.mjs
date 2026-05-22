import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const [type, title] = process.argv.slice(2);

if (!type || !title) {
  console.error("Usage: npm run new <blog|note|series> <title>");
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^\w-]/g, "");
const dateStr = new Date().toISOString();
const rootDir = path.join(__dirname, "../src/content");

const config = {
  blog: [
    {
      dir: `blog/${slug}`,
      file: "index.mdx",
      content: `---
title: "${title}"
description: ""
date: ${dateStr}
tags: []
draft: false
---

# ${title}
`,
    },
  ],
  note: [
    {
      dir: "notes",
      file: `${slug}.mdx`,
      content: `---
title: "${title}"
date: ${dateStr}
draft: false
---

# ${title}
`,
    },
  ],
  series: [
    {
      // 系列介绍文件
      dir: `series/${slug}`,
      file: "index.mdx",
      content: `---
title: "${title}"
description: "Series briefing and overview."
date: ${dateStr}
draft: false
---

# ${title}

欢迎来到本系列。这里是系列的概要介绍。
`,
    },
    {
      // 系列第一个章节
      dir: `series/${slug}`,
      file: `01-introduction.mdx`,
      content: `---
title: "Introduction to ${title}"
description: "The first chapter of the series."
date: ${dateStr}
seriesOrder: 1
draft: false
---

# 第一章：引言

这是该系列的第一篇文章。
`,
    },
  ],
};

const items = config[type === "notes" ? "note" : type];

if (!items) {
  console.error(`Invalid type: ${type}. Use blog, note, or series.`);
  process.exit(1);
}

items.forEach((item) => {
  const targetDir = path.join(rootDir, item.dir);
  const fullPath = path.join(targetDir, item.file);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  if (fs.existsSync(fullPath)) {
    console.warn(`⚠️  File already exists: ${fullPath}`);
  } else {
    fs.writeFileSync(fullPath, item.content);
    console.log(`✅ Created: ${fullPath}`);
  }
});
