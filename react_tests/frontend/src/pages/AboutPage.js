import React from "react";
import { Link } from "react-router-dom";
import '../styles_v2.css';

const HomePage = () => {

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
            {/* <li>
              <Link to="/notespagetest" style={styles.navLink}>Notes</Link>
            </li> */}
            <li>
              <Link to="/about" style={styles.navLink}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div style={styles.contentContainer}>
        <div style={styles.contentBox}>
          {/* <h3 style={styles.heading}>Hi, I’m Troy and this is my website.</h3> */}
          <p style={styles.paragraph}>
              Troy Schwab is a New York City based programmer, photographer, and musician.
              <br></br><br></br>
              His work as a Data Engineer, currently at Pulse Analytics, innovates modern extraction pipelines with a 
              contemporary data stack. 
              Technologies include Python, SQL, and typical Data Engineer tools like Pandas or BeautifulSoup, AWS products like S3, 
              Athena, Cloudwatch, or Airflow, infrastructure methodologies involving Poetry, Docker, Container Repositories, DAGS, 
              with varying innovative technology like UIPath, NLP, Apryse, among others.
              Before this, he played an integral role at the 2020 Census with Accenture 
              Federal Services – building out the processing, storage, and analytics for all responses received.
              The tech stack was based in Hadoop, involving Java, NiFi, Oozie, XML, Hive, and more.
              In 2018 he was published as a co-author in an American Society for Engineering Education&nbsp;
              <a href="https://peer.asee.org/bias-in-first-year-engineering-student-peer-evaluations" target="_blank" rel="noopener noreferrer">
              paper
              </a>. 
              His personal work introduces React and Django as other tools he has strong experience with.
              <br></br><br></br>
              Since 2016, he's performed in varying capacities as a multi-instrumentalist, composed for a number of short
              films and documentaries, and DJ'ed with both digital decks and vinyl turntables.
              He's released several projects independently, notably the vinyl release of his EP Burnt in 2024.
              <br></br><br></br>
              In his spare time he takes photographs, a number of which are compiled on this website.
            </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
