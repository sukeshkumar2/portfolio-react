//import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sukeshcsulb@gmail.com">sukeshcsulb@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sukeshkumar2/">linkedin.com/in/sukeshkumar2</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/sukeshkumar2">github.com/sukeshkumar2</a>
        </li>
        <li className={styles.link}>
          <img style={{height:"50px", width:"50px"}} src={getImageUrl("contact/leetcode.png")} alt="Leetcode icon" />
          <a href="https://leetcode.com/u/dosapatisukesh/">leetcode.com/u/dosapatisukesh</a>
        </li>
      </ul>
    </footer>
  );
};