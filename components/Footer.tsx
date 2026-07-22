'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Bold } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50-50 text-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-[#00b85c]">
              Chiller Technical Services L.L.C <section className="pl-30">خدمات التبريد التقنية ذ.م.م</section>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              High-quality cooling and refrigeration solutions for industrial and commercial needs — built for performance, reliability, and efficiency.
            </p>

            <div className="pt-2">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <form className="flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-[#00b85c]">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-foreground transition-colors">
                  Water chillers, Coolers & Heat
                  <br />
                  Pupms
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-foreground transition-colors">
                  Cold Rooms & Ice Block Machines
                </Link>
              </li>
              <li>
                <Link href="#integrations" className="hover:text-foreground transition-colors">
                  Heat Exchange & Cooling Towers
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-foreground transition-colors">
                  A/C Units & Air Curtains
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-foreground transition-colors">
                  Water Chillers
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-foreground transition-colors">
                  Industiral Chillers
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-foreground transition-colors">
                  Cold Rooms
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-foreground transition-colors">
                  Heat Exchanger
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-[#00b85c]">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#documentation" className="hover:text-foreground transition-colors">
                  A/C Chililer & Genset Rentals
                </Link>
              </li>
              <li>
                <Link href="#guides" className="hover:text-foreground transition-colors">
                  A/C Chiller & Coldroom
                  <br />
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="#api" className="hover:text-foreground transition-colors">
                  Coil Manufacturing & Replacements
                </Link>
              </li>
              <li>
                <Link href="#community" className="hover:text-foreground transition-colors">
                  Overhauling & Winding
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-foreground transition-colors">
                  AMC
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-foreground transition-colors">
                  A/C Services Dubai
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-foreground transition-colors">
                  Chiller Repair Maintenance
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-foreground transition-colors">
                  Industiral Chiller Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-[#00b85c]">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span>
                  <span className="font-bold text-balance">Email: </span>
                  <Link href="#about" className="hover:text-foreground transition-colors">
                    info@drchiller.com
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <span className="font-bold text-balance">Phone: </span>
                  <Link href="#about" className="hover:text-foreground transition-colors">
                    +971 67434537
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <span className="font-bold text-balance">Mobile: </span>
                  <Link href="#about" className="hover:text-foreground transition-colors">
                    +971 67434537
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <span className="font-bold text-balance">
                    Address:
                    <Link
                      href="https://maps.app.goo.gl/bpqPc2NjBGFzEAqD8"
                      target="_blank"
                      className="hover:text-foreground transition-colors"
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

        <div className="my-8 border-t border-border" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Brand, Inc. All rights reserved |<span><Link href={"https://maktalseo.com/"}> Website Developed By Maktal</Link>  </span></p>

          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#cookies" className="hover:text-foreground transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}