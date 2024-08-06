import React, { useEffect, useState } from 'react';
import './Services.css';

import image1 from './workImages/image1.jpg';
import image2 from './workImages/image2.jpg';
import image3 from './workImages/image3.jpg';
import image4 from './workImages/image4.jpg';
import image5 from './workImages/image5.jpg';
import image6 from './workImages/image6.JPG';
import image7 from './workImages/image7.JPG';
import image8 from './workImages/image8.JPG';


const images = [
  { src: image1, text: 'Product Photography' },
  { src: image2, text: 'Wedding Photography' },
  { src: image3, text: 'Street Photography' },
  { src: image4, text: 'Portrait Photography' },
  { src: image5, text: 'Street Photography' },
  { src: image6, text: 'Portrait Photography' },
  { src: image7, text: 'Product Photography' },
  { src: image8, text: 'Wedding Photography' },
];

const ImageGallery = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return (
    <>
    <div className="image-gallery-container">
    {/* <h1 className="main-heading">OUR WORK</h1> */}
      <h2 className="sub-heading">PHOTOGRAPHY</h2>
      </div>
    <div className={`image-gallery ${loaded ? 'loaded' : ''}`}>
      
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image.src} alt={image.text} />
          <div className="overlay">
            <p>{image.text}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ImageGallery;