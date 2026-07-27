'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './ParallaxCarousel.module.css'

interface SlideItem {
  id: string
  src: string
  alt: string
  title: string
  description: string
}

interface CarouselProps {
  slides: SlideItem[]
}

export default function ParallaxCarousel({ slides }: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  const slidesNodes = useRef<HTMLElement[]>([])

  const setSlidesNodes = useCallback((emblaApi: any) => {
    slidesNodes.current = emblaApi.slideNodes()
  }, [])

  const applyOpacity = useCallback((emblaApi: any) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    emblaApi.scrollSnapList().forEach((scrollSnap: number, index: number) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem: any) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (scrollProgress - 1)
            if (sign === 1) diffToTarget = scrollSnap - (scrollProgress + 1)
          }
        })
      }

      const opacity = 1 - Math.min(Math.abs(diffToTarget * 2.5), 0.75)
      const slideNode = slidesNodes.current[index]

      if (slideNode) {
        slideNode.style.opacity = opacity.toString()
      }
    })
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setSlidesNodes(emblaApi)
    applyOpacity(emblaApi)
    onSelect(emblaApi)

    emblaApi.on('init', setSlidesNodes)
    emblaApi.on('reInit', setSlidesNodes)
    emblaApi.on('scroll', applyOpacity)
    emblaApi.on('slideFocus', applyOpacity)
    emblaApi.on('select', onSelect)
  }, [emblaApi, setSlidesNodes, applyOpacity, onSelect])

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => {
            const isActive = index === selectedIndex

            return (
              <div className={styles.embla__slide} key={slide.id}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority
                  className={styles.embla__img}
                />

                <div className={styles.slide__overlay} />

                {isActive && (
                  <div
                    key={`animated-content-${selectedIndex}`}
                    className={styles.slide__content}
                  >
                  
                   

                    {/* DYNAMIC SLIDE TITLE & DESCRIPTION */}
                    <p className={styles.slide__title}>{slide.title}</p>
                    <p className={styles.slide__description}>
                      {slide.description}
                    </p>

                        {/* HERO BRAND HEADER (Animates with the slide text) */}

                       <div className={styles.hero__header}>
                      <Image
                        src="/logo.png"
                        alt="CTS Logo"
                        width={70}
                        height={70}
                        className={styles.hero__logo}
                        priority
                      />
                      <div className={styles.hero__brandText}>
                        <h1 className={styles.hero__brandName}>
                          CTS - Chiller Technical Services L.L.C
                        </h1>
                        <p className={styles.hero__tagline}>SKILL TO CHILL</p>
                      </div>
                    </div>

                  </div>
                  
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}