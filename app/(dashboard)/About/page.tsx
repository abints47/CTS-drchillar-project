import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheck, 
  Wrench, 
  Clock, 
  Award, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Settings, 
  Snowflake, 
  FileText 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About CTS - Chiller Technical Services L.L.C | HVAC & Chiller Experts UAE',
  description: 'CTS - Chiller Technical Services L.L.C is a premier HVAC and water chiller solutions partner in the UAE with over 15 years of industry excellence.',
  keywords: 'Chiller maintenance UAE, HVAC contractors Dubai, industrial cooling solutions, A/C repair, AMC contracts UAE',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-500 selection:text-white">
      
      {/* =====================================================================
          1. HERO SECTION
          ===================================================================== */}
      <section className="relative py-16 md:py-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6" data-aos="fade-right" data-aos-duration="800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50">
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                Engineering Excellence in <span className="text-emerald-600 dark:text-emerald-500">HVAC & Cooling</span>
              </h1>

              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-2xl">
                For over 15 years, CTS has delivered industrial-grade manufacturing, maintenance, and rental solutions for water chillers, A/C infrastructure, and cold storage systems across the UAE.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Request a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href="tel:++971 67434537"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 rounded-lg transition-all border border-zinc-200 dark:border-zinc-800"
                >
                  <Phone className="mr-2 w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Direct Line
                </a>
              </div>
            </div>

            {/* Right Single Clean Image */}
            <div className="lg:col-span-5" data-aos="fade-left" data-aos-duration="800">
              <div className="relative w-full h-100 sm:h-112.5 rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
                <Image
                  src="/images/asethetic-ac.webp"
                  alt="CTS Professional HVAC Systems"
                  fill
                  sizes='1020'
                  loading='eager'
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating trust badge badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-zinc-900/90 backdrop-blur-md p-4 rounded-xl border border-zinc-800 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-600 rounded-lg text-white">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">15+ Years</p>
                      <p className="text-xs text-zinc-400">Industry Leadership</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">500+</p>
                    <p className="text-xs text-zinc-400">Projects Executed</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          3. MISSION & VISION
          ===================================================================== */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-200/60 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4" data-aos="fade-up">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Our Mission</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                To deliver reliable, energy-efficient, and engineered cooling solutions that preserve infrastructural integrity while prioritizing long-term customer partnerships throughout the UAE.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4" data-aos="fade-up" data-aos-delay="150">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Our Vision</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                To stand as the absolute benchmark for HVAC technical proficiency and water chiller system optimization, recognized industry-wide for uncompromising quality standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CORE CAPABILITIES / SERVICES OVERVIEW
          ===================================================================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3" data-aos="fade-up">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
              Technical Scope
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Comprehensive Core Capabilities
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
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
                  className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/50 transition duration-300 space-y-3"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200/60 dark:border-zinc-700/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{service.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. MINIMAL METRICS BAR
          ===================================================================== */}
      <section className="py-12 bg-[#33445a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-400">15+</p>
              <p className="text-xs text-zinc-400 uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-400">500+</p>
              <p className="text-xs text-zinc-400 uppercase tracking-widest">Completed Jobs</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-400">24/7</p>
              <p className="text-xs text-zinc-400 uppercase tracking-widest">Emergency Dispatch</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-400">100%</p>
              <p className="text-xs text-zinc-400 uppercase tracking-widest">Compliance Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. PROFESSIONAL FOOTER CTA
          ===================================================================== */}
      <section className="py-20 border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Ready to optimize your facility performance?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-base">
            Speak directly with our technical engineering department to discuss your chiller requirements or immediate emergency dispatch.
          </p>
          <div className="pt-2">
            <Link
              href="/Contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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