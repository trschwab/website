// src/pages/PhotographyPage.js
import React from 'react';
import PhotoAlbum from 'react-photo-album';
import BlurUpImage from '../components/BlurUpImage';

const photos = [
  
  { src: "/photography/03540019 copy.JPG", width: 650, height: 1000 },


  { src: "/photography/10950009.JPG", width: 1000, height: 650 },
  { src: "/photography/09640026 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09630026 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640013 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09620004 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09620018 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09630031 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10970030 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640030 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640017.JPG", width: 1000, height: 650 },
  { src: "/photography/10950018.JPG", width: 1000, height: 650 },
  { src: "/photography/10950010 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10970032.JPG", width: 1000, height: 650 },
  { src: "/photography/09630002 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09620032.JPG", width: 1000, height: 650 },
  { src: "/photography/10950006 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10970035.JPG", width: 1000, height: 650 },
  { src: "/photography/10960024.JPG", width: 1000, height: 650 },
  { src: "/photography/09630021 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09630022.JPG", width: 1000, height: 650 },
  { src: "/photography/10960009 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09620008 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640015 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09630007 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09630004.JPG", width: 1000, height: 650 },
  { src: "/photography/10970013.JPG", width: 1000, height: 650 },
  { src: "/photography/09620028.JPG", width: 1000, height: 650 },
  { src: "/photography/09630013.JPG", width: 1000, height: 650 },
  { src: "/photography/09630006.JPG", width: 1000, height: 650 },
  { src: "/photography/09640032 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640011 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10960011.JPG", width: 1000, height: 650 },
  { src: "/photography/10970001.JPG", width: 1000, height: 650 },
  { src: "/photography/09630029.JPG", width: 1000, height: 650 },
  { src: "/photography/10950002 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10960032 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640025 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640024 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10950028.JPG", width: 1000, height: 650 },
  { src: "/photography/09640027.JPG", width: 1000, height: 650 },
  { src: "/photography/10950014.JPG", width: 1000, height: 650 },
  { src: "/photography/10950016.JPG", width: 1000, height: 650 },
  { src: "/photography/10950027 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10970034 copy.JPG", width: 650, height: 1000 },
  
  // { src: "/photography/74200025 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74220034.JPG", width: 1000, height: 650 },
  { src: "/photography/74200030 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/74220038.JPG", width: 1000, height: 650 },
  // { src: "/photography/74200031 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74200034 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/74220028.JPG", width: 1000, height: 650 },
  { src: "/photography/74220003 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74220008 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74200035.JPG", width: 1000, height: 650 },
  { src: "/photography/74220009 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74210003.JPG", width: 1000, height: 650 },
  { src: "/photography/74220022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74220031 copy.JPG", width: 650, height: 1000 },

  // { src: "/photography/74220029.JPG", width: 1000, height: 650 },
  // { src: "/photography/74200013.JPG", width: 1000, height: 650 },
  // { src: "/photography/74200012.JPG", width: 1000, height: 650 },
  { src: "/photography/74200001.JPG", width: 1000, height: 650 },
  { src: "/photography/74210001.JPG", width: 1000, height: 650 },
  { src: "/photography/74210013 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74210031.JPG", width: 1000, height: 650 },
  { src: "/photography/74210015 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74200009 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74200014 copy.JPG", width: 650, height: 1000 },
  
  
];


const Gallery = () => {
  const galleryStyle = {
    maxWidth: '90%', // Set the maximum width as per your requirement
    margin: '50px auto',  // Center the component by setting left and right margins to auto, and add top margin
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