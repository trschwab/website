// src/pages/PhotographyPage.js
import React from 'react';
import PhotoAlbum from 'react-photo-album';
import BlurUpImage from '../components/BlurUpImage';


const photos = [

  { src: "/photography/14130001.JPG", width: 650, height: 1000 },
  { src: "/photography/14130014.JPG", width: 650, height: 1000 },
  { src: "/photography/14060025.JPG", width: 650, height: 1000 },
  { src: "/photography/14070020.JPG", width: 1000, height: 650 },
  { src: "/photography/14060026.JPG", width: 650, height: 1000 },

  { src: "/photography/14120022.JPG", width: 650, height: 1000 },
  { src: "/photography/14070013.JPG", width: 650, height: 1000 },
  { src: "/photography/14060028.JPG", width: 1000, height: 650 },
  { src: "/photography/14120034.JPG", width: 650, height: 1000 },
  { src: "/photography/14120035.JPG", width: 650, height: 1000 },
  { src: "/photography/14130018.JPG", width: 1000, height: 650 },
  { src: "/photography/14060005.JPG", width: 650, height: 1000 },
  { src: "/photography/14130009.JPG", width: 650, height: 1000 },
  { src: "/photography/14070015.JPG", width: 650, height: 1000 },
  { src: "/photography/14070029.JPG", width: 1000, height: 650 },
  { src: "/photography/14070003.JPG", width: 1000, height: 650 },
  { src: "/photography/14070017.JPG", width: 1000, height: 650 },
  { src: "/photography/14130037.JPG", width: 650, height: 1000 },
  { src: "/photography/14120032.JPG", width: 650, height: 1000 },
  { src: "/photography/14100031.JPG", width: 650, height: 1000 },

  { src: "/photography/14080023.JPG", width: 1000, height: 650 },
  { src: "/photography/14100025.JPG", width: 650, height: 1000 },
  { src: "/photography/14040005.JPG", width: 650, height: 1000 },
  // { src: "/photography/14040010.JPG", width: 650, height: 1000 },
  { src: "/photography/14050001.JPG", width: 650, height: 1000 },

  { src: "/photography/14080020.JPG", width: 650, height: 1000 },

  { src: "/photography/14080034.JPG", width: 650, height: 1000 },
  { src: "/photography/14090025.JPG", width: 1000, height: 650 },
  { src: "/photography/14090019.JPG", width: 650, height: 1000 },
  { src: "/photography/14090024.JPG", width: 1000, height: 650 },
  { src: "/photography/14040013.JPG", width: 650, height: 1000 },

  // { src: "/photography/14050002.JPG", width: 1000, height: 650 },
  { src: "/photography/14110026.JPG", width: 1000, height: 650 },
  { src: "/photography/14110027.JPG", width: 1000, height: 650 },
  { src: "/photography/14040007.JPG", width: 650, height: 1000 },
  { src: "/photography/14110036.JPG", width: 1000, height: 650 },
  { src: "/photography/14110037.JPG", width: 1000, height: 650 },

  { src: "/photography/14050012.JPG", width: 1000, height: 650 },
  { src: "/photography/14090036.JPG", width: 1000, height: 650 },
  { src: "/photography/14090034.JPG", width: 650, height: 1000 },
  { src: "/photography/14110024.JPG", width: 1000, height: 650 },
  { src: "/photography/14040017.JPG", width: 1000, height: 650 },
  { src: "/photography/14090035.JPG", width: 650, height: 1000 },
  { src: "/photography/14080018.JPG", width: 1000, height: 650 },


  { src: "/photography/14050004.JPG", width: 650, height: 1000 },
  // { src: "/photography/14090022.JPG", width: 650, height: 1000 },
  { src: "/photography/14040029.JPG", width: 1000, height: 650 },
  { src: "/photography/14040028.JPG", width: 1000, height: 650 },


];

const sectionStyle = {
  lineHeight: 0,
  columnCount: 3,
  columnGap: '0px',
  '@media (max-width: 800px)': {
    columnCount: 2,
  },
  '@media (max-width: 500px)': {
    columnCount: 1,
  },
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
