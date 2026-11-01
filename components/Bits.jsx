'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { DISCLAIMER, SITE } from '@/lib/site';

export function Reveal({ children, delay = 0, as = 'div' }) {
  const M = motion[as];
  return <M initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}>{as === 'h2' && typeof children === 'string' ? <Scr>{children}</Scr> : children}</M>;
}
export function Notice() {
  return <aside className="notice" role="note"><strong>Important notice</strong>{DISCLAIMER}</aside>;
}
/* Curtain drapes lift off each photo as it scrolls into view */
export function Unveil({ children, className }) {
  return (
    <figure className={className} style={{ position: 'relative' }}>
      {children}
      <motion.div className="drape" initial={{ scaleX: 1 }} whileInView={{ scaleX: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.3, ease: [0.77, 0, 0.18, 1] }} aria-hidden="true" />
    </figure>
  );
}
export function WhatsApp() {
  if (!SITE.whatsapp) return null;
  return <a className="wa" href={`https://wa.me/${SITE.phone.replace('+', '')}?text=Hello%20Senate%20Autos%2C%20I%27m%20interested%20in%20sourcing%20a%20car`} target="_blank" rel="noopener noreferrer">WhatsApp us</a>;
}

export function Pic({ src, alt, ratio = '3/4' }) {
  return <div className="pic" style={{ aspectRatio: ratio }}><Image src={`/images/${src}.jpeg`} alt={alt} fill sizes="(max-width:700px) 90vw, 420px" style={{ objectFit: 'cover' }} /></div>;
}
/* Parallax photo that is unveiled by a sliding black shutter */
export function Para({ src, alt, ratio = '3/4', speed = 50 }) {
  const r = useRef(null);
  const { scrollYProgress } = useScroll({ target: r, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);
  return (
    <div ref={r} className="pic" style={{ aspectRatio: ratio }}>
      <motion.div style={{ y, position: 'absolute', inset: `-${speed + 10}px 0` }}><Image src={`/images/${src}.jpeg`} alt={alt} fill sizes="(max-width:700px) 90vw, 480px" style={{ objectFit: 'cover' }} /></motion.div>
      <motion.i className="mask" initial={{ scaleX: 1 }} whileInView={{ scaleX: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1] }} aria-hidden="true" />
    </div>
  );
}

/* Text decode effect: real text is in the HTML, the scramble plays once when scrolled into view */
export function Scr({ children }) {
  const [t, setT] = useState(children);
  const r = useRef(null), ran = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || ran.current) return;
      ran.current = true; let f = 0;
      const id = setInterval(() => { f++; setT([...children].map((c, i) => (c === ' ' || i < f / 2 ? c : '#/01X<>'[Math.floor(Math.random() * 7)])).join('')); if (f > children.length * 2) { clearInterval(id); setT(children); } }, 28);
    }, { threshold: 0.6 });
    io.observe(r.current);
    return () => io.disconnect();
  }, [children]);
  return <span ref={r}>{t}</span>;
}
export function Mag({ children }) {
  const r = useRef(null), x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 14 }), sy = useSpring(y, { stiffness: 220, damping: 14 });
  return <motion.span ref={r} style={{ x: sx, y: sy, display: 'inline-block' }} onMouseMove={e => { const b = r.current.getBoundingClientRect(); x.set((e.clientX - b.left - b.width / 2) * 0.4); y.set((e.clientY - b.top - b.height / 2) * 0.4); }} onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.span>;
}
function W({ w, p, a, b }) { const o = useTransform(p, [a, b], [0.14, 1]); return <motion.span style={{ opacity: o }}>{w} </motion.span>; }
export function Words({ text }) {
  const r = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: r, offset: ['start 0.85', 'end 0.5'] });
  const ws = text.split(' ');
  return <p ref={r} className="stmt">{ws.map((w, i) => <W key={i} w={w} p={p} a={i / ws.length} b={(i + 1) / ws.length} />)}</p>;
}
