import React, { useEffect, useRef } from 'react';

// A cinematic pause between sections: one photograph that drifts as you scroll.
//  - "full": full-bleed frame with the words set over it
//  - "split": the photograph on one side, the words on the other
export default function Interlude({ image, alt = '', position = 'center', variant = 'full', children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!el || reduce) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < 0 || r.top > vh) return;
      // -1 as the frame enters from below, 1 as it leaves at the top
      const p = (vh - r.top) / (vh + r.height) * 2 - 1;
      el.style.setProperty('--p', p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className={`interlude interlude-${variant}`} ref={ref}>
      <div className="interlude-frame">
        <img src={image} alt={alt} loading="lazy" style={{ objectPosition: position }} />
      </div>
      <div className="interlude-text">{children}</div>
    </section>
  );
}
