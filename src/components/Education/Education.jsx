import styles from "./Education.module.css";

const educations = [
  {
    degree: "Master of Science in Computer Science",
    institution: "California State University, Long Beach",
    period: "Aug 2023 – May 2025",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "B V Raju Institute of Technology, India",
  },
];

export const Education = () => {
  return (
    <section className={`${styles.container} fade-in-up`} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.educationItems}>
          {educations.map((edu, id) => (
            <li key={id} className={styles.educationItem}>
              <div className={styles.dot} />
              <div className={styles.educationItemText}>
                <h3>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.period}>{edu.period}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
