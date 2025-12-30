import { StickyNavbar } from "@/components/sticky-navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | What Next Studio",
  description:
    "Get in touch with What Next Studio today! Reach out for expert SEO, PPC Ads, Social Media Marketing (SMM), Content Creation, Email Marketing, Advertising, and Tracking services. Let's collaborate to grow your brand and achieve your marketing goals. Contact us now!",
  keywords: ["contact what next studio", "get in touch", "marketing consultation", "request quote", "marketing services"],
  openGraph: {
    title: "Contact Us | What Next Studio",
    description: "Let's collaborate to grow your brand and achieve your marketing goals. Get in touch today!",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <StickyNavbar />
      <div className="min-h-[80vh] pt-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Optional: Add a header section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
          
          {/* Iframe container with theme-aware styling */}
          <div className="bg-black-50 dark:bg-black-900 rounded-lg shadow-lg p-4 md:p-6">
            <iframe
              src="https://app.youform.com/forms/ji0zjott"
              loading="lazy"
              width="100%"
              height="700"
              className="border-0 rounded-md"
              title="Contact Form"
            ></iframe>
          </div>
        </div>
        <Footer />
    </div>
    </div>
  );
}
