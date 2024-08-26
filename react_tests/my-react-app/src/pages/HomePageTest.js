import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Import Link for navigation

const images = [
  "/photography/midres/09630021.JPG",
  "/photography/midres/16670007.JPG",
  "/photography/midres/16700024.JPG",
  // "/photography/midres/33330004.JPG",
  // "/photography/midres/16710020.JPG",
  "/photography/midres/06590016.JPG",
  // "/photography/midres/06690022.JPG",
  "/photography/midres/06720006.JPG",
  "/photography/midres/06660009.JPG",
  "/photography/midres/000017370015.jpg",
  "/photography/midres/16570002.JPG",
  "/photography/midres/000019180025.jpg",
  "/photography/midres/89950011.JPG",
  // "/photography/midres/65340030.JPG",
  "/photography/midres/10950014.JPG",
  "/photography/midres/14070017.JPG"
];

const HomePage = () => {
  const [hovered, setHovered] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [imageError, setImageError] = useState('');

  useEffect(() => {
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    };

    const selectedImage = getRandomImage();
    setBackgroundImage(selectedImage);
    
    // Create an Image object to verify if the URL is valid
    const img = new Image();
    img.src = selectedImage;
    img.onload = () => {
      setImageError('');
    };
    img.onerror = () => {
      setImageError('Image failed to load: ' + selectedImage);
    };

  }, []);

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    position: 'relative', /* Allows absolute positioning of header and links */
  };

  const headerStyle = {
    position: 'absolute',
    top: '8%', /* Adjust this value to move the header further down */
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'white',
    padding: '10px 20px',
    fontSize: '36px',
    textAlign: 'center',
    width: '100%',
  };

  const linkContainerStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex', /* Use flexbox for horizontal alignment */
    justifyContent: 'center', /* Center links horizontally */
  };

  const linkStyle = (isHovered) => ({
    color: isHovered ? '#b6b6b6' : 'white', /* Gray out on hover */
    fontSize: '30px',
    textDecoration: 'none', /* Removes underline from links */
    margin: '0 20px', /* Space between links */
    transition: 'color 0.3s ease', /* Smooth transition effect */
  });

  return (
    <div style={containerStyle}>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <header style={headerStyle}>
        Troy Schwab
      </header>
      <div style={linkContainerStyle}>
        <Link
          to="/about"
          style={linkStyle(hovered === 'about')}
          onMouseEnter={() => setHovered('about')}
          onMouseLeave={() => setHovered(null)}
        >
          About
        </Link>
        <Link
          to="/work"
          style={linkStyle(hovered === 'work')}
          onMouseEnter={() => setHovered('work')}
          onMouseLeave={() => setHovered(null)}
        >
          Work
        </Link>
      </div>
      {imageError && (
        <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'red' }}>
          {imageError}
        </div>
      )}
      {/* <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white' }}>
        <strong>Current Image URL:</strong>
        <div>{backgroundImage}</div>
      </div> */}
    </div>
  );
};

export default HomePage;
