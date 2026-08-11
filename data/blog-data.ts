export interface BlogPost {
  slug: string
  category: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  overview: string
  takeaways: string[]
  quote: string
  conclusion: string
}

export const allBlogPosts: BlogPost[] = [
  {
    slug: 'preventative-chiller-maintenance',
    category: 'Chiller Maintenance',
    title: 'Preventative Maintenance Tips for Maximum Efficiency',
    excerpt:
      'Discover how routine mechanical check-ups prevent critical industrial chiller breakdowns, cut power overhead, and extend heavy equipment lifespan.',
    image: 'https://images.unsplash.com/vector-1775025870074-892399cbf787?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRpcHxlbnwwfHwwfHx8MA%3D%3D',
    date: 'Jan 20, 2027',
    readTime: '4 min read',
    overview:
      'Industrial chillers are the backbone of modern facility climate control and manufacturing processes. Without consistent upkeep, mechanical wear, scaling, and refrigerant inefficiencies can silently spike your energy consumption and trigger unexpected operational halts.',
    takeaways: [
      'Perform regular tube cleaning to prevent heat transfer efficiency loss.',
      'Monitor refrigerant pressures and check for micro-leaks proactively.',
      'Schedule comprehensive off-season mechanical checks before peak seasonal workloads hit.'
    ],
    quote: 'A well-maintained chiller doesn’t just cool a space—it protects your entire financial ledger from unexpected emergency repair expenses.',
    conclusion:
      'By committing to a strict preventative maintenance program, facility managers can guarantee stable operations, preserve high energy performance standards, and drastically extend asset lifespans.'
  },
  {
    slug: 'temporary-ac-rentals',
    category: 'Climate Solutions',
    title: 'When to Scale Up with Temporary A/C Rentals',
    excerpt:
      'A comprehensive guide on deploying high-capacity temporary cooling units during facility retrofits, expansions, or emergency peak loads.',
    image: 'https://images.unsplash.com/vector-1759248692212-bebd37ced013?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGFpciUyMGNvbmRpdGlvbmluZ3xlbnwwfHwwfHx8MA%3D%3D',
    date: 'Jan 19, 2027',
    readTime: '5 min read',
    overview:
      'Whether you are facing sudden seasonal heatwaves, undergoing a major facility retrofit, or bridging a capacity gap during system replacements, relying entirely on permanent infrastructure can sometimes leave operations vulnerable.',
    takeaways: [
      'Evaluate precise thermal load requirements in tons prior to system deployment.',
      'Ensure temporary power distribution setups and ducting pathways are planned safely.',
      'Select modular rental units that can scale up or down based on shifting site conditions.'
    ],
    quote: 'Temporary cooling isn’t just a quick fix; it is a strategic bridge that keeps productivity unhindered during critical facility transformations.',
    conclusion:
      'Integrating scalable temporary air conditioning solutions ensures absolute business continuity, safeguarding both workforce comfort and sensitive industrial processes.'
  },
  {
    slug: 'diesel-generator-reliability',
    category: 'Power Systems',
    title: 'Ensuring Absolute Reliability in Diesel Generators',
    excerpt:
      'Best practices for maintaining industrial backup power systems to secure zero-downtime operations through grid instabilities.',
    image: 'https://images.unsplash.com/vector-1765799632810-0e69642d51b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGRpZXNlbCUyMGZ1ZWx8ZW58MHx8MHx8fDA%3D',
    date: 'Jan 18, 2027',
    readTime: '6 min read',
    overview:
      'Grid power instabilities can strike at any moment, making backup diesel generators an absolute lifesaver for data centers, hospitals, and heavy industrial plants. However, a generator that hasn’t been tested or serviced can fail precisely when it is needed most.',
    takeaways: [
      'Conduct monthly load bank testing to prevent wet stacking and ensure full capacity output.',
      'Implement fuel polishing routines to keep stored diesel free from microbial growth and sludge.',
      'Verify automatic transfer switch responsiveness regularly to ensure seamless failovers.'
    ],
    quote: 'True power resilience means your operations transition seamlessly to backup power before your systems even register a flicker.',
    conclusion:
      'Strict adherence to testing schedules and clean fuel standards ensures your backup generators will perform flawlessly during critical grid failures.'
  },
  {
    slug: 'chiller-installation-best-practices',
    category: 'Installation',
    title: 'Chiller Installation: Best Practices & Safety Standards',
    excerpt:
      'Step-by-step guide to proper chiller installation, including safety protocols, optimal positioning, and commissioning procedures.',
    image: 'https://images.unsplash.com/vector-1761385079498-69fa4adce7dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D',
    date: 'Jan 17, 2027',
    readTime: '7 min read',
    overview:
      'The installation phase sets the tone for an industrial chiller’s entire operational lifespan. Improper rigging, poor alignment, or neglected environmental safety checks can lead to chronic inefficiencies right out of the gate.',
    takeaways: [
      'Verify structural load-bearing capacities and vibration isolation mounts carefully.',
      'Comply strictly with local environmental and refrigerant ventilation codes.',
      'Execute thorough pressure testing and system flushing before final commissioning.'
    ],
    quote: 'The lifespan and efficiency of an industrial chiller are determined by the precision of its initial installation and commissioning.',
    conclusion:
      'Investing in expert engineering and strict adherence to safety standards during setup pays massive dividends in efficiency and safety over the years.'
  },
  {
    slug: 'cold-storage-solutions',
    category: 'Cold Storage',
    title: 'Advanced Cold Storage Solutions for Food & Pharma',
    excerpt:
      'Specialized cold room design and temperature control strategies for food storage, pharmaceutical facilities, and perishable goods management.',
    image: 'https://images.unsplash.com/vector-1751914321913-d1b37eeabee5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHN0b3JhZ2V8ZW58MHx8MHx8fDA%3D',
    date: 'Jan 16, 2027',
    readTime: '5 min read',
    overview:
      'Maintaining precise sub-zero or controlled cold chain environments is vital for safeguarding perishable food items and temperature-sensitive pharmaceutical inventories against spoilage or degradation.',
    takeaways: [
      'Incorporate redundant refrigeration systems for continuous high-stakes storage lines.',
      'Deploy real-time IoT temperature monitoring and automated alert networks.',
      'Optimize internal racking layouts to ensure unobstructed, uniform airflow.'
    ],
    quote: 'In cold storage logistics, a fraction of a degree can mean the difference between pristine inventory and total product loss.',
    conclusion:
      'Modern cold rooms demand robust engineering design, fail-safe backups, and continuous real-time data tracking to maintain absolute product integrity.'
  },
  {
    slug: 'emergency-chiller-repair-guide',
    category: 'Support',
    title: 'Emergency Chiller Repair: What to Do When Systems Fail',
    excerpt:
      'Immediate troubleshooting steps, emergency protocols, and how to minimize downtime when your industrial chiller fails unexpectedly.',
    image: 'https://images.unsplash.com/vector-1786212328756-c27dfd2ad827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN5c3RlbSUyMGZhaWx8ZW58MHx8Mnx8fDA%3D',
    date: 'Jan 15, 2027',
    readTime: '4 min read',
    overview:
      'When an industrial chiller trips or completely breaks down during peak operational hours, every minute of delay translates to mounting financial losses. Knowing how to triage the situation safely is essential.',
    takeaways: [
      'Safely isolate the faulty circuit or component without jeopardizing the rest of the facility.',
      'Record error codes, pressure metrics, and fluid temperatures before resetting anything.',
      'Contact a rapid-response certified technical support partner immediately.'
    ],
    quote: 'When critical systems fail, swift, methodical troubleshooting trumps panic every single time.',
    conclusion:
      'Having a pre-established emergency protocol and a trusted service partner on speed dial cuts response downtime from days down to mere hours.'
  },
]

// Helper function to get featured posts (for homepage)
export const getFeaturedPosts = (limit: number = 3): BlogPost[] => {
  return allBlogPosts.slice(0, limit)
}

// Helper function to get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return allBlogPosts.find((post) => post.slug === slug)
}

// Helper function to get posts by category
export const getPostsByCategory = (category: string): BlogPost[] => {
  return allBlogPosts.filter((post) => post.category === category)
}