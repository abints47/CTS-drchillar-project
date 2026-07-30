'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  ShieldCheck,
  Wrench,
  Clock,
  Award,
  ArrowRight,
  Phone,
  Settings,
  Snowflake,
  FileText,
  Target,
  Handshake,
  Gauge,
  BadgeCheck,
} from 'lucide-react'

// Structured data helps search engines understand this page belongs to a
// real HVAC service business (LocalBusiness / HVACBusiness rich snippet).
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

// Update this list with your actual accreditations/approvals before launch —
// these are placeholders showing where certification badges go.
const certifications = [
  'Licensed & Insured Contractor',
  'Manufacturer-Approved Technicians',
  'Health & Safety Compliant',
  'Certified Refrigerant Handling',
]

const coreValues = [
  {
    title: 'Safety First',
    desc: 'Every engagement follows strict site-safety protocols, from confined-space work to pressurized chilled-water systems.',
    icon: ShieldCheck,
  },
  {
    title: 'Engineering Precision',
    desc: 'Load calculations, commissioning, and installation are executed to documented technical standards, not estimates.',
    icon: Gauge,
  },
  {
    title: 'Long-Term Partnership',
    desc: 'We plan around your facility\u2019s lifecycle, not a single service call, so maintenance contracts scale with your operation.',
    icon: Handshake,
  },
  {
    title: 'Accountability',
    desc: 'Documented reporting, transparent quoting, and a single point of contact from survey through sign-off.',
    icon: BadgeCheck,
  },
]

const capabilities = [
  {
    title: 'Chiller Maintenance',
    desc: 'Complete preventive maintenance, overhauling, and troubleshooting for air and water-cooled systems.',
    icon: Wrench,
  },
  {
    title: 'AC Installation',
    desc: 'Precise installation management for package units, split systems, and commercial ducting grids.',
    icon: Settings,
  },
  {
    title: 'HVAC Rentals',
    desc: 'Reliable temporary rental fleets for water chillers, generators, and backup environmental control.',
    icon: Snowflake,
  },
  {
    title: 'Cold Room Solutions',
    desc: 'Turnkey design, fabrication, and thermal maintenance for industrial cold rooms and freezer spaces.',
    icon: ShieldCheck,
  },
  {
    title: 'Chilled Water Piping',
    desc: 'Expert insulation, pressure testing, alignment, and network optimization for chilled water systems.',
    icon: Clock,
  },
  {
    title: 'Annual Contracts (AMC)',
    desc: 'Structured proactive inspection routines ensuring constant peak operating efficiency year-round.',
    icon: FileText,
  },
]

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-out',
      duration: 800,
    })
  }, [])

  return (
    <main className="min-h-screen pt-25 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-600 selection:text-white transition-colors duration-300">
      {/* JSON-LD structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        aria-labelledby="about-hero-heading"
        className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">

              <div className="space-y-4">
                <h1
                  id="about-hero-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
                >
                  Your Trusted <span className="text-emerald-600 dark:text-emerald-400">HVAC &amp; Chillers</span> Partner in the UAE
                </h1>

                <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xl">
                  We provide end-to-end HVAC engineering, industrial chiller installation, cold storage solutions, and 24/7 maintenance services for commercial and industrial facilities across the region.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                >
                  Request Consultation
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href="tel:+97167434537"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-xl transition-colors border border-slate-200 dark:border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                >
                  <Phone className="mr-2 w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  +971 6 743 4537
                </a>
              </div>
            </div>

            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="relative w-full h-95 sm:h-105 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                <Image
                  src="/images/asethetic-ac.webp"
                  alt="CTS engineer servicing a commercial HVAC chiller unit in the UAE"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/20 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-600 rounded-lg text-white">
                      <Award className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">15+ Years</p>
                      <p className="text-xs text-slate-400 font-light">Industry Leadership</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-emerald-400">500+</p>
                    <p className="text-xs text-slate-400 font-light">Projects Executed</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

        
        <section aria-label="CTS About Us, Mission, and Goals" className="relative bg-white py-20 sm:py-28 overflow-hidden space-y-24 sm:space-y-32">
  
  {/* ================= SECTION 1: WHO WE ARE (Image Left, Text Right) ================= */}
  <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      
      {/* Left Side (Image - 40% -> lg:col-span-5) */}
      <div className="lg:col-span-5 order-2 lg:order-1">
        <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 border border-slate-100">
          <Image
            src="/images/asethetic-ac.webp"
            alt="CTS Chiller Technical Services"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right Side (Text - 60% -> lg:col-span-7) */}
      <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00B67A]">
            About Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Who We Are
          </h2>
        </div>

        <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-150">
          <p className="text-justify">
            <strong className="text-[#00B67A] font-semibold">CTS - Chiller Technical Services L.L.C</strong> is a trusted name in the UAE, engaged in the manufacturing and trading of <strong className="text-[#00B67A] font-semibold">Water Chillers</strong>, <strong className="text-[#00B67A] font-semibold">Cold Rooms</strong>, <strong className="text-[#00B67A] font-semibold">Heat Exchangers</strong>, and <strong className="text-[#00B67A] font-semibold">A/C Units</strong>. We also provide a wide range of refrigeration equipment, spare parts, and accessories—delivering reliable cooling solutions tailored to every need.
          </p>
          <p className="text-justify">
            With a strong global sourcing network and years of technical expertise, we ensure our products are <strong className="text-[#00B67A] font-semibold">cost-effective</strong>, <strong className="text-[#00B67A] font-semibold">energy-efficient</strong>, and <strong className="text-[#00B67A] font-semibold">built to last</strong>. From chillers to cold rooms and air conditioning units, we take pride in serving industries with unmatched quality.
          </p>
        </div>
      </div>

    </div>
  </div>

  {/* ================= SECTION 2: OUR MISSION & GOALS (FULL WIDTH GREY CONTAINER) ================= */}
  <div className="w-full bg-[#F7F8FA] py-20 sm:py-24 border-y border-slate-200/60">
    <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Centered Heading */}
      <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">
          Our Mission &amp; Goals
        </h2>
        <div className="w-12 h-1 bg-[#00B67A] mx-auto rounded-full" />
      </div>

      {/* Equal-Width Minimal Cards */} 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Mission Card */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00B67A]/10 text-[#00B67A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A]">Mission</h3>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            To deliver dependable, energy-efficient cooling and HVAC solutions that empower businesses while ensuring long-term sustainability and customer trust.
          </p>
        </div>

        {/* Goals Card */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00B67A]/10 text-[#00B67A] flex items-center justify-center shrink-0">
              <Target className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A]">Goals</h3>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            To expand our reach across industries, innovate with sustainable technologies, and provide exceptional service that creates lasting value for clients and partners.
          </p>
        </div>

      </div>

    </div>
  </div>

</section>
      

      <section aria-labelledby="cta-heading" className="py-20 bg-gray-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Ready to optimize your facility performance?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base font-light leading-relaxed">
            Speak directly with our technical engineering department to discuss your chiller requirements or immediate emergency dispatch.
          </p>
          <div className="pt-2">
            <Link
              href="/Contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              Get in Touch with CTS
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}