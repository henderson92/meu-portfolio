import React, { useState } from "react";
import ContactSection from "./components/ContactSection"
import ProjectCard from "./components/ProjectCard";
import "./App.css";

const projects = [
  // Front-End (10 projetos)
  { title: "Projeto Front-End 1", description: "Descrição do projeto Front-End 1.", githubLink: "#", image: "url-1", category: "frontend" },
  { title: "Projeto Front-End 2", description: "Descrição do projeto Front-End 2.", githubLink: "#", image: "url-2", category: "frontend" },
  // Adicione mais 8 projetos Front-End...

  // Back-end (10 projetos)
  { title: "Projeto Back-end 1", description: "Descrição do projeto Back-end 1.", githubLink: "#", image: "url-11", category: "backend" },
  { title: "Projeto Back-end 2", description: "Descrição do projeto Back-end 2.", githubLink: "#", image: "url-12", category: "backend" },
  // Adicione mais 8 projetos Back-end...

  // Ciência de Dados (10 projetos)
  { title: "Projeto Ciência de Dados 1", description: "Descrição do projeto Ciência de Dados 1.", githubLink: "#", image: "url-21", category: "datascience" },
  { title: "Projeto Ciência de Dados 2", description: "Descrição do projeto Ciência de Dados 2.", githubLink: "#", image: "url-22", category: "datascience" },
  // Adicione mais 8 projetos Ciência de Dados...

  // Banco de Dados (10 projetos)
  { title: "Projeto Banco de Dados 1", description: "Descrição do projeto Banco de Dados 1.", githubLink: "#", image: "url-31", category: "database" },
  { title: "Projeto Banco de Dados 2", description: "Descrição do projeto Banco de Dados 2.", githubLink: "#", image: "url-32", category: "database" },
  // Adicione mais 8 projetos Banco de Dados...
];

function App() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Filtros</h2>
        <div className="filter-buttons">
          <button onClick={() => setFilter("all")}>Todos</button>
          <button onClick={() => setFilter("frontend")}>Front-End</button>
          <button onClick={() => setFilter("backend")}>Back-end</button>
          <button onClick={() => setFilter("datascience")}>Ciência de Dados</button>
          <button onClick={() => setFilter("database")}>Banco de Dados</button>
        </div>
      </div>

      <div className="main-content">
        <h1>Meu Portfólio</h1>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;