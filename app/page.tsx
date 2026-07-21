import ParallaxCarousel from '@/components/ParallaxCarousel'
import Card from "@/components/Card"


const IMAGES = [
  {
    id: '1',
    src: 'https://picsum.photos/id/1018/1000/600',
    alt: 'Mountains',
    title: 'Majestic Peaks',
    description: 'Explore breathtaking mountain heights across the ridge.',
  },
  {
    id: '2',
    src: 'https://picsum.photos/id/1015/1000/600',
    alt: 'River',
    title: 'Serene Rivers',
    description: 'Calm waters winding through dense ancient forests.',
  },
  {
    id: '3',
    src: 'https://picsum.photos/id/1019/1000/600',
    alt: 'Nature',
    title: 'Deep Wilderness',
    description: 'Experience untouched nature at its finest moment.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Full screen carousel hero */}
      <ParallaxCarousel slides={IMAGES} />

      {/* Page content below carousel */}
      <section id="about" className="py-16 px-6 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#00b85c]">Chiller Maintenance Company in<br/> UAE</h2>
          <p className="text-muted-foreground text-lg leading-7 pt-3">
            At <span className='text-[#00b85c]'> CTS - Chiller Technical Services L.L.C</span>, we combine years of expertise with modern technology to deliver exceptional cooling solutions. Our focus is on reliability, innovation, and customer satisfaction — making us the trusted partner for businesses across the region.
          </p>
        </div>

        <div className="bg-card border rounded-2xl p-8 shadow-sm space-y-4">
          <h3 className="text-3xl font-extrabold text-center text-[#00b85c]">What We Offer</h3>
          <p className="leading-relaxed text-muted-foreground">
           At <span className='text-[#00b85c]'> CTS - Chiller Technical Services L.L.C</span>, we provide top-notch solutions for all your cooling needs. From premium trading options to expert maintenance,
           
            flexible rentals, and dedicated after-sales services — our mission is to keep you cool, comfortable, and satisfied year-round.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Featured Events & Highlights</h3>
          <Card />
        </div>
      </section>
    </>
  )
}