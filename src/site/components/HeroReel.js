import React, { useEffect, useState } from 'react';

// Full-bleed background that slowly crossfades between stills, each one
// drifting in like a slow camera push. Holds on the first frame for
// visitors who prefer reduced motion.
export default function HeroReel({ frames, hold = 6500 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || frames.length < 2) return undefined;
    const id = setInterval(() => {
      if (!document.hidden) setActive((i) => (i + 1) % frames.length);
    }, hold);
    return () => clearInterval(id);
  }, [frames.length, hold]);

  return (
    <div className="hero-reel" aria-hidden="true">
      {frames.map((f, i) => (
        <div
          key={f.src}
          className={`hero-frame ${i === active ? 'on' : ''}`}
          style={{ '--origin': f.origin || 'center' }}
        >
          <img src={f.src} alt="" />
        </div>
      ))}
    </div>
  );
}
