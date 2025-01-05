import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import '../styles_v2.css';

const MusicPage = () => {
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
        const response = await fetch('http://localhost:5000/get-signed-urls-photos-music');
        const data = await response.json();
  
        // Map photos to the required structure
        const transformedPhotos = data.map(photo => ({
          src: photo.src,
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

  const galleryStyle = {
    maxWidth: '95%',
    margin: '50px auto',
  };

  const styles = {
    container: {
      height: "100vh",
      width: "100vw",
      backgroundSize: "cover",
      backgroundColor: "white",
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
    contentBox: {
      maxWidth: "800px",
      textAlign: "left",
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
    photoAlbumContainer: {
      maxWidth: "100%", // Constrain the photo album to the width of the page
      padding: "20px",
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

  return (
    <div style={styles.container}>
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
        <div style={styles.contentBox}>
          <h4>Burnt EP</h4>
          <p>2024 EP titled Burnt
          <br />
          With <a href="https://www.discogs.com/release/31654388-Troy-Schwab-Burnt-Ep" target="_blank" rel="noopener noreferrer">Vinyl</a> & 
          <a href="https://open.spotify.com/album/45aSwIWApQuRJsdOWSUouk?si=e5x3ZtGOSTyP2M-GeEPVjw" target="_blank" rel="noopener noreferrer">Digital</a> release</p>
          <br></br>
          <h4>Live Guitar</h4>
          <p>2023 performance at The Tank for one-act plays written by Nicole Frances Goth and Pat D Robinson</p>
          <br></br>
          <h4>Earthquake Single</h4>
          <p>
            2021 single titled <a href="https://open.spotify.com/album/4K066FJKZ8mbmAyVF4ZBq4?si=YHy0KE72Txu8ydCd6Zue8Q" target="_blank" rel="noopener noreferrer">Earthquake</a>
          </p>
          <br></br>
          <h4>Sundry</h4>
          <p>
            2021 Music for Gray Deuber's short film titled <a href="https://www.imdb.com/title/tt14056848/" target="_blank" rel="noopener noreferrer">Sundry</a>
          </p>
          <br></br>
          <h4>Disco Didn't Die EP</h4>
          <p>
            2020 EP titled <a href="https://open.spotify.com/album/6H8F4obcl91gxBawGj7U6n?si=3aUUxat_R_uLiLLiAyaiOA" target="_blank" rel="noopener noreferrer">Disco Didn't Die</a>
          </p>
          <br></br>
          <h4>The Finest Hour in an Infinite Journey</h4>
          <p>
            2019 single for Yuan Gao's short film titled <a href="https://youtu.be/p09OnCrNTow?t=746" target="_blank" rel="noopener noreferrer">The Finest Hour in an Infinite Journey</a>
          </p>
          <br></br>
          <h4>Visual Disturbances OST</h4>
          <p>
            2017 score for Eric Faden's feature film titled <a href="https://vimeo.com/302106011" target="_blank" rel="noopener noreferrer">Visual Disturbances</a>
          </p>
          <br></br>
          <h4>NYU Steinhardt</h4>
          <p>2016 performance at NYU Steinhardt's Interactive Performance Art Concert Series.</p>
          <br></br><br></br>
          <br></br><br></br>
          {/* <div
        style={{
          ...styles.contentContainer,
          gridTemplateColumns: `repeat(${columns}, 1fr)`, // Dynamically set columns
        }}
      >
        {photos.map((photo, index) => (
          <div key={index} style={styles.photoItem}>
            <img
              src={photo.src}
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
            if (containerWidth < 450) return 1;
            if (containerWidth < 600) return 2;
            return 3;
          }}
        />
        </div>
        </div>

      </div>
      
    </div>
    
  );
};

export default MusicPage;
