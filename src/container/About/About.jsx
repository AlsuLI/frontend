import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrapper, MotionWrapper } from "../../wrapper";
import images from "../../constants/images"

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //     console.log(data);
  //   });
  // }, []);

  const abouts = [
    {
      id: 1,
      img: images.frontend,
      title: "Frontend developer",
      description:
        "I am a junior frontend developer! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ullam consectetur nemo minus delectus. Reiciendis corrupti quisquam reprehenderit exercitationem sapiente adipisci rem, provident, possimus maiores ipsa inventore, molestiae dignissimos tempore? ",
    },
    {
      id: 2,
      img: images.webD,
      title: "Web designer",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ullam consectetur nemo minus delectus. Reiciendis corrupti quisquam reprehenderit exercitationem sapiente adipisci rem, provident, possimus maiores ipsa inventore, molestiae dignissimos tempore?",
    },
    {
      id: 3,
      img: images.js,
      title: "JavaScript developer",
      description:
        "I love coding Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ullam consectetur nemo minus delectus. Reiciendis corrupti quisquam reprehenderit exercitationem sapiente adipisci rem, provident, possimus maiores ipsa inventore, molestiae dignissimos tempore?",
    },
  ];

  return (
    <>
      <h2 className="head-text">
        <span></span>Мои навыки и знания
      </h2>
      <div className="app__profiles">
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + about.id}
          >
            <img src={about.img} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
        ;
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrapper(About, "app__about"),
  "about",
  "app__whitebg"
);
