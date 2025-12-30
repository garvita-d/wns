// src/components/footer.tsx
"use client";
import { Instagram, Linkedin, Rss } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();

  const handleSectionNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <>
      <footer className="bg-white dark:bg-black text-gray-900 dark:text-white dark:border-neutral-800">
        <div className="container mx-auto py-8 sm:py-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center">
            Follow us on social media:
          </h3>

          <div className="flex items-center justify-center space-x-4 sm:space-x-6">
            <Link
              href="https://www.instagram.com/whatnext_studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/whatnext-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
            </Link>
          </div>
        </div>
      </footer>

      {/* MAIN FOOTER */}
      <footer className="w-full border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-black text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
            <div className="flex items-center gap-4 max-w-md">
              {/* LOGO */}
              <div className="bg-white dark:bg-white p-1 rounded-md">
                <Image 
                  src="/what-next-svg-logo.svg" 
                  alt="What Next Studio Logo" 
                  width={120} 
                  height={40} 
                  className="scale-150 origin-center" 
                  priority 
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-neutral-400 max-w-xs text-center">
                Elevate your brand to global heights with creative strategies that deliver results.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2 items-center">
                <Link
                  href="/"
                  className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Home
                </Link>

                <a
                  href="/#services"
                  onClick={(e) => handleSectionNavigation(e, 'services')}
                  className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Services
                </a>

                <Link
                  href="/blogs"
                  className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Blogs
                </Link>

                <Link
                  href="/feed.xml"
                  target="_blank"
                  className="text-gray-600 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-sm cursor-pointer flex items-center gap-1"
                >
                  <Rss className="w-3 h-3" />
                  RSS Feed
                </Link>

                <Link
                  href="/success-stories"
                  className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Success Stories
                </Link>

                <Link
                  href="/careers-page"
                  className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Get Hired
                </Link>

                <Link
                  href="/contact-us"
                  className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Contact Us
                </Link>

                <Link
                  href="/about-us"
                  className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm cursor-pointer"
                >
                  About Us
                </Link>
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-neutral-800 py-6 flex justify-center items-center text-sm text-gray-600 dark:text-neutral-500">
            <p>© {currentYear} What Next Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}