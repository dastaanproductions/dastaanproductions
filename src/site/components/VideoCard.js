import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { thumbUrl, thumbFallback } from '../data/videos';

// One clickable video tile.
//  - Shows the YouTube thumbnail.
//  - On hover it swaps to the GIF preview at  public/previews/<slug>.gif
//    (if that file does not exist, the thumbnail simply stays).
export default function VideoCard({ video, variant, onOpen, style, decorative = false }) {
  const [thumb, setThumb] = useState(thumbUrl(video.id));
  const [hover, setHover] = useState(false);
  const [gifOk, setGifOk] = useState(true);

  const gif = `${process.env.PUBLIC_URL}/previews/${video.slug}.gif`;
  const showGif = hover && gifOk;

  const handleError = () => {
    if (showGif) {
      setGifOk(false);
    } else if (thumb !== thumbFallback(video.id)) {
      setThumb(thumbFallback(video.id));
    }
  };

  return (
    <button
      type="button"
      className={`vcard ${variant}`}
      style={style}
      onClick={() => onOpen({ ...video, vertical: variant === 'reel' })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      aria-label={`Play ${video.title}`}
      tabIndex={decorative ? -1 : 0}
    >
      <img src={showGif ? gif : thumb} alt="" loading="lazy" onError={handleError} />
      <span className="vcard-shade" />
      <span className="vcard-play">
        <FaPlay aria-hidden="true" />
      </span>
      <span className="vcard-title">{video.title}</span>
    </button>
  );
}
