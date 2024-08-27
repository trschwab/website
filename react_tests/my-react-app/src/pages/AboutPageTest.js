// src/pages/AboutPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const images = [
  "/photography/midres/09630021.JPG",
  "/photography/midres/16670007.JPG",
  "/photography/midres/16700024.JPG",
  "/photography/midres/06590016.JPG",
  "/photography/midres/06720006.JPG",
  "/photography/midres/06660009.JPG",
  "/photography/midres/000017370015.jpg",
  "/photography/midres/16570002.JPG",
  "/photography/midres/000019180025.jpg",
  "/photography/midres/89950011.JPG",
  "/photography/midres/10950014.JPG",
  "/photography/midres/14070017.JPG"
];

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

  const linkTwoStyle = {
    position: 'absolute',
    top: '16%',
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

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}></div> {/* Full background image */}
      <div style={mutedOverlayStyle}></div> {/* Muted overlay on the left 30% */}
      <Link to="/homepagetest" style={linkStyle}>
        Troy Schwab
      </Link>
      <Link to="/workpagetest" style={linkTwoStyle}>
        Work
      </Link>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          {/* <h1>About Me</h1> */}
          <p>
            I am a Data Engineer, a Composer, and a Photographer, based in New York City. This website serves to collect 
            any various work I have as it might be related to computer science or music, series of photos I have, even blog posts.
            {'\n'}{'\n'}
            If you’d like to contact me, you can email me at trschwab7 @ gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPageTest;
