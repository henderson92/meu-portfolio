import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import App from "../App";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#1E1E1E", // Cor de fundo
        },
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: "#6C63FF", // Cor das partículas
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 3,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;