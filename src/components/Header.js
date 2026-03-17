// Header.js
// Default export component for the page header

import React from "react";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1>My Modular React Application</h1>
    </header>
  );
}

// Simple inline styles to keep the component self‑contained
const styles = {
  header: {
    backgroundColor: "#282c34",
    padding: "20px",
    color: "white",
    textAlign: "center",
  },
};
