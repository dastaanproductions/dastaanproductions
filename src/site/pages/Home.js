import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaPlay,
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
import HeroReel from '../components/HeroReel';
import Manifesto from '../components/Manifesto';
import ServiceList from '../components/ServiceList';
import Interlude from '../components/Interlude';
import { reels, thumbUrl } from '../data/videos';
import { clients, team, photos, services, contact } from '../data/siteInfo';
import { scrollToId } from '../scroll';

import stillTungsten from '../../Components/aboutImage.jpg';
import stillTeal from '../../Components/homeImage1.jpg';
import stillSunset from '../../Components/homeImage.jpg';
import behindTheLens from '../../Components/cinematic/behind-the-lens.jpg';
import dastaanPortrait from '../../Components/cinematic/dastaan-portrait.jpg';

const socialIcons = { instagram: FaInstagram, facebook: FaFacebook, behance: FaBehance };

const heroFrames = [
  { src: stillTungsten, origin: '30% 55%' },
  { src: stillTeal, origin: '55% 40%' },
  { src: stillSunset, origin: '65% 50%' },
];

// Preview stills for the service rows, in the same order as `services`.
const servicePreviews = [stillTeal, thumbUrl('o3gUbbbYLvI'), thumbUrl(reels[3].id), photos[5].src];

const tilts = [-3, 2, -2, 3, -2, 2, -3, 2];
const lifts = [12, -6, 10, -8, 12, -6, 10, -6];

// Lets the hero's "projector light" follow the pointer.
function trackLight(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--lx', `${((e.clientX - r.left) / r.width) * 100}%`);
  e.currentTarget.style.setProperty('--ly', `${((e.clientY - r.top) / r.height) * 100}%`);
}

// Quiet section heading: a credit-style overline and a serif title.
function Heading({ over, children, intro, center = false }) {
  return (
    <Reveal className={`heading ${center ? 'center-text' : ''}`}>
      <p className="overline">{over}</p>
      <h2>{children}</h2>
      {intro && <p className="heading-intro">{intro}</p>}
    </Reveal>
  );
}

function Hero() {
  return (
    <section id="home" className="hero" onPointerMove={trackLight}>
      <HeroReel frames={heroFrames} />
      <div className="hero-grade" aria-hidden="true" />
      <div className="hero-light" aria-hidden="true" />
      <div className="hero-inner">
        <p className="overline fade-up d1">Video · Podcast · Photography</p>
        <h1 className="hero-title">
          <span className="line">
            <span>Stories worth watching,</span>
          </span>{' '}
          <span className="line">
            <em>cut with care.</em>
          </span>
        </h1>
        <div className="hero-foot fade-up d3">
          <div className="hero-actions">
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
          <p className="hero-status">
            <span className="rec-dot" aria-hidden="true" />
            Open for new projects
            <Timecode className="hero-tc" />
          </p>
        </div>
      </div>
      <span className="scroll-cue" aria-hidden="true" />
    </section>
  );
}

function Statement() {
  return (
    <section className="statement" aria-label="About Dastaan Productions">
      <p className="overline">Dastaan Productions</p>
      <Manifesto text="A video, podcast and photography studio for creators, brands and agencies. We turn raw footage into stories people finish, cut for rhythm, for feeling, for the moment your audience leans in." />
    </section>
  );
}

function Clients() {
  const loop = [...clients, ...clients, ...clients, ...clients];
  return (
    <section id="clients" className="clients">
      <p className="overline center-text">Trusted by</p>
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
      <Heading over="Selected work" intro="Recent reels and shorts. Tap one to watch it.">
        Work that <em>speaks for itself.</em>
      </Heading>
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
        <Link to="/work" className="text-link">
          View long-form work <FaArrowRight aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}

function Services() {
  const items = services.map((s, i) => ({ ...s, preview: servicePreviews[i] }));
  return (
    <section id="services" className="services">
      <Heading over="What we make">
        Clean, story-first work <em>in every format.</em>
      </Heading>
      <Reveal>
        <ServiceList items={items} />
      </Reveal>
    </section>
  );
}

function Process() {
  const steps = [
    { n: 'I', title: 'Brief', text: 'Tell us about the project, share the footage, and we agree on style, length and deadline.' },
    { n: 'II', title: 'First cut', text: 'You receive a first version to react to, and you leave notes right on the timeline.' },
    { n: 'III', title: 'Polish & delivery', text: 'We refine until it is right, then deliver in every format and size you need.' },
  ];
  return (
    <section id="process" className="process">
      <Heading over="No friction, from day one">
        A simple process, <em>handled end to end.</em>
      </Heading>
      <Reveal as="ol" className="process-track">
        {steps.map((s, i) => (
          <li key={s.n} className="step" style={{ '--i': i }}>
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
      <Heading over="Photography" intro="Product, portrait, street and wedding photography.">
        Through the <em>lens.</em>
      </Heading>
      <div className="photo-grid">
        {photos.map((p, i) => (
          <Reveal key={p.src} className={`photo photo-${i + 1}`} delay={(i % 4) * 110}>
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
      <Heading over="The team">
        The people <em>behind it.</em>
      </Heading>
      <div className="team-grid">
        {team.map((m, i) => (
          <Reveal
            as="a"
            key={m.name}
            className="member"
            delay={i * 90}
            href={m.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${m.name} (opens Instagram)`}
          >
            <span className="member-photo">
              <img src={m.img} alt="" loading="lazy" />
            </span>
            <h3>{m.name}</h3>
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
      <Heading over="Ready when you are" center>
        Have a story to tell? <em>Let's cut it together.</em>
      </Heading>
      <Reveal className="contact-body">
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
          <textarea id="c-message" name="message" rows="4" value={form.message} onChange={update} required />
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
      <Statement />
      <Interlude
        image={behindTheLens}
        alt="A photographer checks his camera on a misty roadside"
        position="50% 42%"
      >
        <p className="overline">Behind the lens</p>
        <p className="interlude-line">
          Every frame starts with <em>someone paying attention.</em>
        </p>
      </Interlude>
      <Reels onOpen={setPlaying} />
      <Clients />
      <Services />
      <Process />
      <Photography />
      <Team />
      <Interlude
        image={dastaanPortrait}
        alt="Black-and-white portrait of a smiling boy holding a cane"
        variant="split"
        position="50% 30%"
      >
        <p className="interlude-urdu" lang="ur" dir="rtl">
          داستان
        </p>
        <p className="interlude-line">
          Dastaan means <em>story.</em>
        </p>
        <p className="interlude-sub">Everyone has one. We help you tell yours.</p>
      </Interlude>
      <Contact />
      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </main>
  );
}
