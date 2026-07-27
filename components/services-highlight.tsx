// components/services-feature.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ServiceSlide {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

const slides: ServiceSlide[] = [
  {
    title: "Chiller Maintenance & Repair",
    subtitle: "Preventative Care & Maximum Efficiency",
    category: "Chiller Maintenance",
    description: "Scheduled mechanical servicing and rapid diagnostic care designed to eliminate unexpected breakdowns, lower operational power overhead, and protect heavy equipment lifespan.",
    image: "/images/air-conditioner.jpg",
    href: "/services/chiller-maintenance",
  },
  {
    title: "Temporary A/C Rentals",
    subtitle: "High-Capacity Climate Solutions",
    category: "Climate Solutions",
    description: "High-capacity portable cooling systems deployed instantly during facility retrofits, seasonal heat spikes, or emergency backup requirements.",
    image: "/images/AMC.jpg",
    href: "/services/ac-rentals",
  },
  {
    title: "Industrial Power Generators",
    subtitle: "Reliable Backup Power Systems",
    category: "Power Systems",
    description: "Reliable diesel backup power setups engineered to maintain complete operational stability and uninterrupted workflow through grid instability.",
    image: "/images/products/water-chilers.jpg",
    href: "/services/power-systems",
  },
];

export default function ServicesFeature() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const isHovered = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

    // Intersection Observer to track if component is on screen.
    // This ensures auto-slide pauses when the user scrolls away to other parts of the website.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-advance slide every 3 seconds only when visible on screen and not hovered
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      if (!isHovered.current) {
        handleSlideChange((currentIndex + 1) % slides.length);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, isVisible]);

  const handleSlideChange = (newIndex: number) => {
    setCurrentIndex(newIndex);
    setAnimKey((prev) => prev + 1);
  };

  const nextSlide = () => {
    handleSlideChange((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentIndex - 1 + slides.length) % slides.length);
  };

  const current = slides[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-950 overflow-hidden transition-colors duration-300"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Section Header with Staggered Dynamic Subtitle Animation */}
        <div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8"
          data-aos="fade-up"
        >
          <div className="max-w-2xl text-left space-y-2">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider block">
              What We Offer
            </span>
            <div className="overflow-hidden py-1">
              <h2 
                key={`subtitle-${animKey}`}
                className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards"
              >
                {current.subtitle}
              </h2>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Minimalist Dynamic Showcase View */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 transition-all duration-500 shadow-sm"
          data-aos="fade-up"
        >
          {/* Content Column with Dynamic Staggered Slide Animation */}
          <div 
            key={`content-${animKey}`}
            className="lg:col-span-6 space-y-6 text-left animate-in fade-in slide-in-from-left-6 duration-600 fill-mode-forwards"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-emerald-600 text-white px-3 py-1 rounded-full shadow-xs">
              {current.category}
            </span>

            <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              {current.title}
            </h3>

            <p className="text-base sm:text-lg font-normal text-slate-600 dark:text-slate-300 leading-relaxed">
              {current.description}
            </p>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href={current.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>

              {/* Indicator dots */}
              <div className="flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-700">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSlideChange(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx 
                        ? "w-8 bg-emerald-600 dark:bg-emerald-500" 
                        : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Image Column (Gradient overlays removed for clean presentation) */}
          <div className="lg:col-span-6 relative aspect-16/10 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-md border border-slate-200/60 dark:border-slate-800/60">
            <div 
              key={`image-${animKey}`}
              className="absolute inset-0 animate-in fade-in zoom-in-95 duration-700 fill-mode-forwards"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}