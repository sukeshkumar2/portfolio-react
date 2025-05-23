//import React from "react";

import styles from "./Contact.module.css";
//import { getImageUrl } from "../../utils";

export const Contact = () => {
  var image_base_url = "../../../assets/";
  //src = {image_base_url+"hero/heroImage.png"}
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={image_base_url+"contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:sukeshkumardosapati@gmail.com
">sukeshkumardosapati@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={image_base_url+"contact/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sukeshkumar2/">linkedin.com/in/sukeshkumar2</a>
        </li>
        <li className={styles.link}>
          <img src={image_base_url+"contact/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/sukeshkumar2">github.com/sukeshkumar2</a>
        </li>
        <li className={styles.link}>
          <img style={{height:"50px", width:"50px"}} src={image_base_url+"contact/leetcode.png"} alt="Leetcode icon" />
          <a href="https://leetcode.com/u/dosapatisukesh/">leetcode.com/u/dosapatisukesh</a>
        </li>
      </ul>
    </footer>
  );
};