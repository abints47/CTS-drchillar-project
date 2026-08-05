'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'
import logo from '@/public/logo.png'

export default function Navbar() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const pathname = usePathname()

  // Define which routes feature a top hero banner where transparency is desired
  const pagesWithHero = ['/', '/Products', '/Services' ,'/Products/water-chillers','/Products/heat-exchangers','/Products/cold-rooms','/Products/ac-units','/Services/AC-chillers' ,
                          '/Services/amc' ,'/Services/coil-Manufacture' ,'/Services/Coldroom-Maintenance' ,'/Services/overhauling' ,'/Services/Water-chillers']
  const hasHero = pagesWithHero.includes(pathname)

  // 1. Force window scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // 2. Dynamic Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (!hasHero) {
        setIsScrolledPastHero(true) // Always solid for pages without a hero
        return
      }

      // Threshold depending on the page
      const threshold = pathname === '/' ? window.innerHeight * 0.85 : 200
      setIsScrolledPastHero(currentScrollY > threshold)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname, hasHero])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/About', label: 'About Us' },
    { 
      href: '/Products', 
      label: 'Products',
      submenu: [
        { href: '/Products/water-chillers', label: 'Water Chillers, Coolers and Heat Pumps' },
        { href: '/Products/cold-rooms', label: 'Cold Rooms & Ice Block Machines' },
        { href: '/Products/heat-exchangers', label: 'Heat Exchangers & Cooling Towers' },
        { href: '/Products/ac-units', label: 'AC Units & Air Curtains' },
      ]
    },
    { 
      href: '/Services', 
      label: 'Services',
      submenu: [
        { href: '/Services#maintenance', label: 'AC, Chillers & Genset Rentals ' },
        { href: '/Services#installation', label: 'Chilled Water Pipeline & Flushing' },
        { href: '/Services#chillers', label: 'AC Chillers & Cold Rooms Maintenance' },
        { href: '/Services#Coil', label: 'Coil Manufacturing & Replacement' },
        { href: '/Services#winding', label: 'Overhauling & Winding' },
        { href: '/Services#amc', label: 'AMC' },
      ]
    },
    { href: '/Contact', label: 'Contact Us' },
    { href: 'https://wa.me/97167434537', label: <Phone size={18} />, isExternal: true }
  ]

  // Only transparent if the current page has a hero and we haven't scrolled past it
  const isTransparent = hasHero && !isScrolledPastHero

  return (
    <motion.header 
      className={styles.navbarWrapper}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      <div 
        className={`
          ${styles.navbarContainer} 
          ${isTransparent ? styles.transparent : styles.scrolled}
        `}
      >
        {/* Brand Logo */}
        <Link href="/" scroll={true} className={styles.logo}>
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
          onMouseLeave={() => {
            setHoveredPath(null)
            setActiveDropdown(null)
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            const isHovered = hoveredPath === link.href
            const hasSubmenu = Boolean(link.submenu)

            return (
              <div 
                key={link.href}
                className={styles.navItemWrapper}
                onMouseEnter={() => {
                  setHoveredPath(link.href)
                  if (hasSubmenu) setActiveDropdown(link.href)
                  else setActiveDropdown(null)
                }}
              >
                <Link
                  href={link.href}
                  scroll={true}
                  className={`
                    ${styles.navItem} 
                    ${isActive ? styles.active : ''} 
                    ${isTransparent && !isActive ? styles.navItemTransparent : ''}
                  `}
                >
                  <span className={`${styles.navText} flex items-center gap-1`}>
                    {link.label}
                    {hasSubmenu && <ChevronDown size={13} className="opacity-80" />}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className={styles.activePill}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="hoverTab"
                      className={isTransparent ? styles.hoverPillTransparent : styles.hoverPill}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </Link>

                {/* Desktop Dropdown Submenu */}
                {hasSubmenu && activeDropdown === link.href && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className={styles.dropdownMenu}
                  >
                    {link.submenu?.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        scroll={true}
                        className={styles.dropdownItem}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
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
              <div key={link.href} className="flex flex-col w-full">
                <Link
                  href={link.href}
                  scroll={true}
                  className={`${styles.mobileNavItem} ${pathname === link.href ? styles.activeMobile : ''}`}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className={styles.mobileSubmenuContainer}>
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        scroll={true}
                        className={styles.mobileSubItem}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}