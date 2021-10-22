import React from 'react';
import { BaseComponentProps } from '../types/BaseComponent';
import { joinClasses } from '../util/ClassNames';
import MyLink from './util/MyLink';

type ThemeInfoProps = BaseComponentProps;

const ThemeInfo: React.FC<ThemeInfoProps> = ({ additionalClassNames = '' }) => {
  return (
    <section className={`${joinClasses(additionalClassNames)} text-sm font-bold`} >
      <div className="bg-background">
        Theme inspired by <MyLink address={'http://yayoi-kusama.jp/e/information/'} title={'Yayoi Kusama'} /> and Halloween!
      </div>
    </section>
  )
};

export default ThemeInfo;