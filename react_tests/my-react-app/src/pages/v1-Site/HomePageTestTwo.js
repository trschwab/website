import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import images from './images';

const HomePage = () => {
  const [hovered, setHovered] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [imageError, setImageError] = useState('');
  const [showAbout, setShowAbout] = useState(false); // State to toggle the About div
  const [fadeIn, setFadeIn] = useState(false); // State to control fade-in effect

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

  const handleOpenAbout = () => {
    setShowAbout(true);
    setTimeout(() => {
      setFadeIn(true); // Trigger fade-in after modal is shown
    }, 10); // Small delay to ensure modal is visible before fade-in starts
  };

  const handleCloseAbout = () => {
    setFadeIn(false); // Start fade-out effect
    setTimeout(() => {
      setShowAbout(false); // Hide modal after fade-out is complete
    }, 300); // Match this duration with the transition time
  };

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
    top: '8%', // Adjust this value to move the header further down
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
    display: 'flex', // Use flexbox for horizontal alignment
    justifyContent: 'center', // Center links horizontally
  };

  const linkStyle = (isHovered) => ({
    color: isHovered ? '#b6b6b6' : 'white', // Gray out on hover
    fontSize: '30px',
    textDecoration: 'none', // Removes underline from links
    margin: '0 20px', // Space between links
    transition: 'color 0.3s ease', // Smooth transition effect
    cursor: 'pointer', // Make it look like a clickable item
  });

  const aboutModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark semi-transparent background
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    zIndex: 10, // Ensure it appears above everything else
    maxWidth: '600px',
    width: '80%',

  };

  const closeModalStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    cursor: 'pointer',
  };

  const mutedOverlayStyle = {
    background: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
    position: 'absolute',
    top: 0,
    left: 0,
    width: '40%', // Muting only the left 30%
    height: '100%',
    zIndex: 1,
    opacity: fadeIn ? 1 : 0, // Control opacity for fade effect
    transition: 'opacity 0.3s ease-in-out', // Duration of fade-in/out
  };

  const aboutText = {
    top: '100%',
    width: '50%',
    color: 'white'
  };

  return (
    <div style={containerStyle}>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <header style={headerStyle}>Troy Schwab</header>
      <div style={linkContainerStyle}>
        <div
          onClick={handleOpenAbout} // Open the About modal
          style={linkStyle(hovered === 'about')}
          onMouseEnter={() => setHovered('about')}
          onMouseLeave={() => setHovered(null)}
        >
          About
        </div>
        <div
          style={linkStyle(hovered === 'work')}
          onMouseEnter={() => setHovered('work')}
          onMouseLeave={() => setHovered(null)}
        >
          Work
        </div>
      </div>

      {showAbout && (
        <div style={mutedOverlayStyle}>
          <div
            style={closeModalStyle}
            onClick={handleCloseAbout} // Close the modal
          >
            &times; {/* Close button */}
          </div>
          <div style={aboutText}>
          <h2>About Troy Schwab</h2>
          <p>
            Troy Schwab is a data engineer based in New York City, working at Pulse Analytics. 
            He enjoys composing, and his website collects his public computer science work, compositions, 
            and other miscellaneous items.
          </p>
          </div>
        </div>
      )}

      {imageError && (
        <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'red' }}>
          {imageError}
        </div>
      )}
    </div>
  );
};

export default HomePage;
