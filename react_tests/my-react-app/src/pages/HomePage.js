// src/pages/HomePage.js
import React from 'react';
import '../styles.css';

const HomePage = () => {
    const centerStyle = {
        textAlign: 'center'
      };

  return (
	<div className="wrapper">

      {/* <img src="/welcome.jpg" alt="Welcome Image" /> */}
    <p style={centerStyle}>
	<img src="/welcome.jpg" alt="photo that says welcome" class="welcome_image" />
	</p>
    </div>
  );
};

export default HomePage;
