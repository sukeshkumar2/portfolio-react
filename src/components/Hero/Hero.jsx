//import React from "react";

import styles from "./Hero.module.css";
//import { getImageUrl } from "../../utils";

//import {image_base_url} from "../../../assets/"

export const Hero = () => {

   var image_base_url = "../../../assets/";
  
  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Sukesh</h1>
        <p className={styles.description}>
        I&apos;m a passionate software engineer with expertise in full-stack development, machine learning and AI, DevOps, and both SQL and NoSQL databases. Let us connect to build something amazing!

        </p>
        <a href="mailto:sukeshcsulb@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div> 
      <img
       // src={getImageUrl("hero/heroImage.png")}
       src = {image_base_url+"hero/heroImage.png"}
        
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};