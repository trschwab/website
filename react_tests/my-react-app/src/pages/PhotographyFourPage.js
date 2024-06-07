// src/pages/PhotographyPage.js
import React from 'react';
import PhotoAlbum from 'react-photo-album';
import BlurUpImage from '../components/BlurUpImage';

const photos = [

  { src: "/photography/70310036 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/70310011.JPG", width: 1000, height: 650 },
  { src: "/photography/70310019 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/70310015 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/70310031.JPG", width: 1000, height: 650 },
  { src: "/photography/70310006.JPG", width: 1000, height: 650 },
  { src: "/photography/70310003.JPG", width: 1000, height: 650 },

  { src: "/photography/65340030 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/65330016.JPG", width: 1000, height: 650 },
  { src: "/photography/65330031 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/65330029 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/65340022.JPG", width: 1000, height: 650 },
  { src: "/photography/65340008.JPG", width: 1000, height: 650 },
  { src: "/photography/65340013.JPG", width: 1000, height: 650 },
  { src: "/photography/65340015.JPG", width: 1000, height: 650 },
  { src: "/photography/65340007.JPG", width: 1000, height: 650 },
  { src: "/photography/65340005 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/65330034.JPG", width: 1000, height: 650 },
  { src: "/photography/65330033.JPG", width: 1000, height: 650 },
  { src: "/photography/65330032.JPG", width: 1000, height: 650 },
  { src: "/photography/65340024.JPG", width: 1000, height: 650 },



  { src: "/photography/20330011.JPG", width: 1000, height: 650 },
  { src: "/photography/20330033 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/20330002.JPG", width: 1000, height: 650 },
  { src: "/photography/20330022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/20330023.JPG", width: 1000, height: 650 },
  { src: "/photography/20330014 copy.JPG", width: 650, height: 1000 },



  { src: "/photography/70050017 copy edit.JPG", width: 650, height: 1000 },
  { src: "/photography/70050021 edit.JPG", width: 1000, height: 650 },
  { src: "/photography/70050028 copy edit.JPG", width: 650, height: 1000 },
  { src: "/photography/70050022 copy edit.JPG", width: 650, height: 1000 },
  { src: "/photography/70050032 copy Edit.JPG", width: 650, height: 1000 },


  { src: "/photography/07280033 copy.JPG", width: 650, height: 1000 },

  { src: "/photography/07270014.JPG", width: 1000, height: 650 },
  { src: "/photography/07280011 copy.JPG", width: 650, height: 1000 },

  { src: "/photography/07270020.JPG", width: 1000, height: 650 },
  { src: "/photography/07280001 copy.JPG", width: 650, height: 1000 },

  { src: "/photography/07280013.JPG", width: 1000, height: 650 },


  { src: "/photography/11930032_1 2.JPG", width: 1000, height: 650 },

  { src: "/photography/07280014 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/000017370015.jpg", width: 1000, height: 650 },
  { src: "/photography/000017370020.jpg", width: 1000, height: 650 },
  { src: "/photography/000017370025.jpg", width: 1000, height: 650 },

  { src: "/photography/000017370030.jpg", width: 1000, height: 650 },

  { src: "/photography/39230015.JPG", width: 1000, height: 650 },
  { src: "/photography/39220013 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/39220026.JPG", width: 1000, height: 650 },
  { src: "/photography/39230014.JPG", width: 1000, height: 650 },
  { src: "/photography/39230007.JPG", width: 1000, height: 650 },
  { src: "/photography/39220035.JPG", width: 1000, height: 650 },
  
  { src: "/photography/39220032.JPG", width: 1000, height: 650 },
  { src: "/photography/39220024.JPG", width: 1000, height: 650 },
  { src: "/photography/39220023.JPG", width: 1000, height: 650 },
  { src: "/photography/39220011.JPG", width: 1000, height: 650 },
  { src: "/photography/39210026.JPG", width: 1000, height: 650 },
  { src: "/photography/39210014.JPG", width: 1000, height: 650 },
  
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