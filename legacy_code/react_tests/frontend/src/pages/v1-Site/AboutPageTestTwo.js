import React from "react";
import reducedPhotos from "./reducedPhotos"; // Assuming it's an array of photo objects

const WorkPageTest = () => {
  const styles = {
    container: {
      height: "100vh",
      width: "100vw",
      backgroundImage: "url('/photography/lowres/16710018 copy.JPG')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column", // Arrange elements in a column
      justifyContent: "flex-start", // Start content from the top
      alignItems: "center",
      overflowY: "auto",
      paddingTop: "50px", // Add padding at the top to create space for text
    },
    navLinks: {
      display: "flex",
      justifyContent: "space-around",
      width: "200px",
      marginBottom: "30px",
      color: "white",
      textDecoration: "none",
      fontSize: "1.2rem",
    },
    textBlock: {
      textAlign: "center",
      color: "white",
      fontSize: "2rem",
      marginBottom: "20px",
      width: "55%"
    },
    imageColumn: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "90%", // Images will take up 90% of the page width
      maxWidth: "500px", // Maximum width to prevent it from being too large on large screens
    },
    image: {
      width: "100%",
      marginBottom: "20px", // Adds space between images
      objectFit: "cover", // Ensures the image covers the container while maintaining aspect ratio
    },
    descriptionStyle: {
      fontSize: "20px",
    },
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
