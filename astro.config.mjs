import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-rosy.vercel.app",
  integrations: [sitemap(), mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      // 解决 Vite 7 + Astro 6 冷启动竞争问题的关键
      // 设置为 false 会禁止 Vite 在启动瞬间抢跑解析模块
      preTransformRequests: false,
    },
    optimizeDeps: {
      // 预先排除或包含一些容易在冷启动时崩溃的虚拟模块
      // 这样 Vite 在处理依赖优化时会更稳健
      include: ["astro/virtual-modules/transitions-router.js"],
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "catppuccin-mocha",
      },
    },
  },
});
