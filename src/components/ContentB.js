// ContentB.js
// Named export component for assignment section B

import React from "react";

export function ContentB() {
  return (
    <section style={styles.section}>
      <h2>Content B</h2>
      <p>
        This is the second content section. It demonstrates another named export
        and helps show modular component structure in React.
      </p>
    </section>
  );
}

// Inline styles to keep the component self‑contained
const styles = {
  section: {
    padding: "20px",
    backgroundColor: "#fff4e6",
    borderRadius: "8px",
    marginBottom: "20px",
  },
};
