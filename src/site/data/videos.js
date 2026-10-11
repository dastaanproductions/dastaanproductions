// ─────────────────────────────────────────────────────────────
//  YOUR VIDEOS  —  this is the only file you edit to change videos
// ─────────────────────────────────────────────────────────────
//  Each video needs:
//    slug  – a short lowercase name (letters, numbers, dashes). It is also
//            the name of the hover-preview GIF:  public/previews/<slug>.gif
//    title – the text shown on the tile
//    id    – the YouTube video id (the part after  youtu.be/  or  v=  or  /shorts/)
//
//  To add a video: copy one line, change the three values, save.
//  To hide a video: delete its line (or put // in front of it).
// ─────────────────────────────────────────────────────────────

// Vertical videos shown in the moving strip on the homepage
export const reels = [
  { slug: 'academy', title: 'Academy', id: 'qaHZKryWD28' },
  { slug: 'badle-custom-tailor', title: 'Badle Custom Tailor', id: 'uuO7zBGnN_I' },
  { slug: 'badle-mens-wear', title: 'Badle Mens Wear', id: 'LQ0M6UVlbnc' },
  { slug: 'famous-wolf', title: 'Famous Wolf', id: 'KxyMWSQurgM' },
  { slug: 'growth', title: 'Growth', id: 'HpVxlJacp7A' },
  { slug: 'hg-marketing', title: 'HG Marketing', id: 'Kkhe1WKu4o4' },
  { slug: 'property-tour', title: 'Property Tour', id: 'lr-6BtWsmeI' },
  { slug: 'talo', title: 'Talo', id: 'IUaiMgfhep4' },
];

// Widescreen videos shown on the "Long-form work" page.
// A category with no videos is hidden automatically.
export const categories = [
  {
    id: 'podcast',
    title: 'Podcast',
    accent: 'episodes',
    blurb: 'Video podcasts cut for YouTube, with clean audio and sharp pacing.',
    videos: [
      { slug: 'podcast-ep-65', title: 'Episode 65: Mind Therapy', id: 'o3gUbbbYLvI' },
      { slug: 'podcast-ep-66', title: 'Episode 66: Power of Our Will', id: 'Q3awfJzaY3o' },
      { slug: 'podcast-intro-ceo', title: 'Podcast Intro: CEO', id: 'qJsTn6ejwVM' },
    ],
  },
  {
    id: 'faceless',
    title: 'Faceless',
    accent: 'videos',
    blurb: 'Voiceover-driven videos with stock footage, motion graphics and strong storytelling.',
    videos: [
      { slug: 'lunchly-scam', title: 'The Embarrassing Downfall of Lunchly Scam!', id: 'm8TfI2NCllo' },
      { slug: 'crime-niche', title: 'Crime Niche', id: 'GQ-Gc0EQbX8' },
      // Waiting for the YouTube link. Replace PASTE_ID and remove the // to show it:
      // { slug: 'strategic-intelligence', title: '10 Signs You Have Strategic Intelligence', id: 'PASTE_ID' },
    ],
  },
  {
    id: 'automation',
    title: 'YouTube Automation',
    accent: 'channels',
    blurb: 'Channel-ready edits delivered on a steady schedule.',
    videos: [],
  },
  {
    id: 'wedding',
    title: 'Wedding',
    accent: 'films',
    blurb: 'Cinematic highlight films and full ceremony edits.',
    videos: [],
  },
];

// Thumbnails come straight from YouTube.
export const thumbUrl = (id) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
export const thumbFallback = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
