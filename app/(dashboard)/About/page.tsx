'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Clock,
  Wrench,
  Users,
  Award,
  TrendingUp,
  Target,
  Snowflake,
  PhoneCall,
  ArrowRight,
  Building2,
  Wind,
  Layers,
  FileCheck2,
  Cpu,
  Zap,
} from 'lucide-react'
import { FaRibbon, FaUsers, FaCogs, FaRegClock } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* =========================================
          1. HERO HEADER SECTION
         ========================================= */}
      <section className="relative overflow-hidden py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6" data-aos="fade-right" data-aos-duration="1000">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40 rounded-md">
              CTS - Chiller Technical Services L.L.C
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Your Trusted <span className="text-emerald-600 dark:text-emerald-400">HVAC & Chiller</span> Solutions Partner
            </h1>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              CTS - Chiller Technical Services L.L.C is a premier cooling solutions provider in the UAE. We specialize in manufacturing, trading, maintenance, and rental of water chillers, A/C systems, cold rooms, heat exchangers, and industrial cooling infrastructure designed for peak performance and efficiency.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#who-we-are"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/Contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 px-6 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 shadow-sm transition hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Contact Us <PhoneCall className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </Link>
            </div>
          </div>

          {/* Right Image Cluster & Floating Cards */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative w-full max-w-lg lg:max-w-none h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 group">
              <Image
                src="/images/asethetic-ac.webp"
                alt="HVAC Chiller Solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            {/* Floating Card 1: Experience */}
            <div
              className="absolute -bottom-5 left-4 sm:left-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-xl p-3.5 shadow-md flex items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-bold text-gray-900 dark:text-white leading-none">15+ Years</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Industry Experience</p>
              </div>
            </div>

            {/* Floating Card 2: Support */}
            <div
              className="absolute -top-5 right-4 sm:right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-xl p-3.5 shadow-md flex items-center gap-3"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-bold text-gray-900 dark:text-white leading-none">24/7</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Technical Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. WHO WE ARE SECTION
         ========================================= */}
      <section id="who-we-are" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image Collage */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6" data-aos="fade-right">
            <div className="relative w-full sm:w-60 h-72 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800">
              <Image
                src="/images/Amc.webp"
                alt="CTS Maintenance Engineers"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-full sm:w-60 h-72 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 sm:translate-y-6">
              <Image
                src="/images/ac-reparing.jpg"
                alt="AC Repairing and Servicing"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-5" data-aos="fade-left">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40 rounded-md">
              Who We Are
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              Chiller Maintenance Company in UAE
            </h2>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              At <span className="font-semibold text-emerald-600 dark:text-emerald-400">CTS - Chiller Technical Services L.L.C</span>, we combine years of expertise with modern technology to deliver exceptional cooling solutions. Our focus is on reliability, innovation, and customer satisfaction making us the trusted partner for businesses across the region.
            </p>

            {/* Feature List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="text-emerald-600 dark:text-emerald-400">
                  <FaRibbon />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                  Proven Expertise
                </span>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="text-emerald-600 dark:text-emerald-400">
                  <FaUsers />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                  Dedicated Support
                </span>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="text-emerald-600 dark:text-emerald-400">
                  <FaCogs />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                  Cutting Edge Solutions
                </span>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="text-emerald-600 dark:text-emerald-400">
                  <FaRegClock />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                  On-Time Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. MISSION AND VISION SECTION
         ========================================= */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Mission Card */}
          <div 
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Our Mission
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              To deliver reliable, efficient and innovative cooling solutions that exceed customer expectations while advancing energy-efficient and sustainable HVAC technologies across the UAE.
            </p>
          </div>

          {/* Vision Card */}
          <div 
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Our Vision
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              To become the leading HVAC and chiller service provider in the UAE, known for unmatched engineering standards, customer trust, and long-term industrial reliability.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          4. WHY CHOOSE CTS SECTION
         ========================================= */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-2" data-aos="fade-up">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40 rounded-md">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Built On Quality & Precision Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div 
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
              Professional Engineers
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Highly certified technical experts with extensive experience in industrial and commercial HVAC systems.
            </p>
          </div>

          {/* Card 2 */}
          <div 
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
              Quality Service
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Uncompromising focus on genuine spare parts, thorough diagnostics, and long-lasting cooling performance.
            </p>
          </div>

          {/* Card 3 */}
          <div 
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
              Fast Response
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Rapid emergency support and quick turnaround time to keep your operations running with zero downtime.
            </p>
          </div>

          {/* Card 4 */}
          <div 
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
              Customer Satisfaction
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Tailored cooling solutions, transparent pricing, and trusted ongoing relationship management.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          5. COMPANY STATISTICS SECTION
         ========================================= */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div 
          className="bg-emerald-700 text-white rounded-2xl p-8 sm:p-10 shadow-md"
          data-aos="zoom-in"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">15+</p>
              <p className="text-xs sm:text-sm font-medium text-emerald-100">Years Experience</p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">500+</p>
              <p className="text-xs sm:text-sm font-medium text-emerald-100">Projects Completed</p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">24/7</p>
              <p className="text-xs sm:text-sm font-medium text-emerald-100">Support Available</p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">100%</p>
              <p className="text-xs sm:text-sm font-medium text-emerald-100">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. OUR SERVICES OVERVIEW
         ========================================= */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-2" data-aos="fade-up">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40 rounded-md">
            Our Services Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Comprehensive Cooling & HVAC Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:border-emerald-500/50 transition">
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
              Chiller Maintenance
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Preventive and corrective maintenance for water chillers, air-cooled, and water-cooled systems.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:border-emerald-500/50 transition">
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Wind className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
              AC Installation
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Professional installation of package units, split systems, and ductable air conditioning equipment.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:border-emerald-500/50 transition">
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Snowflake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
              HVAC Rentals
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Flexible temporary rentals for A/C units, water chillers, and diesel generators for events & industry.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:border-emerald-500/50 transition">
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
              Cold Room Solutions
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Turnkey design, supply, and maintenance of commercial cold storage and walk-in freezer rooms.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:border-emerald-500/50 transition">
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
              Chilled Water Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Design, installation, insulation, and flushing of chilled water pipeline networks.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:border-emerald-500/50 transition">
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
              AMC Contracts
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Annual Maintenance Contracts delivering priority service, routine checks, and reduced operating costs.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          7. CALL TO ACTION SECTION
         ========================================= */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Need Reliable Cooling Solutions?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Contact CTS today for professional HVAC and chiller services. Our technical team is ready to assist you.
          </p>
          <Link
            href="/Contact"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  )
}