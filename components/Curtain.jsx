'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/* Boot sequence: system lines type out, then the black tiles dissolve in a scattered pattern to reveal the site. */
const LINES = ['SENATE AUTOS // SYSTEM START', 'VERIFYING DEALERSHIP NETWORK', 'ABUJA 9.0765°N 7.3986°E', 'ACCESS GRANTED'];
export default function Intro() {
  const [step, setStep] = useState(0), [go, setGo] = useState(false), [done, setDone] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem('sa')) return setDone(true);
    sessionStorage.setItem('sa', '1');
    document.body.style.overflow = 'hidden';
    const ts = [0, 1, 2, 3].map(i => setTimeout(() => setStep(i + 1), 200 + i * 300));
    ts.push(setTimeout(() => setGo(true), 1500));
    ts.push(setTimeout(() => { setDone(true); document.body.style.overflow = ''; delete document.documentElement.dataset.intro; }, 2700));
    return () => { ts.forEach(clearTimeout); document.body.style.overflow = ''; };
  }, []);
  if (done) return null;
  return (
    <div className="intro-ov" aria-hidden="true" onClick={() => setGo(true)} style={{ pointerEvents: go ? 'none' : 'auto', cursor: 'pointer' }}>
      <div className="grid96">
        {Array.from({ length: 96 }, (_, i) => <motion.i key={i} animate={{ opacity: go ? 0 : 1 }} transition={{ duration: 0.3, delay: go ? (((i * 47) % 96) / 96) * 0.9 : 0 }} />)}
      </div>
      <motion.div className="boot" animate={{ opacity: go ? 0 : 1, scale: go ? 1.1 : 1 }} transition={{ duration: 0.5 }}>
        <img src="/logo.jpeg" alt="" />
        {LINES.map((l, i) => <div key={l} style={{ opacity: step > i ? 1 : 0, transition: 'opacity .3s' }}>{i === 3 ? <b>{l}</b> : l}</div>)}
        <div className="skip">Tap to skip</div>
        <div className="pbar"><motion.i animate={{ scaleX: step / 4 }} transition={{ duration: 0.45 }} /></div>
      </motion.div>
    </div>
  );
}
