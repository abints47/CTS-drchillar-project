import ParallaxCarousel from '@/components/ParallaxCarousel'
import CardGrid from "@/components/Card"
import { PRODUCTS, SERVICES } from "@/data/content"
import Image from 'next/image'
import Link from 'next/link'
import { Snowflake } from 'lucide-react'
import { FaRibbon, FaUsers, FaCogs, FaRegClock } from 'react-icons/fa'

const IMAGES = [
  {
    id: '1',
    src: '/images/asethetic-ac.jpg',
    alt: 'Mountains',
    title: 'Water Chillers, Coolers & Heat Pumps',
    description: 'High-efficiency and water chillers designed for reliable cooling of industrial and commercial appliances',
  },
  {
    id: '2',
    src: '/images/air-conditioner.jpg',
    alt: 'River',
    title: 'A/C Units & Air Curtains',
    description: 'Robust air conditioning system for residential, commercial and industrial environments.',
  },
  {
    id: '3',
    src: '/images/pipe.jpg',
    alt: 'Nature',
    title: 'Chilled Water Pipeline & Flushing',
    description: 'Design, installation and flushing of chilled water pipelines for efficient system performance.',
  },
  {
    id: '4',
    src: '/images/air-conditioner1.jpg',
    alt: 'Nature',
    title: 'A/C, Chiller & Genset Rentals',
    description: 'Short and long-term rental solutions including A/C units, water chillers and diesel generators.',
  },
  {
    id: '5',
    src: '/images/ac-reparing.jpg',
    alt: 'Nature',
    title: 'A/C, Chiller & Coldroom Maintenance',
    description: 'Preventive and Corrective maintenance Services for air conditioning, chiller and cold room systems.',
  },
  {
    id: '6',
    src: '/images/ac-curtains.jpg',
    alt: 'Nature',
    title: 'A/C, Units & Air Curtains',
    description: 'Robust Air Conditioning system for residential, commercial and industrial environments.',
  },
  {
    id: '7',
    src: '/images/AMC.jpg',
    alt: 'Nature',
    title: 'AMC',
    description: 'Annual Maintenance Contract providing priority support and long-term services coverage.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Full screen carousel hero */}
      <ParallaxCarousel slides={IMAGES} />

      {/* Hero Content Section */}
      <section className="relative overflow-hidden bg-gray-100 py-16 pb-28 px-4 transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-gray-950">
        {/* Background Decorative Snowflakes */}
        <Snowflake
          size={140}
          className="pointer-events-none absolute -top-2 -left-2 select-none text-emerald-500/10 animate-spin-slow md:top-0 md:left-2"
          aria-hidden="true"
        />
        <Snowflake
          size={140}
          className="pointer-events-none absolute bottom-0 right-0 select-none text-emerald-500/10 animate-spin-slow md:bottom-10 md:right-16"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 opacity-100 translate-y-0 scale-100 transition-all duration-1000 ease-out lg:grid-cols-2">
          {/* Left Image Cluster */}
          <div className="relative flex flex-col items-center sm:mb-12 lg:block lg:ms-12">
            {/* Back Image */}
            <div className="group/img1 relative hidden h-80 w-72 overflow-hidden rounded-xl border-2 border-white opacity-100 shadow-lg transition-all duration-500 ease-out sm:block sm:rotate-3 hover:z-20 hover:scale-105 hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl dark:border-gray-900">
              <Image
                src="/images/asethetic-ac.webp"
                alt="Our Team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl object-cover transition-transform duration-500 group-hover/img1:scale-110"
                priority
              />
            </div>

            {/* Front Image */}
            <div className="group/img2 relative h-72 w-64 overflow-hidden rounded-xl border-2 border-white opacity-100 shadow-lg transition-all duration-500 delay-200 ease-out sm:absolute sm:top-20 sm:left-20 sm:rotate-12 lg:top-20 lg:left-40 hover:z-20 hover:scale-105 hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl dark:border-gray-900">
              <Image
                src="/images/Amc.webp"
                alt="Work in Action"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl object-cover transition-transform duration-500 group-hover/img2:scale-110"
              />
            </div>
          </div>

          {/* Right Content Side */}
          <div className="relative opacity-100 translate-x-0 transition-all duration-1000 delay-400 ease-out">
            <h1 className="mb-6 text-3xl font-bold text-emerald-600 sm:text-4xl dark:text-emerald-400">
              Chiller Maintenance Company in UAE
            </h1>

            <p className="mb-6 text-gray-600 leading-relaxed dark:text-gray-300">
              At{' '}
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                CTS - Chiller Technical Services L.L.C
              </span>
              , we combine years of expertise with modern technology to deliver
              exceptional cooling solutions. Our focus is on reliability,
              innovation, and customer satisfaction — making us the trusted partner for
              businesses across the region.
            </p>

            {/* Feature Badges */}
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="group flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1">
                <div className="text-2xl text-emerald-600 transition-transform group-hover:scale-110">
                  <FaRibbon />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Proven Expertise
                </span>
              </div>

              <div className="group flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1">
                <div className="text-2xl text-emerald-600 transition-transform group-hover:scale-110">
                  <FaUsers />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Dedicated Support
                </span>
              </div>

              <div className="group flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1">
                <div className="text-2xl text-emerald-600 transition-transform group-hover:scale-110">
                  <FaCogs />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Cutting-Edge Solutions
                </span>
              </div>

              <div className="group flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1">
                <div className="text-2xl text-emerald-600 transition-transform group-hover:scale-110">
                  <FaRegClock />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  On-Time Delivery
                </span>
              </div>
            </div>

            {/* Learn More Button */}
            <Link
              href="/About"
              className="inline-block rounded-md bg-emerald-500 py-2 px-4 text-sm font-medium text-white transition hover:bg-emerald-600"
              aria-label="Learn more about us"
            >
              Learn More<span className="sr-only"> about us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services and Offerings Section */}
      <section id="about" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {/* What We Offer Header Card */}
        <div className="relative group overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-3xl p-8 sm:p-12 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-emerald-500/30">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500 pointer-events-none" />
          
          <div className="relative z-10 space-y-4 text-center max-w-5xl mx-auto">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 rounded-full">
              Our Services
            </span>
            
            <h3 className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">
              What We Offer
            </h3>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              At{' '}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                CTS - Chiller Technical Services L.L.C
              </span>
              , we provide top-notch solutions for all your cooling needs. From premium trading options to expert maintenance, flexible rentals, and dedicated after-sales services — our mission is to keep you cool, comfortable, and satisfied year-round.
            </p>
          </div>
        </div>

        {/* Services Grid (Trading, Maintenance, Rentals, Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Trading */}
          <div className="group relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500/50">
            <div className="w-12 h-12 mb-4 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
              📦
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Trading
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              High-quality cooling systems and equipment from trusted brands, ensuring performance and durability you can rely on.
            </p>
          </div>

          {/* Maintenance */}
          <div className="group relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500/50">
            <div className="w-12 h-12 mb-4 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
              🛠️
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Maintenance
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Regular check-ups and quick repairs to keep your equipment running efficiently with minimal downtime.
            </p>
          </div>

          {/* Rentals */}
          <div className="group relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500/50">
            <div className="w-12 h-12 mb-4 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
              🔄
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Rentals
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Flexible rental options for all types of cooling systems, perfect for temporary needs or seasonal projects.
            </p>
          </div>

          {/* Services */}
          <div className="group relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500/50">
            <div className="w-12 h-12 mb-4 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
              🤝
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Services
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              From consultation to installation and after-sales support, our team ensures you get complete peace of mind.
            </p>
          </div>
        </div>

        {/* Featured Products & Services Cards Section */}
        <div className="space-y-12">
          {/* Products Subsection */}
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                Our Products
              </h3>
              <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
            </div>

            <p className="max-w-3xl mx-auto text-center text-base sm:text-lg font-normal text-gray-600 dark:text-gray-300 tracking-tight px-4 leading-relaxed">
              We provide a wide range of cooling and refrigeration solutions built for performance, reliability, and efficiency.
            </p>

            <CardGrid items={PRODUCTS} />
          </div>

          {/* Services Subsection */}
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                Our Services
              </h3>
              <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
            </div>

            <p className="max-w-3xl mx-auto text-center text-base sm:text-lg font-normal text-gray-600 dark:text-gray-300 tracking-tight px-4 leading-relaxed">
              From Chilled water systems to complete AC maintenance, we provide a full range of professional HVAC services.
            </p>

            <CardGrid items={SERVICES} />
          </div>
        </div>
      </section>
    </>
  )
}