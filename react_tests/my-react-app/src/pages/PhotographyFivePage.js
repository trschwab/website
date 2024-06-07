// src/pages/PhotographyPage.js
import React from 'react';
import PhotoAlbum from 'react-photo-album';
import BlurUpImage from '../components/BlurUpImage';

const photos = [
  { src: "/photography/33320036 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/33320013.JPG", width: 1000, height: 650 },
  { src: "/photography/33320033 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/33330033 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/33330020 copy.JPG", width: 650, height: 1000 },
  
  { src: "/photography/33330021 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/62880026.JPG", width: 1000, height: 650 },
  { src: "/photography/33330022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/000079440021.jpg", width: 1000, height: 650 },
  { src: "/photography/33330026 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/33320015.JPG", width: 1000, height: 650 },

  { src: "/photography/33330008 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/33330004 copy.JPG", width: 650, height: 1000 },



  { src: "/photography/000079440022.jpg", width: 1000, height: 650 },

  { src: "/photography/81840010.JPG", width: 1000, height: 650 },

  { src: "/photography/62880024.JPG", width: 1000, height: 650 },
  { src: "/photography/000079440020.jpg", width: 1000, height: 650 },
  { src: "/photography/81840017.JPG", width: 1000, height: 650 },
  { src: "/photography/94550013 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/62880020.JPG", width: 1000, height: 650 },
  { src: "/photography/94550017.JPG", width: 1000, height: 650 },
  // { src: "/photography/94530005 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/11930022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/000079440025.jpg", width: 1000, height: 650 },
  { src: "/photography/81840014.JPG", width: 1000, height: 650 },
  { src: "/photography/000079440027.jpg", width: 1000, height: 650 },
  { src: "/photography/94540005.JPG", width: 1000, height: 650 },
  { src: "/photography/000079440026.jpg", width: 1000, height: 650 },
  { src: "/photography/81840015.JPG", width: 1000, height: 650 },
  { src: "/photography/62870003.JPG", width: 1000, height: 650 },
  { src: "/photography/10270018.JPG", width: 1000, height: 650 },
  { src: "/photography/94530023.JPG", width: 1000, height: 650 },
  { src: "/photography/94530003 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/94560011.JPG", width: 1000, height: 650 },
  { src: "/photography/62870001.JPG", width: 1000, height: 650 },
  { src: "/photography/10270035.JPG", width: 1000, height: 650 },
  { src: "/photography/94560017.JPG", width: 1000, height: 650 },
  // { src: "/photography/62870022.JPG", width: 1000, height: 650 },
  { src: "/photography/62870009.JPG", width: 1000, height: 650 },
  { src: "/photography/10270012.JPG", width: 1000, height: 650 },
  { src: "/photography/000005530024.jpg", width: 1000, height: 650 },
  { src: "/photography/94540006 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/94530006 copy.JPG", width: 650, height: 1000 },

  { src: "/photography/94530028.JPG", width: 1000, height: 650 },
  { src: "/photography/94530007 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10270013.JPG", width: 1000, height: 650 },
  { src: "/photography/94560025.JPG", width: 1000, height: 650 },
  { src: "/photography/62870034.JPG", width: 1000, height: 650 },
  // { src: "/photography/62870018.JPG", width: 1000, height: 650 },
  { src: "/photography/000019160016.jpg", width: 1000, height: 650 },
  { src: "/photography/000019160001.jpg", width: 1000, height: 650 },
  { src: "/photography/94560036.JPG", width: 1000, height: 650 },
  { src: "/photography/81840018.JPG", width: 1000, height: 650 },
  { src: "/photography/01680025.JPG", width: 1000, height: 650 },
  // { src: "/photography/11930032.JPG", width: 1000, height: 650 },
  { src: "/photography/000019180024.jpg", width: 1000, height: 650 },
  { src: "/photography/000019180025.jpg", width: 1000, height: 650 },
  { src: "/photography/01680030.JPG", width: 1000, height: 650 },
  { src: "/photography/01680024.JPG", width: 1000, height: 650 },
  { src: "/photography/62880012.JPG", width: 1000, height: 650 },
  { src: "/photography/000079440016.jpg", width: 600, height: 800 },
  { src: "/photography/81840036.JPG", width: 1000, height: 650 },
  // { src: "/photography/11930020.JPG", width: 1000, height: 650 },
  { src: "/photography/000019150014.jpg", width: 1000, height: 650 },
  { src: "/photography/11930009.JPG", width: 1000, height: 650 },
  { src: "/photography/62880014.JPG", width: 1000, height: 650 },
  { src: "/photography/000019150002.jpg", width: 1000, height: 650 },
  { src: "/photography/000019150003.jpg", width: 1000, height: 650 },
  
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