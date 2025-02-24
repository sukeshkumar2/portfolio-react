//import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Sukesh</h1>
        <p className={styles.description}>
        I&apos;m a passionate full-stack developer with expertise in React, Spring Boot, and NodeJS, creating scalable and efficient applications. Let&apos;s connect to build something amazing!

        </p>
        <a href="mailto:sukeshcsulb@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div> 
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};