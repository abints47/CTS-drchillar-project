'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

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
    <div className="min-h-screen bg-white pt-25 flex flex-col">
      <main className="grow">
        
        {/* Minimalist SEO-Friendly Text Header Section */}
        <section className="w-full bg-[#fafafa] border-b border-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-250 mx-auto text-center space-y-4" data-aos="fade-up" data-aos-duration="500">
            <span className="inline-block px-3 py-1 rounded-full bg-[#00b96b]/10 text-[#196646] font-mono text-xs uppercase tracking-widest border border-[#00b96b]/20">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-green-800 tracking-tight">
              Contact CTS Chiller Technical Services
            </h1>
            <p className="text-[#6b7280] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Have questions about our industrial water chillers, maintenance contracts, or HVAC solutions? Contact our expert engineering team today.
            </p>
          </div>
        </section>

        {/* Contact Information Cards & Form Section */}
        <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-275 mx-auto space-y-16">
            
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Location Card */}
              <div 
                data-aos="fade-up" 
                data-aos-delay="0"
                className="p-6 rounded-2xl bg-[#fafafa] border border-gray-100 flex flex-col space-y-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="p-2.5 rounded-xl bg-white text-[#00b96b] shadow-sm w-fit border border-gray-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#183153]">Location</h2>
                <address className="not-italic text-sm text-[#6b7280] font-light leading-relaxed">
                  Industrial Area, Sharjah / Dubai, United Arab Emirates
                </address>
              </div>

              {/* Phone Card */}
              <div 
                data-aos="fade-up" 
                data-aos-delay="100"
                className="p-6 rounded-2xl bg-[#fafafa] border border-gray-100 flex flex-col space-y-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="p-2.5 rounded-xl bg-white text-[#00b96b] shadow-sm w-fit border border-gray-100">
                  <Phone className="w-5 h-5" />
                </div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#183153]">Phone</h2>
                <Link href="tel:+97167434537" className="text-sm text-[#6b7280] hover:text-[#00b96b] transition font-light">
                  +971 6 743 4537
                </Link>
              </div>

              {/* Email Card */}
              <div 
                data-aos="fade-up" 
                data-aos-delay="200"
                className="p-6 rounded-2xl bg-[#fafafa] border border-gray-100 flex flex-col space-y-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="p-2.5 rounded-xl bg-white text-[#00b96b] shadow-sm w-fit border border-gray-100">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#183153]">Email</h2>
                <Link href="mailto:info@drchiller.com" className="text-sm text-[#6b7280] hover:text-[#00b96b] transition font-light">
                  info@drchiller.com
                </Link>
              </div>

              {/* Working Hours Card */}
              <div 
                data-aos="fade-up" 
                data-aos-delay="300"
                className="p-6 rounded-2xl bg-[#fafafa] border border-gray-100 flex flex-col space-y-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="p-2.5 rounded-xl bg-white text-[#00b96b] shadow-sm w-fit border border-gray-100">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#183153]">Working Hours</h2>
                <p className="text-sm text-[#6b7280] font-light leading-relaxed">
                  Mon - Sat: 8:00 AM - 6:00 PM <br />
                  <span className="text-[#00b96b] font-medium">24/7 Emergency Support</span>
                </p>
              </div>

            </div>

            {/* Main Form & Map Section Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Form Column */}
              <div 
                data-aos="fade-right" 
                data-aos-duration="600"
                className="lg:col-span-7 bg-[#fafafa] border border-gray-100 rounded-2xl p-8 sm:p-10 shadow-sm"
              >
                <div className="mb-6 space-y-1">
                  <h3 className="text-2xl font-bold text-[#183153]">Send an Inquiry</h3>
                  <p className="text-sm text-[#6b7280] font-light">
                    Complete the form below to request a customized quotation or engineering support.
                  </p>
                </div>

                {status === 'success' && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-[#00b96b]" />
                    <span>Thank you! Your message has been received. We will respond shortly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#183153] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Paul"
                        className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00b96b] transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#183153] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00b96b] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#183153] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 67434537"
                        className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00b96b] transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[#183153] mb-2">
                        Service Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00b96b] transition"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Chiller Maintenance">Chiller Maintenance</option>
                        <option value="AC Installation & Trading">AC Installation & Trading</option>
                        <option value="Cold Room Solutions">Cold Room Solutions</option>
                        <option value="AMC Contracts">AMC Contracts</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#183153] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify your technical requirements or cooling needs..."
                      className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00b96b] transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-emerald-700 hover:bg-[#00a35e] text-white font-semibold text-sm transition shadow-sm disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Sending...' : <>Send Inquiry <Send className="w-4 h-4" /></>}
                  </button>
                </form>
              </div>

              {/* Map Column */}
              <div 
                data-aos="fade-left" 
                data-aos-duration="600"
                className="lg:col-span-5 bg-[#fafafa] border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col space-y-4"
              >
                <div className="px-2 pt-2">
                  <h3 className="text-lg font-bold text-[#183153]">Our Location</h3>
                  <p className="text-xs text-[#6b7280] font-light">Visit our office or find us easily on Google Maps.</p>
                </div>
                <div className="relative w-full h-100 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
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

          </div>
        </section>

      </main>
    </div>
  )
}