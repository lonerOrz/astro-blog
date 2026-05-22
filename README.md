# My Blog

A personal blog focused on writing, notes, and web development.

Built with a minimalist design, fast loading experience, dark mode support, full-text search, and MDX-based content authoring.

![Blog Preview](https://github.com/user-attachments/assets/fc9b55b9-53e5-4933-9d23-936e1c61e6c2)

## Features

- Minimal and clean UI
- Responsive layout
- Dark mode
- MDX support
- Full-text search
- Syntax highlighting
- GitHub-based comments
- SEO friendly
- Accessible design

## Content Types

下面是整理后的表格（结构统一、排版更清晰）：

## Content Types

Astro 使用 content collections 管理博客文章与系列内容，以下为创建方式与 frontmatter 规范：

| Content Type  | Creation Process                                                                                                                     | Required Metadata (Frontmatter)                             | Optional Metadata (Frontmatter)                |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------- | :--------------------------------------------- |
| **Blog Post** | 在 `src/content/blog/` 下创建 `.md` 或 `.mdx` 文件；在文件顶部添加 YAML frontmatter                                                                 | `title` (string)<br>`description` (string)<br>`date` (Date) | `draft` (boolean)<br>`tags` (Array of strings) |
| **Series**    | **系列首页/索引页**：在 `src/content/series/<series-name>/` 下创建 `index.mdx`<br>**单篇文章**：在同目录下创建 `<article-file>.mdx`；在文件顶部添加 YAML frontmatter | `title` (string)<br>`description` (string)<br>`date` (Date) | `draft` (boolean)<br>`seriesOrder` (number)    |


## Development

Clone the repository:

```bash
git clone https://github.com/your-username/your-blog.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
├── content/
├── layouts/
├── pages/
├── styles/
└── utils/
```

## Stack

* Astro
* Tailwind CSS
* TypeScript
* MDX
* Pagefind
* Giscus

## Credits

Based on:

* Astro Micro
* Astro Nano

## License

MIT
