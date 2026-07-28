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
  FileText
} from 'lucide-react'

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-out',
    })
  }, [])

  return (
    <main className="min-h-screen pt-25 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#00b96b] selection:text-white transition-colors duration-300">
      
      {/* =====================================================================
          1. MINIMALIST HERO SECTION
          ==================================================================== */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-gray-100 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content (Minimal Width & Spacing) */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right" data-aos-duration="800">

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-800 dark:text-emerald-400 leading-[1.15]">
                  Your Trusted <span className="text-emerald-600 dark:text-white">HVAC & Chillers</span> Partner in the UAE
                </h1>

                <p className="text-base sm:text-lg text-[#6b7280] dark:text-slate-400 font-light leading-relaxed max-w-xl">
                  Providing end-to-end HVAC engineering, industrial chiller installation, cold storage solutions, and 24/7 maintenance services for commercial and industrial facilities.
                </p>
              </div>

              {/* Minimal Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-[#00a35e] rounded-xl transition-all shadow-sm"
                >
                  Request Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href="tel:+97167434537"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#183153] dark:text-slate-300 bg-[#fafafa] hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-xl transition-all border border-gray-200 dark:border-slate-800"
                >
                  <Phone className="mr-2 w-4 h-4 text-[#00b96b] dark:text-emerald-400" />
                  +971 6 743 4537
                </a>
              </div>

            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="800">
              <div className="relative w-full h-95 sm:h-105 rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 dark:border-slate-800/80">
                <Image
                  src="/images/asethetic-ac.webp"
                  alt="CTS Professional HVAC Systems"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Floating trust badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#00b96b] rounded-lg text-white">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">15+ Years</p>
                      <p className="text-xs text-slate-400 font-light">Industry Leadership</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-emerald-400">500+</p>
                    <p className="text-xs text-slate-400 font-light">Projects Executed</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fafafa] dark:bg-slate-900/50 border-y border-gray-100 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm space-y-4" data-aos="fade-up">
              <div className="w-10 h-10 rounded-xl bg-[#00b96b]/10 dark:bg-emerald-500/10 text-[#00b96b] dark:text-emerald-400 flex items-center justify-center font-bold font-mono text-sm border border-[#00b96b]/20 dark:border-emerald-500/20">
                01
              </div>
              <h3 className="text-xl font-bold text-[#183153] dark:text-white">Our Mission</h3>
              <p className="text-[#6b7280] dark:text-slate-400 font-light leading-relaxed text-sm sm:text-base">
                To deliver reliable, energy-efficient, and engineered cooling solutions that preserve infrastructural integrity while prioritizing long-term customer partnerships throughout the UAE.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm space-y-4" data-aos="fade-up" data-aos-delay="150">
              <div className="w-10 h-10 rounded-xl bg-[#00b96b]/10 dark:bg-emerald-500/10 text-[#00b96b] dark:text-emerald-400 flex items-center justify-center font-bold font-mono text-sm border border-[#00b96b]/20 dark:border-emerald-500/20">
                02
              </div>
              <h3 className="text-xl font-bold text-[#183153] dark:text-white">Our Vision</h3>
              <p className="text-[#6b7280] dark:text-slate-400 font-light leading-relaxed text-sm sm:text-base">
                To stand as the absolute benchmark for HVAC technical proficiency and water chiller system optimization, recognized industry-wide for uncompromising quality standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3" data-aos="fade-up">
            <span className="inline-block px-3 py-1 rounded-full bg-[#00b96b]/10 dark:bg-emerald-500/10 text-[#196646] dark:text-emerald-400 font-mono text-xs uppercase tracking-widest border border-[#00b96b]/20 dark:border-emerald-500/20">
              Technical Scope
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-green-800 dark:text-white">
              Comprehensive Core Capabilities
            </h2>
            <p className="text-[#6b7280] dark:text-slate-400 font-light">
              Engineered service packages built specifically for modern corporate and heavy infrastructure constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Chiller Maintenance",
                desc: "Complete preventive maintenance, overhauling, and troubleshooting for air and water-cooled systems.",
                icon: Wrench
              },
              {
                title: "AC Installation",
                desc: "Precise installation management for package units, split systems, and commercial ducting grids.",
                icon: Settings
              },
              {
                title: "HVAC Rentals",
                desc: "Reliable temporary rental fleets for water chillers, generators, and backup environmental control.",
                icon: Snowflake
              },
              {
                title: "Cold Room Solutions",
                desc: "Turnkey design, fabrication, and thermal maintenance for industrial cold rooms and freezer spaces.",
                icon: ShieldCheck
              },
              {
                title: "Chilled Water Piping",
                desc: "Expert insulation, pressure testing, alignment, and network optimization for chilled water systems.",
                icon: Clock
              },
              {
                title: "Annual Contracts (AMC)",
                desc: "Structured proactive inspection routines ensuring constant peak operating efficiency year-round.",
                icon: FileText
              },
            ].map((service, idx) => {
              const IconComponent = service.icon
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#fafafa] dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-[#00b96b]/50 dark:hover:border-emerald-500/50 transition duration-300 space-y-3"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 text-[#00b96b] dark:text-emerald-400 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#183153] dark:text-white">{service.title}</h3>
                  <p className="text-sm text-[#6b7280] dark:text-slate-400 font-light leading-relaxed">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. MINIMAL METRICS BAR
          ==================================================================== */}
      <section className="py-12 bg-[#1B2A3D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-400">15+</p>
              <p className="text-xs text-slate-300 uppercase tracking-widest font-mono">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-400">500+</p>
              <p className="text-xs text-slate-300 uppercase tracking-widest font-mono">Completed Jobs</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-400">24/7</p>
              <p className="text-xs text-slate-300 uppercase tracking-widest font-mono">Emergency Dispatch</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-400">100%</p>
              <p className="text-xs text-slate-300 uppercase tracking-widest font-mono">Compliance Standard</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-green-800 dark:text-white">
            Ready to optimize your facility performance?
          </h2>
          <p className="text-[#6b7280] dark:text-slate-400 max-w-xl mx-auto text-base font-light leading-relaxed">
            Speak directly with our technical engineering department to discuss your chiller requirements or immediate emergency dispatch.
          </p>
          <div className="pt-2">
            <Link
              href="/Contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-[#00a35e] rounded-xl transition shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b96b]"
            >
              Get in Touch with CTS
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}