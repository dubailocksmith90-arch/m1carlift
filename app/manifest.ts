import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "M1 Car Lift",
    short_name: "M1 Car Lift",
    description: "Daily car lift service between Sharjah and Dubai",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#C9A227",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
