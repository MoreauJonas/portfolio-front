import React from "react";

import About from "./screens/About";
import Profil from "./screens/Profil";
import Skills from "./screens/Skills";
import Work from "./screens/Work";
import Navbar from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
import Header from "./components/templates/Header";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Profil />
      <Footer />
    </div>
  );
};

export default App;
