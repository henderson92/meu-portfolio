import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import minhaFoto from "../components/assets/images/eu.jpg"; // Importe sua foto
import "./AboutMe.css"; // Estilos para a seção

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-image">
          <img src={minhaFoto} alt="Minha Foto" />
        </div>
        <div className="contact-info">
          <h2>Contato</h2>
          <p>
            Olá! Meu nome é Paulo Henrique. Sou um desenvolvedor Full Stack com experiência em JavaScript, React, Node.js e Python.
            Entre em contato comigo através dos links abaixo.
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

export default ContactSection;