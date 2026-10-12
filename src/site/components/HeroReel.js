import React, { useEffect, useState } from 'react';

// Full-bleed background that slowly crossfades between stills, each one
// drifting in like a slow camera push. Holds on the first frame for
// visitors who prefer reduced motion.
//
// A frame with `fit: 'portrait'` is a tall photo: on wide screens it is shown
// sharp on the right over a soft, blurred copy of itself instead of being
// stretched (and blurred) across the whole width.
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
          className={`hero-frame ${f.fit === 'portrait' ? 'portrait' : ''} ${i === active ? 'on' : ''}`}
          style={{ '--origin': f.origin || 'center' }}
        >
          {f.fit === 'portrait' && <img className="hero-backdrop" src={f.src} alt="" />}
          <img className="hero-still" src={f.src} alt="" style={{ objectPosition: f.position || 'center' }} />
        </div>
      ))}
    </div>
  );
}
