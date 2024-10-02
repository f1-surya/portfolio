import { readdirSync, readFileSync } from "node:fs";
import matter from "gray-matter";
import { parse } from "date-fns";

export async function load() {
  const files = readdirSync("./blogs");
  const blogs = files.map((file) => {
    const fileContent = readFileSync(`./blogs/${file}`);
    const { data } = matter(fileContent);
    return {
      slug: data.slug,
      title: data.title,
      date: parse(data.date, "dd-MM-yyyy", new Date()),
    };
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  blogs.sort((a, b) => b.date - a.date);
  return {
    blogs
  };
}
