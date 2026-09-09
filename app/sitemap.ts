import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/utils";
import { getAllRoutes } from "@/lib/routes";
import { allPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.url;
  const today = new Date().toISOString().split("T")[0];

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                   lastModified: today, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/services`,     lastModified: today, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/routes`,       lastModified: today, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/blog`,         lastModified: today, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/contact`,      lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`,        lastModified: today, changeFrequency: "monthly", priority: 0.7 },
  ];

  const blogPages: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const routePages: MetadataRoute.Sitemap = getAllRoutes().map((route) => ({
    url: `${base}/routes/${route.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...routePages];
}
