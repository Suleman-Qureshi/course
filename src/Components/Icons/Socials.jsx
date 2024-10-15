import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

function Socials({ type = "fb" }) {
  return (
    <div className="border border-white rounded-full p-3 text-white text-sm cursor-pointer hover:border-sky-500 hover:text-sky-500 duration-200">
      {type == "tg" ? (
        <FaTelegram />
      ) : type == "tw" ? (
        <FaTwitter />
      ) : type == "insta" ? (
        <FaInstagram />
      ) : type == "yt" ? (
        <FaYoutube />
      ) : (
        <FaFacebookF />
      )}
    </div>
  );
}

export default Socials;
