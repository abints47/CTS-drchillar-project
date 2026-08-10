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
  Cloud,
  Fuel,
  Asterisk,
  Moon,
  Sun,
} from "lucide-react";

// ==========================================
// DATA STRUCTURE
// ==========================================

const serviceData = {
  title: "Coil Manufacturing & Replacement",
  subtitle: "Coil Manufacturing & Replacement",
  heading: "Custom-Built High Efficiency Long Life",
  description:
    "We supply and replace copper/Aluminium coils for HVAC and industrial chiller systems. Whether it's a bespoke coil for a retrofit or a complete replacement of damaged tubes/fins, our team designs and installs tailored solutions to match your equipment and performance requirements.",
  heroImage: "https://www.drchiller.com/ac-units-header.webp",
  services: [
    {
      title: "Coil Replacement (AC / Chiller / Cold Room)",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoil-replacement.053f8aba.webp&w=1920&q=75",
      icon: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Replacement of damaged condenser and evaporator coils for chillers, ACs and cold rooms using high-efficiency copper/aluminium construction.",
      features: [
        "Condenser and evaporator coils",
        "On-site removal and installation",
        "Bespoke coil fabrication available",
      ],
    },
    {
      title: "Anti-Corrosion Coating",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoil-anti-corrosion-coating.e25cf23b.webp&w=1920&q=75",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Protective coating for coils exposed to corrosive environments (coastal / industrial). Extends service life and improves performance.",
      features: [
        "Epoxy / hydrophilic coating",
        "High salt-spray resistance",
        "Suitable for new & existing coils",
      ],
    },
    {
      title: "Gas Recovery",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoil-gas-recovery.903af98e.webp&w=1920&q=75",
      icon: <Fuel className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Safe recovery of refrigerant gases prior to coil replacement or equipment maintenance.",
      features: [
        "R22 / R134a / R407c / R410a",
        "Compliant with environmental standards",
        "Re-use after filtration & charging",
      ],
    },
    {
      title: "Copper Brazing",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoil-copper-brazing.b1dae98d.webp&w=1920&q=75",
      icon: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Professional brazing of copper tubes and joints for leak-free and long-lasting connections.",
      features: [
        "High-temperature oxygen-acetylene brazing",
        "Leak-proof joints",
        "Conforms to HVAC standards",
      ],
    },
    {
      title: "Nitrogen Pressure Testing",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoil-nitrogen-pressure-testing.59e569b3.webp&w=1920&q=75",
      icon: <Cloud className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Leak detection using nitrogen pressurisation before charging refrigerant into the system.",
      features: [
        "Accurate detection of micro-leaks",
        "Ensures system integrity",
        "Recommended after coil replacement",
      ],
    },
    {
      title: "Vacuuming, Gas Charging & Coil Scrap Purchase",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoil-scrap.b104cf22.webp&w=1920&q=75",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Full commissioning after coil replacement including vacuuming and charging. We also purchase scrap coils.",
      features: [
        "Deep-vacuum & refrigerant charging",
        "Functional testing",
        "Scrap copper / aluminium coil buy-back",
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
      title: "AC Chillers & Cold Rooms Maintenance",
      description: "High-grade custom cooling coil manufacturing tailored to your specs.",
      image: "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaintenance-replacement.5871e9ba.webp&w=1920&q=75",
      href: "/Services/Coldroom-Maintenance",
    },
    {
      title: "AMC",
      description: "Annual Maintenance Contract",
      image: "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-contract.daca051b.webp&w=1920&q=75",
      href: "/Services/amc",
    },
  ],
};

// ==========================================
// COMPONENTS
// ==========================================

function HeroSection({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (val: boolean) => void }) {
  return (
    <section className="relative w-full top-0 sm:h-80 lg:h-96 flex items-center justify-center overflow-hidden bg-gray-900 dark:bg-black transition-colors duration-300">
      <div className="absolute inset-0">
        <img
          src={serviceData.heroImage}
          alt={serviceData.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/45 dark:bg-black/70" />
      </div>

      <div className="absolute pt-35 sm:top-12 sm:right-5 z-20 flex items-center gap-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          <span className="text-sm font-medium">{darkMode ? "Light" : "Dark"}</span>
        </button>

        <Link
          href="/Services"
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-2 transition-all shadow-lg"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Text Section (Left to Right Animation) */}
        <motion.div
          className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            {serviceData.subtitle}
          </span>
          <h2 className="text-2xl pt-5 sm:text-4xl font-bold text-black dark:text-white tracking-normal leading-tight">
            {serviceData.heading}
          </h2>
          <p className="text-black dark:text-gray-300 text-sm sm:text-lg leading-relaxed font-normal">
            {serviceData.description}
          </p>
        </motion.div>

        {/* Image Section (Right to Left Animation) */}
        <motion.div 
          className="lg:col-span-6 flex justify-center w-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoil-scrap.b104cf22.webp&w=1920&q=75"
            alt="Coil manufacturing"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

function RentalServicesSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full bg-gray-100 dark:bg-zinc-950 my-10 border-y border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-black dark:text-white tracking-tight leading-tight">
            Coil Manufacturing & Replacement Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {serviceData.services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col transition-all w-full"
            >
              <div className="h-36 sm:h-44 w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  {service.icon}
                  <h3 className="font-bold text-emerald-800 dark:text-emerald-400 text-lg sm:text-xl">
                    {service.title}
                  </h3>
                </div>

                <p className="text-black dark:text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {service.description}
                </p>

                <ul className="space-y-1.5 pt-1">
                  {service.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-black dark:text-gray-200 font-medium"
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
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white tracking-tight mb-3">
          Related Services
        </h2>
        <p className="text-black dark:text-gray-300 text-sm sm:text-base font-normal">
          Discover other Services that we providing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {serviceData.relatedProducts.map((prod, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F8FAFC] dark:bg-zinc-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm flex flex-col justify-between group"
          >
            <Link href={prod.href} className="flex flex-col h-full cursor-pointer">
              <div className="h-48 sm:h-52 overflow-hidden bg-gray-100 dark:bg-zinc-800">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-black dark:text-white text-lg sm:text-xl group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {prod.title}
                  </h3>
                  <p className="text-black dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2 font-normal">
                    {prod.description}
                  </p>
                </div>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-xs sm:text-sm flex items-center gap-1 group-hover:gap-2 transition-all pt-2">
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

  // Sync state with global document root so global components (Navbar/Footer) update
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans text-black dark:text-white antialiased selection:bg-emerald-500 selection:text-white flex flex-col transition-colors duration-300">
      <main className="grow">
        <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />
        <IntroductionSection />
        <RentalServicesSection />
        <RelatedServicesSection />
      </main>
    </div>
  );
}