"use client";

import { useState } from "react";
import { StickyNavbar } from "../../components/sticky-navbar";
import Footer from "@/components/footer";
import { ArrowUpRight } from "lucide-react";

interface Metric {
  label: string;
  value: string;
}

interface Story {
  id: number;
  slug: string;
  title: string;
  client: string;
  industry: string;
  excerpt: string;
  challenge: string;
  solution: string;
  results: string;
  testimonial: string;
  metrics: Metric[];
  services: string[];
}

interface SuccessStoriesClientProps {
  stories: Story[];
}

export function SuccessStoriesClient({ stories }: SuccessStoriesClientProps) {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  if (selectedStory) {
    const story = stories.find(s => s.id === selectedStory);
    
    if (!story) {
      return null;
    }

    return (
      <>
        <div className="bg-white dark:bg-black min-h-screen">
          <StickyNavbar />
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto">
              {/* Back Button */}
              <button 
                onClick={() => setSelectedStory(null)}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8 flex items-center gap-2"
              >
                ← Back to all stories
              </button>

              {/* Header */}
              <div className="mb-12">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-neutral-500 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-neutral-900 rounded text-gray-700 dark:text-neutral-400">{story.industry}</span>
                </div>
                <h1 className="text-3xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                  {story.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-neutral-400">
                  Client: <span className="text-gray-900 dark:text-white">{story.client}</span>
                </p>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {story.metrics.map((metric, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg p-4">
                    <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600 dark:text-neutral-400">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Challenge</h2>
                <p className="text-lg text-gray-700 dark:text-neutral-300 leading-relaxed">
                  {story.challenge}
                </p>
              </section>

              {/* Solution */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Solution</h2>
                <p className="text-lg text-gray-700 dark:text-neutral-300 leading-relaxed mb-6">
                  {story.solution}
                </p>
                <div className="bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg p-6">
                  <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Services Provided</h3>
                  <div className="flex flex-wrap gap-2">
                    {story.services.map((service, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 text-sm rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Results */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Results</h2>
                <p className="text-lg text-gray-700 dark:text-neutral-300 leading-relaxed">
                  {story.results}
                </p>
              </section>

              {/* Testimonial */}
              <section className="mb-16">
                <div className="bg-gray-100 dark:bg-neutral-900 border-l-4 border-gray-700 dark:border-neutral-700 p-8 rounded-r-lg">
                  <p className="text-xl text-gray-700 dark:text-neutral-300 italic leading-relaxed mb-3">
                    "{story.testimonial}"
                  </p>
                  <p className="text-gray-600 dark:text-neutral-500">— {story.client}</p>
                </div>
              </section>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-white dark:bg-black min-h-screen">
        <StickyNavbar />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-semibold text-gray-900 dark:text-white mb-6 mt-10">
              Success Stories
            </h1>
            <p className="text-lg text-gray-600 dark:text-neutral-400 text-center max-w-3xl mx-auto mb-20">
              Real transformations. Real results. Discover how we have helped brands achieve extraordinary growth through strategic marketing and innovative solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {stories.map((story) => (
                <article 
                  key={story.id}
                  className="group border border-gray-200 dark:border-neutral-800 rounded-lg p-6 hover:border-gray-400 dark:hover:border-neutral-700 transition-all cursor-pointer flex flex-col bg-white dark:bg-black"
                  onClick={() => setSelectedStory(story.id)}
                >
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-neutral-500 mb-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-neutral-900 rounded text-gray-700 dark:text-neutral-400">{story.industry}</span>
                  </div>
                  <h2 className="text-xl md:text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors">
                    {story.title}
                  </h2>
                  <p className="text-gray-600 dark:text-neutral-400 mb-3 text-sm">
                    {story.client}
                  </p>
                  <p className="text-gray-700 dark:text-neutral-300 leading-relaxed text-sm mb-6 flex-grow">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-neutral-800 mt-auto">
                    <div className="text-gray-600 dark:text-neutral-500 text-sm">
                      Read full case study
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-600 dark:text-neutral-400 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}