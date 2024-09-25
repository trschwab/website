import React from "react";
import { Link } from "react-router-dom";
import PhotoAlbum from "react-photo-album";
import '../styles_v2.css';

const photos = [
  { src: "/media/music_page_media/dj_roof_3.png", width: 1500, height: 2700 },
  { src: "/media/Burnt-cover-back.jpeg", width: 3200, height: 3200 },
  { src: "/media/music_page_media/dj_roof_5.png", width: 2700, height: 1500 },
  { src: "/media/000307350028.jpg", width: 1800, height: 1200 },
  { src: "/media/studio.png", width: 1000, height: 1000 },
  { src: "/media/IMG_9431.PNG", width: 1500, height: 2000 },
  { src: "/media/000307350033.jpg", width: 1200, height: 1800 },
  { src: "/media/000307360023.jpg", width: 1800, height: 1200 },
  { src: "/media/Earthquake.jpg", width: 1000, height: 1000 },
  { src: "/media/guitar_photo_recolored.jpeg", width: 1500, height: 1000 },
  { src: "/media/EP - Disco Didn't Die.jpeg", width: 1000, height: 1000 },
  { src: "/media/gray4.png", width: 2048, height: 1360 },
  { src: "/media/dj_pic_2.png", width: 1500, height: 2000 },
  { src: "/media/NicolePlay_v2_Selects_Instagram.jpg", width: 1500, height: 2000 },
  { src: "/media/sundry.png", width: 2250, height: 1000 },
  { src: "/media/visual_disturbances_2.png", width: 1500, height: 1000 },
  { src: "/media/360_record_shop.png", width: 1000, height: 1700 },
  { src: "/media/Recital.png", width: 1800, height: 1000 },
  { src: "/media/dj_pic.png", width: 1900, height: 1000 },
  { src: "/media/meajbiokjnbnpjik.png", width: 1500, height: 2300 },
  { src: "/media/finest_hour.png", width: 1000, height: 1000 }
];

const MusicPage = () => {
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
          <PhotoAlbum layout="masonry" photos={photos}
      columns={(containerWidth) => {
        if (containerWidth < 500) return 1;
        if (containerWidth < 800) return 2;
        return 3;
  }}/>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
