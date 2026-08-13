'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-zinc-800 bg-[#182a42] dark:bg-black text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 py-10 lg:px-12 lg:py-16">
        {/* Main Columns Grid Layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr] lg:gap-10">
          
          {/* Brand & Description Column */}
          <div className="space-y-4">
            <Link 
              href="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block text-[#1FAA6D] w-full"
            >
              <div className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight">
                <Image
                  src="/logo.png"
                  alt="CTS Logo"
                  width={30}
                  height={30}
                  className="shrink-0"
                />
                <span className="text-white dark:text-gray-100 leading-snug">Chiller Technical Services L.L.C</span>
              </div>
              <div className="text-base sm:text-xl font-semibold text-white dark:text-gray-200 pt-1.5 pl-39">
                خدمات التبريد التقنية ذ.م.م
              </div>
            </Link>
            <p className="text-sm sm:text-base leading-relaxed text-white dark:text-gray-400 max-w-sm pt-2">
              High-quality cooling and refrigeration solutions for industrial and commercial needs built for performance, reliability, and efficiency.
            </p>
          </div>

          {/* Product Column */}
          <div className="space-y-3">
            <h4 className="text-lg sm:text-xl font-semibold text-[#1FAA6D]">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/Products/water-chillers" className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400 block">
                  Water chillers, Coolers & Heat Pumps
                </Link>
              </li>
              <li>
                <Link href="/Products/cold-rooms" className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400">
                  Cold Rooms & Ice Block Machines
                </Link>
              </li>
              <li>
                <Link href="/Products/heat-exchangers" className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400">
                  Heat Exchange & Cooling Towers
                </Link>
              </li>
              <li>
                <Link href="/Products/ac-units" className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400">
                  A/C Units & Air Curtains
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-lg sm:text-xl font-semibold text-[#1FAA6D]">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/Services/AC-chillers" className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400">
                  A/C Chiller & Genset Rentals
                </Link>
              </li>
              <li>
                <Link href="/Services/Coldroom-Maintenance" className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400 block">
                  A/C Chiller & Coldroom Maintenance
                </Link>
              </li>
              <li>
                <Link href="/Services/coil-Manufacture" className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400">
                  Coil Manufacturing & Replacements
                </Link>
              </li>
              <li>
                <Link href="/Services/overhauling" className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400">
                  Overhauling & Winding
                </Link>
              </li>
              <li>
                <Link href="/Services/amc" className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400">
                  AMC
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h4 className="text-lg sm:text-xl font-semibold text-[#1FAA6D]">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="block break-all">
                  <span className="font-bold text-white dark:text-gray-200">Email: </span>
                  <Link href="mailto:info@drchiller.com" className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400">
                    info@drchiller.com
                  </Link>
                </span>
              </li>
              <li>
                <span className="block">
                  <span className="font-bold text-white dark:text-gray-200">Phone: </span>
                  <Link href="tel:+97167434537" className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400">
                    +971 67434537
                  </Link>
                </span>
              </li>
              <li>
                <span className="block">
                  <span className="font-bold text-white dark:text-gray-200">Mobile: </span>
                  <Link href="tel:+97167434537" className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400">
                    +971 67434537
                  </Link>
                </span>
              </li>
              <li>
                <span className="block">
                  <span className="font-bold text-white dark:text-gray-200">Address: </span>
                  <Link
                    href="https://maps.app.goo.gl/bpqPc2NjBGFzEAqD8"
                    target="_blank"
                    className="hover:text-emerald-400 transition-colors text-white dark:text-gray-400 inline"
                  >
                    <span className="font-medium">
                      CTS - Chiller Technical Services L.L.C. Industrial Area # 02. Ajman, UAE.
                    </span>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 mt-15 border-t border-gray-300/60 dark:border-zinc-800" />

        {/* Bottom Bar Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs sm:text-sm text-[#e2e6eb] dark:text-gray-400 sm:flex-row text-center sm:text-left">
          <p>
            <span className="text-emerald-500">&copy;</span> {new Date().getFullYear()} CTS, Inc. All rights reserved {' '}
            
          </p>
            <Link href="https://maktalseo.com/" target="_blank" className="inline-block">
              <span className="hover:text-emerald-300 transition-colors">Made with <span>💚</span> by MakTal</span>
            </Link>
        </div>
      </div>
    </footer>
  )
}