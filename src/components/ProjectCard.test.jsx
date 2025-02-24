import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

const project = {
  title: "Projeto Teste",
  description: "Descrição do projeto teste.",
  githubLink: "https://github.com/teste",
  image: "teste.jpg",
};

test('renderiza o card do projeto corretamente', () => {
  render(<ProjectCard project={project} />);
  expect(screen.getByText(project.title)).toBeInTheDocument();
  expect(screen.getByText(project.description)).toBeInTheDocument();
});