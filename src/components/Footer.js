// Footer.js
// Default export component for the page footer

import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 My Modular React Application</p>
    </footer>
  );
}

// Inline styles to keep the component self‑contained
const styles = {
  footer: {
    backgroundColor: "#f0f0f0",
    padding: "15px",
    textAlign: "center",
    color: "#333",
    marginTop: "40px",
  },
};
