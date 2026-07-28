import Image from 'next/image';
import Link from 'next/link';

interface ServicesHighlightProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  bgImageSrc?: string;
}

export default function ServicesHighlight({
  title = "Your Trusted Partner in HVAC & Cooling Solutions",
  description = "Whether it's routine maintenance, emergency repairs, or complete cooling system installations, CTS delivers reliable engineering services that keep your operations running smoothly.",
  ctaText = "Explore Our Services",
  ctaLink = "/Services",
  bgImageSrc = "/images/AMC.jpg",
}: ServicesHighlightProps) {
  return (
    <section className="relative w-full h-[70vh] min-h-125 flex items-center justify-center overflow-hidden">
      {/* Full-Width Background Image & Clear Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageSrc}
          alt="Services Highlight Background"
          fill
          priority
          className="w-full h-full object-cover object-center"
        />
        {/* Transparent Emerald Tint Overlay (Image remains clearly visible underneath) */}
        <div className="absolute inset-0 bg-emerald-950/20 backdrop-blur-[2px]" />
      </div>

      {/* Content Container with AOS Animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <div className="max-w-2xl">

          {/* Main Heading */}
          <h2 
            data-aos="fade-up" 
            data-aos-duration="800"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-200 tracking-tight leading-tight mb-6 drop-shadow-md"
          >
            {title}
          </h2>

          {/* Description */}
          <p 
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="200"
            className="text-base sm:text-lg text-slate-50 mb-8 leading-relaxed drop-shadow"
          >
            {description}
          </p>

          {/* Call to Action (CTA) */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="400"
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href={ctaLink}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-lg shadow-emerald-950/40 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            >
              {ctaText}
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}