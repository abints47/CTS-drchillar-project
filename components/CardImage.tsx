import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardProps {
  title?: React.ReactNode
  description?: string
  badgeText?: string
  imageSrc?: string
  buttonLink?: string
}

export default function CardImage({
  title = "Design systems meetup",
  description = "A practical talk on component APIs, accessibility, and shipping faster.",
  badgeText = "Featured",
  imageSrc = "https://picsum.photos/id/1/200/300",
  buttonLink = "/Products",
}: CardProps) {
  return (
    <Card className="group relative mx-auto flex flex-col justify-between h-full w-full max-w-sm overflow-hidden pt-0 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
      {/* Top Section Wrapper */}
      <div>
        {/* Container for the image */}
        <div className="relative aspect-video w-full overflow-hidden bg-muted transform-gpu">
          <Image
            src={imageSrc}
            alt={typeof title === "string" ? title : "Card Image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
          />
          {/* Scoped dark overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none transition-opacity duration-300 group-hover:bg-black/10" />
        </div>

        <CardHeader className="pt-4">
          {badgeText && (
            <CardAction>
              <Badge variant="secondary">{badgeText}</Badge>
            </CardAction>
          )}
          <CardTitle className="font-sans text-[20px] font-bold leading-7 text-zinc-800 text-center tracking-tight whitespace-pre-line">
            {title}
          </CardTitle>
          <CardDescription className="mt-3 font-sans text-[15px] leading-5 text-[#5F6B7A] text-center">
            {description}
          </CardDescription>
        </CardHeader>
      </div>

      {/* Pinned Bottom Section */}
      <CardFooter className="pt-4">
        <Link href={buttonLink} className="w-full">
          <Button className="h-9 w-full rounded-md bg-[#10B981] text-white text-base font-semibold hover:bg-[#0EA271] transition-colors">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}