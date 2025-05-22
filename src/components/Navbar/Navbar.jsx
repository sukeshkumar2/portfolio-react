//import React, { useState } from "react";
import  { useState } from "react";

import styles from "./Navbar.module.css";
//import { getImageUrl } from "../../utils.js";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  //console.log("Image url",getImageUrl("nav/menuIcon.png"));
  var image_base_url = "../../../assets/";
  //src = {image_base_url+"hero/heroImage.png"}

  return (
   

    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? image_base_url+"nav/closeIcon.png"
              : image_base_url+"nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1G7mrnKOKMgafmUEFebdOuj7IkO5fTe79/view?usp=sharing">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};