// src/pages/PhotographyPage.js
import React from 'react';
import PhotoAlbum from 'react-photo-album';
import BlurUpImage from '../components/BlurUpImage';

const photos = [

  // { src: "/photography/16690018 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16660031 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/16660030.JPG", width: 1000, height: 650 },
  { src: "/photography/16690008.JPG", width: 1000, height: 650 },
  { src: "/photography/16660022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16710018 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16680010.JPG", width: 1000, height: 650 },
  { src: "/photography/16680016 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16690009.JPG", width: 1000, height: 650 },
  { src: "/photography/16680018.JPG", width: 1000, height: 650 },

  { src: "/photography/16710020 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/16710003 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16700024.JPG", width: 1000, height: 650 },
  { src: "/photography/16690026.JPG", width: 1000, height: 650 },
  { src: "/photography/16700032.JPG", width: 1000, height: 650 },
  { src: "/photography/16670028.JPG", width: 1000, height: 650 },
  { src: "/photography/16690003 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16670007.JPG", width: 1000, height: 650 },
  { src: "/photography/16660016.JPG", width: 1000, height: 650 },
  { src: "/photography/16670006.JPG", width: 1000, height: 650 },
  { src: "/photography/16690014 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16670011.JPG", width: 1000, height: 650 },
  { src: "/photography/16660019.JPG", width: 1000, height: 650 },
  { src: "/photography/16660024.JPG", width: 1000, height: 650 },
  { src: "/photography/16690010 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16680032 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16670026 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16710006.JPG", width: 1000, height: 650 },
  { src: "/photography/16690016 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16690017 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16690001.JPG", width: 1000, height: 650 },
  { src: "/photography/16690006.JPG", width: 1000, height: 650 },


  { src: "/photography/03550019.JPG", width: 1000, height: 650 },

  { src: "/photography/03550012 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/03550016 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/03550004 edit2.JPG", width: 1000, height: 650 },

  
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