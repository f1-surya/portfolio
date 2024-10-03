import { readFileSync } from "node:fs";
import matter from "gray-matter";
import { Marked } from "marked";
import { parse } from "date-fns";
import hljs from "highlight.js";
import { markedHighlight } from "marked-highlight";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const files = import.meta.glob(`../../../../blogs/*.md`, { query: "?raw" });
  let file: string | undefined;

  for (const path in files) {
    if (path.includes(params.slug)) {
      // @ts-expect-error
      file = (await files[path]()).default;
    }
  }

  if (!file) {
    throw error(404, { message: "Blog not found" });
  }
  const { data, content } = matter(file);
  const marked = new Marked(markedHighlight({
    langPrefix: "hljs language-",
    highlight: function(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    }
  }));
  return {
    blog: {
      slug: params.slug,
      title: data.title,
      date: parse(data.date, "dd-MM-yyyy", new Date()),
      content: marked.parse(content)
    }
  };
}
