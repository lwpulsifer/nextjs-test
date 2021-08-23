import { useInterval } from '../hooks/useInterval';
import { useState } from 'react';

const ROTATION_INTERVAL_MS = 2000;

export default function RotatingComponents({ children }) {
  const nonNullChildren = children.filter(child => child !== null);

  const [currentChild, setCurrentChild] = useState(0);

  useInterval(() => setCurrentChild(currentChild => (currentChild + 1) % nonNullChildren.length), ROTATION_INTERVAL_MS);

  return nonNullChildren[currentChild];
}