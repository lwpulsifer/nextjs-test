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
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      }
    },
    modes: {
      push: {
        quantity: 10,
      },
      repulse: {
        distance: 50,
        duration: 1,
      },
    }
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
      outMode: "destroy",
      random: false,
      speed: .5,
      straight: false,
      warp: true,
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