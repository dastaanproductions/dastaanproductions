// ─────────────────────────────────────────────────────────────
//  CLIENT REVIEWS (screenshots from Upwork)
// ─────────────────────────────────────────────────────────────
//  Each review needs:
//    image – the screenshot, saved in src/Components/reviews/
//    width – the screenshot's width in pixels (keeps every card at the
//            same text size; most Upwork crops are 1568 wide)
//    alt   – what the screenshot says, for screen readers and search
//
//  The reviews section stays hidden while this list is empty.
// ─────────────────────────────────────────────────────────────

import videoEditor from '../../Components/reviews/youtube-video-editor.png';
import faceless from '../../Components/reviews/faceless-youtube-automation.png';
import thumbnails from '../../Components/reviews/thumbnail-designer.png';
import conference from '../../Components/reviews/conference-video-opening.png';

export const reviews = [
  {
    image: videoEditor,
    width: 1568,
    alt: 'Upwork review, 5 stars, Professional YouTube Video Editor: "Syed created a great high quality video for me. easy to communicate with. and I love his work plan to continue to work with Syed and happy to recommend his…" Endorsed for: Committed to Quality, Clear Communicator, Accountable for Outcomes.',
  },
  {
    image: faceless,
    width: 1568,
    alt: 'Upwork review, 5 stars, Video Editor for a 1 million subscriber YouTube automation channel (faceless videos): "Syed Ali worked really hard on our projects for a faceless youtube Automation based channel, his work is up to the mark. Will recommend to take his video editing service…"',
  },
  {
    image: thumbnails,
    width: 1568,
    alt: 'Upwork review, 5 stars, Thumbnail Designer for a YouTube automation channel (Hollywood biographies and "Then & Now"): "We carefully tested many thumbnail designers for our project and very quickly decided to work with Seyd because of the quality of his work. His thumbnails are highly contrasting and…"',
  },
  {
    image: conference,
    width: 1033,
    alt: 'Upwork job, 5 stars: Conference Video Opening, $1,300 fixed price.',
  },
];
