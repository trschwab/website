// src/pages/AboutPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import images from './images';
import photos from './italyphotos';
import BlurUpImage from '../components/BlurUpImage';
import LowResImage from '../components/LowResImage';

const AboutPageTest = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [hovered, setHovered] = useState(null);
  const [showAbout, setShowAbout] = useState(false); // State to toggle the About div
  const [fadeIn, setFadeIn] = useState(false); // State to control fade-in effect

  useEffect(() => {
    // Randomly select an image from the array
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);
  }, []);

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    position: 'relative',
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  const mutedOverlayStyle = {
    background: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
    position: 'absolute',
    top: 0,
    left: 0,
    width: '40%', // Muting only the left 30%
    height: '100%',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2, // Ensures the content appears above the muted overlay
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    paddingLeft: '40px', // Adds some padding to the content
  };

  const linkStyle = {
    position: 'absolute',
    top: '8%',
    left: '8%',
    color: 'white',
    fontSize: '24px',
    textDecoration: 'none',
    zIndex: 3, // Ensures the link appears above all content
  };

  const postStyle = {
    left: '8%',
    color: 'white',
    fontSize: '24px',
    textDecoration: 'none',
    zIndex: 3, // Ensures the link appears above all content
  };

  const textContainerStyle = {
    color: 'white',
    width: '28%', // Take up the full width of the muted area
    textAlign: 'left',
  };

  const scrollable = {
    height: '400px', // Set the height you want
    overflowY: 'auto', // Enable vertical scrolling
    border: '1px solid rgba(204, 204, 204, 1)',
  };

  const parentContainerStyle = {
    width: '70vw', // 70% of the viewport width
    height: '100vh', // Full height of the viewport
    position: 'absolute',
    top: 0,
    right: 0, // Position it on the right side
    display: 'flex', // Use flexbox to align content
    justifyContent: 'center', // Horizontally center the child div
    alignItems: 'center', // Vertically center the child div
    paddingTop: '5vh', // Add top padding
    paddingBottom: '5vh', // Add bottom padding
    boxSizing: 'border-box', // Ensures padding doesn't affect the total width/height
    zIndex: 3,
    overflowY: 'auto', // Enable vertical scrolling
  };

  const mutedOverlayStyleTwo = {
    background: 'rgba(0, 0, 0, 0.8)',
    width: '60%',
    height: '105%', // Adjust this height as needed
    overflowY: 'auto', // Enables vertical scrolling within this div
    padding: '20px',
    boxSizing: 'border-box',
    zIndex: 5,
  };

  const closeModalStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    cursor: 'pointer',
  };

  const aboutText = {
    top: '100%',
    width: '50%',
    color: 'white'
  };


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

  const linkStyleHover = (isHovered) => ({
    color: isHovered ? '#b6b6b6' : 'white', // Gray out on hover
    fontSize: '30px',
    textDecoration: 'none', // Removes underline from links
    margin: '0 20px', // Space between links
    transition: 'color 0.3s ease', // Smooth transition effect
    cursor: 'pointer', // Make it look like a clickable item
  });

  
  const sectionStyleMobile = {
    lineHeight: 0,
    WebkitColumnGap: '0px',
    columnGap: '0px',
    MozColumnGap: '0px',
    WebkitColumnCount: 1,
    MozColumnCount: 1,
    columnCount: 1,
    maxHeight: '80vh', // Set a maximum height to allow scrolling within the viewport
    overflowY: 'auto', // Enable vertical scrolling
    padding: '10px', // Optional: Add some padding if needed
    boxSizing: 'border-box', // Ensure padding doesn’t affect the total size
  };
  
  const photoContainer = {
    display: 'flex',
    flexDirection: 'column', // Stack images vertically
    alignItems: 'center', // Center images horizontally in the column
    gap: '10px', // Space between images
    width: '100%', // Ensure column takes full width of the container
    maxWidth: '600px', // Optional: Set a maximum width for the column
  }

  const photoStyle = {
    maxWidth: '100%', // Image will scale down to fit the width of its container
    height: 'auto',   // Maintains the aspect ratio
    objectFit: 'cover', // Ensure the image covers the space while maintaining aspect ratio
  };

  
  const photoWrapperStyle = {
    padding: '10px', // Add padding on all sides (top, right, bottom, left)
    display: 'inline-block',
    width: '100%',
    boxSizing: 'border-box',
  };

const photoDisplay = photos;
const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

return (
    <div style={containerStyle}>
      <div style={backgroundStyle}></div> {/* Full background image */}
      <div style={mutedOverlayStyle}></div> {/* Muted overlay on the left 30% */}
      <p style={linkStyle}>
      <Link to="/homepagetest" style={{ color: 'white' }}>
        Troy Schwab
      </Link>
      <br /><br />
      <Link to="/aboutpagetest" style={{ color: 'white' }}>
        About
      </Link>
      </p>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
        <div style={scrollable}>
      {/* <Link to="/italy2024test" style={postStyle}>
        Italy, 2024 (Photography)
      </Link> */}
    
    <div
          onClick={handleOpenAbout} // Open the About modal
          style={linkStyleHover(hovered === 'about')}
          onMouseEnter={() => setHovered('about')}
          onMouseLeave={() => setHovered(null)}
        >
          Italy Block
        </div>

      <br />
      Rome and Positano were the main cities who I had the opportunity to shoot
      <br /><br />
      <Link to="/link2" style={postStyle}>
        New York, 2024 (Photography)
      </Link>
      <br />
      An ongoing compilation of my year in photography at home
      <br /><br />
      <Link to="/link2" style={postStyle}>
        Link 2
      </Link>
      <br />
      Some small note
      <br /><br />
      <Link to="/link2" style={postStyle}>
        On DJs (text)
      </Link>
      <br />
      Some small note
      <br /><br />
      <Link to="/link2" style={postStyle}>
        On Testing (Text)
      </Link>
      <br />
      Some small note
      <br /><br />
      <Link to="/link2" style={postStyle}>
        Cincinnati, 2024 (Photography)
      </Link>
      <br />
      I grew up in Cincinnati and this is the first time I came back prepared to shoot film
      <br /><br />
      <Link to="/link2" style={postStyle}>
        Once and Forever (Text)
      </Link>
      <br />
      A collection of short stories and children's tales by Kenji Miyazawa
      <br /><br />
      <Link to="/link2" style={postStyle}>
        Miami, 2024 (Photography)
      </Link>
      <br />
      A small family vacation for Christmas in Miami
      <br /><br />
      <Link to="/cocktails" style={postStyle}>
        On Cocktails (Text)
      </Link>
      <br />
      Some of my favorite cocktails from the first few years of the hobby
      <br /><br />
      <Link to="/cocktails" style={postStyle}>
        Early Shots (Photography)
      </Link>
      <br />
      A compilation of photography as I began to learn more about what I like to shoot, and how to shoot it.
      <br /><br />
      </div>
        </div>
      </div>

      {showAbout && (
  <div style={parentContainerStyle}>
    <div style={mutedOverlayStyleTwo}>
      <div
        style={closeModalStyle}
        onClick={handleCloseAbout}
      >
        &times;
      </div>
      <div style={aboutText}>
        <h2>Italy 2024</h2>
      </div>
      <div style={photoContainer}>
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          alt={photo.alt}
          style={photoStyle}
        />
      ))}
      </div>
    </div>
  </div>
)}



    </div>
  );
};

export default AboutPageTest;
