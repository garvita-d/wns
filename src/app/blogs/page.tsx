import {StickyNavbar} from "../../components/sticky-navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowUpRight, Rss } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Insights & Blog | What Next Studio",
  description:
    "Stay informed with the latest digital marketing insights, industry updates, and proven strategies. Explore blogs on SEO, PPC, social media marketing, content strategy, AI automation, and more to elevate your brand globally.",
  keywords: ["digital marketing blog", "SEO tips", "PPC strategies", "social media marketing", "content marketing", "marketing trends 2025"],
  openGraph: {
    title: "Digital Marketing Insights & Blog | What Next Studio",
    description: "Insights & strategies for digital marketing success. Expert articles on SEO, PPC, social media, and more.",
    type: "website",
  },
};

const blogPosts = [
    {
        id: 1,
        title: "The Future of Global Digital Marketing: Trends and Predictions",
        description: "Global digital marketing in 2025 is defined by rapid advancements in AI, increasing social media prominence, and evolving consumer behavior. Key trends include AI-powered personalization that allows brands to target consumers more precisely, the shift towards video-first content especially on mobile, and growing importance of social commerce as users shop directly from platforms like Instagram and TikTok.",
        category: "Digital Marketing",
        slug: "future-of-digital-marketing"
    },
    {
        id: 2,
        title: "Practical SEO Tips to Boost Your Website Traffic in 2025",
        description: "SEO remains fundamental to online visibility, but evolving algorithms and AI require marketers to adapt. To boost traffic today, focus on creating content that matches user intent with conversational keywords and answers common questions clearly. Use structured data markup to help search engines understand your pages and enable featured snippets.",
        category: "SEO",
        slug: "seo-tips"
    },
    {
        id: 3,
        title: "How PPC Campaigns Can Maximize ROI in a Changing Landscape",
        description: "PPC remains indispensable but requires strategic targeting to maximize returns. Employ AI-powered bidding to optimize ad spend dynamically. Utilize audience segmentation to personalize ad copy and offers. Testing ad formats, such as responsive search ads and video ads, can increase engagement.",
        category: "PPC",
        slug: "ppc-campaigns"
    },
    {
        id: 4,
        title: "Harnessing Social Media for Authentic Brand Engagement",
        description: "Successful social media marketing hinges on building genuine community rather than solely broadcasting messages. Engage your audience by encouraging interaction through polls, questions, and user-generated content. Collaborate with micro-influencers who have loyal niche followings to boost authenticity.",
        category: "Social Media",
        slug: "social-media-engagement"
    },
    {
        id: 5,
        title: "Role of AI and Automation in Digital Marketing Success",
        description: "AI is transforming marketing by enhancing efficiency and enabling advanced personalization. Marketers now use machine learning for predictive customer behavior modeling, automated content creation, and chatbots that provide 24/7 customer support. Tools such as ChatGPT generate ideas and draft copy, speeding up workflows.",
        category: "AI & Technology",
        slug: "ai-automation-marketing"
    },
    {
        id: 6,
        title: "Content Marketing That Converts: Key Strategies for 2025",
        description: "Effective content marketing balances creativity with clear goals. Personalization is critical—dynamic content tailored to user segments performs better. Incorporate storytelling techniques to build trust and emotional resonance. Use diverse formats like blogs, videos, infographics, and podcasts to cater to varying preferences.",
        category: "Content Marketing",
        slug: "content-marketing-strategies"
    },
    {
        id: 7,
        title: "Email Marketing Best Practices for Customer Retention",
        description: "Email marketing remains a powerful retention tool with a reach of four billion daily users. Personalize emails based on user behavior and preferences to increase open and click rates. Segment lists to deliver targeted offers and content. Timing matters—test send times to find when your audience is most responsive.",
        category: "Email Marketing",
        slug: "email-marketing-retention"
    },
    {
        id: 8,
        title: "Leveraging Analytics to Make Data-Driven Marketing Decisions",
        description: "Data analytics is at the heart of effective marketing strategies today. Use robust analytics platforms to track campaigns across channels, collect customer insights, and assess ROI. Predictive analytics can forecast trends and customer needs, allowing proactive strategy adjustments.",
        category: "Analytics",
        slug: "analytics-marketing-decisions"
    },
    {
        id: 9,
        title: "Navigating Privacy Laws and Data Protection in Marketing",
        description: "With growing regulatory scrutiny, marketers must prioritize GDPR and other privacy laws compliance. Obtain clear, informed consent before collecting data and provide options for users to access or delete their data. Implement privacy-by-design principles in marketing tools.",
        category: "Legal & Compliance",
        slug: "privacy-laws-marketing"
    },
    {
        id: 10,
        title: "How to Create a Digital Marketing Strategy That Aligns with Business Goals",
        description: "Align marketing efforts directly with business objectives for maximum impact. Start by defining clear KPIs and target audiences. Assess resources and budget realistically. Develop an integrated plan across channels such as SEO, social, email, PPC, and content marketing.",
        category: "Strategy",
        slug: "digital-marketing-strategy"
    }
];

export default function BlogsPage() {
    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <StickyNavbar />
            <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-16 sm:mt-20 relative z-20 py-4 sm:py-6 text-gray-900 dark:text-white">
                    Blogs
                </h1>
                <div className="text-gray-900 dark:text-white text-center text-lg sm:text-xl mb-3 sm:mb-4 px-4">
                    Insights & Strategies for Digital Marketing Success.
                </div>
                <div className="text-gray-600 dark:text-neutral-400 text-center max-w-4xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-4">
                    Stay informed with latest insights, industry updates, and practical strategies designed to elevate your digital marketing game. Dive deep into the latest trends, proven tactics, and thoughtful analyses that empower your brand to grow globally and connect authentically with your audience.
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {blogPosts.map((post) => (
                        <Link 
                            key={post.id} 
                            href={`/blogs/${post.slug}`}
                            className="group border border-gray-200 dark:border-neutral-800 rounded-lg p-6 hover:border-gray-400 dark:hover:border-neutral-700 transition-all cursor-pointer flex flex-col bg-white dark:bg-black"
                        >
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-neutral-500 mb-3">
                                <span className="px-3 py-1 bg-gray-100 dark:bg-neutral-900 rounded text-gray-700 dark:text-neutral-400">{post.category}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-700 dark:text-neutral-300 text-sm leading-relaxed mb-6 flex-grow">
                                {post.description}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-neutral-800 mt-auto">
                                <div className="text-gray-600 dark:text-neutral-500 text-sm">
                                    Read article
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-gray-600 dark:text-neutral-400 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}