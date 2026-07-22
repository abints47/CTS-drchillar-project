// components/Card.tsx
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
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {items.map((item) => (
          <CardImage
            key={item.id}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            buttonLink={item.buttonLink ?? "/Products"}
          />
        ))}
      </div>
    </section>
  )
}