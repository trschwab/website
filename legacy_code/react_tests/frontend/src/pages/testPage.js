import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles_v2.css';

const HomePage = () => {
  const [imageUrl, setImageUrl] = useState(''); // State to store the image URL

  // Fetch the pre-signed URL from the backend
  useEffect(() => {
    fetch('http://localhost:3000/get-signed-url/000003210002.jpg') // Call the backend to get the signed URL
      .then(response => response.json())
      .then(data => setImageUrl(data.url))
      .catch(err => console.error('Error fetching signed URL', err));
  }, []);

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
      paddingTop: "20px", // Leaves space for the header
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
      fontSize: "24px",
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
    image: {
      maxWidth: "100%",   // Ensure the image doesn't overflow
      height: "auto",
      margin: "20px 0",
    }
  };

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

      {/* Main Content */}
      <div style={styles.contentContainer}>
        <div style={styles.contentBox}>

          {/* Display the image from S3 */}
          {imageUrl ? (
            <img src={imageUrl} alt="S3 Image" style={styles.image} />
          ) : (
            <p>Loading image...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
