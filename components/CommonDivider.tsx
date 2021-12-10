import { BaseComponentProps } from "../types/BaseComponent";
import { joinClasses } from "../util/ClassNames";

type commonDividerProps = BaseComponentProps;

const CommonDivider = ({
    additionalClassNames = "bg-link",
}: commonDividerProps) => {
    return (
        <div
            className={`${joinClasses(
                additionalClassNames,
            )} h-0.5 w-full rounded-full bg-opacity-30`}
        />
    );
};

export default CommonDivider;
