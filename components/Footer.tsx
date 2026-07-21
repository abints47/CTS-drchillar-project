'use client' // 👈 Add this line at the top

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
          
          {/* Brand & Newsletter Column */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              SAMPLE_WEb
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Empowering developers and teams to build modern, scalable web applications with ease.
            </p>
            
            {/* Newsletter Input */}
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

          {/* Column 1: Product Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#integrations" className="hover:text-foreground transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-foreground transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#documentation" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#guides" className="hover:text-foreground transition-colors">
                  Guides & Tutorials
                </Link>
              </li>
              <li>
                <Link href="#api" className="hover:text-foreground transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#community" className="hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#careers" className="hover:text-foreground transition-colors">
                  Careers <span className="text-xs text-primary font-medium">(Hiring)</span>
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border" />

        {/* Bottom Bar Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          
          {/* Copyright */}
          <p>&copy; {new Date().getFullYear()} Brand, Inc. All rights reserved.</p>

          {/* Legal Links */}
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