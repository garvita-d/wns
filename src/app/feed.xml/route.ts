import RSS from 'rss';
import { NextResponse } from 'next/server';

const blogPosts = [
  {
    title: "The Future of Global Digital Marketing: Trends and Predictions",
    description: "Global digital marketing in 2025 is defined by rapid advancements in AI, increasing social media prominence, and evolving consumer behavior.",
    slug: "future-of-digital-marketing",
    date: new Date('2024-12-15'),
    category: "Digital Marketing"
  },
  {
    title: "Practical SEO Tips to Boost Your Website Traffic in 2025",
    description: "SEO remains fundamental to online visibility, but evolving algorithms and AI require marketers to adapt.",
    slug: "seo-tips",
    date: new Date('2024-12-14'),
    category: "SEO"
  },
  {
    title: "How PPC Campaigns Can Maximize ROI in a Changing Landscape",
    description: "PPC remains indispensable but requires strategic targeting to maximize returns.",
    slug: "ppc-campaigns",
    date: new Date('2024-12-13'),
    category: "PPC"
  },
  {
    title: "Harnessing Social Media for Authentic Brand Engagement",
    description: "Successful social media marketing hinges on building genuine community rather than solely broadcasting messages.",
    slug: "social-media-engagement",
    date: new Date('2024-12-12'),
    category: "Social Media"
  },
  {
    title: "Role of AI and Automation in Digital Marketing Success",
    description: "AI is transforming marketing by enhancing efficiency and enabling advanced personalization.",
    slug: "ai-automation-marketing",
    date: new Date('2024-12-11'),
    category: "AI & Technology"
  },
  {
    title: "Content Marketing That Converts: Key Strategies for 2025",
    description: "Effective content marketing balances creativity with clear goals. Personalization is critical.",
    slug: "content-marketing-strategies",
    date: new Date('2024-12-10'),
    category: "Content Marketing"
  },
  {
    title: "Email Marketing Best Practices for Customer Retention",
    description: "Email marketing remains a powerful retention tool with a reach of four billion daily users.",
    slug: "email-marketing-retention",
    date: new Date('2024-12-09'),
    category: "Email Marketing"
  },
  {
    title: "Leveraging Analytics to Make Data-Driven Marketing Decisions",
    description: "Data analytics is at the heart of effective marketing strategies today.",
    slug: "analytics-marketing-decisions",
    date: new Date('2024-12-08'),
    category: "Analytics"
  },
  {
    title: "Navigating Privacy Laws and Data Protection in Marketing",
    description: "With growing regulatory scrutiny, marketers must prioritize GDPR and other privacy laws compliance.",
    slug: "privacy-laws-marketing",
    date: new Date('2024-12-07'),
    category: "Legal & Compliance"
  },
  {
    title: "How to Create a Digital Marketing Strategy That Aligns with Business Goals",
    description: "Align marketing efforts directly with business objectives for maximum impact.",
    slug: "digital-marketing-strategy",
    date: new Date('2024-12-06'),
    category: "Strategy"
  }
];

export async function GET() {
  const siteUrl = 'https://whatnextstudio.com';

  const feed = new RSS({
    title: 'What Next Studio Blog',
    description: 'Insights & Strategies for Digital Marketing Success',
    feed_url: `${siteUrl}/feed.xml`,
    site_url: siteUrl,
    image_url: `${siteUrl}/what-next-svg-logo.svg`,
    language: 'en',
    copyright: `${new Date().getFullYear()} What Next Studio. All rights reserved.`,
    pubDate: new Date(),
    ttl: 60,
  });

  // Add each blog post to the feed
  blogPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blogs/${post.slug}`,
      categories: [post.category],
      date: post.date,
      guid: `${siteUrl}/blogs/${post.slug}`,
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}