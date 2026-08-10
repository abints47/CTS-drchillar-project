'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Phone, Mail, MapPin, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-out',
      duration: 800,
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' })
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 transition-colors duration-300 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20 w-full">
        
        {/* Editorial Header Section */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 p-4 sm:p-6 lg:p-10 w-full" data-aos="fade-up">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] wrap-break-words">
            Let's Discuss Your <span className="text-emerald-600 dark:text-emerald-400">Cooling Requirements.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl">
            Whether you need a custom industrial water chiller quotation, emergency 24/7 technical dispatch, or a long-term maintenance contract, our engineers are ready to help.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start w-full">
          
          {/* Left Column: Direct Contact & Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 w-full" data-aos="fade-right">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
              
              {/* Phone Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 space-y-2 transition-colors w-full">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Direct Line</span>
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                </div>
                <Link href="tel:+97167434537" className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition inline-flex items-center gap-1 break-all">
                  +971 6 743 4537 <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>

              {/* Email Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 space-y-2 transition-colors w-full">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Inquiries</span>
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                </div>
                <Link href="mailto:info@drchiller.com" className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition inline-flex items-center gap-1 break-all">
                  info@drchiller.com <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>

              {/* Location Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 space-y-2 transition-colors w-full">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Office & Facility</span>
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                  Industrial Area, Sharjah / Dubai, United Arab Emirates
                </p>
              </div>

              {/* Hours Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 space-y-2 transition-colors w-full">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Availability</span>
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                  Mon - Sat: 8:00 AM - 6:00 PM <br />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">24/7 Emergency Support Active</span>
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Clean, Minimalist Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 w-full" data-aos="fade-left">
            
            <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm shadow-xs w-full">
              
              <div className="mb-6 sm:mb-8 space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Send a Technical Inquiry</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-light">
                  Fill out the parameters below and our engineering desk will get back to you promptly.
                </p>
              </div>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-start sm:items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5 sm:mt-0" />
                  <span>Thank you! Your inquiry has been received. Our team will review your specifications shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 w-full">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full">
                  <div className="space-y-2 w-full">
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Full Name <span className="text-emerald-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Paul"
                      className="w-full px-4 py-3.5 text-sm rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                    />
                  </div>

                  <div className="space-y-2 w-full">
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Email Address <span className="text-emerald-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 text-sm rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full">
                  <div className="space-y-2 w-full">
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 6 743 4537"
                      className="w-full px-4 py-3.5 text-sm rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                    />
                  </div>

                  <div className="space-y-2 w-full">
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Service Requirement
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 text-sm rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Chiller Maintenance">Chiller Maintenance & Overhaul</option>
                      <option value="AC Installation & Trading">AC Installation & Trading</option>
                      <option value="Cold Room Solutions">Cold Room Solutions</option>
                      <option value="AMC Contracts">Annual Maintenance Contracts (AMC)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Message / Specifications <span className="text-emerald-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify tonnage, equipment model, or nature of your service requirements..."
                    className="w-full px-4 py-3.5 text-sm rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition shadow-sm disabled:opacity-50 cursor-pointer text-center"
                >
                  {status === 'submitting' ? 'Transmitting...' : 'Submit Inquiry'}
                </button>
              </form>

            </div>

          </div>

        </div>

        {/* Embedded Location Map Section (Full Width) */}
        <div className="p-4 sm:p-6 rounded-3xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 space-y-4 w-full" data-aos="fade-up">
          <div className="px-2 pt-2 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Facility Location</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Chiller Technical Services LLC, UAE</p>
            </div>
          </div>
          <div className="relative w-full h-80 sm:h-96 lg:h-112.5 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <iframe
              title="CTS Chiller Technical Services Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1118.2493709701982!2d55.47357896963272!3d25.381967810247925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f58667d25286b%3A0x950fd127e21e0a5f!2sChiller%20Technical%20Services%20LLC!5e1!3m2!1sen!2sin!4v1784872178480!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </main>
  )
}