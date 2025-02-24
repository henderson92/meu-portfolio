import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import minhaFoto from "../assets/images/eu.jpg"; // Importe sua foto
import "./AboutMe.css"; // Estilos para a seção

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src={minhaFoto} alt="Minha Foto" />
        </div>
        <div className="about-text">
          <h2>Sobre Mim</h2>
          <p>
            Olá! Meu nome é Paulo Henrique. Sou um desenvolvedor Full Stack com experiência em JavaScript, React, Node.js e Python.
            Adoro criar soluções tecnológicas que resolvem problemas reais e agregam valor aos usuários.
          </p>
          <div className="social-links">
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:seu-email@example.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;