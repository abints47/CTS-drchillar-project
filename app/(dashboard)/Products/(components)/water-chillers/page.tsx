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

// ==========================================
// SUBCOMPONENTS
// ==========================================

function ProductHero() {
  return (
    <section className="sticky top-0 z-0 w-full h-[45vh] sm:h-[55vh] flex items-center justify-center overflow-hidden bg-gray-900">
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
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-7 py-3.5 rounded-full backdrop-blur-md border border-white/15 transition-all">
              <Link href={'/Contact'}>Contact US</Link> 
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
            src="https://images.unsplash.com/photo-1563456020159-b74d67e78c26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0ZXIlMjBjaGlsbGVyfGVufDB8fDB8fHww"
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
            src="https://images.unsplash.com/photo-1639616938330-d77579c1bef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0ZXIlMjBjaGlsbGVyfGVufDB8fDB8fHww"
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
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 max-w-350 mx-auto overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <motion.div 
          className="lg:col-span-5 flex flex-col items-start space-y-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        > 
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Advanced Cooling Technology for Modern Industry
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {productData.description}
          </p>
          
          <div className="pt-2">
            <div className="h-1.5 w-16 bg-emerald-600 rounded-full" />
          </div>
        </motion.div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {productData.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative p-6 bg-white rounded-3xl border border-slate-100 shadow-[0_4px_1px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(16,185,129,0.1)] hover:border-emerald-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>

              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-emerald-700 transition-colors">
                {feature.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}



function WhyChooseSection() {
  return (
    <div className="space-y-16">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-normal mb-2">
          Why Choose <span className="text-emerald-600"> Our Products</span>
        </h2>
        <p className="text-gray-600 text-s">Engineered for superior performance, energy efficiency, and long-term reliability, our products are designed to meet the evolving needs of commercial and industrial applications.</p>
      </div>
      {productData.whyChoose.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col lg:flex-row items-center gap-10 pt- ${
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
          <div className="w-full lg:w-1/2 pl-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 text-justify pr-10 leading-relaxed ">{item.desc}</p>
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


export default function ProductShowcaseSection() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased selection:bg-emerald-500 selection:text-white flex flex-col">
      <main className="grow relative">
        <ProductHero />

        {/* Clean Content Section sliding smoothly over the sticky hero background */}
        <section className="relative z-10 w-full bg-white py-20 px-4 sm:px-6 lg:px-8 rounded-t-3xl shadow-[0_-15px_30px_rgba(0,0,0,0.08)] transition-colors duration-300">
          <div className="max-w-6xl mx-auto space-y-24">
            <ProductFeatureGrid />
            <ProductOverview />
            <WhyChooseSection />
            <SimilarProducts />
          </div>
        </section>
      </main>
    </div>
  );
}