'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  Headphones,
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulate async submission logic
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      })
    }, 1500)
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* =========================================
          1. HERO HEADER SECTION
         ========================================= */}
      <section className="relative overflow-hidden py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-3xl mx-auto" data-aos="fade-up">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40 rounded-md">
            Get In Touch
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
            Let’s Talk About Your <span className="text-emerald-600 dark:text-emerald-400">Cooling Needs</span>
          </h1>

          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Have questions about our water chillers, maintenance services, or equipment rentals? Contact the experts at CTS  Chiller Technical Services L.L.C today.
          </p>
        </div>
      </section>

      {/* =========================================
          2. CONTACT INFORMATION CARDS
         ========================================= */}
      <section className="relative py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone Card */}
          <div 
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:border-emerald-500/50 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              Call Us
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Speak directly with our technical team.</p>
            <a 
              href="tel:+97167434537" 
              className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline inline-block"
            >
              +971 67434537
            </a>
          </div>

          {/* Email Card */}
          <div 
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:border-emerald-500/50 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              Email Us
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Send us your queries or RFQs anytime.</p>
            <a 
              href="mailto:info@drchiller.com" 
              className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline inline-block"
            >
              info@drchiller.com
            </a>
          </div>

          {/* Address Card */}
          <div 
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:border-emerald-500/50 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              Location
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              Industrial Area, Dubai, United Arab Emirates
            </p>
            <Link 
              href="https://maps.app.goo.gl/bpqPc2NjBGFzEAqD8" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline inline-block"
            >
              See on Map
            </Link>
          </div>

          {/* Working Hours Card */}
          <div 
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:border-emerald-500/50 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-10 h-10 mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              Business Hours
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Mon - Sat: 8:00 AM - 6:00 PM
            </p>
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-2">
              24/7 Emergency Support Available
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          3. MAIN FORM & SIDEBAR SECTION
         ========================================= */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form (7 Cols) */}
          <div 
            className="lg:col-span-7 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm"
            data-aos="fade-right"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Send Us a Message
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Fill out the form below and our HVAC specialists will respond within 24 hours.
              </p>
            </div>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm font-medium">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                    Full Name <span className="text-emerald-600 dark:text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                    Email Address <span className="text-emerald-600 dark:text-emerald-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 50 000 0000"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>

                {/* Subject Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                    Service Required
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Chiller Maintenance">Chiller Maintenance</option>
                    <option value="AC Installation & Trading">AC Installation & Trading</option>
                    <option value="HVAC / Chiller Rental">HVAC / Chiller Rental</option>
                    <option value="Cold Room Solutions">Cold Room Solutions</option>
                    <option value="AMC Contracts">AMC Contracts</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                  Your Message <span className="text-emerald-600 dark:text-emerald-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements or site specifications..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Sidebar Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
            
            {/* Quick Consultation Box */}
            <div className="bg-emerald-700 text-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Need Immediate Help?</h3>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                  Our emergency technical team is available 24/7 for urgent chiller breakdowns and commercial cooling repairs.
                </p>
                <a
                  href="tel:+97167434537"
                  className="inline-flex items-center gap-2 rounded-lg bg-white text-emerald-800 font-bold text-xs sm:text-sm px-4 py-2.5 shadow-sm transition hover:bg-emerald-50"
                >
                  Call Emergency Line <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-3 shadow-sm overflow-hidden">
              <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
                <iframe
                  title="CTS Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1118.2493709701982!2d55.47357896963272!3d25.381967810247925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f58667d25286b%3A0x950fd127e21e0a5f!2sChiller%20Technical%20Services%20LLC!5e1!3m2!1sen!2sin!4v1784872178480!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}