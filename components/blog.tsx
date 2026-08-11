'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface BlogPost {
  slug: string
  category: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
}

const posts: BlogPost[] = [
  {
    slug: 'preventative-chiller-maintenance',
    category: 'Chiller Maintenance',
    title: 'Preventative Maintenance Tips for Maximum Efficiency',
    excerpt:
      'Discover how routine mechanical check-ups prevent critical industrial chiller breakdowns, cut power overhead, and extend heavy equipment lifespan.',
    image: 'https://images.unsplash.com/vector-1775025870074-892399cbf787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRpcHxlbnwwfHwwfHx8MA%3D%3D',
    date: 'Jan 20, 2027',
    readTime: '4 min read',
  },
  {
    slug: 'temporary-ac-rentals',
    category: 'Climate Solutions',
    title: 'When to Scale Up with Temporary A/C Rentals',
    excerpt:
      'A comprehensive guide on deploying high-capacity temporary cooling units during facility retrofits, expansions, or emergency peak loads.',
    image: 'https://images.unsplash.com/vector-1759248692212-bebd37ced013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGFpciUyMGNvbmRpdGlvbmluZ3xlbnwwfHwwfHx8MA%3D%3D',
    date: 'Jan 19, 2027',
    readTime: '5 min read',
  },
  {
    slug: 'diesel-generator-reliability',
    category: 'Power Systems',
    title: 'Ensuring Absolute Reliability in Diesel Generators',
    excerpt:
      'Best practices for maintaining industrial backup power systems to secure zero-downtime operations through grid instabilities.',
    image: 'https://images.unsplash.com/vector-1765799632810-0e69642d51b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGRpZXNlbCUyMGZ1ZWx8ZW58MHx8MHx8fDA%3D',
    date: 'Jan 18, 2027',
    readTime: '6 min read',
  },
]

export default function BlogSection() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out',
      offset: 50,
    })
  }, [])

  return (
    <section className="w-full py-20 sm:py-28 lg:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div 
          className="mb-12 sm:mb-16"
          data-aos="fade-up"
        >
          <div className="mb-3">
            <p className="text-xs font-semibold text-[#00B67A] uppercase tracking-widest">
              Our Blog
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Latest Articles & Insights
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Expert insights, maintenance tips, and industry updates on cooling solutions, HVAC systems, and refrigeration innovations.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <article className="flex flex-col h-full">
                
                {/* Image */}
                <div className="relative w-full h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={index === 0}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-5 sm:p-6">
                  
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#00B67A]" aria-hidden="true" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#00B67A] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#00B67A] group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>

                </div>

              </article>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div 
          className="mt-12 sm:mt-16 text-center"
          data-aos="fade-up"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#00B67A] hover:bg-emerald-700 rounded transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  )
}