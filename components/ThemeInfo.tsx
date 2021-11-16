import React from 'react';
import { BaseComponentProps } from '../types/BaseComponent';
import { joinClasses } from '../util/ClassNames';
import useHoverState from '../hooks/useHoverState';
import Image from 'next/image';

type ThemeInfoProps = BaseComponentProps;

const ThemeInfo: React.FC<ThemeInfoProps> = ({ additionalClassNames = '' }) => {

  const { isHovered, eventListeners } = useHoverState();

  return (
    <section className={`${joinClasses(additionalClassNames)} text-sm font-bold flex hover:cursor-text`} { ...eventListeners }>
      <div className="bg-offset rounded-xl py-1 px-3">
        {isHovered 
          ? <div className="">
              Theme inspired by my dad and his love of the ocean
            </div>
          : <div className="flex">
              <span className="mx-1">Theme</span>
              <Image src={'/info_icon.svg'} height={15} width={15} alt="Info icon" />
            </div>
        }
      </div>
    </section>
  )
};

export default ThemeInfo;