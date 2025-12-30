"use client";

import React, { useState } from 'react';
import { StickyNavbar } from "../../components/sticky-navbar";
import Footer from "@/components/footer";
import { ArrowRight, MapPin, Clock, Mail, Briefcase, Users, Target, Zap, TrendingUp } from 'lucide-react';

interface Position {
  title: string;
  category: string;
  description: string;
  remote: boolean;
  fullTime: boolean;
}

interface Benefit {
  title: string;
  description: string;
}

interface CareersClientProps {
  positions: Position[];
  benefits: Benefit[];
  values: string[];
  filters: string[];
}

export function CareersClient({ positions, benefits, values, filters }: CareersClientProps) {
  const [activeFilter, setActiveFilter] = useState('View all');

  const filteredPositions = activeFilter === 'View all' 
    ? positions 
    : positions.filter(pos => pos.category === activeFilter);

  const handleSendEmail = (jobTitle: string) => {
    const email = "hello@whatnextstudio.com"; 
    const subject = encodeURIComponent(jobTitle);
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
    window.open(mailtoLink, '_blank');
  };

  const benefitIcons = [
    <MapPin className="w-6 h-6" key="mappin" />,
    <Users className="w-6 h-6" key="users" />,
    <Target className="w-6 h-6" key="target" />,
    <TrendingUp className="w-6 h-6" key="trending" />
  ];

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      <StickyNavbar />
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="text-center">
          <div className="inline-block bg-gray-900 dark:bg-white text-white dark:text-black text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            We are hiring!
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            Be part of our mission
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed px-4">
            We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {filters.map((filter) => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-black' 
                    : 'bg-transparent border border-gray-300 dark:border-neutral-600 text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="space-y-4 sm:space-y-6">
            {filteredPositions.map((position, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-800 rounded-lg p-5 sm:p-6 lg:p-8 hover:border-gray-400 dark:hover:border-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-neutral-900/50 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {position.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 mb-3 sm:mb-4 leading-relaxed">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {position.remote && (
                        <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700 dark:text-neutral-300 bg-gray-200 dark:bg-neutral-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          100% remote
                        </span>
                      )}
                      {position.fullTime && (
                        <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700 dark:text-neutral-300 bg-gray-200 dark:bg-neutral-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          Full-time
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-auto lg:flex-shrink-0">
                    <button
                      onClick={() => handleSendEmail(position.title)}
                      className="bg-gray-900 dark:bg-white text-white dark:text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-gray-800 dark:hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 group/btn w-full lg:w-auto justify-center hover:shadow-lg hover:shadow-gray-300/20 dark:hover:shadow-white/20"
                    >
                      <Mail className="w-4 h-4" />
                      Send Email
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="border-t border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-center">
            Why Join What Next?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            We're building a studio where great work meets great culture
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-black border border-gray-200 dark:border-neutral-800 rounded-lg p-5 sm:p-6 text-center hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-neutral-900/50 group cursor-pointer"
              >
                <div className="text-gray-900 dark:text-white mb-3 sm:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefitIcons[index]}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-neutral-400 group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
            What We Value
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-800 rounded-lg p-3 sm:p-4 hover:border-gray-400 dark:hover:border-neutral-600 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors flex-shrink-0" />
                  <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-neutral-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-left">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 text-gray-900 dark:text-white" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 leading-tight px-4">
            Don't see your role?<br />Let's talk anyway.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-neutral-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            We're always looking for talented people who share our values. Send us your portfolio and let's explore what's possible.
          </p>
          <button
            onClick={() => handleSendEmail("General Application")}
            className="bg-gray-900 dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-base font-semibold hover:bg-gray-800 dark:hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 mx-auto group hover:shadow-lg hover:shadow-gray-300/20 dark:hover:shadow-white/20"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Get in Touch
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}