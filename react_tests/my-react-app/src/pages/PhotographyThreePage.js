// src/pages/PhotographyPage.js
import React, { useState } from 'react';

import PhotoAlbum from "react-photo-album";

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

    // // Media query for screens larger than 1100 pixels
    // '@media (min-width: 800px)': {
    //   maxWidth: '799px', // Set the maximum width to 1000 pixels for screens wider than 1100 pixels
    // },
  };

  return (
    <div style={galleryStyle}>  
      <PhotoAlbum layout="masonry" photos={photos}
      columns={(containerWidth) => {
        if (containerWidth < 500) return 1;
        if (containerWidth < 800) return 2;
        return 3;
  }}/>
    </div>
  );
};

export default Gallery;

// export default function Gallery() {
//   return <PhotoAlbum layout="masonry" photos={photos} />;
// }



// const PhotographyPage = () => {
//   const perPage = 10; // Number of photos per page
//   const [currentPage, setCurrentPage] = useState(1);

//   // Your array of file names
//   const fileNames = [
//     '000079440022.jpg',
//     '62880026.JPG',
//     '81840010.JPG',
//     '000079440021.jpg',
//     '62880024.JPG',
//     '000079440020.jpg',
//     '81840017.JPG',
//     '94550013 copy.JPG',
//     '62880020.JPG',
//     '94550017.JPG',
//     '94530005 copy.JPG',
//     '11930022 copy.JPG',
//     '000079440025.jpg',
//     '81840014.JPG',
//     '000079440027.jpg',
//     '94540005.JPG',
//     '000079440026.jpg',
//     '81840015.JPG',
//     '62870003.JPG',
//     '10270018.JPG',
//     '94530023.JPG',
//     '94530003 copy.JPG',
//     '94560011.JPG',
//     '62870001.JPG',
//     '10270035.JPG',
//     '94560017.JPG',
//     '62870022.JPG',
//     '62870009.JPG',
//     '10270012.JPG',
//     '000005530024.jpg',
//     '94540006 copy.JPG',
//     '94530006 copy.JPG',
//     '94530007 copy.JPG',
//     '94530028.JPG',
//     '10270013.JPG',
//     '94560025.JPG',
//     '62870034.JPG',
//     '62870018.JPG',
//     '000019160016.jpg',
//     '000019160001.jpg',
//     '94560036.JPG',
//     '81840018.JPG',
//     '01680025.JPG',
//     '11930032.JPG',
//     '000019180024.jpg',
//     '000019180025.jpg',
//     '01680030.JPG',
//     '01680024.JPG',
//     '62880012.JPG',
//     '000079440016.jpg',
//     '81840036.JPG',
//     '11930020.JPG',
//     '000019150014.jpg',
//     '11930009.JPG',
//     '62880014.JPG',
//     '000019150002.jpg',
//     '000019150003.jpg',
    
//     // Add more filenames as needed
//   ];

//   // Calculate the start and end indices for the current page
//   const startIndex = (currentPage - 1) * perPage;
//   const endIndex = startIndex + perPage;

//   // Get the subset of file names for the current page
//   const currentFileNames = fileNames.slice(startIndex, endIndex);

//   const totalPages = Math.ceil(fileNames.length / perPage);

//   const handlePageChange = newPage => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div>
//       <h2>Photography Gallery</h2>
//       <div class="limit_width">
//         <div style={{ whiteSpace: 'pre-line' }}>
//       <p>Explore our photography collection:</p>
//       <div className="blog-images">
//         {currentFileNames.map((fileName, index) => (
//           <div key={index} className="blog-image-container">
//             <img
//               src={`/photography/${fileName}`}
//               alt={`Thumbnail for ${fileName}`}
//               className="blog-image"
//               loading="lazy"
//             />
//             <p>{fileName}</p>
//           </div>
//         ))}
//       </div>
//       </div>
//       </div>
//       <div className="pagination">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PhotographyPage;
