import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardProps {
  title?: React.ReactNode
  description?: string
  imageSrc?: string
  buttonLink?: string
}

export default function CardImage({
  title = "Design systems meetup",
  description = "A practical talk on component APIs, accessibility, and shipping faster.",
  imageSrc = "https://picsum.photos/id/1/600/400",
  buttonLink = "/Products",
}: CardProps) {
  return (
    <Card
      className="
        group
        flex
        h-full
        w-full
        flex-col
        justify-between
        overflow-hidden
        p-0
        pt-0
        rounded-xl
        border
        border-slate-200/80
        dark:border-slate-800
        bg-white
        dark:bg-slate-900/60
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        hover:border-emerald-500/40
      "
    >
      {/* Top Section Wrapper */}
      <div>
        {/* Full-width Image spanning flush to top/sides */}
        <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image
            src={imageSrc}
            alt={typeof title === "string" ? title : "Card Image"}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-transparent" />
        </div>

        {/* Content Section */}
        <CardHeader className="space-y-1.5 px-4 pt-4 pb-2">
          <CardTitle className="text-center text-sm sm:text-base font-bold leading-snug text-gray-800 dark:text-white line-clamp-2 tracking-tight">
            {title}
          </CardTitle>

          <CardDescription className="text-center text-xs leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2 font-light">
            {description}
          </CardDescription>
        </CardHeader>
      </div>

      {/* Button Section */}
      <CardFooter className="px-4 pb-4 pt-2">
        <Link href={buttonLink} className="w-full">
          <Button
            className="
              h-9
              w-full
              rounded-lg
              bg-emerald-600
              text-xs
              font-semibold
              text-white
              hover:bg-emerald-700
              dark:bg-emerald-500
              dark:hover:bg-emerald-600
              transition-colors
              shadow-xs
            "
          >
            View More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}