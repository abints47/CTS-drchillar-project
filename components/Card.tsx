import CardImage from "@/components/CardImage"

// Updated array with direct, reliable photo URLs from Unsplash and Picsum
const EVENTS = [
  {
    id: 1,
    title: "Water Chillers, Coolers &\n Heat Pumps",
    description: "High-performance chillers for all your cooling needs.",
    badgeText: "",
    imageSrc: "/images/products/water-chilers.jpg",
  },
  {
    id: 2,
    title: "Heat Exchange and Colling\n Towers",
    description: "Reliable heat exchange to optimize energy transfer processes.",
    badgeText: "",
    imageSrc: "/images/products/heatExchange.webp",
  },
  {
    id: 3,
    title: "A/C Units & Air Curtains",
    description: "Efficient air conditioning systems designed for comfort and reliability",
    badgeText: "",
    imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
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