import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hi there, I'm</p>
        <h1 className={styles.title}>Sukesh Kumar</h1>
        <p className={styles.description}>
          A passionate software engineer specializing in full-stack development,
          AI &amp; ML, and DevOps. Let&apos;s build something amazing together!
        </p>
        <div className={styles.actions}>
          <a href="mailto:sukeshk.swe@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="#projects" className={styles.projectsBtn}>
            View Work
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of Sukesh"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
