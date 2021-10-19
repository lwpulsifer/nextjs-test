import React from 'react';
import CommonHeader from './CommonHeader';
import CommonFooter from './CommonFooter';
import ParticlesBackground from './ParticlesBackground';
import ThemeInfo from './ThemeInfo';
import { joinClasses } from '../util/ClassNames';
import { BaseComponentProps } from '../types/BaseComponent';

type BasePageProps = BaseComponentProps & {
  isHomePage?: boolean,
};

const BasePage = (
  { children = [], isHomePage = false, additionalClassNames = '' } : BasePageProps,
) => {
  return (
    <div className={`${joinClasses(additionalClassNames)} bg-background justify-between items-center relative min-h-screen`}>
      <ParticlesBackground />
      <div className="h-full w-full relative p-6">
        <CommonHeader />
        {children}
        <CommonFooter isHomePage={isHomePage} />
      </div>
      <ThemeInfo additionalClassNames="fixed bottom-0 w-full flex justify-center" />
    </div>
   )
};

export default BasePage;