import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { allPosts } from "@/lib/posts";
import { BUSINESS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — Commuting Tips, Sustainability & Service Guides",
  description:
    "Practical guides and insights for Sharjah–Dubai commuters: how to reduce commute stress, save money on transport, and make the most of your daily ride with M1 Car Lift.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "M1 Car Lift Blog | Commuting Tips for Sharjah–Dubai",
    description: "Useful articles on car sharing, commute efficiency, and sustainable transport in the UAE.",
  },
};

const categories = Array.from(new Set(allPosts.map((p) => p.category)));

export default function BlogIndexPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BUSINESS.url}/blog` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% -10%, rgba(201,162,39,0.10), transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#8A8A95] mb-6">
            <Link href="/" className="hover:text-[#C9A227] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#EDEDED]">Blog</span>
          </nav>
          <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-4">Our Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#EDEDED] mb-4 max-w-2xl leading-tight">
            Commuter Tips & Insights
          </h1>
          <p className="text-[#8A8A95] text-lg max-w-xl">
            Practical guides for Sharjah–Dubai commuters: save money, reduce stress, and make your daily ride work better.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <article key={post.slug} className="bg-[#151517] rounded-2xl border border-[#2A2A2E] overflow-hidden hover:border-[#C9A227]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,39,0.08)] flex flex-col">
                {/* Category badge area */}
                <div className="px-6 pt-6 pb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-[#1E1E21] text-[#C9A227] border border-[#C9A227]/20 px-2.5 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#8A8A95]">
                      <Clock size={11} /> {post.readingTime}
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-6 flex flex-col flex-1">
                  <Link href={`/blog/${post.slug}`} className="group">
                    <h2 className="text-[#EDEDED] font-bold text-lg mb-3 group-hover:text-[#C9A227] transition-colors leading-snug">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-[#8A8A95] text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#2A2A2E]">
                    <div>
                      <p className="text-[#EDEDED] text-xs font-medium">{post.author.name}</p>
                      <p className="text-[#8A8A95] text-xs">{post.publishedAt}</p>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1.5 text-[#C9A227] text-sm font-medium hover:gap-2.5 transition-all"
                    >
                      Read <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
