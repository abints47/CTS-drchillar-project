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
  FlaskConical,
  Store,
} from "lucide-react";

// ==========================================
// DATA STRUCTURES & MOCK DATA
// ==========================================

const productData = {
  name: ["Cold Room & Ice ", "Block Machines"],
  tagline: "Efficient air conditioning systems designed for comfort and reliability.",
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
      "https://media.istockphoto.com/id/492892828/photo/air-conditioning-engineer.webp?a=1&b=1&s=612x612&w=0&k=20&c=GgvNuEV3Pue8ioVhMOWwJDaJWSmQHJk9Ufd3H7s3otA=",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1708449287110-2f2418fb5a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh2YWN8ZW58MHx8MHx8fDA%3D",
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
  similarProducts: [
    {
      title: "Water Chillers, Coolers and Heat Pumps",
      desc: "High-performance chillers for all your cooling needs.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
      href: "/Products/water-chillers",
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

// ==========================================
// SUBCOMPONENTS
// ==========================================

function ProductHero() {
  return (
    <section className="sticky top-0 z-0 w-full h-[65vh] sm:h-[75vh] flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.03 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="/images/products/heatExchange.jpg"
            alt="Industrial Water Chiller"
            className="w-full h-full object-cover opacity-95"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-7 py-3.5 rounded-full shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 group">
              Request Technical Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-7 py-3.5 rounded-full backdrop-blur-md border border-white/15 transition-all">
              Contact US 
            </button>
          </div>
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
          Cold Storage, Perfectly Engineered
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
          Our Cold Storage & Ice Production Solutions
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
          From fresh produce to frozen seafood, our cold rooms and ice block machines maintain precise temperatures from <span className="font-bold text-black">-40°C to +20°C</span> for any application keeping your products fresh, safe, and ready for market.
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
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
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
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
            alt="Secondary structural detail view"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

      </div>
    </div>
  );
}

function ProductOverview() {
  return (
    <div className="grid grid-cols-1 pt-10 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-5">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
          Advanced Cooling Technology for Modern Industry
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {productData.description}
        </p>
      </div>
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {productData.features.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="p-5 bg-[#F8FAFC] rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3 border border-gray-100">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-gray-900 text-base mb-1.5">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TechnicalSpecifications() {
  return (
    <div>
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Technical Specifications
        </h2>
        <p className="text-gray-600 text-sm">
          Core operating baselines for the standard 150 TR configuration.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {productData.specs.map((spec, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -3 }}
            className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100 shadow-sm text-center"
          >
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-2">
              {spec.label}
            </span>
            <span className="text-2xl font-bold text-gray-900">
              {spec.value}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function GallerySection() {
  const [activeImage, setActiveImage] = React.useState(productData.gallery[0]);

  return (
    <div>
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
          System Architecture Gallery
        </h2>
        <p className="text-gray-600 text-sm">Detailed views of assembly components and housing layout.</p>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-md mb-4 bg-gray-100 border border-gray-100 h-95">
          <img
            src={activeImage}
            alt="Chiller Unit Component View"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center gap-3">
          {productData.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                activeImage === img ? "border-emerald-600 scale-105 shadow-sm" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductFeatureCardSection({
  title = "Cooling Towers",
  description = "Our cooling towers are designed for maximum heat rejection with low noise and minimal energy consumption making them ideal for industrial and HVAC applications. Using corrosion-resistant materials and efficient fill media, they deliver reliable performance in even the most demanding climates.",
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
        
        {/* Left Side: Full-Width Image stretching across the left column */}
        <div className="lg:col-span-6 w-full">
          <motion.div 
            className="w-full h-80 sm:h-105 lg:h-120 rounded-[20px] overflow-hidden shadow-md bg-gray-100 cursor-pointer"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img
              src="https://www.drchiller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fice-block-machine.e2511a5b.webp&w=1920&q=75"
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6 px-4 sm:px-6 lg:px-0 lg:pr-8">
          
          <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-slate-900 tracking-tight leading-tight mb-2">
            {title}
          </h2>

          <p className="text-slate-600 text-justify leading-7 text-pretty hyphens-none sm:text-lg font-normal">
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
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-emerald-100">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h20" />
                    <path d="M12 2v20" />
                    <path d="m4.93 4.93 14.14 14.14" />
                    <path d="m19.07 4.93-14.14 14.14" />
                  </svg>
                </span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

        </div>

      </div>
    </div>
  );
}



function WhyChooseSection() {
  return (
    <div className="space-y-16">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Why Choose Our Solutions
        </h2>
        <p className="text-gray-600 text-s">Discover the innovative features and engineering excellence that deliver reliable performance, energy efficiency, and long-term value.</p>
      </div>
      {productData.whyChoose.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col lg:flex-row items-center gap-10 ${
            idx % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <motion.div 
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-md border border-gray-100 h-70 cursor-pointer"
            whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            />
          </motion.div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
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

// ==========================================
// MAIN COMPONENT CONTAINER
// ==========================================

export default function ProductShowcaseSection() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased selection:bg-emerald-500 selection:text-white flex flex-col">
      <main className="grow relative">
        <ProductHero />

        {/* Clean Content Section sliding smoothly over the sticky hero background */}
        <section className="relative z-10 w-full bg-white py-20 px-4 sm:px-6 lg:px-8 rounded-t-3xl shadow-[0_-15px_30px_rgba(0,0,0,0.08)] transition-colors duration-300">
          <div className="max-w-7xl mx-auto space-y-24">
            {/* <ProductOverview /> */}
            <ProductFeatureGrid />
            {/* <TechnicalSpecifications /> */}
            <GallerySection />
            <ProductFeatureCardSection />
            <WhyChooseSection />
            <SimilarProducts />
          </div>
        </section>
      </main>
    </div>
  );
}