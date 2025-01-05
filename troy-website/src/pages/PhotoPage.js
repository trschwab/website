import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PhotoAlbum from "react-photo-album";

const PhotoPage = () => {
  const galleryStyle = {
    maxWidth: '95%',
    margin: '50px auto',
  };

  const styles = {
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
      padding: "20px",
      display: "grid",
      gap: "20px",
    },
    photoItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    photo: {
      width: "100%",
      height: "auto",
    },
  };

  const [photos, setPhotos] = useState([]);
  const [columns, setColumns] = useState(3);

  const updateColumns = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setColumns(1); // Small screens
    } else if (screenWidth <= 1024) {
      setColumns(2); // Medium screens
    } else {
      setColumns(3); // Large screens
    }
  };

  useEffect(() => {
    // Fetch photos
    const fetchPhotos = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-signed-urls-photos');
        const data = await response.json();
  
        // Map photos to the required structure
        const transformedPhotos = data.map(photo => ({
          src: photo.midres_url,
          width: photo.width || 800, // Replace 800 with actual or approximate width
          height: photo.height || 600, // Replace 600 with actual or approximate height
        }));
  
        setPhotos(transformedPhotos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
  
    fetchPhotos();
  
    // Set up resize listener
    updateColumns(); // Run initially
    window.addEventListener("resize", updateColumns);
  
    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, []);

  if (photos.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
      {/* <div
        style={{
          ...styles.contentContainer,
          gridTemplateColumns: `repeat(${columns}, 1fr)`, // Dynamically set columns
        }}
      >
        {photos.map((photo, index) => (
          <div key={index} style={styles.photoItem}>
            <img
              src={photo.midres_url}
              alt={`Photo ${index + 1}`}
              style={styles.photo}
            />
          </div>
        ))} */}
        <div style={galleryStyle}>  
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          columns={(containerWidth) => {
            if (containerWidth < 700) return 1;
            if (containerWidth < 1000) return 2;
            return 3;
          }}
        />
        </div>
      </div>
  );
};

export default PhotoPage;
