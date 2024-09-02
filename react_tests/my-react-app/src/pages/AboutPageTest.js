// src/pages/AboutPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import images from './images';

const AboutPageTest = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

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
    overflow: 'hidden',
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
    background: 'rgba(0, 0, 0, 0.60)', // Dark overlay effect
    position: 'absolute',
    top: 0,
    left: 0, // Align to the left
    right: 0, // Align to the right
    width: '80%', // Set the width you need
    height: '100%',
    margin: '0 auto', // Center the div horizontally
    zIndex: 1,
  };
  

  const contentStyle = {
    position: 'relative',
    zIndex: 2, // Ensures the content appears above the muted overlay
    display: 'flex',
    alignItems: 'center', // Centers the content vertically
    justifyContent: 'center', // Centers the content horizontally
    height: '100vh',
    paddingLeft: '40px', // Optional: Adjust/remove if not needed for centering
  };
  

  const linkStyle = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // This centers the element based on its own width and height
    color: 'white',
    fontSize: '24px',
    textDecoration: 'none',
    zIndex: 3, // Ensures the link appears above all content
  };
  

  const linkTwoStyle = {
    position: 'absolute',
    top: '16%',
    left: '8%',
    color: 'white',
    fontSize: '24px',
    textDecoration: 'none',
    textAlign: 'center',
    zIndex: 3, // Ensures the link appears above all content
  };

  const textContainerStyle = {
    color: 'white',
    fontSize: '30px',
    width: '40%', // Take up the full width of the muted area
    textAlign: 'left',
  };

  const scrollable = {
    height: '50%', // Set the height you want
    overflowY: 'auto', // Enable vertical scrolling
    border: '1px solid #ccc', // Optional: for visual reference
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}></div> {/* Full background image */}
      <div style={mutedOverlayStyle}></div> {/* Muted overlay on the left 30% */}
      <p style={linkStyle}>
      <Link to="/homepagetest" style={{ color: 'white' }}>
        Troy Schwab
      </Link>
      <br /><br />
      <Link to="/workpagetest" style={{ color: 'white' }}>
        Work
      </Link>
      </p>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <div style={scrollable}>
          {/* <p>
            I am a Data Engineer, a Composer, and a Photographer, based in New York City. This website serves to collect 
            any various work I have as it might be related to computer science or music, series of photos I have, even blog posts.
            <br /><br />
            If you’d like to contact me, you can email me at trschwab7 @ gmail.com.
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageTest;
