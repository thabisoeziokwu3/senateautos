import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import { Reveal, Notice, Pic, Mag } from '@/components/Bits';

export const metadata = { title: { absolute: 'Senate Autos | Car Sourcing & Car Broker in Abuja, Nigeria' }, alternates: { canonical: '/' } };
const CARS = [
  ['cullinan-urus', 'Rolls-Royce Cullinan and white Lamborghini Urus in a partner showroom'],
  ['showroom-lineup-1', 'Lamborghini Huracán, Mercedes-AMG SL and Ferrari Purosangue in a partner showroom'],
  ['night-yard', 'Yellow Lamborghini Urus, Mercedes-AMG G-Class and AMG GT at night'],
  ['maybach', 'Black Mercedes S-Class at a partner dealership'],
  ['ferrari-sl', 'Ferrari Purosangue and Mercedes-AMG SL 63 in a partner showroom'],
  ['luxury-coupe', 'Black Rolls-Royce coupe with carbon bonnet at a partner dealership'],
  ['huracan', 'White Lamborghini Huracán Spyder in a partner showroom'],
  ['sports-car', 'Black Audi R8 on an Abuja bridge at sunset'],
  ['carport-lexus', 'Mercedes-AMG GT 4-Door and Lexus LX under a carport'],
];
const PILLARS = [
  ['01', 'Source', 'New, used, tokunbo and luxury cars, found through verified dealerships.', 'night-yard', 'Luxury cars at night from a verified partner dealership'],
  ['02', 'Rent', 'Limited rental cars available through our affiliates.', 'mansion-fleet', 'Mercedes S-Class and BMW available through affiliate dealerships'],
  ['03', 'Create', 'Automotive content creation for beginners, events and dealerships.', 'merc-door', 'Mercedes-Benz at night, automotive content creation'],
];
const STEPS = [['Tell us the car', 'Brand, budget, new or used.'], ['We search', 'Our verified dealership network, mainly Abuja.'], ['You get the car', 'Delivered with our affiliate dealerships.']];
const words = ['Car Sourcing', 'Brand New', 'Tokunbo', 'Nigerian Used', 'Luxury & Exotic', 'Car Rentals', 'Automotive Content Creation'];

export default function Home() {
  return (<>
    <Hero />
    <div className="marquee" aria-hidden="true"><div>{[...words, ...words, ...words, ...words].map((w, i) => <span key={i}>{w} &nbsp;/&nbsp; </span>)}</div></div>
    <section><div className="wrap">
      <Reveal as="h2">Senate Autos in three words</Reveal>
      <div className="pillars">{PILLARS.map(([n, t, d, img, alt], i) => (
        <Reveal key={t} delay={i * 0.1}>
          <Link href="/services/" className="pill"><Pic src={img} alt={alt} ratio="4/5" /><span className="pn">{n}</span><h3>{t}</h3><p>{d}</p><b>→</b></Link>
        </Reveal>))}
      </div>
    </div></section>
    <Showcase items={CARS} />
    <section id="after-vault"><div className="wrap">
      <Reveal as="h2">How it works</Reveal>
      <ol className="steps">{STEPS.map(([t, d], i) => <li key={t}><Reveal delay={i * 0.1}><span>0{i + 1}</span><h3>{t}</h3><p>{d}</p></Reveal></li>)}</ol>
    </div></section>
    <section className="cta">
      <Image src="/images/showroom-lineup-3.jpeg" alt="Mercedes-AMG SL and Ferrari in a partner showroom" fill sizes="100vw" style={{ objectFit: 'cover' }} />
      <div className="cta-shade" />
      <div className="wrap" style={{ position: 'relative' }}>
        <Reveal as="h2">Tell us the car you want.</Reveal>
        <Reveal><Mag><Link className="btn solid" href="/contact/">Contact Senate Autos</Link></Mag></Reveal>
      </div>
    </section>
    <section style={{ paddingBottom: 40 }}><div className="wrap"><Notice /></div></section>
  </>);
}
