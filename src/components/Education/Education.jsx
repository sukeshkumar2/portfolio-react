import styles from "./Education.module.css";

// import degreeIcon from "../../assets/education/degreeIcon.png";
// import collegeIcon from "../../assets/education/collegeIcon.png";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
            {/* <img src={degreeIcon} alt="Master's icon" className={styles.icons} /> */}
            <div className={styles.educationItemText}>
              <h3>Master of Science in Computer Science</h3>
              <p>
                California State University, Long Beach <br />
                Aug 2023 – May 2025
              </p>
            </div>
          </li>
          <li className={styles.educationItem}>
            {/* <img src={collegeIcon} alt="Bachelor's icon" className={styles.icons} /> */}
            <div className={styles.educationItemText}>
              <h3>Bachelor of Technology in Computer Science and Engineering</h3>
              <p>
                B V Raju Institute of Technology, India <br />
                Jul 2017 – Jun 2021
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
