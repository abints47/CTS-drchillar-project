'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  Zap,
  Target,
  Snowflake,
} from 'lucide-react'

import Faq from "@/components/Faq";

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

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 60,
    })
  }, [])

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
    <main className="relative min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-600 selection:text-white transition-colors duration-300 overflow-x-hidden w-full pt-15 sm:pt-15 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar:none">
      
      {/* Background Snowflakes */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="absolute top-6 left-2 sm:top-32 sm:left-10">
          <Snowflake className="w-26 h-26 sm:w-30 sm:h-30 text-emerald-500/10 dark:text-emerald-400/10 animate-[spin_25s_linear_infinite]" aria-hidden="true" />
        </div>
        <div data-aos="fade-in" data-aos-duration="1200" data-aos-delay="300" className="absolute top-[18%] right-2 sm:right-12">
          <Snowflake className="w-26 h-26 sm:w-30 sm:h-30 text-emerald-500/10 dark:text-emerald-400/10 animate-[spin_35s_linear_infinite_reverse]" aria-hidden="true" />
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="absolute top-[60%] left-2 sm:left-16">
          <Snowflake className="w-26 h-26 sm:w-30 sm:h-30 text-emerald-500/10 dark:text-emerald-400/10 animate-[spin_30s_linear_infinite]" aria-hidden="true" />
        </div>
        <div data-aos="fade-in" data-aos-duration="1200" data-aos-delay="400" className="absolute bottom-12 right-2 sm:bottom-16 sm:right-20">
          <Snowflake className="w-16 h-16 sm:w-30 sm:h-30 text-emerald-500/10 dark:text-emerald-400/10 animate-[spin_20s_linear_infinite_reverse]" aria-hidden="true" />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    
      {/* Hero Section */}
      <section aria-labelledby="about-hero-heading" className="relative z-10  py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 bg-transparent w-full">
        <div className="max-w-352 mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
            
            <div className="lg:col-span-6 space-y-6 text-left w-full" data-aos="fade-right">
              <div className="space-y-4">
                <h1 id="about-hero-heading" className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-snug min-h-[3.5em] flex flex-col justify-center overflow-hidden">
                  <span className={`block transition-all duration-300 transform ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
                    {activeHeadline.prefix}{' '}
                    <span className="text-emerald-600 dark:text-emerald-600 font-bold">
                      {activeHeadline.highlight}
                    </span>{' '}
                    {activeHeadline.suffix}
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-xl text-justify">
                  We provide end-to-end HVAC engineering, industrial chiller installation, cold storage solutions, and 24/7 maintenance services for commercial and industrial facilities across the region.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
                <Link href="/Contact" className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-white bg-[#00B67A] hover:bg-emerald-600 rounded-md transition-colors shadow-xs w-full sm:w-auto text-center">
                  Request Consultation
                  <ArrowRight className="ml-2 w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>
                <a href="tel:+97167434537" className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-md transition-colors border border-slate-200 dark:border-slate-800 w-full sm:w-auto text-center">
                  <Phone className="mr-2 w-4 h-4 text-[#00B67A] dark:text-emerald-400 shrink-0" aria-hidden="true" />
                  +971 6 743 4537
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 w-full" data-aos="fade-left">
              <div className="w-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="relative w-full h-56 xs:h-64 sm:h-80 md:h-96">
                  <Image
                    src="/images/products/acunit.jpg"
                    alt="CTS engineer servicing a commercial HVAC chiller unit in the UAE"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="eager"
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Who We Are Section */}
      <section aria-label="CTS About Us" className="relative z-10 py-16 lg:py-24 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xs w-full">
        <div className="max-w-352 mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
            
            <div className="lg:col-span-6 order-2 lg:order-1 w-full" data-aos="fade-up">
              <div className="w-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="relative w-full h-64 xs:h-72 sm:h-80 md:h-96">
                  <Image
                    src="https://images.unsplash.com/photo-1615625745497-0edd438803ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGxlcnN8ZW58MHx8MHx8fDA%3D"
                    alt="CTS Chiller Technical Services"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2 w-full" data-aos="fade-up" data-aos-delay="100">
              <div className="space-y-1">
                <span className="text-sm font-bold text-[#00B67A] uppercase tracking-normal">
                  About Our Company
                </span>
                <h2 className="text-xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
                  Who We Are
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base ">
                <p>
                  <strong className="text-[#00B67A] dark:text-white font-medium">
                    CTS - Chiller Technical Services L.L.C
                  </strong>{" "}
                  is a trusted name in the UAE, engaged in the manufacturing and trading of{" "}
                 <Link 
                    href="/Products/water-chillers" 
                    className="text-[#00B67A] dark:text-emerald-400 font-medium hover:underline"
                  >
                    Water Chillers
                  </Link>,{" "}
                  <Link 
                    href="/Products/cold-rooms" 
                    className="text-[#00B67A] dark:text-emerald-400 font-medium hover:underline"
                  >
                    Cold Rooms
                  </Link>,{" "}
                  <Link 
                    href="/Products/heat-exchangers" 
                    className="text-[#00B67A] dark:text-emerald-400 font-medium hover:underline"
                  >
                    Heat Exchangers
                  </Link>, and{" "}
                  <Link 
                    href="/Products/ac-units" 
                    className="text-[#00B67A] dark:text-emerald-400 font-medium hover:underline"
                  >
                    A/C Units
                  </Link>. 
                  We also provide a wide range of refrigeration equipment, spare parts, and accessories delivering reliable cooling solutions tailored to every need.
                </p>
                <p>
                  With a strong global sourcing network and years of technical expertise, we ensure our products are cost-effective, energy-efficient, and built to last. From chillers to cold rooms and air conditioning units, we take pride in serving industries with unmatched quality.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Goals Section */}
      <section aria-label="CTS Mission and Goals" className="relative z-10 py-16 lg:py-20 bg-transparent w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2 w-full" data-aos="fade-up">
            <h2 className="text-xl sm:text-4xl text-center font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
              Our Mission &amp; Goals
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">Building long-term industrial partnerships across the UAE</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            <div className="bg-white/80 dark:bg-slate-950/80 rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4 w-full" data-aos="fade-up" data-aos-delay="100">
              <div className="w-10 h-10 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-[#00B67A] dark:text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed text-justify">
                To deliver dependable, energy-efficient cooling and HVAC solutions that empower businesses while ensuring long-term sustainability and customer trust.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-slate-950/80 rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4 w-full" data-aos="fade-up" data-aos-delay="200">
              <div className="w-10 h-10 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-[#00B67A] dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">Goals</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed text-justify">
                To expand our reach across industries, innovate with sustainable technologies, and provide exceptional service that creates lasting value for clients and partners.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Faq />

      {/* Call to Action */}
      <section aria-labelledby="cta-heading" className="relative z-10 py-16 bg-white/10 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800 w-full" data-aos="fade-up">
        <div className="max-w-352 mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 w-full">
          <h2 id="cta-heading" className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to optimize your facility performance?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto text-justify sm:text-center">
            Speak directly with our technical engineering department to discuss your chiller requirements or immediate emergency dispatch.
          </p>
          <div className="w-full pt-1">
            <Link href="/Contact" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-medium text-white bg-[#00B67A] hover:bg-emerald-600 rounded-md transition-colors shadow-xs">
              Get in Touch with CTS
              <ArrowRight className="ml-2 w-4 h-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}