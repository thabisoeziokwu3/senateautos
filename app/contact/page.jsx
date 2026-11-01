import { SITE } from '@/lib/site';
import { Reveal, Para } from '@/components/Bits';
export const metadata = { title: 'Contact Senate Autos | Car Broker in Abuja', description: 'Contact Senate Autos by email, phone or Snapchat to source a car or collaborate on automotive content creation in Abuja, Nigeria.', alternates: { canonical: '/contact/' } };
export default function Contact() {
  return (<section style={{ paddingTop: 140, minHeight: '80vh' }}><div className="wrap">
    <h1 style={{ fontSize: 'clamp(2.4rem,7vw,4.5rem)', marginBottom: 30 }}>Contact us</h1>
    <div style={{ maxWidth: 380, marginBottom: 30 }}><Para src="ferrari-sl" ratio="4/3" alt="Ferrari and Mercedes-AMG SL inside a partner dealership showroom" /></div>
    <Reveal><p>Car, rental or collaboration? Reach out.</p></Reveal>
    <div className="grid" style={{ marginTop: 30 }}>
      <a className="card" href={`mailto:${SITE.email}`}><h2 style={{ fontSize: '1.2rem', color: 'var(--gold)' }}>Email</h2><p>{SITE.email}</p></a>
      <a className="card" href={`tel:${SITE.phone}`}><h2 style={{ fontSize: '1.2rem', color: 'var(--gold)' }}>Phone</h2><p>{SITE.phoneDisplay}</p></a>
      <a className="card" href={`https://www.snapchat.com/add/${SITE.snapchat}`} target="_blank" rel="noopener noreferrer"><h2 style={{ fontSize: '1.2rem', color: 'var(--gold)' }}>Snapchat</h2><p>@{SITE.snapchat}</p></a>
    </div>
  </div></section>);
}
