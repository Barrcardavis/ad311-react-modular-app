// SharedComponents.js
// Contains shared UI components using named exports

import React from "react";

export function Button({ label, onClick }) {
  return (
    <button style={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}

// Inline styles to keep the component self‑contained
const styles = {
  button: {
    padding: "10px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "10px",
  },
};
