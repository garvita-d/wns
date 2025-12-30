"use client";
import React from "react";
import Image from "next/image";

interface Customer {
  id: number;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  industry: string;
  services: string[];
  website: string;
  logoStyle: {
    containerClass: string;
    imageClass: string;
  };
}

const customers: Customer[] = [
  {
    id: 1,
    name: "Tesseract Apps",
    logo: "/Tesseract-Apps.svg",
    tagline: "Streamlining Workforce and Care Operations",
    description:
      "Australian SaaS platform helping NDIS, aged care and health providers streamline workforce, payroll and compliance operations.",
    industry: "Technology & Software",
    services: [
      "Workforce Management",
      "NDIS Care Solutions",
      "Automation & Compliance",
    ],
    website: "tesseractapps.com.au",
    logoStyle: {
      containerClass: "w-24 h-16 sm:w-28 sm:h-20",
      imageClass: "object-contain scale-[1.25]",
    },
  },
  {
    id: 2,
    name: "Dalmia Hardware",
    logo: "/dh-full-logo.svg",
    tagline: "Comprehensive Hardware Solutions",
    description:
      "Leading Indian hardware supplier delivering professional tools, fittings and custom solutions for builders and businesses.",
    industry: "Hardware & Construction",
    services: ["Hardware Tools", "Fasteners & Fittings"],
    website: "dalmiahardware.com",
    logoStyle: {
      containerClass: "w-32 h-20",
      imageClass: "object-contain scale-[1.45]",
    },
  },
];

export default function CustomersSection() {
  return (
    <section id="customers" className="w-full bg-white dark:bg-black text-gray-900 dark:text-white py-20 sm:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-block mb-4">
            <span className="text-xl uppercase tracking-[0.2em] text-gray-500 dark:text-neutral-500 font-medium">
              Our Clients
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
            Trusted by Brands
            <br />
            That Think Big
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            We partner with visionary companies to create bold, boundary-pushing
            campaigns that resonate globally
          </p>
        </div>

        {/* Customers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="group relative bg-gradient-to-br from-gray-100/80 to-gray-50/80 dark:from-neutral-900/80 dark:to-neutral-950/80 backdrop-blur-sm border border-gray-200/50 dark:border-neutral-800/50 rounded-2xl overflow-hidden hover:border-gray-400/50 dark:hover:border-neutral-700/50 transition-all duration-500"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/0 via-gray-100/0 to-gray-50/10 dark:from-neutral-800/0 dark:via-neutral-700/0 dark:to-neutral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/5 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative z-10 p-6 sm:p-7">
                {/* Logo and Badge Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  {/* Logo Container */}
                  <div className="flex-shrink-0">
                    <div
                      className={`bg-white relative flex items-center justify-center shadow-md ${customer.logoStyle.containerClass}`}
                    >
                      <Image
                        src={customer.logo}
                        alt={`${customer.name} logo`}
                        fill
                        className={customer.logoStyle.imageClass}
                        priority
                      />
                    </div>
                  </div>

                  {/* Industry Badge */}
                  <div className="ml-4">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-gray-600 dark:text-neutral-500 bg-gray-200/80 dark:bg-neutral-800/80 px-3 py-1.5 rounded-full border border-gray-300/50 dark:border-neutral-700/50 whitespace-nowrap">
                      {customer.industry}
                    </span>
                  </div>
                </div>

                {/* Tagline */}
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {customer.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-neutral-400 italic leading-snug">
                    {customer.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-5">
                  {customer.description}
                </p>

                {/* Services Provided */}
                <div className="mb-6">
                  <p className="hidden sm:block text-xs uppercase tracking-wider text-gray-600 dark:text-neutral-500 mb-3 font-medium">
                    Services Delivered
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {customer.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-gray-700 dark:text-neutral-300 bg-gray-200/60 dark:bg-neutral-800/60 px-3 py-1.5 rounded-md border border-gray-300/30 dark:border-neutral-700/30"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Website Link */}
                <div className="pt-4 border-t border-gray-200/50 dark:border-neutral-800/50">
                  <a
                    href={`https://${customer.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group/link"
                  >
                    <span className="mr-2">Visit Website</span>
                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-900/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-14">
          <div className="inline-block">
            <p className="text-gray-600 dark:text-neutral-400 text-lg mb-6">
              Ready to elevate your brand to global heights?
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-black font-semibold px-10 py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Start Your Journey</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}