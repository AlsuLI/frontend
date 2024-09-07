import React, { useState } from "react";
import email1 from "../../assets/email1.png";
import mobile from "../../assets/mobile.png";
import { AppWrapper, MotionWrapper } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import BackgroundChanger from "../../components/BackgroundChanger";
import images from "../../constants/images";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: 'contact',
  //     name: formData.username,
  //     email: formData.email,
  //     message: formData.message,
  //   };

  //   client.create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <h2 className="head__text">Контакты</h2>
      <div className="app__footer-wrapper">
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={email1} alt="email" />
            <a href="mailto:allssy198@gmail.com" className="p-text">
              allssy198@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <img src={mobile} alt="mobile" />
            <a href="tel: +7 (937) 280-89-81" className="p-text">
              +7 (937) 280-89-81
            </a>
          </div>
          <div className="app__footer-card">
            <img src={images.telegram} alt="telegram" />
            <a href="https://t.me/AlsuLParadox" className="p-text">
              Telegram
            </a>
          </div>
          <div className="app__footer-card">
            <img src={images.wa} alt="wa" />
            <a href="https://wa.me/+79372808981" className="p-text">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="app__footer-cat">
          <img src={images.cat} alt="cat" />
        </div>
      </div>

      {/* {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {loading ? "Sending" : "Send Message"}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you!</h3>
          </div>
        )} */}
    </>
  );
};

export default AppWrapper(
  MotionWrapper(Footer, "app__footer"),
  "контакты",
  "app__primarybg"
);
