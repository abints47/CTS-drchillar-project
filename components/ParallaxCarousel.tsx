'use client'

import React, { useCallback, useEffect, useRef } from 'react'
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

  useEffect(() => {
    if (!emblaApi) return

    setSlidesNodes(emblaApi)
    applyOpacity(emblaApi)

    emblaApi.on('init', setSlidesNodes)
    emblaApi.on('reInit', setSlidesNodes)
    emblaApi.on('scroll', applyOpacity)
    emblaApi.on('slideFocus', applyOpacity)
  }, [emblaApi, setSlidesNodes, applyOpacity])

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide) => (
            <div className={styles.embla__slide} key={slide.id}>
              {/* Background Image */}
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                priority
                className={styles.embla__img}
              />

              {/* Dark Overlay for Text Legibility */}
              <div className={styles.slide__overlay} />

              {/* Unique Text Content */}
              <div className={styles.slide__content}>
                <h2 className={styles.slide__title}>{slide.title}</h2>
                <p className={styles.slide__description}>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}