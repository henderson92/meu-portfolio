import React from "react";
import { motion } from "framer-motion"; // Importação única
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={project.image} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        Ver no GitHub
      </a>
    </motion.div>
  );
};

export default ProjectCard;