import React from 'react';
import CommonHeader from './CommonHeader';
import CommonFooter from './CommonFooter';

const BasePage = ({ children, isHomePage, additionalClassNames = '' }) => {
  return (
    <div className={`${additionalClassNames}`}>
      <CommonHeader />
      {children}
      <CommonFooter isHomePage={isHomePage} />
    </div>
  )
};

export default BasePage;