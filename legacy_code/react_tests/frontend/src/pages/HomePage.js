import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles_v2.css';

const HomePage = () => {
  const [hovered, setHovered] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [imageError, setImageError] = useState('');

  useEffect(() => {
    // Fetch the signed URLs from the backend
    const fetchSignedUrls = async () => {
      try {
        const response = await fetch('http://localhost:3000/get-signed-urls');
        const data = await response.json();

        // Select a random image from the signed URLs
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedImage = data[randomIndex].src;
        setBackgroundImage(selectedImage);

        // Check if the image loads successfully
        const img = new Image();
        img.src = selectedImage;
        img.onload = () => {
          setImageError('');
        };
        img.onerror = () => {
          setImageError('Image failed to load: ' + selectedImage);
        };
      } catch (error) {
        console.error('Error fetching signed URLs:', error);
        setImageError('Failed to load background image.');
      }
    };

    fetchSignedUrls();
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
    position: 'relative', // Allows absolute positioning of header and links
  };

  const headerStyle = {
    position: 'absolute',
    top: '8%',
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
    display: 'flex',
    justifyContent: 'center',
  };

  const linkStyle = (isHovered) => ({
    color: isHovered ? '#b6b6b6' : 'white',
    fontSize: '30px',
    textDecoration: 'none',
    margin: '0 20px',
    transition: 'color 0.3s ease',
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
          to="/photography"
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
    </div>
  );
};

export default HomePage;
