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
  CheckCircle2,
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
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex items-center justify-between text-white">
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

      <section aria-labelledby="who-we-are-heading" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            <div className="lg:col-span-7 space-y-6" data-aos="fade-up">
              <h2 id="who-we-are-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Engineering-led HVAC service, built for critical facilities
              </h2>
              <p className="text-slate-700 dark:text-slate-400 font-normal text-justify leading-relaxed">
                CTS was founded to close a gap in the UAE market: facilities that need chiller-grade
                expertise, not just general AC repair. Our mission is to deliver reliable,
                energy-efficient, and engineered cooling solutions that protect infrastructure
                integrity while building long-term customer partnerships throughout the UAE.
              </p>
              <p className="text-slate-700 dark:text-slate-400 font-normal text-justify ">
                Our vision is to be the benchmark for HVAC technical proficiency and water chiller
                system optimization in the region, recognized for uncompromising quality on every
                project, from a single split-unit install to a full industrial cold storage build.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Engineer-supervised installations',
                  'Documented preventive maintenance',
                  '24/7 emergency dispatch',
                  'Transparent, itemized quoting',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5" data-aos="fade-up" data-aos-delay="150">
              <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-8 space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Our Experience
                </h3>
                <dl className="grid grid-cols-2 gap-6">
                  <div>
                    <dt className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wide">Founded</dt>
                    <dd className="text-2xl font-bold text-slate-900 dark:text-white">2009</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wide">Experience</dt>
                    <dd className="text-2xl font-bold text-slate-900 dark:text-white">15+ yrs</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wide">Projects</dt>
                    <dd className="text-2xl font-bold text-slate-900 dark:text-white">500+</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wide">Dispatch</dt>
                    <dd className="text-2xl font-bold text-slate-900 dark:text-white">24/7</dd>
                  </div>
                </dl>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wide mb-3 font-bold">
                    Certifications &amp; Compliance
                  </p>
                  <ul className="space-y-2">
                    {certifications.map((cert) => (
                      <li key={cert} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-bold">
                        <BadgeCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3" data-aos="fade-up">
            <h2 id="values-heading" className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              The Standards Behind Every Job
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon
              return (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
                  data-aos="fade-up"
                  data-aos-delay={idx * 75}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-600/20">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{value.title}</h3>
                  <p className="text-s text-slate-500 dark:text-slate-400 font-light leading-relaxed">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
      4+5. CAPABILITIES + METRICS — merged, full-bleed backdrop
      ==================================================================== */}
      <section aria-label="CTS core capabilities and track record" className="relative py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/asethetic-ac.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
          {/* Light overlay for text contrast + brand tint */}
          <div className="absolute inset-0 bg-white/90" />
          <div className="absolute inset-0 bg-linear-to-t from-white via-white/85 to-emerald-50/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* --- Core Capabilities --- */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3" data-aos="fade-up">
            <h2 id="capabilities-heading" className="text-4xl font-bold tracking-tight text-slate-900">
              Comprehensive Core Capabilities
            </h2>
            <p className="text-slate-500 font-light">
              Engineered service packages built specifically for modern corporate and heavy infrastructure constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {capabilities.map((service, idx) => {
              const IconComponent = service.icon
              return (
                <article
                  key={service.title}
                  className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm hover:border-emerald-600/40 hover:shadow-md transition-all duration-300 space-y-3"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/15 border border-emerald-600/20 text-emerald-600 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-s text-slate-500 font-light leading-relaxed">{service.desc}</p>
                </article>
              )
            })}
          </div>

          {/* --- Track Record / Stats --- */}
          <div className="text-center max-w-xl mx-auto mb-14 space-y-3" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Number of the Works Done
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: '15+', label: 'Years Experience', icon: Award },
              { value: '500+', label: 'Completed Jobs', icon: Wrench },
              { value: '24/7', label: 'Emergency Dispatch', icon: Clock },
              { value: '100%', label: 'Compliance Standard', icon: ShieldCheck },
            ].map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={stat.label}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  className="group relative p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm hover:border-emerald-600/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-600/15 border border-emerald-600/20 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 uppercase tracking-widest font-mono font-bold">
                    {stat.label}
                  </p>
                </div>
              )
            })}
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