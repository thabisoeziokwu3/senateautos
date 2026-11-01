'use client';
import { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
const pad = n => String(n).padStart(2, '0');
/* Editorial service index: hovering a row pulls a car photo that trails the cursor */
export default function ServiceList({ items, imgs }) {
  const [a, setA] = useState(-1);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 24 }), sy = useSpring(y, { stiffness: 180, damping: 24 });
  return (
    <div onMouseMove={e => { x.set(e.clientX); y.set(e.clientY); }} onMouseLeave={() => setA(-1)}>
      <ul className="sl">
        {items.map((s, i) => (
          <li key={s.t} className={a === i ? 'on' : ''} onMouseEnter={() => setA(i)}>
            <span className="n">{pad(i + 1)}</span><h3>{s.t}</h3><p>{s.d}</p>
          </li>
        ))}
      </ul>
      <motion.div className="sl-pop" style={{ x: sx, y: sy }} animate={{ opacity: a >= 0 ? 1 : 0, scale: a >= 0 ? 1 : 0.7 }} transition={{ duration: 0.3 }} aria-hidden="true">
        {a >= 0 && <img key={a} src={`/images/${imgs[a % imgs.length]}.jpeg`} alt="" />}
      </motion.div>
    </div>
  );
}
