import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import BlurUpImage from '../components/BlurUpImage';
import LowResImage from '../components/LowResImage';
import '../styles_v2.css';

const sectionStyleMobile = {
  lineHeight: 0,
  columnGap: '0px',
  columnCount: 1,
};

const sectionStyleDesktop = {
  lineHeight: 0,
  columnGap: '0px',
  columnCount: 3,
};

const photoWrapperStyle = {
  padding: '10px',
  display: 'inline-block',
  width: '100%',
  boxSizing: 'border-box',
};

const reorganizePhotos = (photos) => {
  const numPhotos = photos.length;
  const numColumns = 3;
  const columnHeight = Math.ceil(numPhotos / numColumns);
  const newPhotos = new Array(numPhotos);

  for (let i = 0; i < numPhotos; i++) {
    const column = i % numColumns;
    const row = Math.floor(i / numColumns);
    const newIndex = column * columnHeight + row;
    newPhotos[newIndex] = photos[i];
  }

  return newPhotos;
};

const PhotoPage = () => {
  const styles = {
    container: {
      height: "100vh",
      width: "100vw",
      backgroundColor: "white",
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
      paddingTop: "20px",
      backgroundColor: "#f9f9f9",
    },
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [photos, setPhotos] = useState([]);

  // Fetch signed URLs from the backend
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('http://localhost:3000/get-signed-urls-photos'); // Adjust the URL if necessary
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching signed URLs:", error);
      }
    };

    fetchPhotos();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionStyle = isMobile ? sectionStyleMobile : sectionStyleDesktop;
  const reorganizedPhotos = reorganizePhotos(photos);

  return (
    <div style={styles.container}>
      {/* Navigation Header */}
      <header style={styles.header}>
        <Link to="/" style={styles.logo}>Troy Schwab</Link>
        <nav>
          <ul style={styles.navLinks}>
            <li>
              <Link to="/music" style={styles.navLink}>Music</Link>
            </li>
            <li>
              <Link to="/photography" style={styles.navLink}>Photography</Link>
            </li>
            <li>
              <Link to="/about" style={styles.navLink}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div style={styles.contentContainer}>
      <section>
      {reorganizedPhotos.map((photo, index) => (
        <div key={index} style={photoWrapperStyle}>
          <p>{photo.midres}</p>
          <p>{photo.width}</p>
          <p>{photo.height}</p>
          <p>{photo.lowres}</p>
          {/* <img
            src={photo.src}
            width={photo.width}
            height={photo.height}
          /> */}
          </div>
        ))}
        </section>
      </div>
    </div>
  );
};

export default PhotoPage;
