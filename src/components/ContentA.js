// ContentA.js
// Named export component for assignment section A

import React from "react";

export function ContentA() {
  return (
    <section style={styles.section}>
      <h2>Content A</h2>
      <p>
        This is the first content section. It demonstrates how to use a named
        export in a modular React component.
      </p>
    </section>
  );
}

// Inline styles to keep the component self‑contained
const styles = {
  section: {
    padding: "20px",
    backgroundColor: "#e8f4ff",
    borderRadius: "8px",
    marginBottom: "20px",
  },
};
