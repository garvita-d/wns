import { Metadata } from "next";
import { SuccessStoriesClient } from "./success-stories-client";

export const metadata: Metadata = {
  title: "Success Stories & Case Studies | What Next Studio",
  description:
    "Discover real transformations and measurable results. Explore our client success stories including ATD, 100N, Kortyard Cafe, VShine Car Spa, and Drive In SevenDays. Learn how we've helped brands achieve extraordinary growth through strategic marketing.",
  keywords: ["marketing case studies", "success stories", "client results", "marketing ROI", "brand transformation"],
  openGraph: {
    title: "Success Stories & Case Studies | What Next Studio",
    description: "Real transformations. Real results. See how we've helped brands achieve extraordinary growth.",
    type: "website",
  },
};

const successStories = [
  {
    id: 1,
    slug: "atd-brand-transformation",
    title: "Transforming Brand Presence Beyond Expectations",
    client: "ATD (Attention To Detail)",
    industry: "Professional Services",
    excerpt: "How we helped ATD achieve a 150% increase in organic traffic and 3x improvement in conversion rates through strategic digital transformation.",
    challenge: "ATD was struggling with an outdated online presence that failed to capture their brand essence and connect with their target audience. Their website looked dated, their social media presence was inconsistent, and they were losing ground to more digitally-savvy competitors. The brand needed a complete digital overhaul to reflect their attention to detail and professionalism.",
    solution: "What Next Studio developed a comprehensive digital strategy that started with understanding ATD's core values and target audience. We created a fresh, modern website design that showcased their meticulous approach to work. Our team implemented targeted SEO strategies focusing on high-intent keywords in their niche, revamped their content strategy to demonstrate thought leadership, and developed a cohesive social media presence across LinkedIn and Instagram. We also introduced marketing automation to nurture leads more effectively.",
    results: "ATD saw transformative results. Their website became a lead generation machine, their social media engagement skyrocketed, and they positioned themselves as industry leaders. The new brand presence not only attracted more clients but also helped them command premium pricing for their services.",
    testimonial: "What Next Studio transformed our brand's online presence with their creative strategies—results beyond expectations!",
    metrics: [
      { label: "Organic Traffic Increase", value: "150%" },
      { label: "Social Engagement Growth", value: "200%" },
      { label: "Conversion Rate Improvement", value: "3x" },
      { label: "Lead Quality Score", value: "+85%" }
    ],
    services: ["Brand Strategy", "Website Design", "SEO", "Social Media Marketing", "Marketing Automation"]
  },
  {
    id: 2,
    slug: "100n-vision-campaign",
    title: "Bringing a Vision to Life with Dedication and Innovation",
    client: "100N",
    industry: "Technology",
    excerpt: "A multi-channel campaign strategy that increased brand awareness by 85% and boosted lead generation by 40% for a growing tech company.",
    challenge: "100N, an emerging technology company, had a bold vision for disrupting their industry but struggled to articulate it effectively to their target market. Their marketing efforts were fragmented, lacking cohesion across channels, and failing to resonate with decision-makers. They needed a partner who could translate their technical innovation into compelling marketing narratives that would drive business growth.",
    solution: "Our team's innovative approach began with extensive stakeholder interviews and market research to truly understand 100N's unique value proposition. We developed a compelling brand narrative centered around innovation and customer success. The strategy included creating thought leadership content, launching targeted LinkedIn campaigns for B2B outreach, developing case studies and whitepapers, and implementing email nurture sequences. We also redesigned their website with a focus on storytelling and user experience, ensuring every touchpoint reflected their vision.",
    results: "The campaigns significantly enhanced brand recognition within their target industry. 100N saw a marked increase in qualified leads, improved customer engagement metrics, and established themselves as thought leaders in their space. The cohesive multi-channel approach ensured consistent messaging and maximum impact across all customer touchpoints.",
    testimonial: "Their team's dedication and innovative approach brought our vision to life. Highly recommend!",
    metrics: [
      { label: "Brand Awareness Increase", value: "85%" },
      { label: "Customer Retention Rate", value: "60%" },
      { label: "Lead Generation Boost", value: "40%" },
      { label: "Website Engagement", value: "+120%" }
    ],
    services: ["Brand Messaging", "Content Strategy", "B2B Marketing", "Website Redesign", "Email Marketing"]
  },
  {
    id: 3,
    slug: "kortyard-cafe-growth",
    title: "Skyrocketing Website Traffic and Customer Engagement",
    client: "Kortyard Cafe",
    industry: "Food & Beverage",
    excerpt: "Doubled website traffic and increased online orders by 250% for a local cafe through strategic SEO and digital marketing.",
    challenge: "Kortyard Cafe had a loyal local following but their online presence wasn't translating foot traffic into digital engagement or online orders. Their website was slow, difficult to navigate, and poorly optimized for search engines. In an increasingly competitive food & beverage market, they were losing potential customers to competitors with stronger digital presences. The cafe needed a rapid turnaround to capture the growing trend of online food ordering.",
    solution: "We implemented a rapid-response digital transformation strategy. First, we completely revamped their website with a focus on speed, mobile optimization, and seamless online ordering integration. Our SEO strategy targeted local search terms and food-related queries, while we enhanced their UX with appetizing food photography and intuitive navigation. We launched targeted PPC campaigns on Google and social media platforms, and created a content marketing strategy featuring recipes, behind-the-scenes content, and customer stories that drove organic engagement.",
    results: "Kortyard Cafe saw remarkable growth. Website traffic doubled, online orders surged by 250%, and they achieved a 4.8/5 average customer rating. The improved digital presence helped them compete effectively with larger chains while maintaining their unique local charm. Most importantly, the ROI on digital marketing exceeded expectations, making it their most profitable customer acquisition channel.",
    testimonial: "Thanks to What Next Studio, our website traffic and customer engagement have skyrocketed.",
    metrics: [
      { label: "Website Traffic Increase", value: "100%" },
      { label: "Online Orders Growth", value: "250%" },
      { label: "Customer Rating", value: "4.8/5" },
      { label: "Local Search Visibility", value: "+180%" }
    ],
    services: ["Website Redesign", "Local SEO", "PPC Advertising", "Content Marketing", "Online Ordering Integration"]
  },
  {
    id: 4,
    slug: "vshine-audience-connection",
    title: "Connecting Campaigns to Audience Needs Perfectly",
    client: "VShine Car Spa",
    industry: "Automotive Services",
    excerpt: "Achieved a 180% increase in booking rates and 90% customer satisfaction through data-driven, audience-centric campaigns.",
    challenge: "VShine Car Spa offered premium car detailing services but struggled to communicate their value proposition effectively. Their marketing was generic, failing to address the specific pain points and desires of their target audience—busy professionals and car enthusiasts who valued quality and convenience. Without clear audience segmentation and personalized messaging, their campaigns generated low engagement and even lower conversion rates.",
    solution: "Our team conducted extensive audience research, including surveys, interviews, and behavioral analysis to understand what truly mattered to VShine's customers. We developed detailed buyer personas and created personalized campaign strategies for each segment. For busy professionals, we emphasized convenience and time-saving benefits; for car enthusiasts, we highlighted premium products and meticulous attention to detail. We implemented targeted digital advertising across Google and Facebook, created educational content about car care, and developed a loyalty program that encouraged repeat business.",
    results: "The audience-centric approach yielded impressive results. Booking rates increased by 180%, customer satisfaction scores reached 90%, and repeat customer growth surged by 65%. More importantly, VShine established stronger emotional connections with their customers, turning one-time service users into brand advocates who actively recommended the spa to friends and family.",
    testimonial: "They understood our needs perfectly and delivered campaigns that truly connected with our audience.",
    metrics: [
      { label: "Booking Rate Increase", value: "180%" },
      { label: "Customer Satisfaction", value: "90%" },
      { label: "Repeat Customer Growth", value: "65%" },
      { label: "Referral Rate", value: "+45%" }
    ],
    services: ["Audience Research", "Persona Development", "Targeted Advertising", "Content Marketing", "Loyalty Programs"]
  },
  {
    id: 5,
    slug: "sevendays-marketing-partnership",
    title: "A Game-Changing Partner for Marketing Success",
    client: "Drive In SevenDays",
    industry: "Automotive Retail",
    excerpt: "Delivered 300% ROI on marketing spend and 120% increase in qualified leads through comprehensive, integrated marketing solutions.",
    challenge: "Drive In SevenDays, an automotive retail company, was struggling with inconsistent marketing efforts managed by multiple vendors with no cohesive strategy. This fragmented approach resulted in wasted budget, conflicting brand messages, and poor ROI. They needed a reliable, professional partner who could integrate all marketing functions—from SEO and content to PPC and social media—under one strategic umbrella while delivering measurable business results.",
    solution: "What Next Studio became Drive In SevenDays full-service marketing partner, implementing a comprehensive strategy that aligned all channels toward common business goals. We developed an integrated SEO strategy to dominate local and regional automotive searches, created high-quality content showcasing their inventory and expertise, managed sophisticated PPC campaigns across Google and social platforms, and built a strong social media presence that engaged both buyers and car enthusiasts. Our team provided regular reporting and strategic consultation, ensuring transparency and continuous improvement.",
    results: "The partnership resulted in transformative growth. Drive In SevenDays achieved a 300% ROI on their marketing investment, saw a 120% increase in qualified leads, and garnered over 50 positive customer reviews that strengthened their reputation. The integrated approach eliminated waste, maximized impact, and provided the professional reliability they had been seeking. Most importantly, the partnership freed up their internal team to focus on sales and customer service while we handled all marketing complexities.",
    testimonial: "Professional, reliable, and incredibly talented—What Next Studio is a game-changer for marketing.",
    metrics: [
      { label: "Marketing ROI", value: "300%" },
      { label: "Qualified Leads Increase", value: "120%" },
      { label: "Positive Reviews", value: "50+" },
      { label: "Cost Per Lead Reduction", value: "-40%" }
    ],
    services: ["Full-Service Marketing", "SEO", "Content Marketing", "PPC Management", "Social Media Marketing", "Analytics & Reporting"]
  }
];

export default function SuccessStoriesPage() {
  return <SuccessStoriesClient stories={successStories} />;
}