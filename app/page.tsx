import ParallaxCarousel from '@/components/ParallaxCarousel'
import CardGrid from "@/components/Card"
import { PRODUCTS, SERVICES } from "@/data/content"
import Image from 'next/image'
import Link from 'next/link'
import ServicesHighlight from '@/components/services-highlight'
import {  ArrowRight, Phone, } from "lucide-react"
import { Snowflake } from 'lucide-react'
import Blog from "@/components/blog";
import { FaRibbon, FaUsers, FaCogs, FaRegClock } from 'react-icons/fa'
import {
  ArrowLeftRight,
  Wrench,
  Warehouse,
  Headphones
} from "lucide-react";

const IMAGES = [
  {
    id: '1',
    src: '/images/asethetic-ac.webp',
    alt: 'Mountains',
    title: 'Water Chillers, Coolers & Heat Pumps',
    description: 'High-efficiency and water chillers designed for reliable cooling of industrial and commercial appliances',
  },
  {
    id: '2',
    src: '/images/air-conditioner.jpg',
    alt: 'River',
    title: 'A/C Units & Air Curtains',
    description: 'Robust air conditioning system for residential, commercial and industrial environments.',
  },
  {
    id: '3',
    src: '/images/pipe.jpg',
    alt: 'Nature',
    title: 'Chilled Water Pipeline & Flushing',
    description: 'Design, installation and flushing of chilled water pipelines for efficient system performance.',
  },
  {
    id: '4',
    src: '/images/air-conditioner1.jpg',
    alt: 'Nature',
    title: 'A/C, Chiller & Genset Rentals',
    description: 'Short and long-term rental solutions including A/C units, water chillers and diesel generators.',
  },
  {
    id: '5',
    src: '/images/ac-reparing.jpg',
    alt: 'Nature',
    title: 'A/C, Chiller & Coldroom Maintenance',
    description: 'Preventive and Corrective maintenance Services for air conditioning, chiller and cold room systems.',
  },
  {
    id: '6',
    src: '/images/ac-curtains.jpg',
    alt: 'Nature',
    title: 'A/C, Units & Air Curtains',
    description: 'Robust Air Conditioning system for residential, commercial and industrial environments.',
  },
  {
    id: '7',
    src: '/images/AMC.jpg',
    alt: 'Nature',
    title: 'AMC',
    description: 'Annual Maintenance Contract providing priority support and long-term services coverage.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Full screen carousel hero */}
      <ParallaxCarousel slides={IMAGES} />

      {/* Hero Content Section */}
      <section className="relative overflow-hidden bg-gray-100 py-16 pb-28 px-4 transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-gray-950">
        {/* Background Decorative Snowflakes */}
        <Snowflake
          size={140}
          className="pointer-events-none absolute -top-2 -left-2 select-none text-emerald-500/10 animate-spin-slow md:top-0 md:left-2"
          aria-hidden="true"
        />
        <Snowflake
          size={140}
          className="pointer-events-none absolute bottom-0 right-0 select-none text-emerald-500/10 animate-spin-slow md:bottom-10 md:right-16"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Image Cluster */}
          <div 
            className="relative flex flex-col items-center sm:mb-12 lg:block lg:ms-12"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* Back Image */}
            <div className="group/img1 relative hidden h-80 w-72 overflow-hidden rounded-xl border-2 border-white opacity-100 shadow-lg transition-all duration-500 ease-out sm:block sm:rotate-3 hover:z-20 hover:scale-105 hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl dark:border-gray-900">
              <Image
                src="/images/asethetic-ac.webp"
                alt="Our Team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl object-cover transition-transform duration-500 group-hover/img1:scale-110"
                priority
              />
            </div>

            {/* Front Image */}
            <div className="group/img2 relative h-72 w-64 overflow-hidden rounded-xl border-2 border-white opacity-100 shadow-lg transition-all duration-500 delay-200 ease-out sm:absolute sm:top-20 sm:left-20 sm:rotate-12 lg:top-20 lg:left-40 hover:z-20 hover:scale-105 hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl dark:border-gray-900">
              <Image
                src="/images/Amc.webp"
                alt="Work in Action"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl object-cover transition-transform duration-500 group-hover/img2:scale-110"
              />
            </div>
          </div>

          {/* Right Content Side */}
          <div 
            className="relative"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h2 className="mb-6 text-3xl font-bold text-emerald-600 sm:text-4xl dark:text-white">
              Chiller Maintenance Company in UAE
            </h2>

            <p className="mb-6 text-gray-600 leading-relaxed dark:text-gray-300">
              At{' '}
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                CTS - Chiller Technical Services L.L.C
              </span>
              , we combine years of expertise with modern technology to deliver
              exceptional cooling solutions. Our focus is on reliability,
              innovation, and customer satisfaction  making us the trusted partner for
              businesses across the region.
            </p>

            {/* Feature Badges */}
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div 
                className="group flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="text-2xl text-emerald-600 transition-transform group-hover:scale-110">
                  <FaRibbon />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Proven Expertise
                </span>
              </div>

              <div 
                className="group flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="text-2xl text-emerald-600 transition-transform group-hover:scale-110">
                  <FaUsers />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Dedicated Support
                </span>
              </div>

              <div 
                className="group flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="text-2xl text-emerald-600 transition-transform group-hover:scale-110">
                  <FaCogs />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Cutting-Edge Solutions
                </span>
              </div>

              <div 
                className="group flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="text-2xl text-emerald-600 transition-transform group-hover:scale-110">
                  <FaRegClock />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  On-Time Delivery
                </span>
              </div>
            </div>

            {/* Learn More Button */}
            <Link
              href="/About"
              className="inline-block rounded-md bg-emerald-500 py-2 px-4 text-sm font-medium text-white transition hover:bg-emerald-600"
              aria-label="Learn more about us"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              Learn More<span className="sr-only"> about us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services and Offerings Section */}
      <section id="about" className="relative  py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 ">
        <div>
          {/* Header Section */}
          <div 
            className="max-w-4xl mx-auto text-center space-y-4 border-b border-slate-200/80 dark:border-slate-800 pb-12 transition-colors duration-300"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-emerald-600 dark:text-white tracking-tight leading-[1.15]">
              What We Offer
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed font-light max-w-3xl mx-auto pt-2">
              At <strong className="text-emerald-600 dark:text-emerald-500 font-semibold">CTS - Chiller Technical Services L.L.C</strong>, we provide top-notch solutions for all your cooling needs. From premium trading options to expert maintenance, flexible rentals, and dedicated after-sales services our mission is to keep you cool, comfortable, and satisfied year round.
            </p>
          </div>

          {/* Clean 4-Column Modern Tech Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            
            {/* 01. Trading */}
            <div 
              className="group relative space-y-4 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="text-emerald-600 dark:text-emerald-400">
                <ArrowLeftRight size={42} strokeWidth={2.2} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Trading
              </h4>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                High-quality cooling systems and equipment from trusted brands, ensuring performance and durability you can rely on.
              </p>
            </div>

            {/* 02. Maintenance */}
            <div 
              className="group relative space-y-4 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="text-emerald-600 dark:text-emerald-400">
                <Wrench size={42} strokeWidth={2.2} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Maintenance
              </h4>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Real-time telemetry monitoring, automated health checks, and rapid dispatch protocols to mitigate critical systemic risk.
              </p>
            </div>

            {/* 03. Rentals */}
            <div 
              className="group relative space-y-4 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="text-emerald-600 dark:text-emerald-400">
                <Warehouse size={42} strokeWidth={2.2} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Rentals
              </h4>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Flexible rental options for all types of cooling systems, perfect for temporary needs or seasonal projects.
              </p>
            </div>

            {/* 04. Services */}
            <div 
              className="group relative space-y-4 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <div className="text-emerald-600 dark:text-emerald-400">
                <Headphones size={42} strokeWidth={2.2} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Services
              </h4>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                From consultation to installation and after-sales support, our team ensures you get complete peace of mind.
              </p>
            </div>

          </div>
        </div>
    

        {/* Featured Products & Services Cards Section */}
        <div className="space-y-12 ">
          {/* Products Subsection */}
          <div className="space-y-4 " data-aos="fade-up">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                Our Products
              </h3>
              <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
            </div>

            <p className="max-w-3xl mx-auto text-center text-base sm:text-lg font-normal text-gray-600 dark:text-gray-300 tracking-wide px-4 ">
              We provide a wide range of cooling and refrigeration solutions built for performance, reliability, and efficiency.
            </p>

            <CardGrid items={PRODUCTS} />
          </div>

          {/* Services Subsection */}
          <div className="space-y-4" data-aos="fade-up">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                Our Services
              </h3>
              <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
            </div>

            <p className="max-w-3xl mx-auto text-center text-base sm:text-lg font-normal text-gray-600 dark:text-gray-300 tracking-tight px-4 leading-relaxed">
              From Chilled water systems to complete AC maintenance, we provide a full range of professional HVAC services.
            </p>
            <CardGrid items={SERVICES} />
          </div>
        </div>
      </section>

      {/* Here is the New Components that added on the Section page */}



      <ServicesHighlight/>











      {/* Rent A/C Units Section */}
      <section 
        className="relative pt-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden" 
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 relative">
            <div className="relative w-full h-90 sm:h-115 lg:h-125 overflow-hidden rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group">
              <Image 
                src="/images/ac-curtains.jpg" 
                alt="Rent A/C Units, Chillers & Gensets" 
                fill 
                priority
                sizes="(max-width: 1024px) 100vw, 58vw" 
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              {/* Subtle Gradient Vignette */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent opacity-80" />
            </div>
            
          </div>

          <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-0">

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-700 dark:text-white tracking-tight leading-tight sm:leading-snug">
              Rent A/C Units, Chillers &amp; Gensets
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Whether you need to cool down a large space, maintain process temperatures, or provide uninterrupted power to a site, we offer reliable rental solutions for A/C units, water chillers, and diesel generators.
            {/* </p> */}

            {/* Key Value Points (Breaks up text wall) */}
            {/* <ul className="space-y-1.5 py-1">
              <li className="flex items-start gap-4 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className='text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal'>Perfect for events, industrial sites, mock-up rooms &amp; emergency backup.</span>
              </li>
              <li className="flex items-start gap-4 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className='text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal'>Quick to deploy, highly energy-efficient, and fully load-tested.</span>
              </li>
            </ul> */}
            {/* Paragraph 2 */}
            {/* <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal"> */}
              <br/><span >All rental units are fully maintained by our dedicated technical team ensuring continuous comfort, peak performance, and zero downtime whenever you need it.</span> 
            </p>

            {/* Action Button */}
            <div className="pt-2">
              <Link 
                href="/About" 
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95 group"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Blog/>


    {/* Call to Action Section */}
    <section 
  className="w-full border-t border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/40 py-16 px-4 sm:px-6 lg:px-8 transition-colors"
  data-aos="fade"
  data-aos-duration="500"
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
    
    {/* Left Side: Direct Header & Subtext */}
    <div className="max-w-2xl space-y-2.5">
      <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-500">
        Get In Touch
      </p>
      
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1F2B] dark:text-white tracking-tight">
        Ready to discuss your project?
      </h2>
      
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
        Contact us today for a direct technical consultation and project quote.
      </p>
    </div>

    {/* Right Side: Clean Inline Action Links */}
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
      {/* Primary Action Button */}
      <Link
        href="/Contact"
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-md
          bg-emerald-700
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          shadow-xs
          transition-all
          duration-200
          hover:bg-emerald-800
          hover:shadow-md
          active:scale-95
          group
        "
      >
        <span>Contact Us</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>

      {/* Secondary Call Action */}
      <Link
        href=""
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-md
          border
          border-slate-300
          dark:border-slate-700
          bg-white/80
          dark:bg-slate-800/80
          px-5
          py-3
          text-sm
          font-semibold
          text-slate-700
          dark:text-slate-200
          transition-all
          duration-200
          hover:border-emerald-700
          hover:text-emerald-700
          dark:hover:border-emerald-500
          dark:hover:text-emerald-400
          active:scale-95
        "
      >
        <Phone className="h-4 w-4 text-emerald-700 dark:text-emerald-500 transition-colors" />
        <span>Call</span>
      </Link>
    </div>  
  </div>
  
</section>
    
    </>
  )
}