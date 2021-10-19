import { BaseComponentProps } from "../types/BaseComponent";
import { joinClasses } from "../util/ClassNames";

type commonDividerProps = BaseComponentProps;

const CommonDivider = ({ additionalClassNames = 'bg-link'} : commonDividerProps) => {
  return (
    <div className={`${joinClasses(additionalClassNames)} h-0.5 w-1/2 sm:w-1/3 rounded-full`} />
  )
}

export default CommonDivider;