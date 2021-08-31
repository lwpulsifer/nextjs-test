import { useInterval } from '../hooks/useInterval';
import { useState, useCallback } from 'react';

const ROTATION_INTERVAL_MS = 2000;

export default function RotatingComponents({ children, additionalClassNames = '' }) {
  const nonNullChildren = children.filter(child => child !== null);

  const [currentChild, setCurrentChild] = useState(0);
  const [rotating, setRotating] = useState(true);

  const executeImmediately = useCallback(() => true, []);
  useInterval(
    () => setCurrentChild(currentChild => (currentChild + 1) % nonNullChildren.length), 
    rotating ? ROTATION_INTERVAL_MS : null,
    executeImmediately
  );

  return (
    <div className={`flex justify-center items-center cursor-pointer ${additionalClassNames}`} onClick={() => setRotating(rotating => !rotating)}>
      {nonNullChildren[currentChild]}
    </div>
  );
}