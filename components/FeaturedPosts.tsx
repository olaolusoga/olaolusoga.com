import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function FeaturedPosts({ posts }: { posts: PostMeta[] }) {
  if (!posts.length) return null;

  return (
    <section id="writing" className="py-24 border-t border-[#27272a]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6366f1] font-medium mb-4">
              Writing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f4f4f5]">
              Latest from the blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex text-sm text-[#818cf8] hover:text-[#6366f1] transition-colors"
          >
            All posts →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-5 rounded-xl border border-[#27272a] bg-[#18181b] hover:border-[#3f3f46] transition-all flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#1f1f23] border border-[#27272a] text-[#818cf8]">
                  {post.category}
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#f4f4f5] leading-snug mb-3 group-hover:text-[#818cf8] transition-colors flex-1">
                {post.title}
              </h3>
              <p className="text-sm text-[#71717a] line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-[#52525b]">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/blog" className="text-sm text-[#818cf8]">
            All posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
