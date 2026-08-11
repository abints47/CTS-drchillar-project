export interface BlogPost {
  slug: string
  category: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
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
  },
  {
    slug: 'chiller-installation-best-practices',
    category: 'Installation',
    title: 'Chiller Installation: Best Practices & Safety Standards',
    excerpt:
      'Step-by-step guide to proper chiller installation, including safety protocols, optimal positioning, and commissioning procedures.',
    image: 'https://images.unsplash.com/vector-1775025870074-892399cbf787?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRpcHxlbnwwfHwwfHx8MA%3D%3D',
    date: 'Jan 17, 2027',
    readTime: '7 min read',
  },
  {
    slug: 'cold-storage-solutions',
    category: 'Cold Storage',
    title: 'Advanced Cold Storage Solutions for Food & Pharma',
    excerpt:
      'Specialized cold room design and temperature control strategies for food storage, pharmaceutical facilities, and perishable goods management.',
    image: 'https://images.unsplash.com/vector-1759248692212-bebd37ced013?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGFpciUyMGNvbmRpdGlvbmluZ3xlbnwwfHwwfHx8MA%3D%3D',
    date: 'Jan 16, 2027',
    readTime: '5 min read',
  },
  {
    slug: 'emergency-chiller-repair-guide',
    category: 'Support',
    title: 'Emergency Chiller Repair: What to Do When Systems Fail',
    excerpt:
      'Immediate troubleshooting steps, emergency protocols, and how to minimize downtime when your industrial chiller fails unexpectedly.',
    image: 'https://images.unsplash.com/vector-1765799632810-0e69642d51b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGRpZXNlbCUyMGZ1ZWx8ZW58MHx8MHx8fDA%3D',
    date: 'Jan 15, 2027',
    readTime: '4 min read',
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