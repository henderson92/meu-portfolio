import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <Link to={`/project/${index}`} key={index}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </div>
  );
};

export default Home;