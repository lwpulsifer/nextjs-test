import React from 'react';
import { BaseComponentProps } from '../types/BaseComponent';
import { joinClasses } from '../util/ClassNames';

type ThemeInfoProps = BaseComponentProps;

const ThemeInfo: React.FC<ThemeInfoProps> = ({ additionalClassNames = '' }) => {
  return (
    <section className={`${joinClasses(additionalClassNames)} text-sm font-bold`} >
      <div className="bg-background">
        Theme inspired by <a href={'http://yayoi-kusama.jp/e/information/'} className="text-link">&nbsp;Yayoi Kusama&nbsp;</a> and Halloween!
      </div>
    </section>
  )
};

export default ThemeInfo;