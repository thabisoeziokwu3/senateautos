'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const L = (t, d) => [...t].map((c, i) => <span key={i} className="rise" style={{ '--d': `${d + i * 0.09}s` }}>{c}</span>);
export default function Hero() {
  const { scrollY } = useScroll();
  const sc = useTransform(scrollY, [0, 800], [1.05, 1.35]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);
  const ax = useMotionValue(0), ay = useMotionValue(0);
  const mx = useSpring(ax, { stiffness: 50, damping: 18 }), my = useSpring(ay, { stiffness: 50, damping: 18 });
  const ry = useTransform(mx, [-0.5, 0.5], [-9, 9]), rx = useTransform(my, [-0.5, 0.5], [7, -7]), tx = useTransform(mx, [-0.5, 0.5], [-26, 26]);
  const [t, setT] = useState('');
  useEffect(() => { const f = () => setT(new Date().toLocaleTimeString('en-GB', { timeZone: 'Africa/Lagos' })); f(); const i = setInterval(f, 1000); return () => clearInterval(i); }, []);
  return (
    <section className="hero" onMouseMove={e => { ax.set(e.clientX / innerWidth - 0.5); ay.set(e.clientY / innerHeight - 0.5); }}>
      <motion.video style={{ scale: sc }} className="hv" autoPlay muted loop playsInline disablePictureInPicture disableRemotePlayback tabIndex={-1} preload="metadata" poster="/images/showroom-lineup-1.jpeg" aria-hidden="true"><source src="/hero.mp4" type="video/mp4" /></motion.video>
      <div className="hshade" /><div className="grain-lines" />
      <div className="hud" aria-hidden="true">
        <i /><i /><i /><i />
        <span className="tr">Abuja {t} WAT</span>
        <span className="bl"><u />Scroll</span>
        <svg className="ring" viewBox="0 0 120 120"><defs><path id="rc" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs><text><textPath href="#rc" textLength="285" lengthAdjust="spacing">VERIFIED DEALERSHIPS • CAR SOURCING • NIGERIA • </textPath></text></svg>
      </div>
      <div className="hero-stack">
        <motion.div className="wrap hero-in" style={{ opacity: fade, rotateX: rx, rotateY: ry, x: tx }}>
          <p className="eyebrow rise" style={{ '--d': '0.1s' }}>Car broker / Abuja, Nigeria</p>
          <h1>{L('SENATE', 0.2)}<br /><span className="sub">{L('AUTOS', 0.8)}</span><span className="sr"> | Car broker and car sourcing in Abuja, Nigeria</span></h1>
          <p className="tag rise" style={{ '--d': '1.5s' }}>We source your car through verified dealerships across Nigeria.</p>
        </motion.div>
        <div className="rise btns" style={{ '--d': '1.8s' }}>
          <Link className="btn solid" href="/contact/">Find my car</Link>
          <Link className="btn" href="/gallery/">See the cars</Link>
        </div>
      </div>
    </section>
  );
}
