"use client";
import React, { useEffect } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { Cover } from "@/components/ui/cover";

export function Services() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToId = (id: string) => {
      let tries = 0;
      const maxTries = 30;
      const delay = 50;

      const attempt = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("ring", "ring-gray-900", "dark:ring-white", "rounded-2xl");
          setTimeout(() => {
            el.classList.remove("ring", "ring-gray-900", "dark:ring-white", "rounded-2xl");
          }, 1800);
          return;
        }
        tries++;
        if (tries <= maxTries) setTimeout(attempt, delay);
      };

      attempt();
    };

    const handleHash = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#")) {
        const id = hash.slice(1);
        if (id) scrollToId(id);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
      {/* Responsive Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-gray-800 via-gray-700 to-gray-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Services for <Cover>speedy results</Cover>
      </h1>

      {/* Responsive Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

const projects = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your website's visibility on search engines with our expert SEO strategies, driving organic traffic and improving your rankings.",
    link: "/contact-us",
  },
  {
    id: "ppc",
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Maximize your ROI with targeted PPC campaigns that deliver immediate results and connect you to your ideal audience.",
    link: "/contact-us",
  },
  {
    id: "smm",
    title: "Social Media Marketing (SMM)",
    description:
      "Engage your audience and grow your brand presence with tailored social media strategies across all major platforms.",
    link: "/contact-us",
  },
  {
    id: "email",
    title: "Email Marketing",
    description:
      "Build meaningful connections with your customers through personalized email campaigns that drive conversions and loyalty.",
    link: "/contact-us",
  },
  {
    id: "content",
    title: "Content Creation",
    description:
      "Captivate your audience with compelling content that aligns with your brand and keeps your customers coming back for more.",
    link: "/contact-us",
  },
  {
    id: "analytics",
    title: "Analytics and Tracking",
    description:
      "Make data-driven decisions with our comprehensive analytics and tracking services, providing insights to refine your marketing strategies.",
    link: "/contact-us",
  },
];