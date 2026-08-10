"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Snowflake,
  Wrench,
  Asterisk,
  ThermometerSnowflake,
  ShieldCheck,
  Zap,
  Sun,
  Moon,
} from "lucide-react";

// ==========================================
// DATA STRUCTURE
// ==========================================

const serviceData = {
  titleMain: "AC Chillers & Cold Rooms",
  titleHighlight: "Maintenance",
  subtitle: "Chillers & Cold Room Solutions",
  heading: "Comprehensive Repair, Servicing & Preventive Maintenance",
  description:
    "Protect your critical cooling assets with our specialized maintenance solutions for AC chillers and commercial cold rooms. From routine system tune-ups to emergency field repairs, our HVAC engineers keep your cooling systems running at peak efficiency with zero unexpected downtime.",
  heroImage: "/images/products/maintenance.jpg",
  services: [
    {
      title: "Chiller Preventive Maintenance",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaintenance-replacement.5871e9ba.webp&w=1920&q=75",
      icon: <Snowflake className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Comprehensive maintenance routines for air-cooled and water-cooled chiller systems to maximize efficiency and extend lifespan.",
      features: [
        "Refrigerant leak & charge checks",
        "Compressor & oil level inspection",
        "Condenser coil cleaning & descaling",
      ],
    },
    {
      title: "Cold Room Repair & Servicing",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      icon: <ThermometerSnowflake className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "End-to-end cold storage room maintenance including insulation integrity checks, door seal repairs, and evaporator care.",
      features: [
        "Temperature calibration & sensor check",
        "Evaporator & defrost cycle testing",
        "Insulation panel & door gasket sealing",
      ],
    },
    {
      title: "Compressor Overhauling",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foverhauling-motor-winding.62ab296e.webp&w=1920&q=75",
      icon: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Precision repair and rebuilds for screw, reciprocating, and scroll compressors to restore factory operating levels.",
      features: [
        "Mechanical rebuild & rewinding",
        "Oil pump & filter replacement",
        "Vibration & noise assessment",
      ],
    },
    {
      title: "Emergency Breakdown Support",
      image:
        "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=800",
      icon: <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "24/7 rapid emergency dispatch to handle unexpected chiller failures and prevent product spoilage in cold rooms.",
      features: [
        "Rapid technician dispatch",
        "On-site diagnostic analysis",
        "Immediate component sourcing",
      ],
    },
    {
      title: "Water Chemistry & Flushing",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpipe-insulation.4e80be19.webp&w=1920&q=75",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Chemical water treatment and pipeline flushing to prevent scale buildup, corrosion, and biological fouling.",
      features: [
        "Chilled water quality testing",
        "Chemical dosing & flushing",
        "Strainers & filter mesh cleaning",
      ],
    },
    {
      title: "System Retrofitting & Upgrades",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-parts-replacement.51a1fe08.webp&w=1920&q=75",
      icon: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Upgrade aging controllers, expansion valves, and refrigerants to modern eco-friendly and energy-efficient alternatives.",
      features: [
        "PLC / Microprocessor controller updates",
        "Eco-refrigerant conversions",
        "Energy efficiency optimization",
      ],
    },
  ],
  relatedProducts: [
    {
      title: "Annual Maintenance Contracts (AMC)",
      description:
        "Hassle-free servicing, guaranteed uptime, and 24/7 priority support for all cooling systems.",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-contract.daca051b.webp&w=1920&q=75",
      href: "/Services/amc",
    },
    {
      title: "Chilled Water Pipelines & Flushing",
      description:
        "Comprehensive maintenance services to keep your piped infrastructure clean and efficient.",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpipe-insulation.4e80be19.webp&w=1920&q=75",
      href: "/Services/Water-chillers",
    },
    {
      title: "Rentals ( A/C, Chiller, Genset )",
      description:
        "Short-term and long-term cooling rental packages for event, industrial, and emergency needs.",
      image:
        "https://images.unsplash.com/photo-1647022528152-52ed9338611d?w=500&auto=format&fit=crop&q=60",
      href: "/Services/rentals",
    },
  ],
};

// ==========================================
// COMPONENTS
// ==========================================

function HeroSection() {
  return (
    <section className="relative w-full h-80 sm:h-95 lg:h-105 flex items-center justify-center overflow-hidden bg-gray-900 dark:bg-black transition-colors duration-300">
      <div className="absolute inset-0">
        <img
          src={serviceData.heroImage}
          alt={serviceData.titleMain}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/55 dark:bg-black/75" />
      </div>

      {/* Top Right Back Button */}
      <div className="absolute top-24 right-4 sm:top-65 sm:right-6 z-20 flex items-center gap-3">
        <Link
          href="/Services"
          className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-2 transition-all shadow-lg text-xs sm:text-sm"
          aria-label="Back"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-8 sm:pt-12"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          {serviceData.titleMain}{" "}
          <span className="block sm:inline text-emerald-400 mt-1 sm:mt-0">
            {serviceData.titleHighlight}
          </span>
        </h1>
      </motion.div>
    </section>
  );
}

function IntroductionSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white dark:bg-gray-950">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Text Section */}
        <motion.div
          className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wider block">
            {serviceData.subtitle}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            {serviceData.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
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
          <div className="w-full h-65 sm:h-87.5 lg:h-100 relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/products/reparing.jpg"
              alt="Cold Room Maintenance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesGridSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full bg-gray-50 dark:bg-gray-900/40 my-6 sm:my-10 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Chillers & Cold Room Maintenance Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {serviceData.services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/70 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col transition-all w-full"
            >
              <div className="h-44 sm:h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col grow justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    {service.icon}
                    <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 text-base sm:text-lg leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                  {service.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200"
                    >
                      <Asterisk className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0" />
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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white dark:bg-gray-950">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
          Related Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
          Discover other services that we provide
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {serviceData.relatedProducts.map((prod, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200/70 dark:border-gray-800 shadow-sm flex flex-col justify-between group"
          >
            <Link href={prod.href} className="flex flex-col h-full cursor-pointer">
              <div className="h-44 sm:h-52 overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
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

export default function ColdRoomMaintenancePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 antialiased selection:bg-emerald-500 selection:text-white flex flex-col transition-colors duration-300 overflow-x-hidden">
      <main className="grow">
        <HeroSection />
        <IntroductionSection />
        <ServicesGridSection />
        <RelatedServicesSection />
      </main>
    </div>
  );
}