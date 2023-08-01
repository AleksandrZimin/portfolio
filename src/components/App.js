import React from "react";
import "./App.css";
import Header from "./Header";
import Promo from "./Promo";
import About from "./About";
import Curses from "./Curses";
import Portfolio from "./Portfolio";
import Career from "./Career";
import Skills from "./Skills";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper" id="up">
        <Header />
        <Promo />
        <About />
        <Curses />
        <Portfolio />
        <Career />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
