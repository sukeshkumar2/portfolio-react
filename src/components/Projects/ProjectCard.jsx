import styles from "./ProjectCard.module.css";
import PropTypes from 'prop-types';

export const ProjectCard = ({ project: { title, description, skills, source, demo } }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        {demo && demo !== source && (
          <a href={demo} className={styles.linkDemo} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
        {source && (
          <a href={source} className={styles.link} target="_blank" rel="noreferrer">
            Source
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
};
