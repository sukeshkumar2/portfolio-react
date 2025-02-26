//import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" className={styles.icons} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I have expertise in React, building dynamic and responsive web applications with React Hooks, Context API, and Redux for state management. Proficient in Next.js, Tailwind CSS, and component-driven development, ensuring high performance and scalability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" className={styles.icons} />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have experience developing fast and optimized back-end systems and APIs using Spring Boot, SQL, NodeJS, and MongoDB, with expertise in REST APIs, microservices architecture, and GraphQL to ensure scalability and efficiency.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/devopsIcon.png")} alt="Devops icon" className={styles.icons}/>
            <div className={styles.aboutItemText}>
              <h3>DevOps Enthusiast</h3>
              <p>
              I have experience in DevOps practices, leveraging Docker, Kubernetes, and CI/CD pipelines to automate deployments and ensure seamless scalability. Proficient in AWS, monitoring tools like Grafana, and infrastructure as code (IaC) with Terraform for efficient cloud management.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/AI.png")} alt="AI icon" className={styles.icons} />
            <div className={styles.aboutItemText}>
              <h3>AI & ML Specialist</h3>
              <p>
              I have expertise in Artificial Intelligence, Machine Learning, and Generative AI, building intelligent systems with deep learning frameworks like TensorFlow and PyTorch. Proficient in NLP, computer vision, and model fine-tuning, leveraging large language models (LLMs) and transformers to develop scalable and efficient AI-driven applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};