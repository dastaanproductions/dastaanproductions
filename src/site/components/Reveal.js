import React from 'react';
import { useInView } from 'react-intersection-observer';

// Fades and slides its content in the first time it scrolls into view.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
