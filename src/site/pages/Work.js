import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import { categories } from '../data/videos';
import { scrollToId } from '../scroll';

export default function Work() {
  const [playing, setPlaying] = useState(null);
  const shown = categories.filter((c) => c.videos.length > 0);

  const jump = (id) => scrollToId(`cat-${id}`);

  return (
    <main className="work-page">
      <section className="page-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <p className="eyebrow fade-up d1">Long-form work</p>
          <h1 className="fade-up d2">
            Every story, <em>every format.</em>
          </h1>
          <p className="lead fade-up d3">Full-length edits, grouped by the kind of project. Pick a category to jump to it.</p>
          <div className="pills fade-up d4">
            {shown.map((c, i) => (
              <button
                key={c.id}
                type="button"
                className={`pill ${i === 0 ? 'pill-on' : ''}`}
                onClick={() => jump(c.id)}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {shown.map((c) => (
        <section key={c.id} id={`cat-${c.id}`} className="category">
          <Reveal className="cat-head">
            <h2>
              {c.title} <em>{c.accent}</em>
            </h2>
            <p>{c.blurb}</p>
          </Reveal>
          <div className="wide-grid">
            {c.videos.map((v, i) => (
              <Reveal key={v.slug} delay={(i % 3) * 90} className="wide-item">
                <VideoCard video={v} variant="wide" onOpen={setPlaying} />
                <h3>{v.title}</h3>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      <section className="cta-band">
        <Reveal className="section-head">
          <h2>
            Have a story to tell? <em>Let's cut it together.</em>
          </h2>
          <Link to="/" state={{ scrollTo: 'contact' }} className="btn btn-amber">Start a project</Link>
        </Reveal>
      </section>

      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </main>
  );
}
