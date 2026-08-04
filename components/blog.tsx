"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    slug: "preventative-chiller-maintenance",
    category: "Chiller Maintenance",
    title: "Preventative Maintenance Tips for Maximum Efficiency",
    excerpt:
      "Discover how routine mechanical check-ups prevent critical industrial chiller breakdowns, cut power overhead, and extend heavy equipment lifespan.",
    image: "/images/air-conditioner.jpg",
    date: "Jan 20, 2027",
    readTime: "4 min read",
  },
  {
    slug: "temporary-ac-rentals",
    category: "Climate Solutions",
    title: "When to Scale Up with Temporary A/C Rentals",
    excerpt:
      "A comprehensive guide on deploying high-capacity temporary cooling units during facility retrofits, expansions, or emergency peak loads.",
    image: "/images/AMC.jpg",
    date: "Jan 19, 2027",
    readTime: "5 min read",
  },
  {
    slug: "diesel-generator-reliability",
    category: "Power Systems",
    title: "Ensuring Absolute Reliability in Diesel Generators",
    excerpt:
      "Best practices for maintaining industrial backup power systems to secure zero-downtime operations through grid instabilities.",
    image: "/images/products/water-chilers.jpg",
    date: "Jan 18, 2027",
    readTime: "6 min read",
  },
];

export default function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Structure */}
        <div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-200 dark:border-slate-800 pb-8"
          data-aos="fade-up"
        >
          <div className="max-w-3xl text-left">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm tracking-wider mb-2 block">
              Our Blog & Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white tracking-tight">
              Latest Articles & Industry News
            </h2>
            <p className="mt-5 pb-2 text-base sm:text-lg font-normal text-slate-600 dark:text-slate-400 tracking-normal">
              Stay informed with expert insights, industry updates, maintenance tips, and the latest innovations in cooling and refrigeration solutions.
            </p>
            <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-500 mt-4 rounded-full" />
          </div>

          <Link
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-xl bg-[#1FAA6D] hover:bg-[#188B58] dark:bg-emerald-600 dark:hover:bg-emerald-500 border border-emerald-600/20 dark:border-emerald-500/30 px-6 py-3.5 text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-emerald-600/20 group shrink-0"
          >
            <span className="text-white font-medium transition-colors">
              Browse All Articles
            </span>
            <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-slate-50 hover:bg-white dark:bg-slate-900/40 dark:hover:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl dark:hover:shadow-emerald-950/20 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            > 
              <article className="flex-1 flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent opacity-40" />
                </div>

                {/* Content Body */}
                <div className="flex-1 flex flex-col justify-between p-6 sm:p-7 space-y-6">
                  <div className="space-y-3">
                    {/* Metadata line */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-700 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm font-normal text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile View All CTA Button */}
        <div 
          className="mt-12 sm:hidden flex justify-center"
          data-aos="fade-up"
        >
          <Link
            href="/blog"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white transition-all duration-300"
          >
            <span>Browse All Articles</span>
            <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}