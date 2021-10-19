import React from "react";
import Link from 'next/link';
import { BaseComponentProps } from "../types/BaseComponent";
import { joinClasses } from '../util/ClassNames';

type MyLinkProps = BaseComponentProps & {
  address: string,
  title: string,
  header?: boolean,
};

const MyLink: React.FC<MyLinkProps> = ({ address, title, header = false, additionalClassNames = '' }) => {

  const className = joinClasses(
    joinClasses(additionalClassNames),
    header ? 'text-header font-bold' : 'text-link',
    'hover:text-highlight inline'
  );

  return (
    <div className={className}>
      <Link href={address}>{title}</Link>
    </div>
  )
};

export default MyLink;