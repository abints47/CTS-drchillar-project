'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'
import logo from '@/public/logo.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Automatically close mobile menu when navigating to a new route
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const isSubPage = pathname !== '/'

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/About', label: 'About Us' },
    { href: '/Products', label: 'Products'},
    { href: '/Services', label: 'Services' },
    { href: '/Contact', label: 'Contact Us' },
  ]

  return (
    <header className={`${styles.navbar} ${isScrolled || isSubPage ? styles.scrolled : ''}`}>
      <div className={styles.navbar__container}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logo}>
          <Image 
            src={logo}
            alt="Brand Logo" 
            width={32} 
            height={32} 
            className="rounded-md object-contain"
          />
          <span>CTS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? styles.active : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <nav className={styles.navMobile}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? styles.active : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}