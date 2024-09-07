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
      title: "Frontend разработчик",
      description: "Фронтенд разработка сайтов при использовании:",
      skills: [
        "HTML/SCSS;",
        "JS;",
        "TypeScript;",
        "React;",
        "CSS/SCSS-moduls;",
        "Next.js",
        "Framer motion",
        "react-player",
        "react-masks",
        "PostgreSQL",
        "Git",
      ],
    },

    {
      id: 2,
      img: images.cons,
      title: "1C Консультант/ Младший 1С аналитик ",
      description: "Специалист по 1С с навыками:",
      skills: [
        "консультирование клиентов по вопросам 1С",
        "написание ТЗ для программистов",
        "тестирование доработок программы 1С",
        "работа в 1С УПП, Бухгалтрия 8, УНФ, УТ 11",
        "работа с администрированием серверов",
      ],
    },
    {
      id: 3,
      img: images.accountant,
      title: "Бухгалтер",
      description:
        "Начала свой путь бухгалтера в 2016-м году. Выросла из помощником бухгалтера в аутсорсинге до ведущего бухгалтеров торгово-промышленной компании. В процессе работы получила опыт работы не только в программе 1С, но также программе Галактика.",
      skills: [
        "через три месяца работы и обучения, уже самостоятельно вела около 30 компаний",
        "все стандартные функции бухгалтера начиная от реализации до сдачи отчётности и выплаты зарплаты",
      ],
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
            <ul className="p-text" style={{ marginTop: 10 }}>
              {about.description}
              {about.skills.map((skill) => (
                <li key = {skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrapper(About, "app__about"),
  "about",
  "app__whitebg"
);
