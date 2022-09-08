import React from "react";
import About from "./components/About";
import Dev from "./components/Dev";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Dev />
    </div>
  );
}

export default App;
