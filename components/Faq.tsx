"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "plans",
    trigger: "What services does CTS provide?",
    content:
      "CTS provides chiller maintenance, HVAC services, AC and chiller rentals, cooling tower services, cold room maintenance, coil replacement, and other cooling solutions.",
  },
  {
    value: "billing",
    trigger: "Does CTS offer chiller and AC rental services?",
    content:
      "Yes. CTS offers flexible rental solutions for water chillers, AC units, and diesel generators (gensets). These solutions are suitable for temporary projects, emergency cooling requirements, seasonal demand, and planned maintenance periods.",
  },
  {
    value: "cancel",
    trigger: "Can I rent a chiller for a temporary project?",
    content:
      "Yes. CTS provides temporary cooling solutions that can be used for projects, facility expansions, maintenance periods, emergency requirements, and other short-term cooling needs.",
  },
  {
    value: "contact",
    trigger: "Where is CTS located?",
    content:
      "CTS - Chiller Technical Services LLC. Industrial Area # 02. Ajman, UAE. Email",
  },
]

export default function AccordionCard() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto py-6 sm:py-30 px-4 sm:px-6 lg:px-28">
      {/* Frameless Header with AOS */}
      <div className="mb-6 space-y-2 text-left" data-aos="fade-up">
        <h2 className="text-xl sm:text-4xl text-center font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
          Frequently Asked Questions
        </h2>
        <p className="text-xs text-center sm:text-sm text-slate-500 dark:text-slate-400">
          Find quick answers to common queries regarding CTS chiller, rental, and maintenance services.
        </p>
      </div>

      {/* Borderless Accordion */}
      <Accordion
        defaultValue={["plans"]}
        className="w-full space-y-3 " 
      >
        {items.map((item, index) => (
          <div
            key={item.value}
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <AccordionItem
              value={item.value}
              className="border-none group rounded-lg transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-900/50 px-2 sm:px-3"
            >
              <AccordionTrigger className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-[#00B67A] dark:hover:text-[#00B67A] py-3.5 hover:no-underline transition-colors text-left">
                <span className="flex items-center gap-2.5 sm:gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-slate-300 dark:bg-slate-700 transition-colors group-data-[state=open]:bg-[#00B67A]" />
                  <span>{item.trigger}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pl-4 sm:pl-5 pr-2 pb-4 pt-0 leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  )
}