import { readFileSync } from "node:fs";
import matter from "gray-matter";
import { Marked } from "marked";
import { parse } from "date-fns";
import hljs from "highlight.js";
import { markedHighlight } from "marked-highlight";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const file = readFileSync(`./blogs/${params.slug}.md`);
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
  } catch (e) {
    throw error(404, {message: "Blog not found"});
  }
}
