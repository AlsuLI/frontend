import React from "react";
import "./global.scss";


import { Header, About, Work } from "./container";
import { Skills } from "./container/Skills/Skills";
import { Testimonial } from "./container/Testimonial/Testimonial";
import { Footer } from "./container/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;