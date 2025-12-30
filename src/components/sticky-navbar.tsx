"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Calendar } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function StickyNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleBookMeeting = () => {
    window.open("https://cal.com/whatnextstudio", "_blank");
  };

  return (
    <div
      className={cn(
        "fixed top-10 left-0 right-0 z-50 transition-transform duration-300 flex justify-center px-4",
        isVisible ? "translate-y-0" : "-translate-y-32",
        className
      )}
    >
      {/* Hamburger Menu Icon (Visible on Mobile) */}
      <div className="md:hidden fixed top-10 right-4 z-[60]">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg bg-white dark:bg-neutral-900 text-gray-800 dark:text-white focus:outline-none shadow-lg border border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:inline-flex items-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg rounded-full shadow-lg px-6 py-2.5 max-w-full border border-gray-200 dark:border-neutral-700">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white font-medium transition-colors text-sm"
          >
            Home
          </Link>

          <Link
            href="/#services"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white font-medium transition-colors text-sm"
          >
            Services
          </Link>

          <Link
            href="/blogs"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white font-medium transition-colors text-sm"
          >
            Blogs
          </Link>

          <Link
            href="/success-stories"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white font-medium transition-colors text-sm"
          >
            Success Stories
          </Link>

          <Link
            href="/careers-page"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white font-medium transition-colors text-sm"
          >
            Get Hired
          </Link>

          <Link
            href="/contact-us"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white font-medium transition-colors text-sm"
          >
            Contact
          </Link>
          
          <Link
            href="/about-us"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white font-medium transition-colors text-sm"
          >
            About
          </Link>

          {/* Theme Toggle */}
          <div className="pl-2 border-l border-gray-300 dark:border-neutral-600">
            <ThemeToggle />
          </div>

          {/* Book a Meeting Button */}
          <button
            onClick={handleBookMeeting}
            className="px-5 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap text-sm"
          >
            <Calendar size={16} />
            Book a Meeting
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop/Overlay */}
          <div 
            className="md:hidden fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="md:hidden absolute top-14 left-0 right-0 mx-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg rounded-2xl shadow-2xl p-4 max-h-[80vh] overflow-y-auto border border-gray-200 dark:border-neutral-700 z-50">
            <div className="flex flex-col space-y-1">
              {/* Theme Toggle - Mobile */}
              <div className="flex items-center justify-between px-4 py-3 mb-2 rounded-lg bg-gray-50 dark:bg-neutral-800/50">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Theme</span>
                <ThemeToggle />
              </div>

              {/* Book a Meeting Button - Mobile */}
              <button
                onClick={() => {
                  handleBookMeeting();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-xl font-medium transition-all duration-300 shadow-md flex items-center justify-center gap-2 mb-2"
              >
                <Calendar size={18} />
                Book a Meeting
              </button>

              {/* Divider */}
              <div className="h-px bg-gray-200 dark:bg-neutral-700 my-2" />

              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors font-medium"
              >
                Home
              </Link>

              <Link
                href="/#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors font-medium"
              >
                Services
              </Link>

              <Link
                href="/blogs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors font-medium"
              >
                Blogs
              </Link>

              <Link
                href="/success-stories"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors font-medium"
              >
                Success Stories
              </Link>

              <Link
                href="/careers-page"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors font-medium"
              >
                Get Hired
              </Link>

              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors font-medium"
              >
                Contact
              </Link>

              <Link
                href="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors font-medium"
              >
                About
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}