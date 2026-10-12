import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const FPS = 25;
const pad = (n) => String(n).padStart(2, '0');

// Seconds -> HH:MM:SS:FF, the way an edit timeline shows time.
export function formatTimecode(seconds) {
  const totalFrames = Math.floor(seconds * FPS);
  const ff = totalFrames % FPS;
  const s = Math.floor(totalFrames / FPS);
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(ff)}`;
}

// A running "recording" timecode for the hero viewfinder. It only ticks while
// on screen, and stays still for visitors who prefer reduced motion.
export default function Timecode({ className = '' }) {
  const textRef = useRef(null);
  const { ref, inView } = useInView();

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!inView || reduce) return undefined;
    const start = performance.now();
    const id = setInterval(() => {
      if (textRef.current) textRef.current.textContent = formatTimecode((performance.now() - start) / 1000);
    }, 1000 / FPS);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <span ref={ref} className={className} aria-hidden="true">
      <span ref={textRef}>00:00:00:00</span>
    </span>
  );
}
