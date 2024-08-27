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
      <Link to="/italy2024test" style={postStyle}>
        Italy, 2024 (Photography)
      </Link>
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
    </div>
  );
};

export default AboutPageTest;
