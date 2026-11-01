import { Reveal, Para } from '@/components/Bits';
export const metadata = { title: 'About Senate Autos | Youth-Led Car Broker in Abuja', description: 'Senate Autos is a youth-led car broker working with verified dealerships across Nigeria, mainly Abuja, and building the face of Nigeria’s youth automotive movement.', alternates: { canonical: '/about/' } };
export default function About() {
  return (<section style={{ paddingTop: 140 }}><div className="wrap">
    <h1 style={{ marginBottom: 20 }}>About Senate Autos</h1>
    <p className="lead">A young car broker in Abuja, sourcing cars across Nigeria and creating automotive content.</p>
    <div className="split" style={{ marginTop: 40 }}><div>
      <Reveal><h2>What we do</h2><p>Car sourcing and brokerage through verified dealerships across Nigeria, mainly Abuja.</p></Reveal>
      <Reveal><h2>Automotive content creation</h2><p>Interviews, reviews and lessons that make cars easy to understand, plus content and themes for events and dealerships.</p></Reveal>
      <Reveal><h2>Where we are going</h2><p>To carry the face of Nigeria’s youth automotive movement.</p></Reveal>
    </div><Para src="sl-huracan" alt="Mercedes-AMG SL and Lamborghini Huracán side by side in a partner showroom" ratio="4/5" /></div>
  </div></section>);
}
