// src/pages/HomePage.js
import React from 'react';
import '../styles.css';
import { Helmet } from 'react-helmet';

const HomePage = () => {
    const centerStyle = {
        textAlign: 'center'
      };

  return (
	<div className="wrapper">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Troy Schwab's website including details and content regarding work, music, and photography." />
      </Helmet>
      {/* <img src="/welcome.jpg" alt="Welcome Image" /> */}
    <p style={centerStyle}>
	<img src="/welcome.jpg" alt="photo that says welcome" class="welcome_image" />
	</p>
    </div>
  );
};

export default HomePage;
