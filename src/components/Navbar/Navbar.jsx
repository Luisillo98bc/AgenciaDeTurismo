import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

export const Navbar = () => {
  const[navBar, setNavBar] = useState('menu');

  //funcion para abrir y cerrar el navbar
  const showNavBar = () => {
    setNavBar("menu showNavBar");
  }
  const closeNavBar = () => {
    setNavBar("menu");
  }
    

  return (
    <div className="navBar">
      <div className="logDiv">
        <BiLogoMediumOld className="icon" />
        <span>OU-Trips</span>
        
      </div>
      <div className={navBar}>
        <ul>
          <li className="navList">Destinos</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>
        {/* Iconos para remover el navbar  */}

        <AiFillCloseCircle className="icon closeIcon" onClick={closeNavBar} />
      </div>
      <button className="signInBtn btn">Sign Up</button>
      <PiDotsNineBold className="icon menuIcon"  onClick={showNavBar}/>
    </div>
  );
};
