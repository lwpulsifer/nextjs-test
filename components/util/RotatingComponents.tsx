import { useCallback, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { BaseComponentProps } from "../../types/BaseComponent";
import { joinClasses } from "../../util/ClassNames";

const ROTATION_INTERVAL_DEFAULT_MS = 2000;

type RotatingComponentsProps = BaseComponentProps & {
  autoMove?: boolean;
  rotationInterval?: number;
};

const RotatingComponents: React.FC<RotatingComponentsProps> = ({
  children,
  className = "",
  rotationInterval = ROTATION_INTERVAL_DEFAULT_MS,
  autoMove = true,
}) => {
  const nonNullChildren: React.ReactNode[] = Array.isArray(children)
    ? children.filter((child) => child !== null)
    : [children];

  const [currentChild, setCurrentChild] = useState(0);

  const incrementCurrentChild = () =>
    setCurrentChild((currentChild) => (currentChild + 1) % nonNullChildren.length);

  useInterval(incrementCurrentChild, autoMove ? rotationInterval : null);

  return (
    <div
      className={joinClasses(joinClasses(className), "flex justify-center items-center", {
        "cursor-pointer": nonNullChildren.length > 1,
      })}
      onClick={incrementCurrentChild}
    >
      {nonNullChildren[currentChild]}
    </div>
  );
};

export default RotatingComponents;
