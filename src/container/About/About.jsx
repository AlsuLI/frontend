import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { urlFor, client } from "../../client";

// const about = [
//   {
//     title: "Frontend Development",
//     description: "I am a good developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Web animation",
//     description: "I am a good developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Frontend Development",
//     description: "I am a good developer",
//     imgUrl: images.about03,
//   },
// ];

export const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        {" "}
        I know that <span>Good development</span> <br /> means{" "}
        <span>Good business</span>{" "}
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
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

export default About;