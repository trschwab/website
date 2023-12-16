// src/pages/PhotographyPage.js
import React, { useState } from 'react';

const PhotographyPage = () => {
  const perPage = 10; // Number of photos per page
  const [currentPage, setCurrentPage] = useState(1);

  // Your array of file names
  const fileNames = [
    '000079440022.jpg',
    '62880026.JPG',
    '81840010.JPG',
    '000079440021.jpg',
    '62880024.JPG',
    '000079440020.jpg',
    '81840017.JPG',
    '94550013 copy.JPG',
    '62880020.JPG',
    '94550017.JPG',
    '94530005 copy.JPG',
    '11930022 copy.JPG',
    '000079440025.jpg',
    '81840014.JPG',
    '000079440027.jpg',
    '94540005.JPG',
    '000079440026.jpg',
    '81840015.JPG',
    '62870003.JPG',
    '10270018.JPG',
    '94530023.JPG',
    '94530003 copy.JPG',
    '94560011.JPG',
    '62870001.JPG',
    '10270035.JPG',
    '94560017.JPG',
    '62870022.JPG',
    '62870009.JPG',
    '10270012.JPG',
    '000005530024.jpg',
    '94540006 copy.JPG',
    '94530006 copy.JPG',
    '94530007 copy.JPG',
    '94530028.JPG',
    '10270013.JPG',
    '94560025.JPG',
    '62870034.JPG',
    '62870018.JPG',
    '000019160016.jpg',
    '000019160001.jpg',
    '94560036.JPG',
    '81840018.JPG',
    '01680025.JPG',
    '11930032.JPG',
    '000019180024.jpg',
    '000019180025.jpg',
    '01680030.JPG',
    '01680024.JPG',
    '62880012.JPG',
    '000079440016.jpg',
    '81840036.JPG',
    '11930020.JPG',
    '000019150014.jpg',
    '11930009.JPG',
    '62880014.JPG',
    '000019150002.jpg',
    '000019150003.jpg',
    
    // Add more filenames as needed
  ];

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  // Get the subset of file names for the current page
  const currentFileNames = fileNames.slice(startIndex, endIndex);

  const totalPages = Math.ceil(fileNames.length / perPage);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h2>Photography Gallery</h2>
      <div class="limit_width">
        <div style={{ whiteSpace: 'pre-line' }}>
      <p>Explore our photography collection:</p>
      <div className="blog-images">
        {currentFileNames.map((fileName, index) => (
          <div key={index} className="blog-image-container">
            <img
              src={`/photography/${fileName}`}
              alt={`Thumbnail for ${fileName}`}
              className="blog-image"
              loading="lazy"
            />
            <p>{fileName}</p>
          </div>
        ))}
      </div>
      </div>
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PhotographyPage;
