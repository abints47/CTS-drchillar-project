import CardImage from "@/components/CardImage"

// Updated array with direct, reliable photo URLs from Unsplash and Picsum
const EVENTS = [
  {
    id: 1,
    title: "Design systems meetup",
    description: "A practical talk on component APIs, accessibility, and shipping faster.",
    badgeText: "Featured",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Next.js Conf 2026",
    description: "Deep dive into App Router, Turbopack, and Server Actions performance.",
    badgeText: "Popular",
    imageSrc: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Tailwind CSS v4 Workshop",
    description: "Master zero-config dynamic CSS variables and theme customization.",
    badgeText: "New",
    imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "TypeScript Deep Dive",
    description: "Advanced generic constraints, mapped types, and type safety patterns.",
    badgeText: "Workshop",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Accessibility Summit",
    description: "Building inclusive, screen-reader friendly web interfaces.",
    badgeText: "Live",
    imageSrc: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "AI & UI Interfaces",
    description: "Generative component patterns and dynamic layout engines.",
    badgeText: "Trending",
    imageSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
  },
]

export default function EventsPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {EVENTS.map((event) => (
          <CardImage
            key={event.id}
            title={event.title}
            description={event.description}
            badgeText={event.badgeText}
            imageSrc={event.imageSrc}
          />
        ))}
      </div>
    </section>
  )
}