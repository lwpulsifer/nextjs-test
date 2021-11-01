import React from 'react';
import useHoverState from '../../hooks/useHoverState';
import { BaseComponentProps } from '../../types/BaseComponent';
import Image from 'next/image';
import ParticlesBackground from '../ParticlesBackground';

type LinkCardProps = BaseComponentProps & {
  href: string,
  imageSrc?: string,
  title: string,
  hoverText?: string,
}

function LinkCard({ href, imageSrc, title, hoverText } : LinkCardProps) {

  const { isHovered, eventListeners } = useHoverState();

  const displayText = isHovered
    ? hoverText
    : title;

  return (
    <a 
      href={href}
      className="bg-highlight flex justify-center items-center rounded-xl 
                  m-3 w-64 h-32 min-h-[8rem box-border text-header hover:shadow-xl"
      {...eventListeners}
    >
      <div 
        className="relative grid w-full h-full rounded-xl grid-rows-1 grid-cols-1 place-items-center place-content-center bg-highlight" 
        style={{ gridTemplateAreas: '"gridContainer"' }}
      >
        {imageSrc && !isHovered 
          ? (
            <div 
              className="relative w-full h-full min-w-full min-h-full max-w-full z-0"
              style={{ gridArea: 'gridContainer' }} 
            >
              <Image src={imageSrc} layout={'fill'} objectFit={'cover'} alt={''} /> 
            </div>
          )
          : null
        }
        <div 
          className="flex justify-center border-header items-center z-10 text-center bg-highlight p-3 w-full rounded-lg"
          style={{ gridArea: 'gridContainer' }} 
        >
          {displayText}
        </div>
      </div>
    </a>
  )
}

export default LinkCard;