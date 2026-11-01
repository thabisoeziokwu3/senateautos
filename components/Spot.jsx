'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
/* Scroll progress line only. Native cursor and native scrolling are kept for easy navigation. */
export default function Spot() {
  const { scrollYProgress } = useScroll();
  const s = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return <motion.div className="prog" style={{ scaleX: s }} />;
}
