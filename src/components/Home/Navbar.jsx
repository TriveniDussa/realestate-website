import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 8%",
      backgroundColor: "#fff",
      boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
      position: "sticky",
      top: "0",
      zIndex: "1000",
    },
    logo: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#2c3e50",
      margin: 0,
    },
    navList: {
      display: "flex",
      listStyle: "none",
      gap: "30px",
      margin: 0,
      padding: 0,
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontSize: "17px",
      fontWeight: "500",
      transition: "0.3s",
    },
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>🏠 Dream Homes</h2>

      <ul style={styles.navList}>
        <li><Link style={styles.link} to="/">Home</Link></li>
        <li><Link style={styles.link} to="/properties">Properties</Link></li>
        <li><Link style={styles.link} to="/about">About</Link></li>
        <li><Link style={styles.link} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;