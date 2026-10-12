// Contact details, team, clients, photos and services.
// Images are re-used from your existing project folders.

import hec from '../../Components/clientImages/hec.jpeg';
import cheezious from '../../Components/clientImages/cheezious.jpg';
import cari from '../../Components/clientImages/cari.png';
import conceal from '../../Components/clientImages/conceal.jpg';
import roshni from '../../Components/clientImages/roshni.png';

// Team portraits are head-and-shoulders close-ups at 3:4.
import aliImg from '../../Components/teamImages/syed-ali-gilani.jpg';
import hashimImg from '../../Components/teamImages/hashim-ali.jpg';
import ahmadImg from '../../Components/teamImages/ahmad-khattak.jpg';
import atharImg from '../../Components/teamImages/syed-athar-abbas-gilani.jpg';
import qasimImg from '../../Components/teamImages/qasim-ali.jpg';
import ahsanImg from '../../Components/teamImages/ahsan.jpg';

import work1 from '../../Components/workImages/image1.jpg';
import work2 from '../../Components/workImages/image2.jpg';
import work3 from '../../Components/workImages/image3.jpg';
import work4 from '../../Components/workImages/image4.jpg';
import work5 from '../../Components/workImages/image5.jpg';
import work6 from '../../Components/workImages/image6.JPG';
import work7 from '../../Components/workImages/image7.JPG';
import work8 from '../../Components/workImages/image8.JPG';

export const contact = {
  whatsapp: '923171832625',
  phoneDisplay: '+92-317-1832625',
  email: 'teamdastaanproductions@gmail.com',
  mapsUrl:
    'https://www.google.com/maps/place/Dastaan+Productions/@30.6564316,73.0731347,15z/data=!4m2!3m1!1s0x0:0xa99d169aaa9df68d?sa=X&ved=1t:2428&ictx=111',
  socials: [
    { key: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/dastaan.productions' },
    { key: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61551949586844' },
    { key: 'behance', label: 'Behance', url: 'https://www.behance.net/dastaanproductions' },
  ],
};

export const clients = [
  { name: 'HEC', img: hec, link: 'https://www.hec.gov.pk' },
  { name: 'Cheezious', img: cheezious, link: 'https://www.cheezious.com' },
  { name: 'Cari', img: cari, link: 'https://getcari.com' },
  { name: 'Conceal', img: conceal, link: 'https://conceal.io' },
  { name: 'Roshni Centre', img: roshni, link: 'https://www.youtube.com/@RoshniCentre/featured' },
];

export const team = [
  { name: 'Syed Ali Gilani', ur: 'علی', role: 'CEO', img: aliImg, instagram: 'https://www.instagram.com/gilani.jpg/' },
  { name: 'Hashim Ali', ur: 'ہاشم', role: 'Managing Director', img: hashimImg, instagram: 'https://www.instagram.com/thisishashimali/' },
  { name: 'Ahmad Khattak', ur: 'احمد', role: 'Cinematographer', img: ahmadImg, instagram: 'https://www.instagram.com/thisiskhattak/' },
  { name: 'Syed Athar Abbas Gilani', ur: 'اطہر', role: 'Senior Editor', img: atharImg, instagram: 'https://www.instagram.com/its_syed_athar_bbas/' },
  { name: 'Qasim Ali', ur: 'قاسم', role: 'Senior Editor', img: qasimImg, instagram: 'https://www.instagram.com/_qasim_ali_56?igsh=ZWc2c2owbWt5ZHV6' },
  // Add Ahsan's Instagram link here to make his card clickable
  { name: 'Ahsan', ur: 'احسن', img: ahsanImg },
];

export const photos = [
  { src: work1, caption: 'Product Photography' },
  { src: work2, caption: 'Wedding Photography' },
  { src: work3, caption: 'Street Photography' },
  { src: work4, caption: 'Portrait Photography' },
  { src: work5, caption: 'Street Photography' },
  { src: work6, caption: 'Portrait Photography' },
  { src: work7, caption: 'Product Photography' },
  { src: work8, caption: 'Wedding Photography' },
];

// icon names are resolved in Home.js
export const services = [
  {
    icon: 'film',
    title: 'Video Editing',
    text: 'Brand films, YouTube videos and documentary cuts, shaped around your story, pacing and tone.',
  },
  {
    icon: 'mic',
    title: 'Podcast Editing',
    text: 'Clean audio, tight edits and video podcast cuts, ready to publish on the schedule you keep.',
  },
  {
    icon: 'phone',
    title: 'Reels & Short-form',
    text: 'Vertical cuts with captions and rhythm, built to keep viewers watching to the last second.',
  },
  {
    icon: 'camera',
    title: 'Photography & Videography',
    text: 'Product, portrait, street and wedding shoots, captured with a cinematic eye.',
  },
];
