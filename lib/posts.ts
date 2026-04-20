import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => {
      const full = path.join(postsDir, `${slug}.md`);
      const { data } = matter(fs.readFileSync(full, "utf8"));
      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        category: data.category ?? "General",
        readTime: data.readTime ?? "5 min read",
        featured: data.featured ?? false,
      } as PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getRecentPosts(count: number): PostMeta[] {
  return getAllPosts().slice(0, count);
}

export async function getPost(slug: string): Promise<Post> {
  const full = path.join(postsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(full, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    category: data.category ?? "General",
    readTime: data.readTime ?? "5 min read",
    featured: data.featured ?? false,
    contentHtml,
  };
}
