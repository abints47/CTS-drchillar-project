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
        rounded-2xl
        border
        border-slate-200/80
        dark:border-slate-800
        bg-white
        dark:bg-slate-900/60
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:shadow-xl
        hover:border-emerald-500/40
      "
    >
      {/* Top Section Wrapper */}
      <div>
        {/* Larger Image Banner Container */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image
            src={imageSrc}
            alt={typeof title === "string" ? title : "Card Image"}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-transparent" />
        </div>

        {/* Content Section */}
        <CardHeader className="space-y-2 px-6 pt-5 pb-3">
          <CardTitle className="text-center text-lg sm:text-xl font-bold leading-snug text-slate-800 dark:text-white line-clamp-2 tracking-tight">
            {title}
          </CardTitle>

          <CardDescription className="text-center text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3 font-light">
            {description}
          </CardDescription>
        </CardHeader>
      </div>

      {/* Button Section */}
      <CardFooter className="px-28 pb-2 pt-2">  
        <Link href={buttonLink} className="w-full">
          <Button
            className="
              h-11
              w-full
              rounded-xl
              bg-emerald-600
              text-sm
              font-semibold
              text-white
              hover:bg-emerald-700
              dark:bg-emerald-500
              dark:hover:bg-emerald-600
              transition-colors
              shadow-sm
            "
          >
            View More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}