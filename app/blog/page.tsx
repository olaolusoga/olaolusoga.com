import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Ola Olusoga",
  description:
    "Writing on engineering leadership, AI, scaling systems, and building great technology organizations.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-[#6366f1] font-medium mb-4">
          Blog
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#f4f4f5] mb-4">
          Writing
        </h1>
        <p className="text-[#a1a1aa] max-w-xl">
          Thoughts on engineering leadership, scaling technology, AI, and building
          organizations that compound over time.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <span
            key={cat}
            className="text-xs px-3 py-1.5 rounded-full border border-[#27272a] bg-[#18181b] text-[#a1a1aa]"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="space-y-0">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-7 border-t border-[#27272a] hover:bg-[#18181b]/30 -mx-4 px-4 rounded-lg transition-colors"
          >
            <div className="md:w-32 shrink-0">
              <span className="text-xs text-[#52525b]">{post.date}</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#1f1f23] border border-[#27272a] text-[#818cf8]">
                  {post.category}
                </span>
              </div>
              <h2 className="text-base font-semibold text-[#f4f4f5] group-hover:text-[#818cf8] transition-colors mb-1">
                {post.title}
              </h2>
              <p className="text-sm text-[#71717a] line-clamp-2">{post.excerpt}</p>
            </div>

            <div className="shrink-0 text-xs text-[#52525b] md:pt-0.5">{post.readTime}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
