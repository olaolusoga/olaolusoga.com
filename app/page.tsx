import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedPosts from "@/components/FeaturedPosts";
import Speaking from "@/components/Speaking";
import Contact from "@/components/Contact";
import { getRecentPosts } from "@/lib/posts";

export default async function Home() {
  const posts = getRecentPosts(3);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedPosts posts={posts} />
      <Speaking />
      <Contact />
    </>
  );
}
