import ParallaxCarousel from '@/components/ParallaxCarousel'
import Card from "@/components/Card"


const IMAGES = [
  {
    id: '1',
    src: '/images/asethetic-ac.jpg',
    alt: 'Mountains',
    title: 'Water Chillers, Coolers & Heat Pumps',
    description: 'High-efficiency and water chillers designed for reliable colling of industrial and commercial appliances',
  },
  {
    id: '2',
    src: '/images/air-conditioner.jpg',
    alt: 'River',
    title: 'A/C Units & Air Curtains',
    description: 'Robust air conditioning system for residential, commercial and industrial enviornments.',
  },
  {
    id: '3',
    src: '/images/pipe.jpg',
    alt: 'Nature',
    title: 'Chilled Water Pipeline & Flushing',
    description: 'Design, installation and flushing of chilled water pipelines for efficient system performance.',
  },
  {
    id: '4',
    src: '/images/acc.jpg',
    alt: 'Nature',
    title: 'A/C, Chiller & Genset Rentals ',
    description: 'Short and long-term rental solutions including A/C units, water chillers and diesel genertors. ',
  },
  {
    id: '5',
    src: '/images/ac-reparing.jpg',
    alt: 'Nature',
    title: 'A/C, Chiller & Coldroom Maintenance ',
    description: 'Preventive and Corrective maintanance Services for air conditioning, chiller and cold room systems.',
  },
  {
    id: '6',
    src: '/images/ac-curtains.jpg',
    alt: 'Nature',
    title: 'A/C, Units & Air Curtains ',
    description: 'Robust Air Conditioning system for residential, commercial and industrial enviornments.',
  },
  {
    id: '7',
    src: '/images/AMC.jpg',
    alt: 'Nature',
    title: 'AMC ',
    description: 'Annuval Maintanance Contract providing priority support and long-term services Coverage. ',
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