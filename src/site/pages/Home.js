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
} from 'react-icons/fa';
import Reveal from '../components/Reveal';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import { reels } from '../data/videos';
import { clients, team, photos, services, contact } from '../data/siteInfo';

const serviceIcons = { film: FaFilm, mic: FaMicrophone, phone: FaMobileAlt, camera: FaCamera };
const socialIcons = { instagram: FaInstagram, facebook: FaFacebook, behance: FaBehance };

const tilts = [-4, 2, -2, 3, -3, 2, -3, 2];
const lifts = [14, -6, 10, -10, 12, -8, 10, -6];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <div className="badge fade-up d1">
          <span className="dot" aria-hidden="true" />
          Open for new projects
        </div>
        <h1 className="fade-up d2">
          Stories worth watching, <em>cut with care.</em>
        </h1>
        <p className="lead fade-up d3">
          Dastaan Productions is a video, podcast and photography studio for creators, brands and agencies. We turn
          raw footage into stories people finish.
        </p>
        <div className="hero-actions fade-up d4">
          <button type="button" className="btn btn-amber" onClick={() => scrollToId('work')}>
            <FaPlay aria-hidden="true" /> See the work
          </button>
          <a
            className="btn btn-dark"
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" /> Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const loop = [...clients, ...clients, ...clients, ...clients];
  return (
    <section id="clients" className="clients">
      <Reveal>
        <p className="clients-label">Trusted by brands and teams who care about their story</p>
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
      <Reveal className="section-head">
        <h2>
          Work that <em>speaks for itself.</em>
        </h2>
        <p>Recent reels and shorts. Tap one to watch it.</p>
      </Reveal>
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
                style={{ '--tilt': `${tilts[n % tilts.length]}deg`, '--lift': `${lifts[n % lifts.length]}px` }}
              />
            );
          })}
        </div>
      </div>
      <Reveal className="center">
        <Link to="/work" className="btn btn-dark">View long-form work →</Link>
      </Reveal>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services">
      <Reveal className="section-head">
        <h2>
          What we <em>make.</em>
        </h2>
        <p>Clean, story-first work across the formats your audience watches.</p>
      </Reveal>
      <div className="card-row">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon];
          return (
            <Reveal key={s.title} className="card" delay={i * 90}>
              <Icon className="card-icon" aria-hidden="true" />
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
      <Reveal className="section-head">
        <p className="eyebrow">No friction, from day one</p>
        <h2>
          A simple process, <em>handled end to end.</em>
        </h2>
      </Reveal>
      <div className="card-row">
        {steps.map((s, i) => (
          <Reveal key={s.n} className="card" delay={i * 90}>
            <span className="step-num">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Photography() {
  return (
    <section id="photography" className="photography">
      <Reveal className="section-head">
        <h2>
          Through the <em>lens.</em>
        </h2>
        <p>Product, portrait, street and wedding photography.</p>
      </Reveal>
      <div className="photo-grid">
        {photos.map((p, i) => (
          <Reveal key={p.src} className="photo" delay={(i % 4) * 80}>
            <img src={p.src} alt={p.caption} loading="lazy" />
            <span className="photo-caption">{p.caption}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="team">
      <Reveal className="section-head">
        <h2>
          The people <em>behind it.</em>
        </h2>
      </Reveal>
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
            <img src={m.img} alt="" loading="lazy" />
            <div className="member-info">
              <h3>{m.name}</h3>
              <p>{m.role}</p>
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
      <Reveal className="section-head">
        <p className="eyebrow">Ready when you are</p>
        <h2>
          Have a story to tell? <em>Let's cut it together.</em>
        </h2>
      </Reveal>
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
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label htmlFor="c-name">Name</label>
          <input id="c-name" name="name" type="text" value={form.name} onChange={update} required />
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" value={form.email} onChange={update} required />
          <label htmlFor="c-message">Tell us about your project</label>
          <textarea id="c-message" name="message" rows="5" value={form.message} onChange={update} required />
          <button type="submit" className="btn btn-amber">Send message</button>
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
