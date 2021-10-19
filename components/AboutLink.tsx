import Link from 'next/link';

type aboutLinkProps = {
  title: string,
  address: string,
  additionalClassNames?: string,
};

const AboutLink = ({ title, address, additionalClassNames = ''} : aboutLinkProps) => {
  return (
    <div className={`text-header font-bold flex justify-center items-center text-center ${additionalClassNames}`}>
      <Link href={address}>{title}</Link>
    </div>
  )
};

export default AboutLink;