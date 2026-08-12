"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Snowflake,
  AirVent,
  Wrench,
  Fuel,
  Asterisk,
  FlaskConical,
  ShieldAlert,
} from "lucide-react";

// ==========================================
// DATA STRUCTURE
// ==========================================

const serviceData = {
  titleMain: "Chilled Water Pipeline &",
  titleHighlight: "Flushing",
  subtitle: "Chilled Water Pipeline & Flushing Services",
  heading: "Design Installation Maintenance",
  description:
    "We specialize in MS/SS/PPR chilled water pipeline projects, including insulation, flushing and modification works. Whether you're commissioning a new system or upgrading an existing one, our team delivers reliable quality and seamless execution for commercial and industrial facilities.",
  heroImage:
    "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchilled-water-flushing.fffbba81.webp&w=1920&q=75",
  services: [
    {
      title: "MS / SS / PPR Pipeline Works",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fms-pipe.f544b8ec.webp&w=1920&q=75",
      icon: <AirVent className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Complete supply and installation of chilled water pipelines using durable MS / SS / PPR materials.",
      features: [
        "Custom fabrication & installation",
        "Industrial-grade materials",
        "Designed for long service life",
      ],
    },
    {
      title: "Pipe Insulation",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpipe-insulation.4e80be19.webp&w=1920&q=75",
      icon: <Snowflake className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Thermal insulation for chilled and hot water lines to prevent energy loss and condensation.",
      features: [
        "Hot & cold insulation",
        "Closed-cell elastomeric / Armaflex",
        "Prevents condensation and energy loss",
      ],
    },
    {
      title: "Alteration & Extension Works",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpipe-alteration-works.4f7917cd.webp&w=1920&q=75",
      icon: <Fuel className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Modification and rerouting of existing chilled water pipeline networks for expansion or layout changes.",
      features: [
        "Rerouting of pipelines",
        "Addition of new tapping points",
        "Retrofitting existing networks",
      ],
    },
    {
      title: "Chemical Flushing",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchilled-water-flushing.fffbba81.webp&w=1920&q=75",
      icon: <FlaskConical className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Professional chemical flushing to restore pipe flow and remove scale/sludge from chilled-water circuits.",
      features: [
        "Removes sludge & scale from chilled water lines",
        "Improves flow & heat transfer efficiency",
        "Safe industrial-grade cleaning agents",
      ],
    },
    {
      title: "Leak Arresting & Valve Replacement",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchilled-water-leak.ee32322f.webp&w=1920&q=75",
      icon: <ShieldAlert className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "On-site repair and sealing of leaks along with replacement of faulty valves and pressure components.",
      features: [
        "In-place repair of leaky joints",
        "Valve replacement & pressure testing",
        "Ensures full system integrity",
      ],
    },
    {
      title: "FCU Installation Works",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchilled-water-fcu.21757f49.webp&w=1920&q=75",
      icon: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      description:
        "Supply, installation and commissioning of fan-coil units integrated to existing chilled-water systems.",
      features: [
        "Piping, insulation & commissioning",
        "Ceiling or floor mounted fan-coil units",
        "Integrated with existing chilled water system",
      ],
    },
  ],
  relatedProducts: [
    {
      title: "AMC",
      description: "Annual Maintenance Contracts providing long-term coverage and priority service support.",
      image: "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-contract.daca051b.webp&w=640&q=75",
      href: "/Services/amc",
    },
    {
      title: "AC Chillers & Cold Rooms Maintenance",
      description: "Flexible maintenance and servicing solutions for emergency and scheduled cooling needs.",
      image: "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaintenance-replacement.5871e9ba.webp&w=1920&q=75",
      href: "/Services/Coldroom-Maintenance",
    },
    {
      title: "Coil Manufacturing & Replacement",
      description: "Custom coil manufacturing and replacement services for various cooling systems.",
      image: "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoil-anti-corrosion-coating.e25cf23b.webp&w=640&q=75",
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

      <div className="absolute top-17 right-4 sm:top-65 sm:right-6 z-20 flex items-center gap-3">
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
        <motion.div
          className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-emerald-600 dark:text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-full">
            {serviceData.subtitle}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-normal leading-snug">
            {serviceData.heading}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            {serviceData.description}
          </p>
        </motion.div>

        <motion.div 
          className="lg:col-span-6 flex justify-center w-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg lg:max-w-none aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-zinc-800">
            <Image 
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&auto=format&fit=crop&q=80" 
              alt="Water Chiller Pipeline Network" 
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
            Our Pipeline & Flushing Services
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