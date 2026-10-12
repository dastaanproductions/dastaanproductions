import React, { useEffect, useRef } from 'react';
import { formatTimecode } from './Timecode';

// The whole page "plays" like a 3-minute edit: a red playhead runs along the
// bottom of the nav as you scroll, with an editing-style timecode readout.
const RUNTIME_SECONDS = 180;

export default function ScrollTimeline() {
  const fillRef = useRef(null);
  const tcRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${p})`;
      if (tcRef.current) tcRef.current.textContent = formatTimecode(p * RUNTIME_SECONDS);
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
    <div className="timeline" aria-hidden="true">
      <span className="timeline-fill" ref={fillRef} />
      <span className="timeline-tc" ref={tcRef}>
        00:00:00:00
      </span>
    </div>
  );
}
