import { useEffect } from 'react';

// Sets a CSS variable --p on the element while it's on screen:
// -1 as it enters from the bottom, 0 when centred, 1 as it leaves at the top.
// Stays at 0 for visitors who prefer reduced motion.
export default function useScrollProgress(ref) {
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
      const p = ((vh - r.top) / (vh + r.height)) * 2 - 1;
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
  }, [ref]);
}
