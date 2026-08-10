import ParallaxCarousel from '@/components/ParallaxCarousel'
import CardGrid from "@/components/Card"
import { PRODUCTS, SERVICES } from "@/data/content"
import Image from 'next/image'
import Link from 'next/link'
import ServicesHighlight from '@/components/services-highlight'
import { ArrowRight, Phone, Snowflake } from "lucide-react"
import Blog from "@/components/blog"
import { FaRibbon, FaUsers, FaCogs, FaRegClock } from 'react-icons/fa'
import {
  ArrowLeftRight,
  Wrench,
  Warehouse,
  Headphones
} from "lucide-react"

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
    <div className="overflow-x-hidden w-full">
      {/* Full screen carousel hero */}
      <ParallaxCarousel slides={IMAGES} />

      {/* Hero Content Section */}
      <section className="relative overflow-hidden bg-gray-100 py-12 sm:py-16 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 dark:bg-mauve-950">
        {/* Background Decorative Snowflakes */}
        <Snowflake
          size={100}
          className="pointer-events-none absolute -top-2 -left-2 select-none text-emerald-500/15 animate-spin md:top-8 md:left-2 hidden sm:block"
          style={{ animationDuration: '20s' }}
          aria-hidden="true"
        />
        <Snowflake
          size={100}
          className="pointer-events-none absolute bottom-0 right-0 select-none text-emerald-500/15 animate-spin md:bottom-10 md:right-16 hidden sm:block"
          style={{ animationDuration: '25s' }}
          aria-hidden="true"
        />  

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Left Image Cluster */}
          <div 
            className="relative flex flex-col items-center justify-center my-6 sm:my-8 lg:block lg:ms-12 min-h-75 sm:min-h-87.5"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* Back Image */}
            <div className="group/img1 relative h-64 w-60 sm:h-80 sm:w-72 overflow-hidden rounded-xl border-2 border-white opacity-100 shadow-lg transition-all duration-500 ease-out sm:rotate-3 hover:z-20 hover:scale-105 hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl dark:border-gray-900">
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
            <div className="group/img2 absolute top-20 left-6 sm:top-20 sm:left-20 lg:left-40 h-56 w-52 sm:h-72 sm:w-64 overflow-hidden rounded-xl border-2 border-white opacity-100 shadow-lg transition-all duration-500 delay-200 ease-out sm:rotate-12 hover:z-20 hover:scale-105 hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl dark:border-gray-900">
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
            className="relative text-center lg:text-left mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-white leading-tight">
              Chiller Maintenance Company in UAE
            </h2>

            <p className="mb-6 text-sm sm:text-base text-gray-600 leading-relaxed dark:text-gray-300">
              At{' '}
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                CTS - Chiller Technical Services L.L.C
              </span>
              , we combine years of expertise with modern technology to deliver
              exceptional cooling solutions. Our focus is on reliability,
              innovation, and customer satisfaction making us the trusted partner for
              businesses across the region.
            </p>

            {/* Feature Badges */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
              <div 
                className="group flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="text-xl sm:text-2xl text-emerald-600 transition-transform group-hover:scale-110 shrink-0">
                  <FaRibbon />
                </div>
                <span className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-200">
                  Proven Expertise
                </span>
              </div>

              <div 
                className="group flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="text-xl sm:text-2xl text-emerald-600 transition-transform group-hover:scale-110 shrink-0">
                  <FaUsers />
                </div>
                <span className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-200">
                  Dedicated Support
                </span>
              </div>

              <div 
                className="group flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="text-xl sm:text-2xl text-emerald-600 transition-transform group-hover:scale-110 shrink-0">
                  <FaCogs />
                </div>
                <span className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-200">
                  Cutting-Edge Solutions
                </span>
              </div>

              <div 
                className="group flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="text-xl sm:text-2xl text-emerald-600 transition-transform group-hover:scale-110 shrink-0">
                  <FaRegClock />
                </div>
                <span className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-200">
                  On-Time Delivery
                </span>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/About"
                className="inline-block rounded-md bg-emerald-500 py-2.5 px-5 text-sm font-medium text-white transition hover:bg-emerald-600 shadow-sm"
                aria-label="Learn more about us"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                Learn More<span className="sr-only"> about us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services and Offerings Section */}
      <section id="about" className="relative overflow-hidden w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        {/* Side Decorative Animated Snowflakes Positioned on Full-Width Section Edges */}
        <div className="pointer-events-none absolute top-1/4 left-4 sm:left-8 lg:left-12 z-0 hidden sm:block animate-bounce" style={{ animationDuration: '3.5s' }} aria-hidden="true">
          <Snowflake size={110} className="select-none text-emerald-500/10 dark:text-emerald-400/10 animate-spin" style={{ animationDuration: '8s' }} />
        </div>
        <div className="pointer-events-none absolute bottom-1/3 right-4 sm:right-8 lg:right-12 z-0 hidden sm:block animate-bounce" style={{ animationDuration: '3s' }} aria-hidden="true">
          <Snowflake size={120} className="select-none text-emerald-500/10 dark:text-emerald-400/10 animate-spin" style={{ animationDuration: '9s', animationDirection: 'reverse' }} />
        </div>

        {/* Inner Content Container */}
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10 w-full">
          <div>
            {/* Header Section */}
            <div 
              className="max-w-4xl mx-auto text-center space-y-4 border-b border-slate-200/80 dark:border-slate-800 pb-8 sm:pb-12 transition-colors duration-300"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-white tracking-tight leading-tight">
                What We Offer
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-light max-w-3xl mx-auto pt-2 px-2">
                At <strong className="text-emerald-600 dark:text-emerald-500 font-semibold">CTS - Chiller Technical Services L.L.C</strong>, we provide top-notch solutions for all your cooling needs. From premium trading options to expert maintenance, flexible rentals, and dedicated after-sales services our mission is to keep you cool, comfortable, and satisfied year round.
              </p>
            </div>

            {/* Clean 4-Column Modern Tech Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 sm:pt-10">
              
              {/* 01. Trading */}
              <div 
                className="group relative space-y-4 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <div className="text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <ArrowLeftRight size={38} strokeWidth={2.2} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Trading
                </h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  High-quality cooling systems and equipment from trusted brands, ensuring performance and durability you can rely on.
                </p>
              </div>

              {/* 02. Maintenance */}
              <div 
                className="group relative space-y-4 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                <div className="text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Wrench size={38} strokeWidth={2.2} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Maintenance
                </h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  Real-time telemetry monitoring, automated health checks, and rapid dispatch protocols to mitigate critical systemic risk.
                </p>
              </div>

              {/* 03. Rentals */}
              <div 
                className="group relative space-y-4 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="800"
              >
                <div className="text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Warehouse size={38} strokeWidth={2.2} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Rentals
                </h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  Flexible rental options for all types of cooling systems, perfect for temporary needs or seasonal projects.
                </p>
              </div>

              {/* 04. Services */}
              <div 
                className="group relative space-y-4 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
              >
                <div className="text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Headphones size={38} strokeWidth={2.2} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Services
                </h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  From consultation to installation and after-sales support, our team ensures you get complete peace of mind.
                </p>
              </div>

            </div>
          </div>

          {/* Featured Products & Services Cards Section */}
          <div className="space-y-12">
            {/* Products Subsection */}
            <div className="space-y-4" data-aos="fade-up" data-aos-duration="800">
              <div className="text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white tracking-tight">
                  Our Products
                </h3>
                <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full transition-all duration-300 hover:w-24" />
              </div>

              <p className="max-w-3xl mx-auto text-center text-sm sm:text-base font-normal text-gray-600 dark:text-gray-300 tracking-tight px-4 leading-relaxed">
                We provide a wide range of cooling and refrigeration solutions built for performance, reliability, and efficiency.
              </p>

              <CardGrid items={PRODUCTS} />
            </div>

            {/* Services Subsection */}
            <div className="space-y-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <div className="text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Our Services
                </h3>
                <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full transition-all duration-300 hover:w-24" />
              </div>

              <p className="max-w-3xl mx-auto text-center text-sm sm:text-base font-normal text-gray-600 dark:text-gray-300 tracking-tight px-4 leading-relaxed">
                From Chilled water systems to complete AC maintenance, we provide a full range of professional HVAC services.
              </p>
              <CardGrid items={SERVICES} />
            </div>
          </div>
        </div>
      </section>

      <ServicesHighlight />

      {/* Rent A/C Units Section with 3 new snowflakes */}
      <section className="relative overflow-hidden w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        {/* 3 New Decorative Snowflakes for Rent Section */}
        <div className="pointer-events-none absolute top-25 left-12 z-0 hidden sm:block animate-bounce" style={{ animationDuration: '4s' }} aria-hidden="true">
          <Snowflake size={110} className="select-none text-emerald-500/10 dark:text-emerald-400/10 animate-spin" style={{ animationDuration: '12s' }} />
        </div>
        <div className="pointer-events-none absolute top-150 right-8 z-0 hidden sm:block animate-bounce" style={{ animationDuration: '3.2s' }} aria-hidden="true">
          <Snowflake size={100} className="select-none text-emerald-500/10 dark:text-emerald-400/10 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pt-10 sm:pt-20">
            
            {/* Left Column: Text Part */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-white tracking-normal leading-tight">
                Rent A/C Units, <span className='text-emerald-600'>Chillers <br className="hidden sm:inline"/>&amp; Gensets</span> 
              </h2>

              <div className="space-y-3 sm:space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed text-left font-normal">
                <p>
                  Whether you need to cool down a large space, maintain process temperatures, or provide uninterrupted power to a site, we offer reliable rental solutions for A/C units, water chillers, and diesel generators.
                </p>
                <p>
                  All rental units are fully maintained by our dedicated technical team ensuring continuous comfort, peak performance, and zero downtime whenever you need it.
                </p>
              </div>

              <div className="pt-2 flex justify-center lg:justify-start">
                <Link 
                  href="/About" 
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1FAA6D] hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95 group"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Image Part */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <div className="relative w-full h-72 sm:h-96 lg:h-112.5 overflow-hidden rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group">
                <Image 
                  src="/images/ac-curtains.jpg" 
                  alt="Rent A/C Units, Chillers & Gensets" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw" 
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                {/* Subtle Gradient Vignette */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent opacity-80" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Blog Section wrapped to support 3 new snowflakes */}
      <div className="relative overflow-hidden w-full">

        <div className="relative z-10">
          <Blog />
        </div>
      </div>

      {/* Call to Action Section */}
      <section 
        className="w-full border-t border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-mauve-950 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors"
        data-aos="fade"
        data-aos-duration="500"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
          
          {/* Left Side: Direct Header & Subtext */}
          <div className="max-w-2xl space-y-2 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-500">
              Get In Touch
            </p>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1A1F2B] dark:text-white tracking-tight">
              Ready to discuss your project?
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              Contact us today for a direct technical consultation and project quote.
            </p>
          </div>

          {/* Right Side: Clean Inline Action Links */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 shrink-0">
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
              href="tel:+97167434537"
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
    </div>
  )
}