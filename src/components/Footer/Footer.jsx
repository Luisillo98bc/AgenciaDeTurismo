import React, {useEffect} from "react";
import "./Footer.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo" data-aos="fade-up">
            <BiLogoMediumOld />
            <span>OU-Trips</span>
          </div>
          <div className="socials flex" data-aos="fade-up">
          <ImFacebook className="icon" />
          <ImTwitter className="icon" />
          <ImYoutube className="icon" />
          <AiFillInstagram className="icon" />
        </div>
        </div>
        
        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle" >Informacion</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Links de Ayuda</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Soporte</a>
          </li>
          <li>
            <a href="#">Terminos y Condiciones</a>
          </li>
          <li>
            <a href="#">Privacidad</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">+51 914067799</span>
          <span className="email">luisenri9819@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
