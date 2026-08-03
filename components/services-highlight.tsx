'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  title: string;
  highlightWord?: string;
  description: string;
}

interface ServicesHighlightProps {
  slides?: Slide[];
  title?: string;
  highlightWord?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  bgImageSrc?: string;
}

const DEFAULT_SLIDES: Slide[] = [
  {
    title: "Your Trusted Partner in HVAC & Cooling Solutions",
    highlightWord: "Cooling Solutions",
    description: "Whether it's routine maintenance, emergency repairs, or complete cooling system installations, CTS delivers reliable engineering services that keep your operations running smoothly.",
  },
  {
    title: "Precision Chiller Repairs & Preventive Care",
    highlightWord: "Preventive Care",
    description: "Extend the lifecycle of your cooling plant with dedicated maintenance contracts, rapid response teams, and expert technical diagnostics.",
  },
  {
    title: "Advanced Cooling Solutions Built for Performance & Reliability",
    highlightWord: "Performance & Reliability",
    description: "CTS combines advanced technology and engineering expertise to deliver custom HVAC solutions that boost efficiency, lower downtime, and extend equipment life.",
  }
];

export default function ServicesHighlight({
  slides,
  title = "Your Trusted Partner in HVAC & Cooling Solutions",
  highlightWord = "Cooling Solutions",
  description = "Whether it's routine maintenance, emergency repairs, or complete cooling system installations, CTS delivers reliable engineering services that keep your operations running smoothly.",
  ctaText = "Explore Our Services",
  ctaLink = "/Services",
  bgImageSrc = "/images/AMC.jpg",
}: ServicesHighlightProps) {
  // Use custom slides array if passed, otherwise fall back to default slides
  const activeSlides = slides || [
    { title, highlightWord, description },
    ...DEFAULT_SLIDES.slice(1)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Function to switch to a specific slide smoothly
  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsVisible(true);
    }, 300);
  };

  // Auto-play interval every 4 seconds (4000ms)
  useEffect(() => {
    if (activeSlides.length <= 1) return;

    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
        setIsVisible(true);
      }, 400);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeSlides.length]);

  const currentSlide = activeSlides[currentIndex];

  // Helper to highlight specific key word in the main title
  const renderTitle = (text: string, targetWord?: string) => {
    if (targetWord && text.includes(targetWord)) {
      const parts = text.split(targetWord);
      return (
        <>
          {parts[0]}
          <span className="text-[#00b85c] font-semibold">{targetWord}</span>
          {parts[1]}
        </>
      );
    }

    const words = text.trim().split(' ');
    if (words.length <= 1) return text;

    const lastWord = words.pop();
    return (
      <>
        {words.join(' ')}{' '}
        <span className="text-[#00b85c] font-semibold">{lastWord}</span>
      </>
    );
  };

  return (
    <section className="relative w-full h-[70vh] min-h-125 flex items-center justify-start overflow-hidden bg-black font-sans antialiased">
      {/* Background Image & Light Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageSrc}
          alt="Services Highlight Background"
          fill
          priority
          className="w-full h-full object-cover object-center"
        />
        {/* Softer gradient overlay on the left */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/35 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-350 mx-auto px-4 sm:px-8 lg:px-12 text-left">
        <div className="max-w-xl flex flex-col items-start gap-5">

          {/* 1. MAIN HEADING & 2. PARAGRAPH (Fades every 4s) */}
          <div
            className={`transition-all duration-500 ease-in-out flex flex-col items-start gap-5 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
            }`}
          >
            <h1 
              data-aos="fade-up" 
              data-aos-duration="700"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-300 tracking-tight leading-[1.15] drop-shadow-md text-left whitespace-pre-line max-w-xl"
            >
              {renderTitle(currentSlide.title, currentSlide.highlightWord)}
            </h1>

            <p 
              data-aos="fade-up" 
              data-aos-duration="700" 
              data-aos-delay="150"
              className="text-base sm:text-lg font-light text-slate-100 leading-relaxed max-w-lg text-left drop-shadow"
            >
              {currentSlide.description}
            </p>
          </div>

          {/* 3. CALL TO ACTION (CTA) */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="700" 
            data-aos-delay="300"
            className="pt-2"
          >
            <Link
              href={ctaLink}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-[#089e53] hover:bg-[#098f4c] rounded-lg shadow-lg shadow-emerald-950/40 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            >
              {ctaText}
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* 4. ANIMATION INDICATOR MARKS (DOTS) */}
          {activeSlides.length > 1 && (
            <div className="flex items-center gap-2 pt-3">
              {activeSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    currentIndex === index
                      ? 'w-7 bg-[#00b85c]'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}