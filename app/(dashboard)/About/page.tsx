import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Sample Web',
  description: 'Learn more about our team, mission, and vision.',
}

export default function AboutPage() {
  const stats = [
    { label: 'Active Users', value: '100K+' },
    { label: 'Global Customers', value: '50+' },
    { label: 'Uptime Guarantee', value: '99.99%' },
    { label: 'Team Members', value: '45+' },
  ]

  const coreValues = [
    {
      title: 'Innovation First',
      desc: 'We constantly push boundaries to integrate state-of-the-art technologies and intuitive design systems.',
    },
    {
      title: 'User-Centric Design',
      desc: 'Every layout, pixel, and micro-interaction is tuned for maximum engagement and seamless user experience.',
    },
    {
      title: 'Performance & Security',
      desc: 'Fast page loads, robust architecture, and uncompromised accessibility form the core of our platform.',
    },
  ]

  return (
    <main className="mx-auto max-w-7xl space-y-16 px-4 pb-16 pt-28 md:px-8">
      {/* Hero Section */}
      <section className="mx-auto max-w-3xl space-y-4 text-center">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          About Our Company
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          We Build Products for the Next Generation of Web Development
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Our mission is to empower developers and businesses to construct visually stunning, performant, and reliable modern applications.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-primary md:text-4xl">{stat.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Core Values */}
      <section className="space-y-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <p className="mt-2 text-muted-foreground">
            The principles that guide everything we design, code, and ship.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {coreValues.map((val) => (
            <article key={val.title} className="space-y-3 rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">{val.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{val.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}