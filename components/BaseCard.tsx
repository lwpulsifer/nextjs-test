import { BaseComponentProps } from "../types/BaseComponent";
import { joinClasses } from "../util/ClassNames";

export default function BaseCard({
  children,
  className = "",
}: BaseComponentProps) {
  return (
    <section
      className={`${joinClasses(className)} flex flex-col justify-center items-center bg-accentBackground w-5/6 lg:w-2/3 xl:w-1/2 rounded-2xl my-3`}
    >
      {children}
    </section>
  );
}
