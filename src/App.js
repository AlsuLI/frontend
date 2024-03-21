import React from "react";
import "./global.scss";


import { Header, About, Work, Skills, Footer } from "./container";
import { Testimonial } from "./container/Testimonial/Testimonial";
import { Navbar } from "./components/Navbar/Navbar";
import { BackgroundChanger } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default App;