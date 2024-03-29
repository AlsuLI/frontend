import React, { useState } from "react";
import "./Navbar.scss";
import images from "../../constants/images";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const links = ["главная", "навыки", "портфолио", "опыт", "обо мне", "контакты"];
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {links.map((link) => (
          <li className="app__flex p-text" key={`${link}`}>
            <div />
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link}`} onClick={() => setToggle(false)}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
