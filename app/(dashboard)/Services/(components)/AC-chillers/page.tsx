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
  Fuel,
  Asterisk,
  Sun,
  Moon,
} from "lucide-react";

// ==========================================
// DATA STRUCTURE
// ==========================================

const serviceData = {
  title: "Rentals ( A/C, Chiller, Genset )",
  subtitle: "Short & Long-Term Rental Solutions",
  heading: "A/C  Chiller  Genset Rentals",
  description:
    "We offer a wide range of temporary cooling and power solutions for industrial, commercial and event-based applications. Our rental fleet includes air conditioners, chillers and diesel generators backed by quick delivery and 24/7 support.",
  heroImage:
    "https://images.unsplash.com/photo-1647022528152-52ed9338611d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVudCUyMGFjfGVufDB8fDB8fHww",
  services: [
    {
      title: "AC Rental",
      image:
        "https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QUN8ZW58MHx8MHx8fDA%3D",
      icon: <AirVent className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />,
      description:
        "Temporary cooling solutions with free standing, package and air handling units to suit any application.",
      features: [
        "3TR / 5TR / 8TR Free Standing AC",
        "5TR / 10TR / 20TR / 25TR Package AC",
        "10TR / 20TR Air Handling Units (AHU)",
        "10TR Fresh Air Handling Units (FAHU)",
      ],
    },
    {
      title: "Chiller Rental",
      image:
        "https://images.unsplash.com/photo-1753826477307-82c71f3d9537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENoaWxsZXJ8ZW58MHx8MHx8fDA%3D",
      icon: <Snowflake className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />,
      description:
        "High-efficiency chillers for short and long-term rental, with full on-site support.",
      features: [
        "1.5TR to 100TR available",
        "Cooling tower support during peak summer",
        "Low temperature chillers for AHU / FCU",
        "Mock-up room cooling support",
        "Temporary backup for existing chillers",
      ],
    },
    {
      title: "Genset Rental",
      image:
        "https://images.unsplash.com/photo-1644253967489-41b8b45a29f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QUMlMjByZW1vdGV8ZW58MHx8MHx8fDA%3D",
      icon: <Fuel className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />,
      description:
        "Reliable diesel generator rental packages including cabling and accessories.",
      features: [
        "Diesel tank included",
        "Electrical cables",
        "Distribution boards / industrial plugs",
        "Oil-spill prevention tray",
      ],
    },
  ],
  whyChoose: [
    {
      title: "Reliable Delivery & Rapid Response",
      description:
        "We understand that unexpected equipment failures and urgent project requirements demand immediate action. Our streamlined logistics network enables us to deliver rental equipment quickly and efficiently, ensuring minimal delays to your operations. With prompt response times, dependable transportation, and expert installation services, we help businesses restore productivity as quickly as possible.",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRlbGl2ZXJ5fGVufDB8fDB8fHww",
    },
    {
      title: "Safety, Quality & Compliance",
      description:
        "Safety and quality are at the core of everything we do. All rental equipment is maintained in accordance with strict industry standards and undergoes rigorous inspections before every deployment. Our team follows established safety procedures throughout transportation, installation, operation, and removal, ensuring every project is completed efficiently, responsibly, and in full compliance with applicable regulations.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Experienced Technical Support",
      description:
        "Our certified engineers and technicians bring extensive industry experience to every project. From equipment selection and system sizing to on-site installation, preventive maintenance, and technical troubleshooting, we provide professional support throughout the rental period. Our responsive service team is committed to resolving issues quickly, helping you maintain uninterrupted operations and complete confidence in your rental solution.",
      image:
        "https://images.unsplash.com/photo-1560264418-c4445382edbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2huaWNhbCUyMHN1cHBvcnR8ZW58MHx8MHx8fDA%3D",
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
      title: "AMC",
      description:
        "Annual Maintenance Contracts providing long-term coverage and priority service support.",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-contract.daca051b.webp&w=640&q=75",
      href: "/Services/amc",
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
// THEME TOGGLE COMPONENT
// ==========================================

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const initialDark =
      root.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(initialDark);
    if (initialDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <>
          <Sun className="h-4 w-4 text-white" />
          <span className="text-sm font-medium">Light</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 text-white" />
          <span className="text-sm font-medium">Dark</span>
        </>
      )}
    </button>
  );
}

// ==========================================
// COMPONENTS
// ==========================================

function HeroSection() {
  return (
    <section className="relative w-full top-0 sm:h-80 lg:h-96 flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src={serviceData.heroImage}
          alt={serviceData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="absolute pt-35 sm:top-12 sm:right-5 z-20 flex items-center gap-3">
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
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-100">
          {serviceData.title}
        </h1>
      </motion.div>
    </section>
  );
}

function IntroductionSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Column: Text Part */}
        <motion.div
          className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-emerald-600 dark:text-emerald-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            {serviceData.subtitle}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-normal leading-tight">
            {serviceData.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg leading-relaxed font-light">
            {serviceData.description}
          </p>
        </motion.div>

        {/* Right Column: Overlapping Image Collage Part */}
        <div className="lg:col-span-6 flex justify-center w-full">
          <Image src={'https://images.unsplash.com/photo-1702443418982-9aeb9e04b322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJlbnQlMjBhY3xlbnwwfHwwfHx8MA%3D%3D'} alt="Ac chiller" width={600} height={500} className="rounded-2xl"></Image>
        </div>
      </div>
    </section>
  );
}


function RentalServicesSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full bg-gray-100 dark:bg-gray-900/40 my-10 border-y border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight leading-tight">
            Rental Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-base mt-2">
            Comprehensive temporary cooling and power packages tailored for your exact operational requirements.
          </p>
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
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col transition-all w-full"
            >
              {/* Image */}
              <div className="h-36 sm:h-44 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  {service.icon}
                  <h3 className="font-semibold text-emerald-700 dark:text-emerald-500 text-lg sm:text-xl">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1.5 pt-1">
                  {service.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                    >
                      <Asterisk className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
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

function WhyChooseSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3">
          Why Choose Our <span className="text-emerald-600"> Rental Solutions</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Delivering dependable equipment, technical expertise, and end-to-end support to help your business operate efficiently with minimal downtime.
        </p>
      </div>

      {serviceData.whyChoose.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
            idx % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 h-64 sm:h-80 lg:h-96"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="w-full lg:w-1/2 pl-10 space-y-4 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              {item.title}
            </h3>
            <p className="text-gray-600 text-justify pt-5 pr-10 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

function RelatedServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3">
          Related Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Discover other Services that we providing 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
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
              <div className="p-6 flex flex-col grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg sm:text-xl group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors line-clamp-1">
                    {prod.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>
                </div>
                <span className="text-emerald-600 dark:text-emerald-500 font-semibold text-xs sm:text-sm flex items-center gap-1 group-hover:gap-2 transition-all pt-2">
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
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 antialiased selection:bg-emerald-500 selection:text-white flex flex-col transition-colors duration-300">
      <main className="grow">
        <HeroSection />
        <IntroductionSection />
        <RentalServicesSection />
        <WhyChooseSection />
        <RelatedServicesSection />
      </main>
    </div>
  );
}