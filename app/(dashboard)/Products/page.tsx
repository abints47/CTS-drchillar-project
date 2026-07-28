// app/products/page.tsx
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProductItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

const products: ProductItem[] = [
  {
    title: "Water Chillers, Coolers & Heat Pumps",
    description: "High-performance chillers for all industrial and commercial cooling needs.",
    image: "/images/products/water-chilers.jpg",
    href: "/Products/water-chillers",
  },
  {
    title: "Cold Rooms & Ice Block Machines",
    description: "Energy-efficient cold storage rooms for fresh and frozen products.",
    image: "/images/asethetic-ac.webp",
    href: "/Products/cold-rooms",
  },
  {
    title: "Heat Exchangers & Cooling Towers",
    description: "Reliable heat exchangers for efficient thermal energy transfer.",
    image: "/images/pipe.jpg",
    href: "/Products/heat-exchangers",
  },
  {
    title: "A/C Units & Air Curtains",
    description: "Efficient air conditioning systems for residential and industrial applications.",
    image: "/images/air-conditioner.jpg",
    href: "/Products/ac-units",
  },
];

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, href, index }) => {
  return (
    <Link
      href={href}
      data-aos="fade-up"
      data-aos-delay={index * 80}
      data-aos-duration="500"
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col group cursor-pointer"
    >
      <div className="relative w-full h-55 overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col grow justify-between text-center space-y-2.5">
        <h3 className="font-semibold text-xl text-[#183153] leading-snug group-hover:text-[#00b96b] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-[#6b7280] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default function ProductsPage() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white pt-25 flex flex-col">
      <main className="grow relative">

        {/* Expanded Sticky Hero Banner with Parallax Scroll Effect */}
        <section className="sticky top-25 z-0 w-full h-95 sm:h-110 flex items-center justify-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="/images/air-conditioner.jpg"
              alt="HVAC outdoor AC condenser unit background"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div 
            data-aos="zoom-in" 
            data-aos-duration="600"
            className="relative z-10 max-w-300 w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-3"
          >
            {/* Simple SEO-friendly semantic heading tags */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Products
            </h1>
            <p className="text-gray-200 text-sm sm:text-base max-w-lg font-normal">
              Explore our comprehensive catalog of commercial and industrial climate control infrastructure solutions.
            </p>

            <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2">
              <Link
                href="/"
                aria-label="Back to home page"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm border border-white/20 transition-all shadow-sm"
              >
                Back
              </Link>
            </div>
          </div>
        </section>

        {/* Clean Content Section sliding smoothly over the sticky hero background */}
        <section className="relative z-10 w-full bg-[#fafafa] py-16 px-4 sm:px-6 lg:px-8 rounded-t-3xl shadow-[0_-15px_30px_rgba(0,0,0,0.08)]">
          <div className="max-w-300 mx-auto space-y-14">
            
            {/* Intro Header Section */}
            <header data-aos="fade-up" data-aos-duration="500" className="max-w-175 mx-auto text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#183153] tracking-tight">
                Our Products
              </h2>
              <p className="text-[#6b7280] text-base sm:text-lg leading-relaxed">
                Explore our full range of high-quality cooling and HVAC solutions — engineered for performance, reliability, and long-term efficiency.
              </p>
            </header>

            {/* Simple, Clean Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  href={product.href}
                  index={index}
                />
              ))}
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}