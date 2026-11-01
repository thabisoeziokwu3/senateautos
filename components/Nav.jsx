'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const L = [['/', 'Home'], ['/about/', 'About'], ['/services/', 'Services'], ['/gallery/', 'Gallery'], ['/contact/', 'Contact']];
export default function Nav() {
  const p = usePathname();
  return (
    <header className="nav">
      <Link href="/" className="brand" aria-label="Senate Autos home"><img src="/logo.jpeg" alt="Senate Autos logo" width="38" height="34" style={{ height: 34, width: 'auto' }} /><span>SENATE AUTOS</span></Link>
      <nav aria-label="Main"><ul>{L.map(([h, t]) => <li key={h}><Link href={h} className={p === h ? 'on' : ''}>{t}</Link></li>)}</ul></nav>
    </header>
  );
}
