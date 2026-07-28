"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CardImage from "@/components/CardImage"

export interface CardItem {
  id: string | number
  title: string
  description: string
  imageSrc: string
  buttonLink?: string
}

interface CardGridProps {
  items: CardItem[]
}

export default function CardGrid({ items }: CardGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 440 // Distance to scroll matches larger card width
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative container mx-auto px-4 py-8 group/carousel">
      {/* Navigation Arrow Left */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white shadow-lg border border-slate-200/80 dark:border-slate-800 backdrop-blur-sm transition-all hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Horizontal Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="shrink-0 w-80 sm:w-85 snap-start bg-transparent"
          >
            <CardImage
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              buttonLink={item.buttonLink ?? "/Products"}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrow Right */}
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white shadow-lg border border-slate-200/80 dark:border-slate-800 backdrop-blur-sm transition-all hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}