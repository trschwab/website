// src/pages/PhotographyPage.js
import React from 'react';
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

const Gallery = () => {
  const galleryStyle = {
    maxWidth: '90%',
    margin: '50px auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px', // Adjust the gap between images as needed
  };

  return (
    <div style={galleryStyle}>
      {photos.map(photo => (
        <BlurUpImage
          key={photo.src}
          src={photo.src}
          alt={photo.alt || 'Photo'}
          width={photo.width}
          height={photo.height}
        />
      ))}
    </div>
  );
};

export default Gallery;