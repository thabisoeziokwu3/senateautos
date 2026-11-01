import { Reveal, Notice } from '@/components/Bits';
import ServiceList from '@/components/ServiceList';
import { SERVICES, FAQ } from '@/lib/site';
export const metadata = { title: 'Car Sourcing, Brokerage & Rentals in Abuja | Services', description: 'Senate Autos sources brand new, Nigerian used, tokunbo and luxury cars through verified dealerships in Abuja and across Nigeria. Also car rentals and automotive content creation.', alternates: { canonical: '/services/' } };
const IM = ['gle-street', 'showroom-lineup-1', 'mansion-fleet', 'cullinan-urus', 'sl-huracan', 'maybach', 'yard-lineup', 'ferrari-sl', 'huracan'];
const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
export default function Services() {
  return (<section style={{ paddingTop: 140 }}><div className="wrap">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <h1 style={{ marginBottom: 10 }}>Our services</h1>
    <ServiceList items={SERVICES} imgs={IM} />
    <p style={{ marginTop: 20, fontSize: '.9rem' }}>Delivery is handled with our affiliate dealerships.</p>
    <Reveal><h2 style={{ marginTop: 60 }}>Questions</h2><div className="faq">{FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></Reveal>
    <div style={{ marginTop: 50 }}><Notice /></div>
  </div></section>);
}
