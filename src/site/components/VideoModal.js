import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

// Pop-up YouTube player. Close with the X, the Esc key, or by clicking outside.
export default function VideoModal({ video, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!video) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={video.title} onClick={onClose}>
      <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label="Close video">
        <FaTimes />
      </button>
      <div className={`modal-box ${video.vertical ? 'vertical' : 'wide'}`} onClick={(e) => e.stopPropagation()}>
        <iframe
          title={video.title}
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
      <p className="modal-title">{video.title}</p>
    </div>
  );
}
