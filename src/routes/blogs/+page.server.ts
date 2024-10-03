import { parse } from "date-fns";
import matter from "gray-matter";

export async function load() {
  const paths = import.meta.glob("../../../blogs/*.md", { query: "?raw" })
  const files: string[] = [];
  for (const path in paths) {
    // @ts-expect-error
    const file = (await paths[path]()).default as string;
    files.push(file);
  }

  const blogs = files.map((file) => {
    const { data } = matter(file);
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
