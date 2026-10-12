import React, { useEffect, useState } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Reveal from './Reveal';

// Client reviews, one at a time in large type, crossfading every few seconds.
// Pauses while hovered or focused, and for visitors who prefer reduced motion.
export default function Reviews({ items, hold = 8000 }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || paused || count < 2) return undefined;
    const id = setInterval(() => {
      if (!document.hidden) setActive((i) => (i + 1) % count);
    }, hold);
    return () => clearInterval(id);
  }, [paused, count, hold]);

  const go = (step) => setActive((i) => (i + step + count) % count);

  return (
    <section
      id="reviews"
      className="reviews"
      aria-roledescription="carousel"
      aria-label="Client reviews"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Reveal className="reviews-head">
        <p className="overline overline-pair">
          <span>Client reviews · Upwork</span>
          <span className="urdu" lang="ur" dir="rtl">
            تبصرے
          </span>
        </p>
      </Reveal>

      <div className="reviews-stage">
        {items.map((r, i) => (
          <figure
            key={i}
            className={`review ${i === active ? 'on' : ''}`}
            aria-hidden={i === active ? undefined : 'true'}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            <span className="review-mark" aria-hidden="true">
              “
            </span>
            <blockquote>{r.quote}</blockquote>
            <figcaption>
              {r.rating && (
                <span className="review-stars" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <FaStar key={s} aria-hidden="true" className={s < Math.round(r.rating) ? 'lit' : ''} />
                  ))}
                </span>
              )}
              {r.client && <span className="review-client">{r.client}</span>}
              {r.project && <span className="review-project">{r.project}</span>}
            </figcaption>
          </figure>
        ))}
      </div>

      {count > 1 && (
        <div className="reviews-controls">
          <button type="button" onClick={() => go(-1)} aria-label="Previous review">
            <FaArrowLeft aria-hidden="true" />
          </button>
          <span className="reviews-count" aria-live="polite">
            {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
          <button type="button" onClick={() => go(1)} aria-label="Next review">
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
