import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const links = [
  {
    icon: "contact/emailIcon.png",
    alt: "Email",
    label: "sukeshk.swe@gmail.com",
    href: "mailto:sukeshk.swe@gmail.com",
  },
  {
    icon: "contact/linkedinIcon.png",
    alt: "LinkedIn",
    label: "linkedin.com/in/sukeshkumar2",
    href: "https://www.linkedin.com/in/sukeshkumar2/",
  },
  {
    icon: "contact/githubIcon.png",
    alt: "GitHub",
    label: "github.com/sukeshkumar2",
    href: "https://github.com/sukeshkumar2",
  },
  {
    icon: "contact/leetcode.png",
    alt: "LeetCode",
    label: "leetcode.com/u/dosapatisukesh",
    href: "https://leetcode.com/u/dosapatisukesh/",
  },
];

export const Contact = () => {
  return (
    <footer id="contact" className={`${styles.container} fade-in-up`}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2>Let&apos;s Connect</h2>
          <p>Open to new opportunities and collaborations</p>
        </div>
        <ul className={styles.links}>
          {links.map((link, id) => (
            <li key={id} className={styles.link}>
              <img src={getImageUrl(link.icon)} alt={link.alt} />
              <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.copyright}>© 2025 Sukesh Kumar. All rights reserved.</p>
    </footer>
  );
};
