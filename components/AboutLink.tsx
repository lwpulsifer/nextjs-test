import Link from 'next/link';

type aboutLinkProps = {
  title: string,
  address: string,
  additionalClassNames?: string,
};

const AboutLink = ({ title, address, additionalClassNames = ''} : aboutLinkProps) => {
  return (
    <div className={`text-gray-900 font-bold flex justify-center items-center text-center ${additionalClassNames}`}>
      <Link href={address}>{title}</Link>
    </div>
  )
};

export default AboutLink;