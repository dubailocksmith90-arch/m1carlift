import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { allPosts } from "@/lib/posts";

export default function BlogPreview() {
  const posts = allPosts.slice(0, 3);

  return (
    <section
      id="blog-preview"
      aria-labelledby="blog-preview-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#151517] border-y border-[#2A2A2E]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">From the Blog</p>
            <h2 id="blog-preview-heading" className="text-3xl md:text-4xl font-bold text-[#EDEDED]">
              Commuter Tips & Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-[#C9A227] hover:text-[#E8C04A] text-sm font-medium whitespace-nowrap transition-colors"
          >
            View all posts <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-[#0A0A0B] rounded-xl p-6 border border-[#2A2A2E] hover:border-[#C9A227]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,39,0.08)] flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs bg-[#1E1E21] text-[#C9A227] border border-[#C9A227]/20 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#8A8A95]">
                  <Clock size={11} /> {post.readingTime}
                </span>
              </div>
              <h3 className="text-[#EDEDED] font-bold text-base mb-2 group-hover:text-[#C9A227] transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-[#8A8A95] text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-1.5 text-[#C9A227] text-sm font-medium">
                Read more <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
