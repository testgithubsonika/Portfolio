import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 120,
            density: { enable: true, value_area: 1800 },
          },
          color: { value: "#00e5a0" },
          line_linked: {
            enable: true,
            opacity: 0.04,
            color: "#00e5a0",
            distance: 150,
          },
          move: {
            direction: "none",
            speed: 0.3,
            random: true,
          },
          size: { value: 1.5, random: true },
          opacity: {
            value: 0.35,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 80 },
            push: { particles_nb: 1 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;