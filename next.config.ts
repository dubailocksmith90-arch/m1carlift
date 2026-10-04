import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages: `npm run build` outputs to `out/`
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    // Required with static export; images are pre-optimized .webp already
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
