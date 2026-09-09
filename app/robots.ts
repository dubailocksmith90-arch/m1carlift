import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*",          allow: "/" },
      { userAgent: "GPTBot",     allow: "/" },
      { userAgent: "CCBot",      allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
    ],
    sitemap: `${BUSINESS.url}/sitemap.xml`,
    host: BUSINESS.url,
  };
}
