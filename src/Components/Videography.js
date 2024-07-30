import React from 'react';
import './Videography.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faFilm, faCamera, faPlayCircle, faClapperboard, faVideoSlash, faTv, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import image1 from './videography/image1.png';
import image2 from './videography/mrbeast.png';
import image3 from './videography/image3.jpg';
import image4 from './videography/image4.png';
import image5 from './videography/dhruvrathee.jpg';
import image6 from './videography/sports.jpg';
import image7 from './videography/podcast.jpg';
import image8 from './videography/gaming.jpg';
import image9 from './videography/reaction.jpg';


const videoData = [
  { id: "Trending Shorts/Reels Editing Styles", icon: faVideo, link: 'https://www.behance.net/gallery/188614131/Trending-ShortsReels-Editing-Styles', image: image1 },
  { id: "Mr. Beast Style Video Editing", icon: faFilm, link: 'https://www.behance.net/gallery/175953019/Mr-Beast-Style-Video-Editing', image: image2 },
  { id: "Ali Abdaal Reel Editing", icon: faCamera, link: 'https://www.behance.net/gallery/184169699/Ali-Abdaal-Reel-Editing', image: image3 },
  { id: "Documentaries and cash cow", icon: faPlayCircle, link: 'https://www.behance.net/gallery/175899643/CASH-COW-VIDEO-EDITING-FACE-LESS-VIDEOS-EDITING', image: image4 },
  { id: "Dhurv Rathe Editing Style", icon: faClapperboard, link: 'https://www.behance.net/gallery/181068427/Dhurv-Rathe-Editing-Style', image: image5 },
  { id: "Sports Editing", icon: faVideoSlash, link: 'https://www.behance.net/gallery/196347955/Sports-Editing', image: image6 },
  { id: "Podcast Edits", icon: faTv, link: 'https://www.behance.net/gallery/188856447/Podcast-Edits', image: image7 },
  { id: "Gaming Videos", icon: faPhotoVideo, link: 'https://www.behance.net/gallery/188721413/Gaming-Videos', image: image8 }
,{ id: "Reaction Videos", icon: faPhotoVideo, link: 'https://www.behance.net/gallery/175951797/Reaction-Videos', image: image9 }
];

const Videography = () => {
  return (
    <>
<h2 className="videos-heading">VIDEOS</h2>
    <div className="videography-container">
    

      {videoData.map(video => (
        <div className="video-card" key={video.id}>
          <div className="video-icon">
            <FontAwesomeIcon icon={video.icon} />
          </div>
          <div className="video-text">
            <p>{video.id}</p>
            <button
              onClick={() => window.open(video.link, '_blank')}
              className="learn-more-button"
            >
              Checkout <span>&rarr;</span>
            </button>
          </div>
          <div className="video-image" style={{ backgroundImage: `url(${video.image})` }}></div>
          <div className="video-overlay"></div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Videography;
