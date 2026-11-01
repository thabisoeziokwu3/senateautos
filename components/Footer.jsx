import Link from 'next/link';
import { SITE } from '@/lib/site';
export default function Footer() {
  return (
    <footer><div className="wrap">
      <div className="grid">
        <div><h3>Senate Autos</h3><p>Car sourcing, automotive brokerage and automotive content creation in Abuja and across Nigeria.</p></div>
        <div><h3>Pages</h3><p><Link href="/about/">About</Link><br /><Link href="/services/">Services</Link><br /><Link href="/gallery/">Gallery</Link><br /><Link href="/contact/">Contact</Link></p></div>
        <div><h3>Reach us</h3><p><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br /><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a><br /><a href={`https://www.snapchat.com/add/${SITE.snapchat}`} target="_blank" rel="noopener noreferrer">Snapchat: @{SITE.snapchat}</a></p></div>
      </div>
      <p style={{ fontSize: '.8rem' }}>Vehicles shown on this site belong to verified partner dealerships, not Senate Autos. © {new Date().getFullYear()} Senate Autos.</p>
    <svg className="mega" viewBox="0 0 1000 110" aria-hidden="true"><text x="500" y="90" textAnchor="middle" textLength="970" lengthAdjust="spacingAndGlyphs">SENATE AUTOS</text></svg></div></footer>
  );
}
