import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTelegram
} from 'react-icons/fa';


const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/vladimir.liankevich" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/vladimirliankevich" },
  { Social: <FaGithub />, link: "https://github.com/MillionerMIN" },
  { Social: <FaTelegram />, link: "https://t.me/millionerMIN" },
]

export const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      )
      )}
    </div>
  )
}