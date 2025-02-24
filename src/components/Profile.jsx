import React from "react";
import minhaFoto from "../components/assets/images/eu.jpg"; // Importe sua foto
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Ícones das redes sociais
import "./Profile.css"; // Estilos para o componente

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-content">
        <div className="profile-image">
          <img src={minhaFoto} alt="Minha Foto" />
        </div>
        <div className="profile-info">
          <h2>Meu Perfil</h2>
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

export default Profile;