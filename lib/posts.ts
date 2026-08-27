export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  author: {
    name: string;
    bio: string;
  };
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const allPosts: Post[] = [
  {
    slug: "environmental-social-benefits-car-lift-sharjah-dubai",
    title: "The Environmental and Social Benefits of Car Lift Services Between Sharjah and Dubai",
    excerpt:
      "Fewer cars on Sheikh Zayed Road means cleaner air and shorter commutes for everyone. Here's the real impact car sharing has on the UAE's environment and communities.",
    category: "Sustainability",
    readingTime: "6 min read",
    publishedAt: "2024-03-15",
    updatedAt: "2024-11-01",
    author: {
      name: "M1 Car Lift Editorial Team",
      bio: "The M1 Car Lift team writes practical guides for UAE commuters based on daily operational experience serving the Sharjah–Dubai corridor.",
    },
    seoTitle: "Environmental & Social Benefits of Car Lift Services | Sharjah–Dubai",
    seoDescription:
      "Learn how car lift services between Sharjah and Dubai reduce carbon emissions, ease traffic congestion, and build community among daily commuters.",
    keywords: [
      "car lift environmental benefits",
      "car sharing UAE sustainability",
      "sharjah dubai commute carbon footprint",
    ],
  },
  {
    slug: "tips-comfortable-commute-sharjah-dubai",
    title: "Top Tips for a Comfortable and Efficient Commute Between Sharjah and Dubai",
    excerpt:
      "The Sharjah–Dubai commute doesn't have to be exhausting. These practical tips — from timing your departure to what to pack — will transform your daily drive.",
    category: "Commuting Tips",
    readingTime: "7 min read",
    publishedAt: "2024-04-10",
    updatedAt: "2024-11-15",
    author: {
      name: "M1 Car Lift Editorial Team",
      bio: "The M1 Car Lift team writes practical guides for UAE commuters based on daily operational experience serving the Sharjah–Dubai corridor.",
    },
    seoTitle: "Top Tips for a Comfortable Sharjah to Dubai Commute",
    seoDescription:
      "Practical advice for daily Sharjah–Dubai commuters: best departure times, what to bring, how to avoid peak traffic, and why car lift beats driving alone.",
    keywords: [
      "sharjah dubai commute tips",
      "comfortable car lift sharjah",
      "best time commute sharjah dubai",
    ],
  },
  {
    slug: "advantages-car-lift-service",
    title: "Advantages of Choosing a Car Lift Service Over Driving Alone",
    excerpt:
      "Cost, stress, fuel, parking, wear on your car — the case for sharing your Sharjah–Dubai commute is stronger than you think. A clear breakdown of all the benefits.",
    category: "Service Guides",
    readingTime: "8 min read",
    publishedAt: "2024-05-05",
    updatedAt: "2024-12-01",
    author: {
      name: "M1 Car Lift Editorial Team",
      bio: "The M1 Car Lift team writes practical guides for UAE commuters based on daily operational experience serving the Sharjah–Dubai corridor.",
    },
    seoTitle: "Advantages of Car Lift Service vs Driving Alone | UAE Commuters",
    seoDescription:
      "Compare the real costs and benefits of a car lift service vs driving yourself from Sharjah to Dubai. Save money, reduce stress, and skip the parking headache.",
    keywords: [
      "advantages car lift service",
      "car lift vs driving sharjah dubai",
      "car pool service uae benefits",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}
