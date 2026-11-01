'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Unveil } from './Bits';
export default function GalleryGrid({ items }) {
  const [s, setS] = useState(null);
  const cur = items.find(i => i[0] === s);
  return (<>
    <div className="gal">{items.map(([f, alt, w, h]) => (
      <Unveil key={f}>
        <motion.img layoutId={f} src={`/images/${f}.jpeg`} alt={alt} width={w} height={h} loading="lazy" onClick={() => setS(f)} data-cur="1" style={{ cursor: 'zoom-in' }} />
        <figcaption>Partner dealership vehicle. Not owned by Senate Autos.</figcaption>
      </Unveil>))}
    </div>
    <AnimatePresence>
      {cur && <motion.div className="lb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setS(null)}>
        <motion.img layoutId={cur[0]} src={`/images/${cur[0]}.jpeg`} alt={cur[1]} />
        <p>{cur[1]}. Not owned by Senate Autos.</p>
      </motion.div>}
    </AnimatePresence>
  </>);
}
