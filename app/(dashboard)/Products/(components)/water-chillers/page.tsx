"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  VolumeX,
  ShieldCheck,
  Leaf,
  Dot,Gauge,Wrench,
  Snowflake,
  Package,
  Thermometer,Settings,
  Building2,
  ArrowLeft,
  Factory,
  FlaskConical,
  Store,
} from "lucide-react";

// ==========================================
// DATA STRUCTURES & MOCK DATA
// ==========================================

const productData = {
  name: ["Water Chillers, Coolers & ", "Heat Pumps"],
  tagline: "High-performance modular cooling systems built for mission-critical industrial workloads.",
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
  services: [
    {
      title: "Air Cooled Industrial Water Chiller",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fair-cooled-industrial-water-chiller.788daa7d.webp&w=1920&q=75",
      icon: <Snowflake className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Rugged, Energy-efficient chillers engineered for 24/7 industrial duty.",
      features: [
        "Processes: plastic injection, water-jet cutting, printing, bakery",
        "Facilities: hospitals, laundries, ice-making plants",
        "Fast pull-down with stable outlet temp control",
      ],
    },
    {
      title: "Air Cooled Domestic Water Chiller",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fair-cooled-domestic-water-chiller.7bdcd52c.webp&w=640&q=75",
      icon: <Package  className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Quiet, compact solutions for comfort and light-commercial cooling.",
      features: [
        "Applications: villas, schools, labour camps, gyms, auditoriums",
        "Hotels & construction site cabins",
        "Low noise with quick install & easy service",
      ],
    },
    {
      title: "Water Cooled Industrial Water Chiller",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwater-cooled-industrial-water-chiller.e40b6229.webp&w=640&q=75",
      icon: <Thermometer  className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "High efficiency where condenser water is available or seawater duty applies.",
      features: [
        "Marine duty: boats, ships, coastal plants",
        "Ideal for sites with cooling towers or seawater loops",
        "Lower kW/TR vs air-cooled; compact footprint",
      ],
    },
    {
      title: "Custom-Made Systems",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwater-chiller-custom-made.c2168000.webp&w=640&q=75",
      icon: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Built-to-fit units tailored to your space, load profile, and controls.",
      features: [
        "Footprint-optimized frames & coil geometry",
        "PLC/BMS integration, VFD pumps, twin circuits",
        "Food/Pharma compliant options available",
      ],
    },
    {
      title: "Economic → Premium Range",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwater-chiller-price-range.219a0561.webp&w=640&q=75",
      icon: <Leaf  className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "From value builds to premium components for maximum lifecycle ROI.",
      features: [
        "Choice of compressors: scroll, screw, semi-hermetic",
        "Options: EC fans, microchannel coils, smart controls",
        "Pick by budget, efficiency target, or noise class",
      ],
    },
    {
      title: "Wide Capacity & Temperature Range",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwater-chiller-capacity-range.f4d18c01.webp&w=640&q=75",
      icon: <Gauge  className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Match any load with precise temperature control across seasons.",
      features: [
        "Cold brine, process glycol, or domestic chilled water",
        "Stable outlet temps with advanced PID logic",
        "Scalable with primary/secondary pumping",
      ],
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
  whyChoose: [
    {
      title: "Industry Standards & Quality Assurance",
      desc: "Quality and safety are integral to everything we manufacture. Each product is produced under strict quality control procedures and complies with recognized industry standards, ensuring reliable, safe, and efficient operation throughout its service life.",
      image: "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEluZHVzdHJ5JTIwU3RhbmRhcmRzfGVufDB8fDB8fHww",
    },
    {
      title: "Expert Technical Support",
      desc: "Our experienced team provides comprehensive support throughout every stage of your project, from product selection and technical consultation to installation guidance and after-sales service. We are committed to helping you achieve maximum value and long-term performance from every solution we deliver.",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFRlY2huaWNhbCUyMHN1cHBvcnR8ZW58MHx8MHx8fDA%3D",
    },
     {
      title: "High-Quality Engineering",
      desc: "Every product is designed and manufactured using premium-grade materials and advanced engineering practices to ensure exceptional durability, consistent performance, and reliable operation. Our commitment to quality allows businesses to operate with confidence while minimizing maintenance and downtime.",
      image: "https://images.unsplash.com/photo-1694521787193-9293daeddbaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGVuZ2luZWVyaW5nfGVufDB8fDB8fHww",
    },
  ],
  similarProducts: [
    {
      title: "Cold Rooms & Ice Block Machines",
      desc: "Efficient air conditioning systems designed for comfort and reliability.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
      href: "/Products/cold-rooms",
    },
    {
      title: "Heat Exchange and Cooling Towers",
      desc: "Reliable heat exchange to optimize energy transfer processes.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      href: "/Products/heat-exchangers",
    },
    {
      title: "A/C Units & Air Curtains",
      desc: "Efficient air conditioning systems designed for comfort and reliability.",
      image: "https://media.istockphoto.com/id/492892828/photo/air-conditioning-engineer.webp?a=1&b=1&s=612x612&w=0&k=20&c=GgvNuEV3Pue8ioVhMOWwJDaJWSmQHJk9Ufd3H7s3otA=",
      href: "/Products/ac-units",
    },
  ],
};

function ProductHero() {
  return (
    <section className="sticky top-0 z-0 w-full h-[45vh] sm:h-[45vh] flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.03 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="/images/products/water-chilers.jpg"
            alt="Industrial Water Chiller"
            className="w-full h-full object-cover opacity-95"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
      </div>

      {/* Top-Right Back Button */}
      <div className="absolute top-55 right-5 z-20 flex items-center gap-3">
        <Link
          href="/Services"
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-2 transition-all shadow-lg"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      <div 
        data-aos="zoom-in" 
        data-aos-duration="600"
        className="relative z-10 max-w-300 w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-3 pt-16 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
            {productData.name[0]} <br />
            <span className="text-emerald-500">{productData.name[1]}</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-200 max-w-lg mx-auto mb-8 font-normal leading-relaxed">
            {productData.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}


function RentalServicesSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full bg-gray-100 dark:bg-gray-900 my-10 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Cold Rooms 
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {productData.services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col transition-all w-full"
            >
              {/* Image */}
              <div className="h-36 sm:h-44 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
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
                  <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 text-lg sm:text-xl">
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

function ProductFeatureGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <motion.div 
        className="lg:col-span-6 flex flex-col items-start space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-emerald-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
          Cooling That Works!
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-normal leading-tight">
          Precision Performance Reliability.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
            Our water chillers, water coolers, and heat pumps are engineered for industrial and commercial needs  combining energy efficiency with dependable performance. From manufacturing plants to office spaces, we help you stay cool under pressure.        </p>
      </motion.div>

      {/* Image Container */}
      <div className="lg:col-span-6 relative w-full h-90 sm:h-105 flex items-center justify-center">
        
        {/* Larger Background Image with Independent Hover Animation */}
        <motion.div 
          className="absolute right-0 top-0 w-[78%] h-[82%] rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100 z-10 cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.3 } }}
        >
          <img
            src="https://t4.ftcdn.net/jpg/01/05/45/05/240_F_105450561_k9Mo2MHlvIAHOPcG6GBALXGuOVKkoFwP.jpg"
            alt="Primary cooling equipment component view"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

        {/* Smaller Floating Image with Independent Hover Animation */}
        <motion.div 
          className="absolute left-0 bottom-0 w-[55%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20 cursor-pointer"
          initial={{ opacity: 0, y: 30, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -8, x: 4, transition: { duration: 0.3 } }}
        >
          <img
            src="https://t4.ftcdn.net/jpg/20/17/21/35/240_F_2017213566_F6aOp65JGktvpyQFy3cWo4eaiXOXmiGs.jpg"
            alt="Secondary structural detail view"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

      </div>
    </div>
  );
}



function SimilarProducts() {
  return (
    <div>
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Related Products
        </h2>
        <p className="text-gray-600 text-sm">Explore other standard cooling capacities in our lineup.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productData.similarProducts.map((prod, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between group"
          >
            <Link href={prod.href} className="flex flex-col h-full cursor-pointer">
              <div className="h-40 overflow-hidden bg-gray-100">
                <img 
                  src={prod.image} 
                  alt={prod.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-5 flex flex-col grow justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-emerald-600 transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">{prod.desc}</p>
                </div>
                <span className="text-emerald-600 font-medium text-xs flex items-center gap-1">
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




export default function ProductShowcaseSection() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans text-gray-800 dark:text-gray-100 antialiased selection:bg-emerald-500 selection:text-white flex flex-col transition-colors duration-300">
      <main className="grow relative">
        <ProductHero />

        {/* Clean Content Section sliding smoothly over the sticky hero background */}
        <div className="relative z-10 w-full bg-white dark:bg-zinc-950 py-20 rounded-t-3xl shadow-[0_-15px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_-15px_30px_rgba(0,0,0,0.4)] transition-colors duration-300 space-y-24">
          
          {/* Contained section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductFeatureGrid />
          </div>

          {/* Full-width section stretching edge-to-edge */}
          <RentalServicesSection />

          {/* Contained sections */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            <SimilarProducts />
          </div>

        </div>
      </main>
    </div>
  );
}