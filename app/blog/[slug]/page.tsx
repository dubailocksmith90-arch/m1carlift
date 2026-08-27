import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { allPosts, getPostBySlug } from "@/lib/posts";
import { BUSINESS } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.seoDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.keywords,
    },
  };
}

// Import MDX content dynamically based on slug
async function getPostContent(slug: string) {
  try {
    const { default: Content } = await import(`@/content/blog/${slug}.mdx`);
    return Content;
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const Content = await getPostContent(slug);
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BUSINESS.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BUSINESS.url}/blog/${post.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: `${BUSINESS.url}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% -10%, rgba(201,162,39,0.08), transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#8A8A95] mb-6">
            <Link href="/" className="hover:text-[#C9A227] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#C9A227] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#EDEDED] truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs bg-[#1E1E21] text-[#C9A227] border border-[#C9A227]/20 px-2.5 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#8A8A95]">
              <Clock size={11} /> {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 pb-8 border-b border-[#2A2A2E]">
            <div className="w-10 h-10 rounded-full bg-[#1E1E21] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] font-bold text-sm">
              M1
            </div>
            <div>
              <p className="text-[#EDEDED] text-sm font-medium">{post.author.name}</p>
              <div className="flex items-center gap-3 text-xs text-[#8A8A95]">
                <span className="flex items-center gap-1"><Calendar size={11} /> Published {post.publishedAt}</span>
                <span>Updated {post.updatedAt}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {Content ? (
            <div className="prose">
              <Content />
            </div>
          ) : (
            <p className="text-[#8A8A95]">Content coming soon.</p>
          )}

          {/* Author bio */}
          <div className="mt-12 pt-8 border-t border-[#2A2A2E] bg-[#151517] rounded-xl p-6">
            <p className="text-xs text-[#C9A227] uppercase tracking-wider font-semibold mb-2">About the Author</p>
            <p className="text-[#EDEDED] font-semibold mb-1">{post.author.name}</p>
            <p className="text-[#8A8A95] text-sm leading-relaxed">{post.author.bio}</p>
          </div>

          {/* Back to blog */}
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#8A8A95] hover:text-[#C9A227] text-sm font-medium transition-colors"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#151517] border-t border-[#2A2A2E]">
          <div className="max-w-3xl mx-auto">
            <h2 id="related-heading" className="text-xl font-bold text-[#EDEDED] mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-[#0A0A0B] rounded-xl p-5 border border-[#2A2A2E] hover:border-[#C9A227]/40 transition-all duration-300"
                >
                  <span className="text-xs text-[#C9A227] font-medium">{p.category}</span>
                  <h3 className="text-[#EDEDED] font-semibold text-sm mt-2 mb-2 group-hover:text-[#C9A227] transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[#C9A227] text-xs font-medium">
                    Read more <ArrowRight size={11} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
