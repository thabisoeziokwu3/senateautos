'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
const pad = n => String(n).padStart(2, '0');
/* The vault: scrolling swaps the car in a framed viewport with a wipe */
export default function Showcase({ items }) {
  const ref = useRef(null);
  const [i, setI] = useState(0);
  const n = items.length;
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(p, 'change', v => setI(Math.min(n - 1, Math.floor(v * n))));
  return (
    <section ref={ref} className="vault" style={{ height: `${n * 55 + 60}vh` }} aria-label="Cars our partner dealerships carry">
      <div className="vt">
        <div className="vimgs">
          {items.map(([f, alt], k) => (
            <motion.div key={f} className="vimg" initial={false} animate={{ clipPath: k <= i ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }} transition={{ duration: 1, ease: [0.77, 0, 0.18, 1] }}>
              <motion.div style={{ position: 'absolute', inset: 0 }} animate={{ scale: k === i ? 1 : 1.2 }} transition={{ duration: 1.8, ease: 'easeOut' }}>
                <Image src={`/images/${f}.jpeg`} alt={alt} fill sizes="(max-width:800px) 80vw, 40vw" style={{ objectFit: 'cover' }} />
              </motion.div>
            </motion.div>
          ))}
          <b className="c1" /><b className="c2" />
        </div>
        <div className="vhud">
          <div className="vnum">{pad(i + 1)}<small>/ {pad(n)}</small></div>
          <h2>Cars we can source</h2>
          <p className="vcap">{items[i][1].split(/ (?:in|at|under|on|parked) /)[0]}</p>
          <div className="vrail">{items.map((_, k) => <button key={k} type="button" aria-label={`Show car ${k + 1}`} className={k <= i ? 'on' : ''} onClick={() => { const r = ref.current; const top = r.getBoundingClientRect().top + window.scrollY; window.scrollTo({ top: top + ((k + 0.5) / n) * (r.offsetHeight - innerHeight), behavior: 'smooth' }); }} />)}</div>
          <p className="vnote">Partner dealership cars. Not owned by Senate Autos.</p>
          <a className="vskip" href="#after-vault">Skip car showcase ↓</a>
        </div>
      </div>
    </section>
  );
}
