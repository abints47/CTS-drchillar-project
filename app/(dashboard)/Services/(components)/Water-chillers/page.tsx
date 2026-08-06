"use client";

import React, { useState } from "react";
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
  Moon,
  Sun,
} from "lucide-react";

// ==========================================
// DATA STRUCTURE
// ==========================================

const serviceData = {
  title: "Chilled Water Pipeline & Flushing",
  subtitle: "Chilled Water Pipeline & Flushing Services",
  heading: "Design • Installation • Maintenance",
  description:
    "We specialize in MS/SS/PPR chilled water pipeline projects, including insulation, flushing and modification works. Whether you're commissioning a new system or upgrading an existing one, our team delivers reliable quality and seamless execution for commercial and industrial facilities.",
  heroImage:
    "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheat-exchangers-custom-made.1c94a57f.webp&w=640&q=75",
  services: [
    {
      title: "MS / SS / PPR Pipeline Works",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fms-pipe.f544b8ec.webp&w=1920&q=75",
      icon: <AirVent className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
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
      icon: <Snowflake className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
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
      icon: <Fuel className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
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
      icon: <FlaskConical className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
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
      icon: <ShieldAlert className="w-8 h-5 text-emerald-600 dark:text-emerald-400" />,
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
      icon: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Supply, installation and commissioning of fan-coil units integrated to existing chilled-water systems.",
      features: [
        "Piping, insulation & commissioning",
        "Ceiling or floor mounted fan-coil units",
        "Integrated with existing chilled water system",
      ],
    },
  ],
  whyChoose: [
    {
      title: "Complete Turnkey Rental Solutions",
      description:
        "We handle everything from initial load calculations and site surveys to transport, installation, routine fueling, and final decommissioning.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Immaculately Maintained Modern Fleet",
      description:
        "Our rental inventory consists of late-model, fuel-efficient chillers and heavy-duty sound-attenuated generators serviced after every contract.",
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
      title: "AMC",
      description: "Annual Maintenance Contracts providing long-term coverage and priority service support.",
      image: "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famc-contract.daca051b.webp&w=640&q=75",
      href: "/Services/amc",
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
        {/* Left Column: Text Part */}
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
          <h2 className="text-3xl pt-5 sm:text-4xl font-bold text-black dark:text-white tracking-tight leading-tight">
            {serviceData.heading}
          </h2>
          <p className="text-black dark:text-gray-300 text-sm text-justify sm:text-lg leading-relaxed font-normal">
            {serviceData.description}
          </p>
        </motion.div>

        {/* Right Column: Overlapping Image Collage Part */}
        <div className="lg:col-span-6 flex justify-center w-full">
          <OverlappingImageCollage />
        </div>
      </div>
    </section>
  );
}

function OverlappingImageCollage() {
  const collageImages = [
    {
      src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
      alt: "Industrial Rental Equipment Front View",
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      alt: "Industrial Rental Equipment Detail View",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center p-2">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:-space-x-16 lg:block lg:relative lg:w-105 lg:h-87.5">
        {/* Image 1 */}
        <motion.div
          className="w-60 sm:w-50 lg:w-47.5 h-70 lg:h-65 rounded-3xl overflow-hidden shadow-2xl border-2 border-white dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900 lg:absolute lg:top-0 lg:left-0 z-10 rotate-3 lg:rotate-0"
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            y: -6,
            zIndex: 30,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={collageImages[0].src}
              alt={collageImages[0].alt}
              fill
              sizes="(max-width: 1024px) 200px, 190px"
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </motion.div>

        {/* Image 2 */}
        <motion.div
          className="w-60 sm:w-50 lg:w-47.5 h-70 lg:h-65 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 bg-white dark:bg-zinc-900 lg:absolute lg:bottom-0 lg:right-6 z-20 rotate-3 lg:rotate-0 mt-10 sm:mt-0"
          initial={{ opacity: 0, x: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            y: -6,
            zIndex: 30,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={collageImages[1].src}
              alt={collageImages[1].alt}
              fill
              sizes="(max-width: 1024px) 200px, 190px"
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function RentalServicesSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full bg-gray-100 dark:bg-zinc-950 my-10 border-y border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-black dark:text-white tracking-tight leading-tight">
            Our Pipeline & Flushing Services
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
              {/* Image */}
              <div className="h-36 sm:h-44 w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
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

function WhyChooseSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 sm:space-y-20 transition-colors duration-300">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white tracking-tight mb-3">
          Why Choose Our Rentals
        </h2>
        <p className="text-black dark:text-gray-300 text-sm sm:text-base font-normal">
          Unmatched reliability, rapid deployment logistics, and fully certified equipment fleet.
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
            className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-zinc-800 h-64 sm:h-80 lg:h-96"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white tracking-tight">
              {item.title}
            </h3>
            <p className="text-black dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

function GallerySection() {
  const [activeImage, setActiveImage] = useState(serviceData.gallery[0]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white tracking-tight mb-3">
          Equipment Gallery
        </h2>
        <p className="text-black dark:text-gray-300 text-sm sm:text-base font-normal">
          Explore our heavy-duty chillers, sound-attenuated generators, and rapid-deployment units.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl overflow-hidden shadow-xl mb-6 bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 h-70 sm:h-95 lg:h-112.5"
        >
          <img
            src={activeImage}
            alt="Active Fleet View"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex justify-center gap-3 sm:gap-4 overflow-x-auto pb-2">
          {serviceData.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`w-20 h-16 sm:w-24 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all shadow-sm shrink-0 cursor-pointer ${
                activeImage === img
                  ? "border-emerald-600 dark:border-emerald-400 scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx}`}
                className="w-full h-full object-cover"
              />
            </button>
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

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-black font-sans text-black dark:text-white antialiased selection:bg-emerald-500 selection:text-white flex flex-col transition-colors duration-300">
        <main className="grow">
          <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />
          <IntroductionSection />
          <RentalServicesSection />
          <WhyChooseSection />
          <GallerySection />
          <RelatedServicesSection />
        </main>
      </div>
    </div>
  );
}