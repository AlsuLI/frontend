import React from "react";
import "./Header.scss";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { AppWrapper } from "../../wrapper";
import { FloatingWindow } from "../../components";
import ParallaxText from "../../components/ParallaxText/ParallaxText";

const scaleVariants = {
  whileInView: {
    opacity: [0.5, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div id="home" className="app__header app__flex">
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {/* {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))} */}
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <motion.div
          initial={{ x: "120%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          style={{
            top: 0,
            left: 0,
          }}
          className="app__header__moving-text"
        >
          REACT JAVASCRIPT SCSS REACT JAVASCRIPT SCSS REACT JAVASCRIPT SCSS
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100vw" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          style={{
            top: 40,
            left: 0,
          }}
          className="app__header__moving-text"
        >
          REACT JAVASCRIPT SCSS REACT JAVASCRIPT SCSS REACT JAVASCRIPT SCSS
        </motion.div>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-140%" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          style={{
            top: 80,
            left: 0,
          }}
          className="app__header__moving-text"
        >
          REACT JAVASCRIPT SCSS REACT JAVASCRIPT SCSS REACT JAVASCRIPT SCSS
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "140vw" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          style={{
            top: 180,
            left: 0,
          }}
          className="app__header__moving-text"
        >
          REACT JAVASCRIPT SCSS REACT JAVASCRIPT SCSS REACT JAVASCRIPT SCSS
        </motion.div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ x: [-300, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8 }}
      className="app__header-info"
    >
      <div className="app__header-img-wrapper">
        <img className="app__header-img" src={images.alsu_orange} alt="Alsu" />
      </div>

      <div className="badge-cmp app__flex">
        <p className="header-text">Привет, я Алсу</p>
        <p className="header-text-sm">
          Твой Frontend разработчик. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi repellendus minus hic, aut, eius, voluptates
          rerum dolorem qui placeat sint ut possimus numquam! Ullam consequatur
          explicabo consectetur quaerat obcaecati! Voluptatibus!
        </p>
      </div>
    </motion.div>

    {/* <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div> */}
  </div>
);

export default Header;
