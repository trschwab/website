// src/pages/PhotographyPage.js
import React from 'react';
import PhotoAlbum from 'react-photo-album';
import BlurUpImage from '../components/BlurUpImage';

const photos = [
  { src: "/photography/89900034.JPG", width: 650, height: 1000 },
  { src: "/photography/89940014.JPG", width: 1000, height: 650 },
  { src: "/photography/89920010 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/89920026.JPG", width: 1000, height: 650 },
  { src: "/photography/89920028.JPG", width: 1000, height: 650 },
  { src: "/photography/89920007.JPG", width: 1000, height: 650 },
  { src: "/photography/89940008 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/89900002.JPG", width: 1000, height: 650 },
  { src: "/photography/89950011.JPG", width: 1000, height: 650 }, 
  { src: "/photography/89950033.JPG", width: 1000, height: 650 },
  { src: "/photography/89930009.JPG", width: 650, height: 1000 },
  { src: "/photography/89930016.JPG", width: 1000, height: 650 },
  { src: "/photography/89890012.JPG", width: 1000, height: 650 },
  { src: "/photography/89890020.JPG", width: 650, height: 1000 },
  { src: "/photography/89890001.JPG", width: 1000, height: 650 },
  { src: "/photography/89890028.JPG", width: 1000, height: 650 },
  { src: "/photography/89890010.JPG", width: 1000, height: 650 },
  { src: "/photography/89910021.JPG", width: 1000, height: 650 },
  { src: "/photography/89910028 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/89910026.JPG", width: 1000, height: 650 },
  { src: "/photography/89890007 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/89890017.JPG", width: 650, height: 1000 },
  { src: "/photography/89890022.JPG", width: 650, height: 1000 },
  { src: "/photography/89890023.JPG", width: 650, height: 1000 },
];

const Gallery = () => {
  const galleryStyle = {
    maxWidth: '90%',
    margin: '50px auto',
  };

  return (
    <div style={galleryStyle}>
      <PhotoAlbum
        layout="masonry"
        photos={photos.map(photo => ({
          ...photo,
          render: ({ photo }) => (
            <BlurUpImage
              src={photo.src}
              alt={photo.alt || 'Photo'}
              width={photo.width}
              height={photo.height}
            />
          ),
        }))}
        columns={(containerWidth) => {
          if (containerWidth < 500) return 1;
          if (containerWidth < 800) return 2;
          return 3;
        }}
      />
    </div>
  );
};

export default Gallery;
