"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

const services: ServiceItem[] = [
  {
    title: "AC, Chillers & Genset Rentals",
    description: "High-performance chillers for all industrial and commercial cooling needs.",
    image: "/images/products/water-chilers.jpg",
    href: "/Services/AC-chillers",
  },
  {
    title: "Chilled Water Pipeline & Flushing",
    description: "Energy-efficient cold storage rooms for fresh and frozen products.",
    image: "/images/asethetic-ac.webp",
    href: "/Services/Water-chillers",
  },
  {
    title: "A/C, Chillers & Coldroom Maintenance",
    description: "Reliable heat exchangers for efficient thermal energy transfer.",
    image: "/images/pipe.jpg",
    href: "/Services/Coldroom-Maintenance",
  },
  {
    title: "Coil Manufacturing & Replacements",
    description: "Efficient air conditioning systems for residential and industrial applications.",
    image: "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoil-scrap.b104cf22.webp&w=1920&q=75",
    href: "/Services/coil-Manufacture",
  },
  {
    title: "Overhauling & Winding",
    description: "Efficient air conditioning systems for residential and industrial applications.",
    image: "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foverhauling-motor-winding.62ab296e.webp&w=1920&q=75",
    href: "/Services/overhauling",
  },
  {
    title: "AMC",
    description: "Comprehensive annual maintenance contracts for continuous, trouble-free operations.",
    image: "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-contract.daca051b.webp&w=1920&q=75",
    href: "/Services/amc",
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, href, index }) => {
  return (
    <Link
      href={href}
      data-aos="fade-up"
      data-aos-delay={index * 80}
      data-aos-duration="500"
      className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-sm dark:shadow-black/40 border border-gray-100 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:hover:border-emerald-500/50 flex flex-col group cursor-pointer"
    >
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-50 dark:bg-slate-800/65">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 sm:p-7 flex flex-col grow justify-between text-center space-y-2 bg-white dark:bg-slate-900/80">
        <h3 className="font-bold text-lg sm:text-xl text-[#183153] dark:text-white leading-snug group-hover:text-[#00b96b] dark:group-hover:text-emerald-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-[#6b7280] dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col overflow-x-hidden">
      <main className="grow relative">

        {/* Top sticky banner section */}
        <section className="sticky top-0 z-0 w-full h-[40vh] sm:h-[45vh] min-h-80 flex items-center justify-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="/images/pipe.jpg"
              alt="HVAC service background"
              fill
              priority
              className="object-cover object-center scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
          </div>

          {/* Top Right Back Button */}
          <div className="absolute top-17 right-4 sm:top-65 sm:right-6 z-20">
            <Link
              href="/"
              aria-label="Back to home page"
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              Back
            </Link>
          </div>

          <div 
            data-aos="zoom-in" 
            data-aos-duration="600"
            className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-3 pt-8 sm:pt-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Services
            </h1>
            <p className="text-gray-200 dark:text-gray-300 text-xs sm:text-sm md:text-base max-w-md sm:max-w-lg font-normal px-2">
              Explore our comprehensive catalog of commercial and industrial climate control infrastructure solutions.
            </p>
          </div>
        </section>

        {/* Clean Content Section sliding smoothly over the sticky hero background */}
        <section className="relative z-10 w-full bg-[#fafafa] dark:bg-slate-950 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 rounded-t-3xl shadow-[0_-15px_30px_rgba(0,0,0,0.08)] transition-colors duration-300">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
            
            {/* Intro Header Section */}
            <header data-aos="fade-up" data-aos-duration="500" className="max-w-2xl mx-auto text-center space-y-3 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#183153] dark:text-white tracking-tight">
                Provided Services
              </h2>
              <p className="text-[#6b7280] dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                Explore our full range of high-quality cooling and HVAC solutions engineered for performance, reliability, and long-term efficiency.
              </p>
            </header>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  index={index}
                />
              ))}
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}