import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection } from "astro:content";

export async function GET(context) {
  const now = new Date();

  const blog = (await getCollection("blog")).filter(
    (post) => !post.data.draft && new Date(post.data.date) <= now,
  );

  const series = (await getCollection("series")).filter(
    (post) => !post.data.draft && new Date(post.data.date) <= now,
  );

  const notes = (await getCollection("notes"))
    .filter((post) => !post.data.draft && new Date(post.data.date) <= now)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const totalNotesCount = notes.length;
  const noteIdMap = new Map();
  notes.forEach((note, index) => {
    const absoluteId = totalNotesCount - index;
    noteIdMap.set(note.id, absoluteId);
  });

  const items = [...blog, ...series, ...notes].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  const cleanSlug = (id) =>
    id.replace(/\.(md|mdx)$/, "").replace(/\/index$/, "");

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    trailingSlash: false,
    items: items.map((item) => {
      const isNote = item.collection === "notes";
      const slug = cleanSlug(item.id);

      let link;
      if (isNote) {
        const absoluteId = noteIdMap.get(item.id);
        link = `/notes#note-${absoluteId}`;
      } else {
        link = `/${item.collection}/${slug}/`;
      }

      return {
        title: item.data.title,
        description: item.data.description,
        pubDate: item.data.date,
        link,
      };
    }),
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: [
      `<language>zh-cn</language>`,
      `<atom:link href="${new URL("rss.xml", context.site)}" rel="self" type="application/rss+xml" />`,
    ].join(""),
  });
}
