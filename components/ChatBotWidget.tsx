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
            {/* Minimal Header */}
            <div className="px-5 pt-5 pb-3 flex items-center justify-between border-b border-gray-100 dark:border-slate-800">
              <div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white tracking-tight">Need Help?</h3>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">We're here to assist you</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Clean Action List */}
            <div className="p-3 space-y-1">
              {/* WhatsApp */}
              <a
                href="https://wa.me/97167434537"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/30 text-gray-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100/80 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Whatsapp Chat</p>
                    <p className="text-[10px] text-gray-400 dark:text-slate-500">Reply in minutes</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-slate-600 group-hover:text-emerald-500 transition-colors" />
              </a>

              {/* Phone */}
              <a
                href="tel:+97167434537"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/60 text-gray-700 dark:text-slate-200 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-slate-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Phone Call</p>
                    <p className="text-[10px] text-gray-400 dark:text-slate-500">+971 67434537</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-slate-600 group-hover:text-gray-500 transition-colors" />
              </a>

              {/* Email */}
              <a
                href="mailto:support@ctsengineering.com"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/60 text-gray-700 dark:text-slate-200 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-slate-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Email Support</p>
                    <p className="text-[10px] text-gray-400 dark:text-slate-500">support@ctsengineering.com</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-slate-600 group-hover:text-gray-500 transition-colors" />
              </a>
            </div>

            {/* Subtle Status Footer */}
            <div className="px-4 py-2.5 bg-gray-50 dark:bg-slate-950/50 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-gray-400 dark:text-slate-500">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Online Support</span>
              </div>
              <span>Mon-Fri</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}