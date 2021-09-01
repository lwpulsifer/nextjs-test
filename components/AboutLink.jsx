import Link from 'next/link';

export default function AboutLink({ title, address, additionalClassNames = []}) {
  return (
    <div className={`text-gray-500 flex justify-center items-center text-center ${additionalClassNames.join(' ')}`}>
      <Link href={address}>{title}</Link>
    </div>
  )
};