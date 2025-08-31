import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "lonerOrz's website",
  DESCRIPTION: "Own notepads and brochures.",
  EMAIL: "lonerOrz@qq.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Own notepads and brochures.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "About lonerOrz.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/lonerOrz",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/lonerOrz",
  },
  {
    NAME: "Website",
    HREF: "https://astro-blog-rosy.vercel.app",
  },
];
