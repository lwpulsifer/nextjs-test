import React from 'react';
import CommonHeader from './CommonHeader';
import CommonFooter from './CommonFooter';

const BasePage = ({ children, isHomePage }) => {
  return (
    <div>
      <CommonHeader />
      {children}
      <CommonFooter isHomePage={isHomePage} />
    </div>
  )
};

export default BasePage;