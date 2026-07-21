import React from 'react'

export const metadata = {
  title: 'Services | Sample Web',
  description: 'Explore the high quality services and solution offerings we provide.',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Custom web application development using React, Next.js, and modern backends optimized for scalability.',
      icon: '⚡',
    },
    {
      title: 'UI/UX & Design Systems',
      description: 'Crafting responsive, accessible, and high-conversion user interfaces with curated aesthetics and design tokens.',
      icon: '🎨',
    },
    {
      title: 'Performance & SEO Optimization',
      description: 'Audit and enhance page load speeds, Core Web Vitals, dynamic caching, and search engine visibility.',
      icon: '🚀',
    },
    {
      title: 'Cloud Architecture & DevOps',
      description: 'Automated CI/CD pipelines, containerization, serverless infrastructure, and 24/7 cloud reliability.',
      icon: '☁️',
    },
    {
      title: 'API Integration & Middleware',
      description: 'Seamless integration of third-party APIs, GraphQL/REST endpoints, payment processors, and auth systems.',
      icon: '🔗',
    },
    {
      title: 'AI & Data Engineering',
      description: 'Embedding machine learning models, intelligent search, vector databases, and interactive AI widgets.',
      icon: '🤖',
    },
  ]

  return (
    <div className="pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
          What We Offer
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Services Tailored for Modern Digital Scaling
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          From concept to deployment, we deliver robust solutions designed to drive growth and engage users.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="p-8 bg-card border rounded-2xl shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="text-4xl">{svc.icon}</div>
              <h3 className="text-xl font-bold">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{svc.description}</p>
            </div>
            <div className="pt-2">
              <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline cursor-pointer">
                Learn more &rarr;
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-muted border rounded-2xl p-8 md:p-12 text-center space-y-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Have a project in mind?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Let’s discuss how our tailored engineering services can turn your strategic goals into reality.
        </p>
        <div className="pt-2">
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}
