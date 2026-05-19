export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  URL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Social = {
  NAME: string;
  HREF: string;
};

export type Socials = Social[];

export type Friend = {
  NAME: string;
  HREF: string;
  DESCRIPTION: string;
};

export type Friends = Friend[];

export type Heading = {
  depth: number;
  slug: string;
  text: string;
};
