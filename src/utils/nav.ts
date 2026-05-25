import { type CollectionEntry, getCollection } from "astro:content";

export interface NavEntry {
  id: string;
  title: string;
}

export async function getSortedPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog");
  return posts
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function toEntries(posts: CollectionEntry<"blog">[]): NavEntry[] {
  return posts.map((p) => ({
    id: p.id.replace(/\.(md|mdx)$/, ""),
    title: p.data.title,
  }));
}

export function computeNav<T extends NavEntry>(
  entries: T[],
  currentId: string,
) {
  const idx = entries.findIndex((e) => e.id === currentId);
  return {
    prev: idx > 0 ? entries[idx - 1] : null,
    next: idx < entries.length - 1 ? entries[idx + 1] : null,
  };
}
