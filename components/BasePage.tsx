import React from 'react';
import CommonHeader from './CommonHeader';
import CommonFooter from './CommonFooter';
import ParticlesBackground from './ParticlesBackground';
import ThemeInfo from './ThemeInfo';

type basePageProps = {
  children?: React.ReactNode,
  isHomePage?: boolean,
  additionalClassNames?: string,
};

const BasePage = (
  { children = [], isHomePage = false, additionalClassNames = '' } : basePageProps,
) => {
  return (
    <div className={`${additionalClassNames} bg-background h-screen w-screen justify-between items-center`}>
      <ParticlesBackground />
      <div className="absolute h-full w-full mb-auto">
        <CommonHeader />
        {children}
        <CommonFooter isHomePage={isHomePage} />
      </div>
      <ThemeInfo additionalClassNames="fixed bottom-0 w-full flex justify-center" />
    </div>
   )
};

export default BasePage;