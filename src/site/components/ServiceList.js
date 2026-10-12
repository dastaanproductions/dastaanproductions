import React, { useEffect, useRef, useState } from 'react';

// Services as a quiet list of titles. On devices with a mouse, a preview
// still floats after the cursor and changes with the row you're on.
export default function ServiceList({ items }) {
  const listRef = useRef(null);
  const previewRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(-1);

  // Ease the preview toward the pointer so it trails behind slightly.
  useEffect(() => {
    if (hovered < 0) return undefined;
    let frame;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.14;
      pos.current.y += (target.current.y - pos.current.y) * 0.14;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [hovered]);

  const onMove = (e) => {
    const r = listRef.current.getBoundingClientRect();
    target.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    if (hovered < 0) pos.current = { ...target.current };
  };

  return (
    <div className="service-list" ref={listRef} onPointerMove={onMove} onPointerLeave={() => setHovered(-1)}>
      {items.map((s, i) => (
        <div key={s.title} className="service-row" onPointerEnter={() => setHovered(i)}>
          <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
      <div className={`service-preview ${hovered >= 0 ? 'show' : ''}`} ref={previewRef} aria-hidden="true">
        {items.map((s, i) => (
          <img key={s.title} src={s.preview} alt="" className={i === hovered ? 'on' : ''} loading="lazy" />
        ))}
      </div>
    </div>
  );
}
