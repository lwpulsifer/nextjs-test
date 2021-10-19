import { useInterval } from '../hooks/useInterval';
import { useState, useCallback } from 'react';
import { BaseComponentProps } from '../types/BaseComponent';
import { joinClasses } from '../util/ClassNames';

const ROTATION_INTERVAL_MS = 2000;

type RotatingComponentsProps = BaseComponentProps;

const RotatingComponents: React.FC<RotatingComponentsProps> = ({ 
  children, 
  additionalClassNames = '' 
}) => {
  const nonNullChildren: React.ReactNode[] = Array.isArray(children) ? children.filter(child => child !== null) : [children];

  const [currentChild, setCurrentChild] = useState(0);
  const [rotating, setRotating] = useState(true);

  useInterval(
    () => setCurrentChild(currentChild => (currentChild + 1) % nonNullChildren.length), 
    rotating ? ROTATION_INTERVAL_MS : null
  );

  return (
    <div className={`${joinClasses(additionalClassNames)}flex justify-center items-center cursor-pointer`} onClick={() => setRotating(rotating => !rotating)}>
      {nonNullChildren[currentChild]}
    </div>
  );
}

export default RotatingComponents;