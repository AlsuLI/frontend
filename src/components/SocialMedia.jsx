import React from 'react'
import {
  BsTwitter,
  BsInstagram,
  BsTelegram,
  BsLinkedin,
  BsWhatsapp,
  BsMailbox,
} from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTelegram />
      </div>
      <div>
        <BsWhatsapp />
      </div>
      <div>
        <BsLinkedin />
      </div>
    </div>
  );
}

export default SocialMedia