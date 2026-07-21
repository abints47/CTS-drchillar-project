import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardProps {
  title?: string
  description?: string
  badgeText?: string
  imageSrc?: string
}

export default function CardImage({
  title = "Design systems meetup",
  description = "A practical talk on component APIs, accessibility, and shipping faster.",
  badgeText = "Featured",
  // External image hosted directly on Lorem Picsum CDN
  imageSrc = "https://picsum.photos/id/1/200/300",
}: CardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden pt-0 shadow-sm transition-shadow hover:shadow-md">
      {/* Container for the external image */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        {/* Scoped dark overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      <CardHeader className="pt-4">
        <CardAction>
          <Badge variant="secondary">{badgeText}</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="space-y-2 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  )
}