import Link from "next/link";
import React from "react";
import { BaseComponentProps } from "../../types/BaseComponent";
import { joinClasses } from "../../util/ClassNames";

type MyLinkProps = BaseComponentProps & {
  address: string;
  title: string;
  header?: boolean;
};

const MyLink: React.FC<MyLinkProps> = ({ address, title, header = false, className = "" }) => {
  const fullClassName = joinClasses(
    joinClasses(className),
    header ? "text-header font-bold" : "text-link",
    "hover:underline inline",
  );

  return (
    <div className={fullClassName}>
      <Link href={address}>{title}</Link>
    </div>
  );
};

export default MyLink;
