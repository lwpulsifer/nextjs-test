import React, { useState } from 'react';
import useHoverState from '../../hooks/useHoverState';
import { useInterval } from '../../hooks/useInterval';
import { BaseComponentProps } from '../../types/BaseComponent';
import { wrapSlice } from '../../util/ArrayUtils';
import { joinClasses } from '../../util/ClassNames';
import Image from 'next/image';
import CarouselProgressBar from './CarouselProgressBar';

const CONTROL_IMAGE_SIZE = 25;

type CarouselProps = BaseComponentProps & {
  initialIndex?: number,
  autoRotate?: boolean,
  rotationIntervalMs?: number,
  numItemsToDisplay?: number,
  showControls?: boolean,
  showProgressBar?: boolean,
};

const Carousel: React.FC<CarouselProps> = ({ 
  children, 
  initialIndex = 0, 
  autoRotate = true,
  rotationIntervalMs = 2000,
  numItemsToDisplay = 1,
  additionalClassNames = '',
  showControls = false,
  showProgressBar = false,
}) => {

  const [index, setIndex] = useState<number>(initialIndex);
  const { isHovered, eventListeners } = useHoverState();

  const incrementIndex = () => setIndex(index => (index + 1) % displayableChildren.length);
  const decrementIndex = () => setIndex(index => index === 0 ? displayableChildren.length - 1 : index - 1);

  const displayableChildren: React.ReactChild[] = typeof children === 'object'
    ? Array.from(
        Object
          .values(children)
          .filter(child => child !== null && child !== undefined)
      )
    : [children];

  useInterval(
    incrementIndex,
    autoRotate && !isHovered ? rotationIntervalMs : null,
  );

  const displayElements = [];
  let i = index;
  while (displayElements.length < numItemsToDisplay) {
    displayElements.push(displayableChildren[i]);
    i = (i + 1) % displayableChildren.length;
  }

  return (
    <section className={`carousel ${joinClasses(additionalClassNames)} flex flex-col`} {...eventListeners}>
      <div className="flex flex-col md:flex-row" >
        {showControls && 
          <button onClick={decrementIndex}>
            <Image src={'/left-arrow.png'} width={CONTROL_IMAGE_SIZE} height={CONTROL_IMAGE_SIZE} alt={''} /> 
          </button>
        }
        {displayElements}
        {showControls && 
          <button onClick={incrementIndex}>
            <Image src={'/right-arrow.png'} width={CONTROL_IMAGE_SIZE} height={CONTROL_IMAGE_SIZE} alt={''} /> 
          </button>}
      </div>
      <CarouselProgressBar index={index} totalItems={displayableChildren.length} numToDisplay={numItemsToDisplay} />
    </section>
  )
};

export default Carousel;