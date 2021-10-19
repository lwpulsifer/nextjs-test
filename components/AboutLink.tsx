import Link from 'next/link';
import { BaseComponentProps } from '../types/BaseComponent';
import { joinClasses } from '../util/ClassNames';

type aboutLinkProps = BaseComponentProps & {
  title: string,
  address: string,
};

const AboutLink = ({ title, address, additionalClassNames = ''} : aboutLinkProps) => {
  return (
    <div className={`${joinClasses(additionalClassNames)} text-header font-bold flex justify-center items-center text-center hover:text-highlight`}>
      <Link href={address}>{title}</Link>
    </div>
  )
};

export default AboutLink;