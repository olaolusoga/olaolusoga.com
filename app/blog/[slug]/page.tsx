import { getPost, getAllPostSlugs } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return {
      title: `${post.title} — Ola Olusoga`,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-[#71717a] hover:text-[#f4f4f5] transition-colors mb-12"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        All posts
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2.5 py-1 rounded-full bg-[#1f1f23] border border-[#27272a] text-[#818cf8]">
            {post.category}
          </span>
          <span className="text-xs text-[#52525b]">{post.date}</span>
          <span className="text-xs text-[#52525b]">·</span>
          <span className="text-xs text-[#52525b]">{post.readTime}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#f4f4f5] leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-[#71717a] leading-relaxed">{post.excerpt}</p>
      </header>

      <hr className="border-[#27272a] mb-12" />

      {/* Content */}
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <hr className="border-[#27272a] mt-16 mb-12" />

      {/* Author card */}
      <div className="flex items-start gap-4 p-5 rounded-xl border border-[#27272a] bg-[#18181b]">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a78bfa] flex items-center justify-center text-white font-bold text-lg shrink-0">
          O
        </div>
        <div>
          <p className="text-sm font-semibold text-[#f4f4f5]">Ola Olusoga</p>
          <p className="text-xs text-[#71717a] mt-0.5">
            VP of Engineering · Technology Executive · Engineering Leadership Writer
          </p>
        </div>
      </div>
    </div>
  );
}
