"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";

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

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Tooltip & Floating Button */}
      <div className="relative flex items-center">
        <AnimatePresence>
          {!isOpen && showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
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
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Toggle contact details"
          className="relative flex items-center justify-center w-16 h-16 bg-[#10B981] text-white rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/30 transition-colors"
        >
          {/* Subtle pulse animation */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-25 pointer-events-none" />
          )}

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Phone className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Ultra-Minimal Contact Information Card (No chat box, pure details) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-[calc(100vw-32px)] sm:w-85 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-zinc-100 overflow-hidden"
          >
            {/* Minimal Clean Header */}
            <div className="bg-linear-to-r from-emerald-500 to-emerald-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-tight">Get in Touch</h3>
                  <p className="text-[11px] text-emerald-100">CTS Engineering Support</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Structured Contact Directory Details */}
            <div className="p-4 space-y-3 bg-white text-zinc-700">
              {/* Phone Item */}
              <a
                href="tel:+18005551234"
                className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 hover:bg-emerald-50 hover:text-[#10B981] transition-all border border-zinc-100 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100/60 flex items-center justify-center text-[#10B981] group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Call Us</p>
                    <p className="text-xs font-semibold text-zinc-800 group-hover:text-[#10B981]">+971 67434537</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-300 group-hover:text-[#10B981]" />
              </a>

              {/* Email Item */}
              <a
                href="mailto:support@ctsengineering.com"
                className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 hover:bg-emerald-50 hover:text-[#10B981] transition-all border border-zinc-100 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100/60 flex items-center justify-center text-[#10B981] group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Email Us</p>
                    <p className="text-xs font-semibold text-zinc-800 group-hover:text-[#10B981]">support@ctsengineering.com</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-300 group-hover:text-[#10B981]" />
              </a>

              {/* Working Hours */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 border border-zinc-100">
                <div className="w-8 h-8 rounded-full bg-zinc-200/60 flex items-center justify-center text-zinc-600">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Working Hours</p>
                  <p className="text-xs font-semibold text-zinc-800">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* WhatsApp Quick Action Button */}
              <a
                href="https://wa.me/7167434537"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 bg-[#10B981] hover:bg-[#059669] text-white py-3 rounded-2xl font-medium text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}