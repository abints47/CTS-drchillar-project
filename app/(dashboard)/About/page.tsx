'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  Target,
  Snowflake,
} from 'lucide-react'

import Faq from "@/components/Faq";

// Import AOS and its styles
import AOS from 'aos'
import 'aos/dist/aos.css'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: 'CTS',
  description:
    'CTS provides end-to-end HVAC engineering, industrial chiller installation, cold storage solutions, and 24/7 maintenance services for commercial and industrial facilities across the UAE.',
  telephone: '+971-6-743-4537',
  areaServed: 'United Arab Emirates',
  foundingDate: '2009',
  slogan: 'Your Trusted HVAC & Chillers Partner in the UAE',
}

const rotatingHeadlines = [
  {
    prefix: 'Your Trusted',
    highlight: 'HVAC & Chillers',
    suffix: 'Partner in the UAE',
  },
  {
    prefix: 'Advanced',
    highlight: 'Industrial Cooling',
    suffix: '& Cold Room Solutions',
  },
  {
    prefix: '24/7 Expert',
    highlight: 'Chiller Maintenance',
    suffix: '& Engineering Services',
  },
]

export default function AboutPage() {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 60,
    })
  }, [])

  // Rotating Headline Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setCurrentHeadlineIndex((prevIndex) => (prevIndex + 1) % rotatingHeadlines.length)
        setIsAnimating(true)
      }, 350)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const activeHeadline = rotatingHeadlines[currentHeadlineIndex]

  return (
    <main className="relative min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-600 selection:text-white transition-colors duration-300 overflow-hidden">
      
      {/* ================= BACKGROUND ROTATING SNOWFLAKES WITH AOS ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Snowflake 1 - Hero Top Left (Zoom-In) */}
        <div 
          data-aos="zoom-in" 
          data-aos-duration="1000" 
          data-aos-delay="100"
          className="absolute top-8 left-2 sm:top-12 sm:left-10"
        >
          <Snowflake 
            className="w-20 h-20 sm:w-28 sm:h-28 text-[#00B67A]/20 dark:text-emerald-400/15 animate-[spin_25s_linear_infinite]" 
            aria-hidden="true" 
          />
        </div>

        {/* Snowflake 2 - Hero / Who We Are Right Edge (Fade-In + Staggered Delay) */}
        <div 
          data-aos="fade-in" 
          data-aos-duration="1200" 
          data-aos-delay="300"
          className="absolute top-[18%] right-2 sm:right-12"
        >
          <Snowflake 
            className="w-20 h-20 sm:w-28 sm:h-28 text-[#00B67A]/15 dark:text-emerald-400/15 animate-[spin_35s_linear_infinite_reverse]" 
            aria-hidden="true" 
          />
        </div>

        {/* Snowflake 3 - Mission Section Left (Zoom-In) */}
        <div 
          data-aos="zoom-in" 
          data-aos-duration="1000" 
          data-aos-delay="200"
          className="absolute top-[60%] left-2 sm:left-16"
        >
          <Snowflake 
            className="w-20 h-24 sm:w-28 sm:h-28 text-[#00B67A]/15 dark:text-emerald-400/15 animate-[spin_30s_linear_infinite]" 
            aria-hidden="true" 
          />
        </div>

        {/* Snowflake 4 - Bottom CTA Section Right (Fade-In) */}
        <div 
          data-aos="fade-in" 
          data-aos-duration="1200" 
          data-aos-delay="400"
          className="absolute bottom-12 right-2 sm:bottom-16 sm:right-20"
        >
          <Snowflake 
            className="w-20 h-24 sm:w-30 sm:h-28 text-[#00B67A]/15 dark:text-emerald-400/15 animate-[spin_20s_linear_infinite_reverse]" 
            aria-hidden="true" 
          />
        </div>

      </div>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HERO SECTION ================= */}
      <section
        aria-labelledby="about-hero-heading"
        className="relative z-10 pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 border-b border-slate-200 dark:border-slate-800 bg-transparent"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left" data-aos="fade-right">
              <div className="space-y-4">
                <h1
                  id="about-hero-heading"
                  className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight min-h-[4.5em] sm:min-h-[3.5em] lg:min-h-[2.5em] flex flex-col justify-center overflow-hidden"
                >
                  <span
                    className={`block transition-all duration-300 transform ${
                      isAnimating
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-3'
                    }`}
                  >
                    {activeHeadline.prefix}{' '}
                    <span className="text-[#00B67A] dark:text-emerald-400">
                      {activeHeadline.highlight}
                    </span>{' '}
                    {activeHeadline.suffix}
                  </span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-xl">
                  We provide end-to-end HVAC engineering, industrial chiller installation, cold storage solutions, and 24/7 maintenance services for commercial and industrial facilities across the region.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#00B67A] hover:bg-emerald-600 rounded-lg transition-colors shadow-xs w-full sm:w-auto text-center"
                >
                  Request Consultation
                  <ArrowRight className="ml-2 w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>
                <a
                  href="tel:+97167434537"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-800 w-full sm:w-auto text-center"
                >
                  <Phone className="mr-2 w-4 h-4 text-[#00B67A] dark:text-emerald-400 shrink-0" aria-hidden="true" />
                  +971 6 743 4537
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 w-full" data-aos="fade-left">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-105 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
                <Image
                  src="/images/products/acunit.jpg"
                  alt="CTS engineer servicing a commercial HVAC chiller unit in the UAE"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="eager"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION: WHO WE ARE ================= */}
      <section
          aria-label="CTS About Us"
          className="relative z-10 py-12 sm:py-20 lg:py-28 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xs"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Image on Left */}
              <div className="lg:col-span-6 order-2 lg:order-1 w-full" data-aos="fade-up">
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-105 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
                  <Image
                    src="/images/whoWeAre.png"
                    alt="CTS Chiller Technical Services"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Content on Right */}
              <div
                className="lg:col-span-6 space-y-4 sm:space-y-6 order-1 lg:order-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="space-y-1.5">
                  <p className="text-xs sm:text-sm font-semibold text-[#00B67A] uppercase tracking-wider">
                    About Our Company
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Who We Are
                  </h2>
                </div>

                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  <p className="text-left md:text-justify">
                    <strong className="text-[#00B67A] dark:text-white font-semibold">
                      CTS - Chiller Technical Services L.L.C
                    </strong>{" "}
                    is a trusted name in the UAE, engaged in the manufacturing and trading of{" "}
                    <strong className="text-[#00B67A] dark:text-emerald-400 font-semibold">
                      Water Chillers
                    </strong>
                    ,{" "}
                    <strong className="text-[#00B67A] dark:text-emerald-400 font-semibold">
                      Cold Rooms
                    </strong>
                    ,{" "}
                    <strong className="text-[#00B67A] dark:text-emerald-400 font-semibold">
                      Heat Exchangers
                    </strong>
                    , and{" "}
                    <strong className="text-[#00B67A] dark:text-emerald-400 font-semibold">
                      A/C Units
                    </strong>
                    . We also provide a wide range of refrigeration equipment, spare parts, and accessories delivering reliable cooling solutions tailored to every need.
                  </p>
                  <p className="text-left md:text-justify">
                    With a strong global sourcing network and years of technical expertise, we ensure our products are cost-effective, energy-efficient, and built to last. From chillers to cold rooms and air conditioning units, we take pride in serving industries with unmatched quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* ================= SECTION: MISSION & GOALS ================= */}
      <section aria-label="CTS Mission and Goals" className="relative z-10 py-12 sm:py-20 lg:py-24 bg-transparent dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 space-y-2" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our Mission &amp; Goals
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Building long-term industrial partnerships across the UAE</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            <div className="bg-white/80 dark:bg-slate-950/80 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 sm:space-y-4" data-aos="fade-up" data-aos-delay="100">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-[#00B67A] dark:text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                To deliver dependable, energy-efficient cooling and HVAC solutions that empower businesses while ensuring long-term sustainability and customer trust.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-slate-950/80 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 sm:space-y-4" data-aos="fade-up" data-aos-delay="200">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-[#00B67A] dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Goals</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                To expand our reach across industries, innovate with sustainable technologies, and provide exceptional service that creates lasting value for clients and partners.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Faq/>

      {/* ================= CALL TO ACTION ================= */}
      <section aria-labelledby="cta-heading" className="relative z-10 py-12 sm:py-20 bg-white/10 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800" data-aos="fade-up">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Ready to optimize your facility performance?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Speak directly with our technical engineering department to discuss your chiller requirements or immediate emergency dispatch.
          </p>
          <div>
            <Link
              href="/Contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-[#00B67A] hover:bg-emerald-600 rounded-lg transition-colors shadow-xs"
            >
              Get in Touch with CTS
              <ArrowRight className="ml-2 w-4 h-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}