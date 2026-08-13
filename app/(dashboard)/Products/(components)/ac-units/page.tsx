"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  VolumeX,
  ShieldCheck,
  Leaf,
  ArrowRight,
  Building2,
  Factory,
  Wrench,
  Dot,
  Settings2,
  FlaskConical,
  ArrowLeft,
  Store,
  Layers,
  LoaderPinwheel,
} from "lucide-react";

const productData = {
  name: ["A/C Units & ", "Air Curtains"],
  tagline: "Efficient air conditioning systems for residential and industrial applications.",
  description:
    "Experience the next generation of industrial refrigeration with intelligent monitoring, energy-efficient components, and precision-engineered performance. Built to maximize productivity while minimizing operating costs.",
  specs: [
    { label: "Cooling Capacity", value: "150 TR" },
    { label: "Power Input", value: "22 kW" },
    { label: "Water Flow Rate", value: "250 LPM" },
    { label: "Operating Temp", value: "5°C–45°C" },
  ],
  features: [
     {
      icon: <Leaf className="w-5 h-5 text-emerald-600" />,
      title: "Eco Refrigerant",
      desc: "Complies with global environmental mandates using zero-ODP R-134a/R-410A.",
    },
    {
      icon: <Zap className="w-5 h-5 text-emerald-600" />,
      title: "Variable Speed Drive",
      desc: "Dynamic frequency modulation cuts peak electrical draw by up to 30%.",
    },
    {
      icon: <VolumeX className="w-5 h-5 text-emerald-600" />,
      title: "Acoustic Dampening",
      desc: "Multi-layered sound insulation reduces operating noise to under 65 dB.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: "Corrosion Resistant",
      desc: "Epoxy-coated coils and stainless steel framing ensure longevity in harsh plants.",
    },
  ],
  applications: [
    {
      icon: <Factory className="w-6 h-6 text-emerald-600" />,
      title: "Injection Molding",
      desc: "Maintains rapid cycle times and consistent part tolerances.",
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-emerald-600" />,
      title: "Pharmaceuticals",
      desc: "Provides strict temperature control for sensitive reaction vessels.",
    },
    {
      icon: <Store className="w-6 h-6 text-emerald-600" />,
      title: "Food & Beverage",
      desc: "Ensures rapid chilling and dependable cold storage stability.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      title: "HVAC Central Plants",
      desc: "Delivers balanced climate conditioning across massive facilities.",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1708449287110-2f2418fb5a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh2YWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    "https://media.istockphoto.com/id/492892828/photo/air-conditioning-engineer.webp?a=1&b=1&s=612x612&w=0&k=20&c=GgvNuEV3Pue8ioVhMOWwJDaJWSmQHJk9Ufd3H7s3otA=",
    "/images/products/heatExchange.webp",
  ],
  whyChoose: [
    {
      title: "High-Efficiency Performance",
      desc: "Engineered for maximum productivity while maintaining low energy consumption. Optimized components ensure consistent performance and long-term operational savings.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Fast Installation & Easy Maintenance",
      desc: "Modular construction simplifies installation and reduces service time. Easily accessible components allow technicians to perform routine maintenance efficiently.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
     {
      title: "Predictive Monitoring & Diagnostics",
      desc: "Integrated sensors continuously monitor key operating parameters such as temperature, pressure, and performance. Real-time alerts enable proactive maintenance before issues become costly failures.",
      image: "https://media.istockphoto.com/id/492892828/photo/air-conditioning-engineer.webp?a=1&b=1&s=612x612&w=0&k=20&c=GgvNuEV3Pue8ioVhMOWwJDaJWSmQHJk9Ufd3H7s3otA=",
    },
  ],
  services: [
    {
      title: "Air Conditioning Units",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fac-units.ea85447e.webp&w=640&q=75",
      icon: <Settings2  className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Full range of air-conditioning systems for residential, commercial and industrial applications.",
      features: [
        "Split AC / Free-standing type",
        "Ductable split AC / Package AC",
        "FCU, AHU & FAHU units",
        "Electric panel AC",
      ],
    },
    {
      title: "Cooling Capacity Range",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fac-temperature-range.65f8f41e.webp&w=640&q=75",
      icon: <LoaderPinwheel  className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Units available from 1.5 TR up to 25 TR to match every possible cooling requirement.",
      features: [
        "1.5 TR – 5 TR (residential / light commercial)",
        "10 TR – 25 TR (heavy commercial / industrial)",
        "High-efficiency, reliable performance in high ambient conditions",
      ],
    },
    {
      title: "Cleaning & Service",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fac-cleaning-service.76a0d5e4.webp&w=640&q=75",
      icon: <Wrench  className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Complete field service for A/C systems to maintain performance and energy efficiency.",
      features: [
        "Water service & on-site cleaning",
        "AC duct cleaning",
        "Unit shifting & reinstallation",
      ],
    },
    {
      title: "Refurbishment & Component Replacement",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplate-heat-exchangers.a0ae5361.webp&w=640&q=75",
      icon: <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Restoration and upgrade services for aging systems to extend life and improve reliability.",
      features: [
        "Compressor, coil and fan replacements",
        "Blower motor & compressor rewinding",
        "Retrofit options for improved efficiency",
      ],
    },
    {
      title: "Spare Parts & Accessories",
      image:
        "https://t3.ftcdn.net/jpg/08/21/84/60/240_F_821846035_Z6q8cMoiZ3TioNoHBWpJ6yRzpcSUbZ8J.jpg",
      icon: <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Supply and replacement of genuine HVAC components to ensure reliable system performance and extended equipment life.",
      features: [
        "Genuine spare parts supply",
        "Compressor & motor replacement",
        "Filters, coils & electrical components",
      ],
    },
    {
      title: "Ventilation & Air Quality",
      image:
        "https://t3.ftcdn.net/jpg/08/68/37/82/240_F_868378237_zV29nAXU9cr5OYBzDXjcJO7r71P7BLil.jpg",
      icon: <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Enhance indoor air quality with advanced ventilation systems designed for healthier and more comfortable environments.",
      features: [
        "Fresh air ventilation systems",
        "Air purification solutions",
        "Exhaust & ventilation installation",
        "Indoor air quality assessment",
      ],
    },
  ],
   similarProducts: [
    {
      title: "Water Chillers, Coolers and Heat Pumps",
      desc: "High-performance chillers for all your cooling needs.",
      image: "/images/products/water-chilers.jpg",
      href: "/Products/water-chillers",
    },
    {
      title: "Cold Rooms & Ice Block Machines",
      desc: "Energy efficient cold storage rooms for fresh and frozen products.",
      image: "https://t3.ftcdn.net/jpg/21/15/16/00/240_F_2115160008_SlrcawoK0i8w6fJ0HOkn6fPnGHsO9fuC.jpg",
      href: "/Products/cold-rooms",
    },
    {
      title: "Heat Exchangers & Cooling Towers",
      desc: "Reliable heat exchangers for efficient thermal energy transfer.",
      image: "/images/pipe.jpg",
      href: "/Products/heat-exchangers",
    },
  ],
};

// ==========================================
// SUBCOMPONENTS
// ==========================================
function ProductHero() {
  return (
    <section className="sticky top-0 z-0 w-full h-[50vh] sm:h-[45vh] flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.03 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="/images/air-conditioner1.jpg"
            alt="Industrial Water Chiller"
            className="w-full h-full object-cover opacity-95"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
      </div>

      {/* Top-Right Back Button */}
      <div className="absolute top-24 right-4 sm:top-46 sm:right-6 z-20 flex items-center gap-3">
        <Link
          href="/Products"
          className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-2 transition-all shadow-lg text-xs sm:text-sm"
          aria-label="Back"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      <div 
        data-aos="zoom-in" 
        data-aos-duration="600"
        className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-3 pt-12 sm:pt-16 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-4 text-white leading-tight">
            {productData.name[0]} <br className="hidden sm:inline" />
            <span className="text-emerald-500">{productData.name[1]}</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-lg mx-auto mb-6 sm:mb-8 font-normal leading-relaxed px-2">
            {productData.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}


function ProductFeatureGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      <motion.div 
        className="lg:col-span-6 flex flex-col items-start space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-emerald-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
          Comfort Delivered, Every Day
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
          Air Conditioning Units & Systems
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
          From compact split units to large ductable systems, our A/C range is designed to provide reliable and energy-efficient cooling for villas, offices, industrial spaces and special applications. Whether you need steady comfort or critical temperature control, we have the right system engineered to perform in tough GCC conditions.
        </p>
      </motion.div>

      {/* Image Container */}
      <div className="lg:col-span-6 relative w-full h-80 sm:h-100 lg:h-105 flex items-center justify-center my-4 lg:my-0">
        
        {/* Larger Background Image with Independent Hover Animation */}
        <motion.div 
          className="absolute right-0 top-0 w-[78%] h-[82%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 z-10 cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.3 } }}
        >
          <img
            src="https://t4.ftcdn.net/jpg/10/36/09/23/240_F_1036092348_RDM1J8ReiYRkAj3woFUdGdSum6dX9ccR.jpg"
            alt="Primary cooling equipment component view"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

        {/* Smaller Floating Image with Independent Hover Animation */}
        <motion.div 
          className="absolute left-0 bottom-0 w-[55%] h-[60%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900 bg-white dark:bg-zinc-900 z-20 cursor-pointer"
          initial={{ opacity: 0, y: 30, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -8, x: 4, transition: { duration: 0.3 } }}
        >
          <img
            src="https://t3.ftcdn.net/jpg/15/76/50/50/240_F_1576505089_zROEkfXps0B8ndl7FQqMId5lBe2teGZz.jpg"
            alt="Secondary structural detail view"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

      </div>
    </div>
  );
}

function ProductFeatureCardSection() {
  const keyBenefits = [
    "Precision temperature regulation under continuous heavy loads",
    "Eco-friendly zero-ODP refrigerant compliance for sustainable plants",
    "Integrated IoT telemetry for real-time remote diagnostics and alerts",
    "Dual-compressor redundancy architecture to ensure zero downtime"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Text & Content */}
        <motion.div
          className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Industrial Feature
          </span>

          <h2 className="text-2xl pt-1 sm:text-3xl lg:text-4xl font-bold text-black dark:text-white tracking-normal leading-tight">
            {productData?.name ? `${productData.name[0]} ${productData.name[1]}` : "Industrial Modular Cooling System"}
          </h2>

          <p className="text-black dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal text-left">
            {productData?.description || "Engineered to maintain exact temperature parameters under extreme operating conditions. Designed specifically for mission-critical industrial workloads seeking maximum durability and minimum servicing overhead."}
          </p>

          <ul className="space-y-3 w-full pt-2 list-disc list-inside text-left">
            {keyBenefits.map((benefit, idx) => (
              <motion.li 
                key={idx} 
                className="text-gray-900 dark:text-gray-300 text-xs sm:text-sm md:text-base font-medium leading-relaxed"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <span className="inline">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column: Image with Right-to-Left Animation */}
        <motion.div 
          className="lg:col-span-6 flex justify-center w-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="w-full h-72 sm:h-96 lg:h-105 rounded-2xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-900 cursor-pointer border border-gray-100 dark:border-gray-800"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img
              src="https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fair-curtain.ba162836.webp&w=1920&q=75"
              alt="Industrial Product Overview"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

function RentalServicesSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full bg-gray-100 dark:bg-gray-900 my-10 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Heat Exchangers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {productData.services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col transition-all w-full"
            >
              {/* Image */}
              <div className="h-40 sm:h-44 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  {service.icon}
                  <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 text-base sm:text-lg">
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
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200"
                    >
                      <Dot className="w-4 h-4 text-black dark:text-white mt-0.5 shrink-0" />
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

function SimilarProducts() {
  return (
    <div>
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
          Related Products
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Explore other standard cooling capacities in our lineup.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.similarProducts.map((prod, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between group"
          >
            <Link href={prod.href} className="flex flex-col h-full cursor-pointer">
              <div className="h-40 sm:h-44 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img 
                  src={prod.image} 
                  alt={prod.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col grow justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg mb-1.5 group-hover:text-emerald-600 transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-4">{prod.desc}</p>
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium text-xs flex items-center gap-1">
                  View More &rarr;
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT CONTAINER
// ==========================================

export default function ProductShowcaseSection() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans text-gray-800 dark:text-gray-100 antialiased selection:bg-emerald-500 selection:text-white flex flex-col transition-colors duration-300 overflow-x-hidden">
      <main className="grow relative">
        <ProductHero />

        {/* Clean Content Section sliding smoothly over the sticky hero background */}
        <div className="relative z-10 w-full bg-white dark:bg-zinc-950 py-12 sm:py-16 lg:py-20 rounded-t-3xl shadow-[0_-15px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_-15px_30px_rgba(0,0,0,0.4)] transition-colors duration-300 space-y-16 sm:space-y-24">
          
          {/* Contained section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductFeatureGrid />
          </div>

          {/* Full-width section stretching edge-to-edge */}
          <RentalServicesSection />

          {/* Contained sections */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
            <ProductFeatureCardSection />
            <SimilarProducts />
          </div>

        </div>
      </main>
    </div>
  );
}