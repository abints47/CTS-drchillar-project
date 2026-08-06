"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, MessageCircle, Users } from "lucide-react";

export default function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const contactOptions = [
    {
      id: "whatsapp",
      label: "Whatsapp",
      icon: MessageCircle,
      href: "https://wa.me/97167434537",
      external: true,
    },
    {
      id: "contact",
      label: "Contact Us",
      icon: Users,
      href: "tel:+97167434537",
      external: true,
    },
    {
      id: "call",
      label: "Call",
      icon: Phone,
      href: "tel:+97167434537",
      external: false,
    },
  ];

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Buttons Container */}
      <div className="relative flex flex-col items-end mb-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 15 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
                staggerChildren: 0.12,
                delayChildren: 0.08,
              }}
              className="flex flex-col gap-3 mb-4"
            >
              {contactOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <motion.a
                    key={option.id}
                    href={option.href}
                    target={option.external ? "_blank" : undefined}
                    rel={option.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 25, scale: 0.6, x: 20 }}
                    animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                    exit={{ opacity: 0, y: 25, scale: 0.6, x: 20 }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 35,
                      mass: 0.4,
                      opacity: { duration: 0.3 },
                    }}
                    whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(0, 184, 92, 0.3)" }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-3 px-5 py-3 bg-[#00b85c] text-white rounded-full font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:bg-[#00a850] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{option.label}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tooltip & Floating Button */}
      <div className="relative flex items-center justify-end">
        <AnimatePresence>
          {!isOpen && showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 15, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 15, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute right-20 bg-white text-zinc-800 text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl border border-zinc-100 pointer-events-none whitespace-nowrap"
            >
              Need Help?
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.12, boxShadow: "0 20px 40px rgba(0, 184, 92, 0.35)" }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          aria-label="Toggle contact options"
          className="relative flex items-center justify-center w-16 h-16 bg-[#00b85c] text-white rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/30 transition-all duration-300 hover:bg-[#00a850]"
        >
          {/* Subtle pulse animation */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#00b85c] animate-ping opacity-25 pointer-events-none" />
          )}

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Phone className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}