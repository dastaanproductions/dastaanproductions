import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaPlay,
  FaFilm,
  FaMicrophone,
  FaMobileAlt,
  FaCamera,
  FaInstagram,
  FaFacebook,
  FaBehance,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from 'react-icons/fa';
import Reveal from '../components/Reveal';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import Timecode from '../components/Timecode';
import { reels } from '../data/videos';
import { clients, team, photos, services, contact } from '../data/siteInfo';
import { scrollToId } from '../scroll';

const serviceIcons = { film: FaFilm, mic: FaMicrophone, phone: FaMobileAlt, camera: FaCamera };
const socialIcons = { instagram: FaInstagram, facebook: FaFacebook, behance: FaBehance };

const tilts = [-4, 2, -2, 3, -3, 2, -3, 2];
const lifts = [14, -6, 10, -10, 12, -8, 10, -6];

// Lets a card's glow follow the pointer.
function trackSpotlight(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}

// Section heading styled as a numbered chapter of the edit.
function Chapter({ n, label, title, intro }) {
  return (
    <Reveal className="chapter-head">
      <p className="chapter-label">
        <span className="chapter-num">CH.{n}</span>
        <span>{label}</span>
      </p>
      <div className="chapter-body">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </Reveal>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="viewfinder" aria-hidden="true">
        <span className="vf-corner tl" />
        <span className="vf-corner tr" />
        <span className="vf-corner bl" />
        <span className="vf-corner br" />
        <span className="vf-rec">
          <span className="rec-dot" /> REC
        </span>
        <Timecode className="vf-tc" />
        <span className="vf-meta">16:9 · 25 FPS</span>
      </div>
      <div className="hero-inner">
        <p className="badge fade-up d1">
          <span className="dot" aria-hidden="true" />
          Open for new projects
        </p>
        <h1 className="hero-title">
          <span className="line">
            <span>Stories worth</span>
          </span>{' '}
          <span className="line">
            <span>watching,</span>
          </span>{' '}
          <span className="line">
            <em>cut with care.</em>
          </span>
        </h1>
        <div className="hero-foot">
          <p className="lead fade-up d3">
            Dastaan Productions is a video, podcast and photography studio for creators, brands and agencies. We turn
            raw footage into stories people finish.
          </p>
          <div className="hero-actions fade-up d4">
            <button type="button" className="btn btn-primary" onClick={() => scrollToId('work')}>
              <FaPlay aria-hidden="true" /> See the work
            </button>
            <a
              className="btn btn-ghost"
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" /> Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const words = services.map((s) => s.title);
  const row = [...words, ...words];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...row, ...row].map((w, i) => (
          <span key={i} className={i % 2 ? 'ticker-word outline' : 'ticker-word'}>
            {w}
            <i className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Clients() {
  const loop = [...clients, ...clients, ...clients, ...clients];
  return (
    <section id="clients" className="clients">
      <Reveal>
        <p className="mono-label clients-label">Trusted by brands and teams who care about their story</p>
      </Reveal>
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((c, i) => (
            <a
              key={`${c.name}-${i}`}
              className="client-tile"
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={i >= clients.length ? 'true' : undefined}
              tabIndex={i >= clients.length ? -1 : 0}
            >
              <img src={c.img} alt={i < clients.length ? c.name : ''} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reels({ onOpen }) {
  const loop = [...reels, ...reels];
  return (
    <section id="work" className="work">
      <Chapter
        n="01"
        label="Selected work"
        title={
          <>
            Work that <em>speaks for itself.</em>
          </>
        }
        intro="Recent reels and shorts. Tap one to watch it."
      />
      <div className="strip">
        <div className="strip-track">
          {loop.map((v, i) => {
            const n = i % reels.length;
            return (
              <VideoCard
                key={`${v.slug}-${i}`}
                video={v}
                variant="reel"
                onOpen={onOpen}
                decorative={i >= reels.length}
                index={n + 1}
                style={{ '--tilt': `${tilts[n % tilts.length]}deg`, '--lift': `${lifts[n % lifts.length]}px` }}
              />
            );
          })}
        </div>
      </div>
      <Reveal className="center">
        <Link to="/work" className="btn btn-ghost">
          View long-form work <FaArrowRight aria-hidden="true" className="btn-arrow" />
        </Link>
      </Reveal>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services">
      <Chapter
        n="02"
        label="Services"
        title={
          <>
            What we <em>make.</em>
          </>
        }
        intro="Clean, story-first work across the formats your audience watches."
      />
      <div className="service-grid">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon];
          return (
            <Reveal key={s.title} className="card spot" delay={i * 90} onPointerMove={trackSpotlight}>
              <div className="card-top">
                <Icon className="card-icon" aria-hidden="true" />
                <span className="mono-label">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: '01', title: 'Brief', text: 'Tell us about the project, share the footage, and we agree on style, length and deadline.' },
    { n: '02', title: 'First cut', text: 'You receive a first version to react to, and you leave notes right on the timeline.' },
    { n: '03', title: 'Polish & delivery', text: 'We refine until it is right, then deliver in every format and size you need.' },
  ];
  return (
    <section id="process" className="process">
      <Chapter
        n="03"
        label="No friction, from day one"
        title={
          <>
            A simple process, <em>handled end to end.</em>
          </>
        }
      />
      <Reveal as="ol" className="process-track">
        {steps.map((s, i) => (
          <li key={s.n} className="step" style={{ '--i': i }}>
            <span className="keyframe" aria-hidden="true" />
            <span className="step-num">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </Reveal>
    </section>
  );
}

function Photography() {
  return (
    <section id="photography" className="photography">
      <Chapter
        n="04"
        label="Photography"
        title={
          <>
            Through the <em>lens.</em>
          </>
        }
        intro="Product, portrait, street and wedding photography."
      />
      <div className="photo-grid">
        {photos.map((p, i) => (
          <Reveal key={p.src} className={`photo photo-${i + 1}`} delay={(i % 4) * 80}>
            <img src={p.src} alt={p.caption} loading="lazy" />
            <span className="photo-caption">
              <span className="mono-label">{String(i + 1).padStart(2, '0')}</span>
              {p.caption}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="team">
      <Chapter
        n="05"
        label="Team"
        title={
          <>
            The people <em>behind it.</em>
          </>
        }
      />
      <div className="team-grid">
        {team.map((m, i) => (
          <Reveal
            as="a"
            key={m.name}
            className="member"
            delay={i * 80}
            href={m.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${m.name}, ${m.role} (opens Instagram)`}
          >
            <span className="member-photo">
              <img src={m.img} alt="" loading="lazy" />
            </span>
            <div className="member-info">
              <h3>{m.name}</h3>
              <p className="mono-label">{m.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens a ready-to-send Gmail draft (same behaviour as the old site).
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${subject}&body=${body}`,
      '_blank',
      'noopener'
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-glow" aria-hidden="true" />
      <Chapter
        n="06"
        label="Ready when you are"
        title={
          <>
            Have a story to tell? <em>Let's cut it together.</em>
          </>
        }
      />
      <Reveal className="contact-card">
        <div className="contact-info">
          <a className="info-row" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp aria-hidden="true" />
            <span>
              <strong>WhatsApp</strong>
              {contact.phoneDisplay}
            </span>
          </a>
          <a className="info-row" href={`mailto:${contact.email}`}>
            <FaEnvelope aria-hidden="true" />
            <span>
              <strong>Email</strong>
              {contact.email}
            </span>
          </a>
          <a className="info-row" href={`tel:${contact.phoneDisplay.replace(/[^+\d]/g, '')}`}>
            <FaPhoneAlt aria-hidden="true" />
            <span>
              <strong>Phone</strong>
              {contact.phoneDisplay}
            </span>
          </a>
          <a className="info-row" href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt aria-hidden="true" />
            <span>
              <strong>Location</strong>
              View on Google Maps
            </span>
          </a>
          <div className="socials">
            {contact.socials.map((s) => {
              const Icon = socialIcons[s.key];
              return (
                <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label htmlFor="c-name">Name</label>
          <input id="c-name" name="name" type="text" autoComplete="name" value={form.name} onChange={update} required />
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} required />
          <label htmlFor="c-message">Tell us about your project</label>
          <textarea id="c-message" name="message" rows="5" value={form.message} onChange={update} required />
          <button type="submit" className="btn btn-primary">
            Send message <FaArrowRight aria-hidden="true" className="btn-arrow" />
          </button>
        </form>
      </Reveal>
    </section>
  );
}

export default function Home() {
  const [playing, setPlaying] = useState(null);
  return (
    <main>
      <Hero />
      <Ticker />
      <Clients />
      <Reels onOpen={setPlaying} />
      <Services />
      <Process />
      <Photography />
      <Team />
      <Contact />
      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </main>
  );
}
