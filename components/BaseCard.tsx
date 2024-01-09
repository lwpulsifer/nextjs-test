import { BaseComponentProps } from "../types/BaseComponent";
import { joinClasses } from "../util/ClassNames";

export default function BaseCard({
  children,
  className = "",
}: BaseComponentProps) {
  return (
    <section
      className={`base-card ${joinClasses(className)} flex flex-col justify-center items-center bg-accentBackground w-5/6 max-w-screen-lg rounded-2xl my-3`}
    >
      {children}
    </section>
  );
}
