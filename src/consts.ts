import type { Metadata, Site, Social, Friend } from "@types";

export const SITE: Site = {
  TITLE: "lonerOrz's website",
  DESCRIPTION: "Own notepads and brochures.",
  EMAIL: "lonerOrz@qq.com",
  URL: "https://astro-blog-rosy.vercel.app",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_SERIES_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Own notepads and brochures.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const NOTES: Metadata = {
  TITLE: "Notes",
  DESCRIPTION: "Short thoughts, fleeting ideas, and micro-blogging.",
};

export const SERIES: Metadata = {
  TITLE: "Series",
  DESCRIPTION:
    "A collection of topical series, each containing related articles.",
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

export const SOCIALS: Social[] = [
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

export const FRIENDS: Friend[] = [
  {
    NAME: "LonerOrz",
    HREF: "https://astro-blog-rosy.vercel.app",
    GITHUB: "https://github.com/lonerOrz",
    DESCRIPTION: "The creator of this space.",
  },
  {
    NAME: "Guanran928",
    HREF: "https://blog.ny4.dev/",
    GITHUB: "https://github.com/Guanran928",
    DESCRIPTION: "Guanran928 的个人博客，记录技术、折腾与日常",
  },
];
