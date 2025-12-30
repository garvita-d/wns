import type { Metadata } from "next";
import Footer from "@/components/footer";
import { Services } from "@/components/services";
import { StickyNavbar } from "@/components/sticky-navbar";
import TestimonialCarousel from "@/components/testimonial";
import HeroSection from "@/components/hero-section";
import CustomersSection from "@/components/our-customers";

export const metadata: Metadata = {
  title: "What Next Studio | Digital Marketing Agency",
  description:
    "What Next Studio is your one-stop marketing solution! We specialize in SEO, PPC Ads, Social Media Marketing (SMM), Content Creation, Email Marketing, Advertising, and Tracking. Boost your brand's online presence, drive traffic, and maximize ROI with our expert strategies.",
  keywords: ["digital marketing", "SEO", "PPC", "social media marketing", "content creation", "email marketing"],
  openGraph: {
    title: "What Next Studio | Digital Marketing Agency",
    description: "Elevate your brand to global heights with creative strategies that deliver results.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <StickyNavbar />
      <HeroSection />
      {/* <Partners /> */}
      <section id="#services">
        <Services />
      </section>
      <CustomersSection />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}