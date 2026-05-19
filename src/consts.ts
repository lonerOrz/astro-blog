import type { Metadata, Site, Socials, Friend, Friends } from "@types";

export const SITE: Site = {
  TITLE: "lonerOrz's website",
  DESCRIPTION: "Own notepads and brochures.",
  EMAIL: "lonerOrz@qq.com",
  URL: "https://astro-blog-rosy.vercel.app",
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

export const MUSIC: Metadata = {
  TITLE: "Music",
  DESCRIPTION: "My personal music collection and playlists.",
};

export const FRIENDS_PAGE: Metadata = {
  TITLE: "Friends",
  DESCRIPTION: "A collection of links to my friends and other cool websites.",
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

export const TERMINAL = {
  asciiArt: `
██╗  ██╗███████╗██╗     ██╗      ██████╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗
███████║█████╗  ██║     ██║     ██║   ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝
`,
  systemInfo: [
    "SYSTEM STATUS: ONLINE",
    "VERSION: 1.0.2",
    "LAST UPDATE: 2024-07-31",
  ],
  about: {
    title: "[ ABOUT ]",
    content:
      "Astro-Blog is a multi-purpose, accessible, and SEO-friendly theme for Astro blogs.",
  },
  contact: {
    title: "[ CONTACT ]",
    links: [
      { label: "GitHub", url: "https://github.com/lonerOrz" },
      { label: "Twitter", url: "https://twitter.com/lonerOrz" },
      { label: "Email", url: "mailto:lonerOrz@qq.com" },
    ],
  },
};

export const FRIENDS: Friends = [
  {
    NAME: "Astro",
    HREF: "https://astro.build",
    DESCRIPTION: "The web framework for content-driven websites.",
  },
  {
    NAME: "Tailwind CSS",
    HREF: "https://tailwindcss.com",
    DESCRIPTION: "A utility-first CSS framework.",
  },
  {
    NAME: "LonerOrz",
    HREF: "https://github.com/lonerOrz",
    DESCRIPTION: "The creator of this space.",
  },
  {
    NAME: "Guanran928",
    HREF: "https://blog.ny4.dev/",
    DESCRIPTION: "Guanran928 的个人博客，记录技术、折腾与日常",
  },
];
