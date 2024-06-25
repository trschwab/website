// src/pages/PhotographyPage.js
import React from 'react';
import PhotoAlbum from 'react-photo-album';
import BlurUpImage from '../components/BlurUpImage';

const photos = [
  { src: "/photography/000003210028.jpg", width: 2376, height: 3584},
  { src: "/photography/000003210037.jpg", width: 3584, height: 2376 },
  { src: "/photography/000003210002.jpg", width: 3584, height: 2376 },
  { src: "/photography/000003210016.jpg", width: 2376, height: 3584 },
  { src: "/photography/000003210003.jpg", width: 3584, height: 2376 },
  { src: "/photography/000003210012.jpg", width: 3584, height: 2376 },
  { src: "/photography/000003210020.jpg", width: 2376, height: 3584 },
  { src: "/photography/14120023.JPG", width: 650, height: 1000 },
  { src: "/photography/14040030.JPG", width: 1000, height: 650 },
  { src: "/photography/14040018.JPG", width: 1000, height: 650 },
  { src: "/photography/14050017.JPG", width: 1000, height: 650 },
  { src: "/photography/14040036.JPG", width: 650, height: 1000 },
  { src: "/photography/14090001.JPG", width: 650, height: 1000 },
  { src: "/photography/14080005.JPG", width: 650, height: 1000 },
  { src: "/photography/14080004.JPG", width: 1000, height: 650 },
  { src: "/photography/14090029.JPG", width: 1000, height: 650 },
  { src: "/photography/14100017.JPG", width: 650, height: 1000 },
  { src: "/photography/14110012.JPG", width: 650, height: 1000 },
  { src: "/photography/14100015.JPG", width: 650, height: 1000 },
  { src: "/photography/14040021.JPG", width: 1000, height: 650 },
  { src: "/photography/14040020.JPG", width: 1000, height: 650 },
  { src: "/photography/14040008.JPG", width: 650, height: 1000 },
  { src: "/photography/14080012.JPG", width: 1000, height: 650 },
  { src: "/photography/14050030.JPG", width: 1000, height: 650 },
  { src: "/photography/14130006.JPG", width: 1000, height: 650 },
  { src: "/photography/14130007.JPG", width: 650, height: 1000 },
  { src: "/photography/14060023.JPG", width: 650, height: 1000 },
  { src: "/photography/14060034.JPG", width: 1000, height: 650 },
  { src: "/photography/14070021.JPG", width: 650, height: 1000 },
  { src: "/photography/14060018.JPG", width: 1000, height: 650 },
];

const sectionStyle = {
  lineHeight: 0,
  WebkitColumnGap: '0px',
  columnGap: '0px',
  MozColumnGap: '0px',
  WebkitColumnCount: 3,
  MozColumnCount: 3,
  columnCount: 3,
};

const photoWrapperStyle = {
  padding: '10px', // Add padding on all sides (top, right, bottom, left)
  display: 'inline-block',
  width: '100%',
  boxSizing: 'border-box',
};

const PhotoGallery = () => {
  return (
    <section id="photos" style={sectionStyle}>
      {photos.map((photo, index) => (
        <div key={index} style={photoWrapperStyle}>
          <BlurUpImage
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
          />
        </div>
      ))}
    </section>
  );
};

export default PhotoGallery;