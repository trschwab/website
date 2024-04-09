// src/pages/PhotographyPage.js
import React, { useState } from 'react';

import PhotoAlbum from "react-photo-album";
// import HorizontalSlider from 'react-horizontal-slider'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export const data = [
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
    { src: "/photography/11930022 copy.JPG", width: 650, height: 1000 },
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
    { src: "/photography/11930032.JPG", width: 1000, height: 650 },
    { src: "/photography/000019180024.jpg", width: 1000, height: 650 },
    { src: "/photography/000019180025.jpg", width: 1000, height: 650 },
    { src: "/photography/01680030.JPG", width: 1000, height: 650 },
    { src: "/photography/01680024.JPG", width: 1000, height: 650 },
    { src: "/photography/62880012.JPG", width: 1000, height: 650 },
    { src: "/photography/000079440016.jpg", width: 600, height: 800 },
    { src: "/photography/81840036.JPG", width: 1000, height: 650 },
    { src: "/photography/11930020.JPG", width: 1000, height: 650 },
    { src: "/photography/000019150014.jpg", width: 1000, height: 650 },
    { src: "/photography/11930009.JPG", width: 1000, height: 650 },
    { src: "/photography/62880014.JPG", width: 1000, height: 650 },
    { src: "/photography/000019150002.jpg", width: 1000, height: 650 },
    { src: "/photography/000019150003.jpg", width: 1000, height: 650 },
  
];


const TestGallery = () => {
  const galleryStyle = {
    maxWidth: '80%', // Set the maximum width as per your requirement
    margin: '50px auto', // Center the component by setting left and right margins to auto, and add top margin
  };

  // Responsive configuration for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={galleryStyle}>
      {/* Render the Carousel component */}
      <Carousel responsive={responsive}>
        {/* Map over the data array to create child elements with src, width, and height attributes */}
        {data.map((item, index) => (
          <div key={index}>
            <div>
            <img
              src={item.src}
              alt={`Image ${index + 1}`}
              width={item.width}
              height={item.height}
            />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestGallery;
