import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import BlurUpImage from '../components/BlurUpImage';
import LowResImage from '../components/LowResImage';
import photos from "./allPhotos";

const sectionStyle = {
  lineHeight: 0,
  WebkitRowGap: '0px',
  columnGap: '0px',
  MozColumnGap: '0px',
  WebkitColumnCount: 3,
  MozColumnCount: 3,
  columnCount: 3,
};

const sectionStyleMobile = {
  lineHeight: 0,
  WebkitColumnGap: '0px',
  columnGap: '0px',
  MozColumnGap: '0px',
  WebkitColumnCount: 1,
  MozColumnCount: 1,
  columnCount: 1,
};

const sectionStyleDesktop = {
  lineHeight: 0,
  WebkitColumnGap: '0px',
  columnGap: '0px',
  MozColumnGap: '0px',
  WebkitColumnCount: 3,
  MozColumnCount: 3,
  columnCount: 3,
};


const photoWrapperStyle = {
  padding: '10px', // Add padding on all sides (top, right, bottom, left)
  display: 'inline-block',
  width: '100%',
  boxSizing: 'border-box',
};

function reorganizePhotos(photos) {
  const numPhotos = photos.length;
  const numColumns = 3;
  const columnHeight = Math.ceil(numPhotos / numColumns);
  const newPhotos = new Array(numPhotos);

  for (let i = 0; i < numPhotos; i++) {
      // Calculate new position
      const column = i % numColumns;
      const row = Math.floor(i / numColumns);
      const newIndex = column * columnHeight + row;

      // Place photo in new position
      newPhotos[newIndex] = photos[i];
  }

  return newPhotos;
}

const reorganizedPhotos = reorganizePhotos(photos);

const PhotoPage = () => {

  const styles = {
    container: {
      height: "100vh",
      width: "100vw",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      overflowY: "auto",
    },
    header: {
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      boxSizing: "border-box",
      color: "white",
    },
    logo: {
      fontSize: "24px",
      color: "black",
      textDecoration: "none",
    },
    navLinks: {
      display: "flex",
      gap: "20px",
      listStyle: "none",
      paddingRight: "20px",
    },
    navLink: {
      color: "black",
      textDecoration: "none",
      fontSize: "18px",
    },
    contentContainer: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: "100px", // Leaves space for the header
      backgroundColor: "#f9f9f9",
    },
    contentBox: {
      maxWidth: "800px",
      textAlign: "center",
      padding: "40px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
    },
    heading: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333",
    },
    paragraph: {
      fontSize: "18px",
      lineHeight: "1.6",
      marginBottom: "20px",
      color: "#555",
    },
    email: {
      fontSize: "18px",
      color: "#0073e6",
      textDecoration: "none",
    },
    footer: {
      marginTop: "30px",
      fontSize: "16px",
      color: "#666",
    },
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionStyle = isMobile ? sectionStyleMobile : sectionStyleDesktop;
  const photoDisplay = isMobile ? photos : reorganizedPhotos;


  return (
    <div style={styles.container}>
      {/* Navigation Header */}
      <header style={styles.header}>
        <Link to="/homepagetest" style={styles.logo}>Troy Schwab</Link>
        <nav>
          <ul style={styles.navLinks}>
            <li>
              <Link to="/musicpagetest" style={styles.navLink}>Music</Link>
            </li>
            <li>
              <Link to="/photopagetest" style={styles.navLink}>Photography</Link>
            </li>
            {/* <li>
              <Link to="/notespagetest" style={styles.navLink}>Notes</Link>
            </li> */}
            <li>
              <Link to="/aboutpagetest" style={styles.navLink}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div style={styles.contentContainer}>
      <section id="photos" style={sectionStyle}>
      {photoDisplay.map((photo, index) => (
        <div key={index} style={photoWrapperStyle}>
          {isMobile ? (
            <LowResImage
              src={photo.src.replace('midres', 'lowres')}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
            />
          ) : (
            <BlurUpImage
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
            />
          )}
        </div>
      ))}
    </section>
    </div>

    </div>
  );
};

export default PhotoPage;
