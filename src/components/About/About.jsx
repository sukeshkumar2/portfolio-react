import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const items = [
  {
    icon: "about/uiIcon.png",
    alt: "Full Stack icon",
    title: "Full Stack Developer",
    description:
      "Proficient in React, Next.js, and Tailwind CSS on the frontend, and Spring Boot, Node.js, SQL, MongoDB, REST APIs, microservices, and GraphQL on the backend — building scalable end-to-end applications.",
  },
  {
    icon: "skills/genai.svg",
    alt: "Gen AI icon",
    title: "Gen AI Engineer",
    description:
      "Building intelligent systems with LLMs, RAG pipelines, and multi-agent frameworks. Experienced with Claude, OpenAI APIs, LangChain, and Model Context Protocol (MCP) for production-grade AI applications.",
  },
  {
    icon: "about/devopsIcon.png",
    alt: "DevOps icon",
    title: "DevOps Enthusiast",
    description:
      "Proficient in Docker, Kubernetes, CI/CD pipelines, AWS, Terraform, and Grafana for automated deployments and cloud infrastructure management.",
  },
  {
    icon: "about/AI.png",
    alt: "AI icon",
    title: "AI & ML Specialist",
    description:
      "Expert in ML, Deep Learning, and Generative AI using TensorFlow and PyTorch. Skilled in NLP, computer vision, and LLM fine-tuning for scalable AI applications.",
  },
];

export const About = () => {
  return (
    <section className={`${styles.container} fade-in-up`} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          {items.map((item, id) => (
            <li key={id} className={styles.aboutItem}>
              <img src={getImageUrl(item.icon)} alt={item.alt} className={styles.icon} />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
