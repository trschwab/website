import React from "react";
import reducedPhotos from "./reducedPhotos"; // Assuming it's an array of photo objects

const WorkPageTest = () => {

  };

  return (
    <div style={styles.container}>
      {/* Top Navigation Links */}
      <div style={styles.navLinks}>
        <a href="/homepagetest" style={{ fontSize: "30px", color: "white", textDecoration: "none" }}>Home</a>
        <a href="/workpagetest" style={{ fontSize: "30px", color: "white", textDecoration: "none" }}>Work</a>
      </div>

      {/* Text Block */}
      <div style={styles.textBlock}>
        <p style={styles.descriptionStyle}>
          I am a Data Engineer, a Composer, and a Photographer, based in New York City. This website serves to collect 
            any various work I have as it might be related to computer science or music, series of photos I have, even blog posts.
            <br /><br />
            If you’d like to contact me, you can email me at trschwab7 @ gmail.com.</p>
      </div>
      <br /><br/>

      <br /><br />
    </div>
  );
};

export default WorkPageTest;
