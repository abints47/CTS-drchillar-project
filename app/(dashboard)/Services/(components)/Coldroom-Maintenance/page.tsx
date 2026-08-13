"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  AirVent,
  Fuel,
  Zap,
  Wrench,
  Droplets,
  Asterisk,
} from "lucide-react";

// ==========================================
// DATA STRUCTURE
// ==========================================

const serviceData = {
  titleMain: "A/C, Chiller & Cold",
  titleHighlight: "Room Maintenance",
  subtitle: "AC, Chiller & Cold Room Maintenance",
  heading: "Preventive Corrective Annual Contracts",
  description:
    "We provide complete servicing, troubleshooting and refurbishment for all types of AC, chiller and cold room systems. From mechanical repairs to regular cleaning and flushing, our qualified technicians keep your equipment running efficiently and avoid costly breakdowns.",
  heroImage: "/images/products/engine.jpg",
  services: [
    {
      title: "Installation of New / Used Units",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaintenance-installation.be1c6291.webp&w=1920&q=75",
      icon: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Professional installation and commissioning of AC, chillers and cold room units.",
      features: [
        "Cold room AC systems",
        "Industrial chillers (new & refurbished)",
      ],
    },
    {
      title: "Spare Parts Replacement",
      image:
        "https://images.unsplash.com/photo-1632496497047-706290273235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhcmUlMjBwYXJ0cyUyMEFDfGVufDB8fDB8fHww",
      icon: <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Original spare parts for reliable, long lasting performance.",
      features: [
        "Control valves & sensors",
        "Compressors, fans, motors",
      ],
    },
    {
      title: "Condenser Coil Replacement",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaintenance-condenser-coil.bb19a2f5.webp&w=1920&q=75",
      icon: <Fuel className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Faulty condenser coils replaced with high-efficiency models.",
      features: [
        "High-efficiency coils",
        "Quick on-site retrofit",
      ],
    },
    {
      title: "Duct Cleaning",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaintenance-duct-cleaning.5878bcf3.webp&w=1920&q=75",
      icon: <AirVent className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Thorough duct cleaning to improve air quality and airflow.",
      features: [
        "Removal of dust & microbial growth",
        "Improves airflow performance",
      ],
    },
    {
      title: "Electric Panel Rewiring",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaintenance-electric-panel.1afb70e0.webp&w=1920&q=75",
      icon: <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Repair and rewiring of electrical control panels for safe operation.",
      features: [
        "Control panel overhauling",
        "Wiring upgrades & safety checks",
      ],
    },
    {
      title: "Gas Leak Arresting & Water Servicing",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaintenance-water-service.885ecf9f.webp&w=1920&q=75",
      icon: <Droplets className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Complete refrigerant leak detection and water servicing of systems.",
      features: [
        "Leak detection & refrigerant recharge",
        "Full water service of condensing units",
      ],
    },
  ],
  relatedProducts: [
    {
      title: "Chilled Water Pipelines & Flushing",
      description: "Comprehensive maintenance services to keep your units running efficiently.",
      image: "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpipe-insulation.4e80be19.webp&w=1920&q=75",
      href: "/Services/Water-chillers",
    },
    {
      title: "Overhauling & Winding",
      description:
        "Professional overhauling and winding services to extend equipment lifespan.",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foverhauling-motor-winding.62ab296e.webp&w=1920&q=75",
      href: "/Services/overhauling",
    },
    {
      title: "Coil Manufacturing & Replacement",
      description:
        "Custom coil manufacturing and replacement services for various cooling systems.",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoil-anti-corrosion-coating.e25cf23b.webp&w=640&q=75",
      href: "/Services/coil-Manufacture",
    },
  ],
};

// ==========================================
// COMPONENTS
// ==========================================

function HeroSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 flex items-center justify-center overflow-hidden bg-gray-900 dark:bg-black transition-colors duration-300">
      <div className="absolute inset-0">
        <img
          src={serviceData.heroImage}
          alt={serviceData.titleMain}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Top Action Buttons */}
      <div className="absolute top-47 right-4 sm:top-45 sm:right-6 z-20 flex items-center gap-3">
        <Link
          href="/Services"
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-2 transition-all shadow-lg text-sm font-medium"
          aria-label="Back"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back</span>
        </Link>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          {serviceData.titleMain}{" "}
          <span className="block sm:inline text-emerald-500 mt-1 sm:mt-0">
            {serviceData.titleHighlight}
          </span>
        </h1>
      </motion.div>
    </section>
  );
}

function IntroductionSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Section */}
        <motion.div
          className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-emerald-600 dark:text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-white dark:bg-emerald-950/50 px-3 py-1 rounded-full">
            {serviceData.subtitle}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-normal leading-snug">
            {serviceData.heading}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            {serviceData.description}
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="lg:col-span-6 flex justify-center w-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg lg:max-w-none aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-zinc-800">
            <Image 
              src="https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frental-ac.e727db75.webp&w=1920&q=75" 
              alt="Cold room and AC maintenance setup" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RentalServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 w-full bg-gray-50 dark:bg-zinc-950 border-y border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Our AC, Chiller & Cold Room Maintenance Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceData.services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col transition-all w-full h-full"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col grow justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    {service.icon}
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg sm:text-xl leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-gray-100 dark:border-zinc-800">
                  {service.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-medium"
                    >
                      <Asterisk className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
          Related Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Discover other professional services that we provide
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {serviceData.relatedProducts.map((prod, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between group"
          >
            <Link href={prod.href} className="flex flex-col h-full cursor-pointer">
              <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100 dark:bg-zinc-800">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {prod.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs sm:text-sm flex items-center gap-1 group-hover:gap-2 transition-all pt-2">
                  View More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function IndustrialRentalServicePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans text-gray-900 dark:text-white antialiased selection:bg-emerald-500 selection:text-white flex flex-col transition-colors duration-300">
      <main className="grow">
        <HeroSection />
        <IntroductionSection />
        <RentalServicesSection />
        <RelatedServicesSection />
      </main>
    </div>
  );
}