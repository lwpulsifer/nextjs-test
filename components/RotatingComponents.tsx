import { useInterval } from '../hooks/useInterval';
import { useState, useCallback } from 'react';

const ROTATION_INTERVAL_MS = 2000;

type rotatingComponentsProps = {
  additionalClassNames: string,
  children: React.ReactNode,
}

const RotatingComponents: React.FC<rotatingComponentsProps> = ({ 
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
    <div className={`flex justify-center items-center cursor-pointer ${additionalClassNames}`} onClick={() => setRotating(rotating => !rotating)}>
      {nonNullChildren[currentChild]}
    </div>
  );
}

export default RotatingComponents;