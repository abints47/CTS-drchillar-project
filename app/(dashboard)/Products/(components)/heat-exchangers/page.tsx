"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  VolumeX,
  ShieldCheck,
  Leaf,
  Thermometer,
  ArrowLeft,
  Layers,
  Wrench,
  Building2,
  Settings,
  Factory,
  FlaskConical,
  Dot,
  Store,
} from "lucide-react";

// ==========================================
// DATA STRUCTURES & MOCK DATA
// ==========================================

const productData = {
  name: ["Heat Exchangers & ", "Cooling Towers"],
  tagline: "Reliable heat exchange to optimize energy transfer processes.",
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
  services: [
    {
      title: "Shell & Tube Heat Exchanger",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshell-and-tube-heat-exchangers.c0844b86.webp&w=640&q=75",
      icon: <Layers  className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Heavy-duty exchangers for oil cooling, process fluids and chilled-water duties.",
      features: [
        "Straight or U-tube configuration",
        "Single & double pass (S/T type)",
        "Material options: SS / Copper / Titanium",
      ],
    },
    {
      title: "PP & Titanium Constructions",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftitanium-heat-exchangers.b1eef8f3.webp&w=640&q=75",
      icon: <Thermometer  className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Polypropylene and Titanium builds for aggressive or corrosive chemical media.",
      features: [
        "Excellent corrosion resistance",
        "Suitable for chemical and seawater duty",
        "Long service life",
      ],
    },
    {
      title: "Retubing & Refurbishment",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblast-freezers.45dd5bc1.webp&w=640&q=75",
      icon: <Factory  className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Re-tubing and repair services to restore exchanger performance and extend service life.",
      features: [
        "Tube bundle replacements",
        "On-site leak testing",
        "Upgrades to corrosion-resistant tubes",
      ],
    },
    {
      title: "Plate Heat Exchanger (PHE)",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplate-heat-exchangers.a0ae5361.webp&w=640&q=75",
      icon: <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Compact, high-efficiency plate type exchangers for clean fluids and hygienic duties.",
      features: [
        "Gasketed / brazed / semi-welded types",
        "Quick plate access",
        "Ideal for food & HVAC systems",
      ],
    },
    {
      title: "PHE Service & Spare Parts",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcold-rooms-range.33764b31.webp&w=640&q=75",
      icon: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Complete support for plate exchangers including plate, gasket & seal replacement.",
      features: [
        "Plate inspection & cleaning",
        "Gasket replacement",
        "Leak testing and re-assembly",
      ],
    },
    {
      title: "Custom Material Options",
      image:
        "https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheat-exchangers-custom-made.1c94a57f.webp&w=640&q=75",
      icon: <Settings  className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description:
        "Heat exchangers available in SS-316L, Copper or Titanium to match your process requirements.",
      features: [
        "SS-316L for hygienic applications",
        "Copper for general chilled-water",
        "Titanium for seawater & corrosive media",
      ],
    },
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
      title: "A/C Units & Air Curtains",
      desc: "Efficient air conditioning systems designed for comfort and reliability.",
      image: "/images/air-conditioner1.jpg",
      href: "/Products/ac-units",
    },
  ],
};

function ProductHero() {
  return (
    <section className="sticky top-0 z-0 w-full h-[55vh] sm:h-[45vh] flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.03 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="/images/pipe.jpg"
            alt="Industrial Water Chiller"
            className="w-full h-full object-cover opacity-95"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
      </div>

      {/* Top-Right Back Button */}
      <div className="absolute top-25 sm:top-46 right-5 z-20 flex items-center gap-3">
        <Link
          href="/Products"
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
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-4 text-white leading-tight">
            {productData.name[0]} <br className="hidden sm:inline" />
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
          Efficient Thermal Transfer
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-normal leading-tight">
          Heat Exchangers & Cooling Towers
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
          We provide high-performance shell & tube and plate heat exchangers designed for demanding industrial use, along with cooling towers engineered for precision heat management and optimized energy performance. Whether you require copper, stainless steel, titanium or PP constructions, our systems deliver reliable heat transfer for every application.
        </p>
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
            src="https://t3.ftcdn.net/jpg/13/63/38/24/240_F_1363382413_Vz2qgUiwtX6j2S9UQ1oEEQWUhuWM6gJk.jpg"
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
            src="https://t3.ftcdn.net/jpg/04/95/03/94/240_F_495039403_dcU74ecQqd8o8CyEBayhh2j2XuMyJLNB.jpg"
            alt="Secondary structural detail view"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

      </div>
    </div>
  );
}


function ProductFeatureCardSection({
  title = "Cooling Towers",
  description = "Our cooling towers are designed for maximum heat rejection with low noise and minimal energy consumption — making them ideal for industrial and HVAC applications. Using corrosion-resistant materials and efficient fill media, they deliver reliable performance in even the most demanding climates.",
  image = "https://t3.ftcdn.net/jpg/16/73/22/86/240_F_1673228699_VCNQD4fc7pJAxXA6tmVFwKdrDXfXzxbj.jpg",
  features = [
    "Fiberglass or stainless steel construction",
    "Low-noise fan systems for minimal acoustic impact",
    "High-efficiency PVC fill media for superior cooling",
    "Available in single- and multi-cell configurations"
  ]
}) {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-[1900px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Image with Left-to-Right Animation */}
        <div className="lg:col-span-6 w-full">
          <motion.div 
            className="w-full h-80 sm:h-105 lg:h-120 rounded-[20px] overflow-hidden shadow-md bg-gray-100 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Right Side: Content with Right-to-Left Animation */}
        <motion.div 
          className="lg:col-span-6 flex flex-col items-start space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-slate-900 tracking-tight leading-tight mb-2">
            {title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-[1.7] font-normal">
            {description}
          </p>

          <ul className="space-y-3.5 w-full pt-2">
            {features.map((feature, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-medium"
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-emerald-100">&#x2713;</span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </div>
  );
}

function RentalServicesSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full bg-gray-100 dark:bg-gray-900 my-10 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Heat Exchangers
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


// ==========================================
// MAIN COMPONENT CONTAINER
// ==========================================

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
            <ProductFeatureCardSection />
            <SimilarProducts />
          </div>

        </div>
      </main>
    </div>
  );
}