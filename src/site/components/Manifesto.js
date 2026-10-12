import React, { useEffect, useRef } from 'react';

// A statement whose words light up one by one as it scrolls through the screen.
export default function Manifesto({ text }) {
  const ref = useRef(null);
  const words = text.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const spans = el.querySelectorAll('.mw');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      spans.forEach((s) => s.classList.add('lit'));
      return undefined;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top reaches 85% of the screen, 1 when its bottom reaches 45%
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.4)));
      const lit = Math.round(p * spans.length);
      spans.forEach((s, i) => s.classList.toggle('lit', i < lit));
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
  }, [text]);

  return (
    <p className="manifesto" ref={ref}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="mw">{w}</span>{' '}
        </React.Fragment>
      ))}
    </p>
  );
}
