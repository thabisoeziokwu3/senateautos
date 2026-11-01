'use client';
import { motion } from 'framer-motion';
/* Page change: five black shutters slide away in sequence */
export default function Template({ children }) {
  return (<>
    <div className="shut" aria-hidden="true">{[0, 1, 2, 3, 4].map(i => <motion.i key={i} initial={{ y: 0 }} animate={{ y: '-101%' }} transition={{ duration: 0.5, ease: [0.77, 0, 0.18, 1], delay: i * 0.04 }} />)}</div>
    <motion.main id="main" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.main>
  </>);
}
