import React, { useRef } from 'react';
import useScrollProgress from '../useScrollProgress';

// A cinematic pause between sections: one photograph that drifts as you scroll.
//  - "full": the photo fills the frame (fading into black beside the words on wide screens)
//  - "split": the photograph on one side, the words on the other
export default function Interlude({ image, alt = '', position = 'center', variant = 'full', children }) {
  const ref = useRef(null);
  useScrollProgress(ref);

  return (
    <section className={`interlude interlude-${variant}`} ref={ref}>
      <div className="interlude-frame">
        <img src={image} alt={alt} loading="lazy" style={{ objectPosition: position }} />
      </div>
      <div className="interlude-text">{children}</div>
    </section>
  );
}
