import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  // Busque os detalhes do projeto com base no ID
  return (
    <div>
      <h2>Detalhes do Projeto {id}</h2>
      {/* Exiba os detalhes do projeto aqui */}
    </div>
  );
};

export default ProjectDetails;