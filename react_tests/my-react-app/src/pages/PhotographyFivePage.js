// src/pages/PhotographyPage.js
import React, { useState } from 'react';

import PhotoAlbum from "react-photo-album";

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
