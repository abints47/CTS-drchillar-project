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
    image: "/images/air-conditioner.jpg",
    href: "/Services/coil-Manufacture",
  },
  {
    title: "Overhauling & Winding",
    description: "Efficient air conditioning systems for residential and industrial applications.",
    image: "/images/air-conditioner.jpg",
    href: "/Services/overhauling",
  },
  {
    title: "AMC",
    description: "Comprehensive annual maintenance contracts for continuous, trouble-free operations.",
    image: "/images/AMC.jpg",
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
      <div className="relative w-full h-64 overflow-hidden bg-gray-50 dark:bg-slate-800/60">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-7 flex flex-col grow justify-between text-center space-y-2.5 bg-white dark:bg-slate-900/80">
        <h3 className="font-bold text-xl text-[#183153] dark:text-white leading-snug group-hover:text-[#00b96b] dark:group-hover:text-emerald-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-[#6b7280] dark:text-slate-400 text-sm leading-relaxed font-light">
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
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <main className="grow relative">

        {/* Top sticky banner section extending behind the navbar with identical height and alignment */}
        <section className="sticky top-0 z-0 w-full h-95 sm:h-110 flex items-center justify-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="/images/pipe.jpg"
              alt="HVAC service background"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
          </div>

          <div 
            data-aos="zoom-in" 
            data-aos-duration="600"
            className="relative z-10 max-w-300 w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-3 pt-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Services
            </h1>
            <p className="text-gray-200 dark:text-gray-300 text-sm sm:text-base max-w-lg font-normal">
              Explore our comprehensive catalog of commercial and industrial climate control infrastructure solutions.
            </p>

            <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2">
              <Link
                href="/"
                aria-label="Back to home page"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm border border-white/20 transition-all shadow-sm"
              >
                Back
              </Link>
            </div>
          </div>
        </section>

        {/* Clean Content Section sliding smoothly over the sticky hero background */}
        <section className="relative z-10 w-full bg-[#fafafa] dark:bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 rounded-t-3xl shadow-[0_-15px_30px_rgba(0,0,0,0.08)] transition-colors duration-300">
          <div className="max-w-7xl mx-auto space-y-16">
            
            {/* Intro Header Section */}
            <header data-aos="fade-up" data-aos-duration="500" className="max-w-2xl mx-auto text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#183153] dark:text-white tracking-tight">
                Provided Services
              </h2>
              <p className="text-[#6b7280] dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                Explore our full range of high-quality cooling and HVAC solutions engineered for performance, reliability, and long-term efficiency.
              </p>
            </header>

            {/* Services Grid with identical styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
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