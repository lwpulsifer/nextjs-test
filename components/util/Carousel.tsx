import React, { useState } from 'react';
import useHoverState from '../../hooks/useHoverState';
import { useInterval } from '../../hooks/useInterval';
import { BaseComponentProps } from '../../types/BaseComponent';
import { wrapSlice } from '../../util/ArrayUtils';
import { joinClasses } from '../../util/ClassNames';

const isEven = (num: number) => num % 2 === 0;

type CarouselProps = BaseComponentProps & {
  initialIndex?: number,
  autoRotate?: boolean,
  rotationIntervalMs?: number,
  numItemsToDisplay?: number,
};

const Carousel: React.FC<CarouselProps> = ({ 
  children, 
  initialIndex = 0, 
  autoRotate = true,
  rotationIntervalMs = 2000,
  numItemsToDisplay = 1,
  additionalClassNames = '',
}) => {

  const [index, setIndex] = useState<number>(initialIndex);
  const { isHovered, eventListeners } = useHoverState();

  const displayableChildren: React.ReactChild[] = typeof children === 'object'
    ? Array.from(
        Object
          .values(children)
          .filter(child => child !== null && child !== undefined)
      )
    : [children];

  useInterval(
    () => setIndex(index => (index + 1) % displayableChildren.length),
    autoRotate && !isHovered ? rotationIntervalMs : null,
  );

  const displayElements = [];
  let i = index;
  while (displayElements.length < numItemsToDisplay) {
    displayElements.push(displayableChildren[i]);
    i = (i + 1) % displayableChildren.length;
  }

  return (
    <section className={`carousel ${joinClasses(additionalClassNames)}`} {...eventListeners}>
      {displayElements}
    </section>
  )
};

export default Carousel;