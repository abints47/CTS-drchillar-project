"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Asterisk,
  Sun,
  Moon,
} from "lucide-react";

// ==========================================
// DATA STRUCTURE
// ==========================================

const serviceData = {
  title: "Annual Maintenance Contracts",
  subtitle: "Annual Maintenance Contracts (AMC)",
  heading: "Hassle-Free Servicing • 24/7 Support • Guaranteed Uptime",
  description:
    "Our comprehensive AMC programs cover preventive and corrective maintenance for all types of AC units, chillers and cold room systems. Stay focused on your business while we handle servicing, safety checks, and emergency response - ensuring your systems run efficiently all year round.",
  heroImage: "/images/products/amc-1.jpg",
  services: [
    {
      title: "Annual Maintenance Contract",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-contract.daca051b.webp&w=1920&q=75",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Comprehensive AMC plans for chillers, cold rooms and all types of AC units — ensuring uninterrupted performance throughout the year.",
      features: [
        "With or without materials",
        "Includes preventive & breakdown maintenance",
        "Priority support available",
      ],
    },
    {
      title: "Multi-Sector Coverage",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-multi-sector.91557753.webp&w=1920&q=75",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Tailored AMC packages for villas, schools, fisheries, apartments, factories and hospitals.",
      features: [
        "Residential & commercial facilities",
        "Customised visit schedules",
        "24/7 service response",
      ],
    },
    {
      title: "Preventive Maintenance",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-preventive-maintenance.1cfccd65.webp&w=1920&q=75",
      icon: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Scheduled inspections and servicing to avoid expensive downtime and keep your systems running efficiently.",
      features: [
        "Filter cleaning and condenser wash",
        "Operational parameter checks",
        "Performance optimisation",
      ],
    },
    {
      title: "Breakdown Maintenance",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-breakdown-maintenance.48ce2f75.webp&w=1920&q=75",
      icon: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Rapid fault diagnosis and rectification for any sudden system breakdown or technical failure.",
      features: [
        "On-site troubleshooting",
        "Component repair / replacement",
        "Minimum turnaround time",
      ],
    },
    {
      title: "Priority Support",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-priority.b276f216.webp&w=1920&q=75",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Get access to our priority support channel for faster response and guaranteed call attendance.",
      features: [
        "Fast dispatch of technicians",
        "Emergency service option",
        "Higher SLA commitment",
      ],
    },
    {
      title: "Parts Replacement",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-parts-replacement.51a1fe08.webp&w=1920&q=75",
      icon: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Replacement of worn-out or damaged parts as part of the AMC scope. Both OEM and compatible parts available.",
      features: [
        "Compressors, motors & fans",
        "Valves, controls & sensors",
        "Flexible material options",
      ],
    },
  ],
  whyChoose: [
    {
      title: "Complete Turnkey Maintenance Solutions",
      description:
        "We handle everything from initial system audits and preventive maintenance to emergency repairs, parts replacement, and performance tuning.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Certified HVAC Technicians & Rapid Response",
      description:
        "Our dedicated team of certified engineers ensures minimum downtime with rapid field response and guaranteed Service Level Agreements (SLAs).",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=1200",
  ],
  relatedProducts: [
    {
      title: "Chilled Water Pipelines & Flushing",
      description: "Comprehensive maintenance services to keep your units running efficiently.",
      image: "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpipe-insulation.4e80be19.webp&w=1920&q=75",
      href: "/Services/Water-chillers",
    },
    {
      title: "AC Chillers & Cold Rooms Maintenance",
      description:
        "High-grade custom cooling coil manufacturing tailored to your specs.",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaintenance-replacement.5871e9ba.webp&w=1920&q=75",
      href: "/Services/Coldroom-Maintenance",
    },
    {
      title: "Overhauling & Winding",
      description:
        "Annual Manufacturing Contract",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foverhauling-motor-winding.62ab296e.webp&w=1920&q=75",
      href: "/Services/overhauling",
    },
  ],
};

// ==========================================
// COMPONENTS
// ==========================================

function HeroSection({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (val: boolean) => void }) {
  return (
    <section className="relative w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center overflow-hidden bg-gray-900 dark:bg-black transition-colors duration-300">
      <div className="absolute inset-0">
        <img
          src={serviceData.heroImage}
          alt={serviceData.title}
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/75" />
      </div>

      {/* Top Action Controls */}
      <div className="absolute top-17 right-4 sm:top-45 sm:right-6 z-20 flex items-center gap-3">
        {/* Dark Mode Toggle Button (Uncomment if needed) */}
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer text-xs sm:text-sm"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          <span>{darkMode ? "Light" : "Dark"}</span>
        </button> */}

        {/* Back Button */}
        <Link
          href="/Services"
          className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-2 transition-all shadow-lg text-xs sm:text-sm"
          aria-label="Back"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-100 dark:text-white">
          {serviceData.title}
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
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            {serviceData.subtitle}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-normal leading-tight">
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
          <div className="relative w-full h-70 sm:h-87.5 lg:h-100 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-contract.daca051b.webp&w=1920&q=75"
              alt="AMC Services"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RentalServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 w-full bg-gray-50 dark:bg-gray-900/50 my-6 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Annual Maintenance Contract Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col transition-all w-full"
            >
              <div className="h-44 sm:h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col grow justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    {service.icon}
                    <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 text-base sm:text-lg leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                  {service.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200"
                    >
                      <Asterisk className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 mt-1 shrink-0" />
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
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
          Related Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Discover other services that we provide
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {serviceData.relatedProducts.map((prod, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F8FAFC] dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between group"
          >
            <Link href={prod.href} className="flex flex-col h-full cursor-pointer">
              <div className="h-48 sm:h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
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
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 antialiased selection:bg-emerald-500 selection:text-white flex flex-col transition-colors duration-300">
      <main className="grow">
        <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />
        <IntroductionSection />
        <RentalServicesSection />
        <RelatedServicesSection />
      </main>
    </div>
  );
}