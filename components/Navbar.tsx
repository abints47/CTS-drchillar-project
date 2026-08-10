"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/logo.png";

export default function Navbar() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<Record<string, boolean>>({});

  const pathname = usePathname();

  const pagesWithHero = [
    "/",
    "/Products",
    "/Services",
    "/Products/water-chillers",
    "/Products/heat-exchangers",
    "/Products/cold-rooms",
    "/Products/ac-units",
    "/Services/AC-chillers",
    "/Services/amc",
    "/Services/coil-Manufacture",
    "/Services/Coldroom-Maintenance",
    "/Services/overhauling",
    "/Services/Water-chillers",
  ];
  const hasHero = pagesWithHero.includes(pathname);

  // Close menus & scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setOpenMobileSubmenus({});
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Handle scroll thresholds
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!hasHero) {
        setIsScrolledPastHero(true);
        return;
      }
      const threshold = pathname === "/" ? window.innerHeight * 0.85 : 200;
      setIsScrolledPastHero(currentScrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, hasHero]);

  const toggleMobileSubmenu = (href: string) => {
    setOpenMobileSubmenus((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About Us" },
    {
      href: "/Products",
      label: "Products",
      submenu: [
        { href: "/Products/water-chillers", label: "Water Chillers, Coolers and Heat Pumps" },
        { href: "/Products/cold-rooms", label: "Cold Rooms & Ice Block Machines" },
        { href: "/Products/heat-exchangers", label: "Heat Exchangers & Cooling Towers" },
        { href: "/Products/ac-units", label: "AC Units & Air Curtains" },
      ],
    },
    {
      href: "/Services",
      label: "Services",
      submenu: [
        { href: "/Services/AC-chillers", label: "AC, Chillers & Genset Rentals" },
        { href: "/Services/Water-chillers", label: "Chilled Water Pipeline & Flushing" },
        { href: "/Services/Coldroom-Maintenance", label: "AC Chillers & Cold Rooms Maintenance" },
        { href: "/Services/coil-Manufacture", label: "Coil Manufacturing & Replacement" },
        { href: "/Services/overhauling", label: "Overhauling & Winding" },
        { href: "/Services/amc", label: "AMC" },
      ],
    },
    { href: "/Contact", label: "Contact Us" },
    { href: "https://wa.me/97167434537", label: <Phone size={16} />, isExternal: true },
  ];

  const isTransparent = hasHero && !isScrolledPastHero;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      <div
        className={`w-full transition-all duration-300 border-b ${
          isTransparent
            ? "bg-transparent border-white/10 text-white"
            : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-gray-200/80 dark:border-gray-800 text-gray-900 dark:text-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" scroll={true} className="flex items-center gap-2.5 group">
            <Image
              src={logo}
              alt="CTS Brand Logo"
              width={36}
              height={36}
              className="rounded-lg object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span
              className={`font-bold text-xl tracking-tight transition-colors ${
                isTransparent ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              CTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            onMouseLeave={() => {
              setHoveredPath(null);
              setActiveDropdown(null);
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredPath === link.href;
              const hasSubmenu = Boolean(link.submenu);

              return (
                <div
                  key={link.href}
                  className="relative py-2"
                  onMouseEnter={() => {
                    setHoveredPath(link.href);
                    if (hasSubmenu) setActiveDropdown(link.href);
                    else setActiveDropdown(null);
                  }}
                >
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative z-10 px-3 py-2 rounded-full text-sm font-medium transition-colors flex items-center justify-center ${
                        isTransparent
                          ? "text-white hover:bg-white/15"
                          : "text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      aria-label="Contact via WhatsApp"
                    >
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      scroll={true}
                      className={`relative z-10 px-3.5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 ${
                        isActive
                          ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                          : isTransparent
                          ? "text-white/90 hover:text-white"
                          : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        {link.label}
                        {hasSubmenu && (
                          <ChevronDown
                            size={14}
                            className={`opacity-75 transition-transform duration-200 ${
                              activeDropdown === link.href ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </span>

                      {/* Active Indicator Pill */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full -z-10 border border-emerald-500/20"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* Hover Pill */}
                      {isHovered && !isActive && (
                        <motion.div
                          layoutId="hoverTab"
                          className={`absolute inset-0 rounded-full -z-10 ${
                            isTransparent
                              ? "bg-white/15"
                              : "bg-gray-100 dark:bg-gray-800"
                          }`}
                          transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        />
                      )}
                    </Link>
                  )}

                  {/* Desktop Dropdown Menu with Increased Width (w-80 or w-96) */}
                  {hasSubmenu && activeDropdown === link.href && (
                    <div className="absolute top-full left-0 pt-2 w-80 sm:w-96 z-50">
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-2 overflow-hidden"
                      >
                        {link.submenu?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            scroll={true}
                            className={`block px-4 py-3 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                              pathname === sub.href
                                ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-semibold"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-emerald-600 dark:hover:text-emerald-400"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-out Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white dark:bg-gray-900 z-50 shadow-2xl flex flex-col lg:hidden border-l border-gray-100 dark:border-gray-800 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white text-lg">Navigation</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="p-4 space-y-1 flex-1">
                {navLinks.map((link) => {
                  const hasSubmenu = Boolean(link.submenu);
                  const isSubmenuOpen = openMobileSubmenus[link.href];

                  return (
                    <div key={link.href} className="flex flex-col w-full">
                      <div className="flex items-center justify-between w-full">
                        {link.isExternal ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex-1 py-3 px-3 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-2"
                          >
                            <span>WhatsApp Us</span>
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            scroll={true}
                            onClick={() => {
                              if (!hasSubmenu) setMobileMenuOpen(false);
                            }}
                            className={`flex-1 py-3 px-3 text-base font-medium transition-colors ${
                              pathname === link.href
                                ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                                : "text-gray-800 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400"
                            }`}
                          >
                            {link.label}
                          </Link>
                        )}

                        {hasSubmenu && (
                          <button
                            type="button"
                            aria-label={`Toggle submenu for ${link.label}`}
                            onClick={() => toggleMobileSubmenu(link.href)}
                            className="p-3 text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                isSubmenuOpen ? "rotate-180 text-emerald-600 dark:text-emerald-400" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Mobile Submenu Expansion */}
                      {hasSubmenu && (
                        <AnimatePresence>
                          {isSubmenuOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden pl-4 pr-2 py-1 bg-gray-50 dark:bg-gray-800/50 rounded-xl my-1"
                            >
                              {link.submenu?.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  scroll={true}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`block py-2.5 px-3 text-xs sm:text-sm rounded-lg font-medium transition-colors ${
                                    pathname === sub.href
                                      ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                                      : "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                                  }`}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}