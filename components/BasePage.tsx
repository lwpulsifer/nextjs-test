import React from 'react';
import CommonHeader from './CommonHeader';
import CommonFooter from './CommonFooter';
import ParticlesBackground from './ParticlesBackground';

type basePageProps = {
  children?: React.ReactNode,
  isHomePage?: boolean,
  additionalClassNames?: string,
};

const BasePage = (
  { children = [], isHomePage = false, additionalClassNames = '' } : basePageProps,
) => {
  return (
    <div className={`${additionalClassNames} bg-kusama h-full w-full justify-center items-center`}>
      <ParticlesBackground />
      <div className="absolute h-full w-full">
        <CommonHeader />
        {children}
        <CommonFooter isHomePage={isHomePage} />
      </div>
    </div>
  )
};

export default BasePage;