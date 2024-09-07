import React from "react";
import "./global.scss";

import { Header, About, Work, Skills, Footer } from "./container";
import { Navbar } from "./components/Navbar/Navbar";
import { BackgroundChanger } from "./components";
import BoxScroll from "./components/BoxScroll/BoxScroll";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      {/* <BoxScroll /> */}
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
