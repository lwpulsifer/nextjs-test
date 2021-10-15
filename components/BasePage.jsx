import React from 'react';
import CommonHeader from './CommonHeader';
import CommonFooter from './CommonFooter';
import Particles from 'react-tsparticles';
import ParticlesBackground from './ParticlesBackground';

const BasePage = ({ children, isHomePage, additionalClassNames = '' }) => {
  return (
    <div className={`${additionalClassNames} bg-kusama h-full w-full justify-center items-center`}>
      <ParticlesBackground particlesLoadedCallback={() => setParticlesLoaded(true)} />
      <div className="absolute h-full w-full">
        <CommonHeader />
        {children}
        <CommonFooter isHomePage={isHomePage} />
      </div>
    </div>
  )
};

export default BasePage;