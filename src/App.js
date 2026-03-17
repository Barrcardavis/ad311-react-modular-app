// App.js
// Main application file that imports and uses modular components

import React from "react";

// Default exports
import Header from "./components/Header";
import Footer from "./components/Footer";

// Named exports
import { ContentA } from "./components/ContentA";
import { ContentB } from "./components/ContentB";
import { Button } from "./components/SharedComponents";

function App() {
  // Example click handler for the shared Button component
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div style={styles.container}>
      <Header />

      <main style={styles.main}>
        <ContentA />
        <Button label="Click Me (A)" onClick={handleClick} />

        <ContentB />
        <Button label="Click Me (B)" onClick={handleClick} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

// Inline styles to keep everything self‑contained
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  main: {
    maxWidth: "800px",
    margin: "0 auto",
  },
};
