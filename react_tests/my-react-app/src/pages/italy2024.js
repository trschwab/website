// src/pages/PhotographyPage.js
import React, { useState, useEffect } from 'react';
import BlurUpImage from '../components/BlurUpImage';
import LowResImage from '../components/LowResImage';
import photos from './italyphotos';
import { Link } from 'react-router-dom';


function reorganizePhotos(photos) {
  const numPhotos = photos.length;
  const numColumns = 3;
  const columnHeight = Math.ceil(numPhotos / numColumns);
  const newPhotos = new Array(numPhotos);

  for (let i = 0; i < numPhotos; i++) {
      // Calculate new position
      const column = i % numColumns;
      const row = Math.floor(i / numColumns);
      const newIndex = column * columnHeight + row;

      // Place photo in new position
      newPhotos[newIndex] = photos[i];
  }

  return newPhotos;
}

const reorganizedPhotos = reorganizePhotos(photos);


// Thanks to this guide
// https://css-tricks.com/seamless-responsive-photo-grid/

const sectionStyle = {
  lineHeight: 0,
  WebkitRowGap: '0px',
  columnGap: '0px',
  MozColumnGap: '0px',
  WebkitColumnCount: 3,
  MozColumnCount: 3,
  columnCount: 3,
};

const sectionStyleMobile = {
  lineHeight: 0,
  WebkitColumnGap: '0px',
  columnGap: '0px',
  MozColumnGap: '0px',
  WebkitColumnCount: 1,
  MozColumnCount: 1,
  columnCount: 1,
};

const sectionStyleDesktop = {
  lineHeight: 0,
  WebkitColumnGap: '0px',
  columnGap: '0px',
  MozColumnGap: '0px',
  WebkitColumnCount: 3,
  MozColumnCount: 3,
  columnCount: 3,
};

const linkStyle = {
    position: 'absolute',
    top: '8%',
    left: '8%',
    color: 'white',
    fontSize: '24px',
    textDecoration: 'none',
    zIndex: 3, // Ensures the link appears above all content
  };

const rightHalfStyle = {
    width: '70%', // Take up half of the screen width

    position: 'absolute',
    right: 0, // Align to the right edge
  };


  const mutedOverlayStyle = {
    background: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
    position: 'absolute',
    top: 0,
    left: 0,
    width: '30%', // Muting only the left 30%
    height: '100%',
    zIndex: 1,
  };

const photoWrapperStyle = {
  padding: '10px',
  display: 'inline-block',
  width: '100%',
  boxSizing: 'border-box',
};
const PhotoGallery = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionStyle = isMobile ? sectionStyleMobile : sectionStyleDesktop;
  const photoDisplay = isMobile ? photos : reorganizedPhotos;

  return (
    <div>
    <div style={mutedOverlayStyle}>
    <p style={linkStyle}>
    <Link to="/homepagetest" style={{ color: 'white' }}>
      Troy Schwab
    </Link>
    <br /><br />
    <Link to="/aboutpagetest" style={{ color: 'white' }}>
      About
    </Link>
    </p>
    </div>
    <div style={rightHalfStyle}>
    <section id="photos" style={sectionStyle}>
      {photoDisplay.map((photo, index) => (
        <div key={index} style={photoWrapperStyle}>
          {isMobile ? (
            <LowResImage
              src={photo.src.replace('midres', 'lowres')}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
            />
          ) : (
            <BlurUpImage
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
            />
          )}
        </div>
      ))}
    </section>
    </div>
    </div>
  );
};

export default PhotoGallery;