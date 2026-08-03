'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#1B2A3D] text-foreground">
      <div className="container mx-auto px-6 py-12 lg:px-12 lg:py-16">
        {/* Main Columns Grid Layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr] lg:gap-10">
          
          {/* Brand & Description Column */}
          <div className="space-y-4">
            <Link 
              href="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block text-[#1FAA6D]">
              <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
                <Image
                  src="/logo.png"
                  alt="CTS Logo"
                  width={30}
                  height={30}
                />
                <span>Chiller Technical Services L.L.C</span>
              </div>
              <section className="pl-37 text-xl font-semibold">
                خدمات التبريد التقنية ذ.م.م
              </section>
            </Link>
            <p className="text-s pr-10 justify-center pt-3 leading-6 text-[#FFFFFF] max-w-sm ">
              High-quality cooling and refrigeration solutions for industrial and commercial needs built for performance, reliability, and efficiency.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-[#1FAA6D]">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  Water chillers, Coolers & Heat
                  <br />
                  Pupms
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  Cold Rooms & Ice Block Machines
                </Link>
              </li>
              <li>
                <Link href="#integrations" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  Heat Exchange & Cooling Towers
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  A/C Units & Air Curtains
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  Water Chillers
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  Industiral Chillers
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  Cold Rooms
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  Heat Exchanger
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-[#1FAA6D]">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#documentation" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  A/C Chililer & Genset Rentals
                </Link>
              </li>
              <li>
                <Link href="#guides" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  A/C Chiller & Coldroom
                  <br />
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="#api" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  Coil Manufacturing & Replacements
                </Link>
              </li>
              <li>
                <Link href="#community" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  Overhauling & Winding
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  AMC
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  A/C Services Dubai
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  Chiller Repair Maintenance
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                  Industiral Chiller Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-[#1FAA6D]">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span>
                  <span className="font-bold text-balance text-[#FFFF]">Email: </span>
                  <Link href="#about" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                    info@drchiller.com
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <span className="font-bold text-balance text-[#FFFF]">Phone: </span>
                  <Link href="#about" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                    +971 67434537
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <span className="font-bold text-balance text-[#FFFF]">Mobile: </span>
                  <Link href="#about" className="hover:text-emerald-400 transition-colors text-[#FFFFFF]">
                    +971 67434537
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <span className="font-bold text-balance text-[#FFFFFF]">
                    Address:
                    <Link
                      href="https://maps.app.goo.gl/bpqPc2NjBGFzEAqD8"
                      target="_blank"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      <span className="font-medium">
                        {' '}
                        CTS - Chiller Technical Services L.L.C. Industrial Area # 02. Ajman, UAE.
                      </span>
                    </Link>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 border-t border-gray-300/60" />

        {/* Bottom Bar Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#e2e6eb] sm:flex-row">
          <p> <span className='text-blue-500'> &copy; </span> {new Date().getFullYear()} CTS, Inc. All rights reserved |<span><Link href={"https://maktalseo.com/"} target="_blank" >
           <span className="hover:text-emerald-500 transition-colors">  Website Developed By Maktal</span>
          </Link> </span></p>

          <div className="flex items-center ">
            
            {/* Native theme toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}