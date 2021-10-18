import React from 'react';
import Particles, { RecursivePartial, IOptions } from 'react-tsparticles';

const particlesConfig: RecursivePartial<IOptions> = {
  background: {
    color: {
      value: "#FFB700",
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      resize: true,
    },
  },
  particles: {
    color: {
      value: "#1B1C0E",
    },
    links: {
      color: "#0d47af",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      // outMode: "bounce",
      random: false,
      speed: .5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 15,
    },
  },
  detectRetina: true,
};

const ParticlesBackground = () => {
  return (
    <div className={'absolute h-full w-full'}>
      <Particles
          id="tsparticles"
          init={null}
          loaded={null}
          options={particlesConfig}
          className={'w-full h-full'}
        />
    </div>
  );
}

export default ParticlesBackground;