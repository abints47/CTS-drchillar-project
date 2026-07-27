'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X ,Phone} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'
import logo from '@/public/logo.png'

export default function Navbar() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)

  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroThreshold = window.innerHeight * 0.85

      // Determine whether we are past the Hero section for background styling
      const pastHero = !isHomePage || currentScrollY > heroThreshold
      setIsScrolledPastHero(pastHero)
    }

    // Run once on load to set initial state
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/About', label: 'About Us' },
    { href: '/Products', label: 'Products' },
    { href: '/Services', label: 'Services' },
    { href: '/Contact', label: 'Contact Us' },
    { href: '/phone', label: <Phone/>}
  ]

  const isTransparent = isHomePage && !isScrolledPastHero

  return (
    <motion.header 
      className={styles.navbarWrapper}
      initial={{ y: 0 }}
      animate={{ y: 0 }} // Remains fixed at the top at all times
    >
      <div 
        className={`
          ${styles.navbarContainer} 
          ${isTransparent ? styles.transparent : styles.scrolled}
        `}
      >
        {/* Brand Logo */}
        <Link href="/" className={styles.logo}>
          <Image 
            src={logo}
            alt="Brand Logo" 
            width={32} 
            height={32} 
            className="rounded-md object-contain"
          />
          <span className={isTransparent ? styles.logoTransparent : ''}>CTS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav 
          className={`${styles.navDesktop} ${isTransparent ? styles.navDesktopTransparent : ''}`} 
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            const isHovered = hoveredPath === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredPath(link.href)}
                className={`
                  ${styles.navItem} 
                  ${isActive ? styles.active : ''} 
                  ${isTransparent && !isActive ? styles.navItemTransparent : ''}
                `}
              >
                <span className={styles.navText}>{link.label}</span>

                {/* Active Route Indicator Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={styles.activePill}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover Indicator Pill */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="hoverTab"
                    className={isTransparent ? styles.hoverPillTransparent : styles.hoverPill}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className={`${styles.mobileMenuBtn} ${isTransparent ? styles.btnTransparent : ''}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={styles.navMobile}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileNavItem} ${pathname === link.href ? styles.activeMobile : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 