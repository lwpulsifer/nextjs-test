import { BaseComponentProps } from "../types/BaseComponent";
import { joinClasses } from "../util/ClassNames";

export default function BaseCard({
  children,
  additionalClassNames = "",
}: BaseComponentProps) {
  return (
    <section
      className={`${joinClasses(
        additionalClassNames,
      )} flex flex-col justify-center items-center bg-highlight w-5/6 lg:w-2/3 xl:w-1/2 rounded-2xl my-3`}
    >
      {children}
    </section>
  );
}
