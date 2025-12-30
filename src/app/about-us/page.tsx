import { Metadata } from "next";
import {StickyNavbar} from "../../components/sticky-navbar";
import React from 'react';
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Target, Lightbulb, TrendingUp, Sparkles, CheckCircle2, Zap, Eye, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "About Us | What Next Studio",
  description:
    "Learn about What Next Studio - a creative digital marketing agency specializing in brand strategy, user experience design, and growth marketing. We design brands people remember through radical clarity and thoughtful simplicity.",
  keywords: ["about what next studio", "digital marketing agency", "brand strategy", "creative agency", "UX design"],
  openGraph: {
    title: "About Us | What Next Studio",
    description: "We design brands people remember. Creative strategy, brand experiences and digital products for companies who want to be remarkable.",
    type: "website",
  },
};

export default function AboutUsPage() {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategy",
      items: [
        "Brand positioning & research",
        "Messaging & storytelling",
        "Competitor & audience analysis"
      ]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Experience",
      items: [
        "UX/UI & web design",
        "Webflow & React builds",
        "Prototypes & visual systems"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth",
      items: [
        "Digital campaigns",
        "Performance strategy",
        "Conversion optimization"
      ]
    }
  ];

  const process = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Discovery",
      description: "We learn what you're solving"
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Strategy",
      description: "We map your brand meaningfully"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Design",
      description: "We make it beautiful and useful"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Build",
      description: "We ship solid digital products"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Grow",
      description: "We help you measure + evolve"
    }
  ];

  const values = [
    { title: "Radical clarity", description: "Clear thinking, clear outcomes" },
    { title: "Collaborative ideas", description: "Better together than alone" },
    { title: "Thoughtful simplicity", description: "Complexity made elegant" },
    { title: "Measurable impact", description: "Results that matter" },
    { title: "Lifelong curiosity", description: "Always learning, always growing" }
  ];

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
        <StickyNavbar />
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
          We design brands<br />people remember.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Creative strategy, brand experiences and digital products for companies who want to be remarkable, not just seen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/success-stories">
            <button className="bg-gray-900 dark:bg-white text-white dark:text-black px-7 py-3.5 rounded-md font-semibold hover:bg-gray-800 dark:hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 group">
              See Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/contact-us">
            <button className="border border-gray-300 dark:border-neutral-600 px-7 py-3.5 rounded-md font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all duration-300">
              Start a Project
            </button>
          </Link>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="border-t border-gray-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Why We Exist
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed mb-5">
            Great design isn't decoration — it's a strategy that sparks growth. We partner with companies who are ambitious, curious, and ready to elevate their brand with meaning and impact.
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed">
            We started What Next to break the cycle of "good enough" digital work. For us, every brand deserves strategy first, creativity second, and magic third.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-t border-gray-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            What We Do
          </h2>
          <p className="text-base text-gray-600 dark:text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            End-to-end creative solutions designed to move brands forward
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-800 rounded-lg p-6 hover:border-gray-400 dark:hover:border-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-neutral-900/50 hover:-translate-y-1 group"
              >
                <div className="mb-4 text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-2.5">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 dark:text-neutral-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gray-400 dark:text-neutral-500 mt-0.5 flex-shrink-0 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="border-t border-gray-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            How We Work
          </h2>
          <p className="text-base text-gray-600 dark:text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            A clear, collaborative process that delivers results
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-900 dark:bg-white text-white dark:text-black w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-300/20 dark:group-hover:shadow-white/20 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-base font-semibold mb-1.5 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{step.title}</h3>
                <p className="text-xs text-gray-600 dark:text-neutral-400 group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-t border-gray-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            Our Values
          </h2>
          <p className="text-base text-gray-600 dark:text-neutral-400 text-center mb-12">
            What guides everything we do
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-800 rounded-lg p-5 text-center hover:border-gray-900 dark:hover:border-white hover:bg-gray-100 dark:hover:bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-neutral-900/50 group cursor-pointer"
              >
                <CheckCircle2 className="w-6 h-6 mx-auto mb-3 text-gray-400 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                <p className="text-base font-semibold mb-1">{value.title}</p>
                <p className="text-xs text-gray-600 dark:text-neutral-400 group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="border-t border-gray-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Who We Work With
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed mb-8">
            We collaborate with startups building their first digital presence, growing companies ready to scale, established brands seeking a refresh, and founders who care about quality and impact.
          </p>
          <p className="text-lg font-semibold">
            If you value thoughtful design and long-term growth, you'll fit right in.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="border-l-4 border-gray-900 dark:border-white pl-6 text-left max-w-3xl mx-auto hover:border-gray-600 dark:hover:border-neutral-400 transition-colors duration-300">
            <blockquote className="text-lg sm:text-xl font-light text-gray-700 dark:text-neutral-300 italic mb-4">
              "Working with What Next helped us reframe our business storytelling and double our engagement within 6 months"
            </blockquote>
            <p className="text-sm text-gray-600 dark:text-neutral-400 font-semibold">— Happy Client</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Let's build something<br />meaningful together.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
            If you're ready to elevate your brand, clarify your message, and create digital experiences that matter — we'd love to talk.
          </p>
          <Link href="/contact-us">
            <button className="bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-md font-semibold text-base hover:bg-gray-800 dark:hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 mx-auto group hover:shadow-lg hover:shadow-gray-300/20 dark:hover:shadow-white/20">
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}