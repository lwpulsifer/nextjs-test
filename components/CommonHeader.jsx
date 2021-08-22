import React from 'react';
import Link from 'next/link';

const CommonHeaderLink = ({ path, title }) => (
  <div
    className={'m-5 text-gray-900 font-bold'}
  >
    <Link
      href={path}
    >
      {title}
    </Link>
  </div>
);

const CommonHeader = () => {
  const links = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/about',
      title: 'Fun stuff',
    },
  ];

  return (
    <nav className={'flex h-10 w-full items-center justify-center'}>
      <div className={'flex w-1/2 justify-end'}>
        {links.map(({path, title}) => <CommonHeaderLink path={path} title={title} />)}
      </div>
    </nav>
  )
};

export default CommonHeader;