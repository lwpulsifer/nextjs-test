import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NowPlaying from './spotify/NowPlaying';
import RotatingComponents from './RotatingComponents';

type commonHeaderLinkProps = {
  path: string,
  title: React.ReactElement,
};

const CommonHeaderLink = ({ path, title } : commonHeaderLinkProps) => (
  <div
    className={'m-2 lg:m-3 2xl:m-5 text-gray-900 font-bold'}
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
      title: 'About me',
    },
    {
      path: '/fun',
      title: 'Fun'
    },
  ];

  return (
    <nav className={'flex items-center justify-center w-full m-3 h-20'}>
      <div className={'flex flex-col lg:flex-row w:full lg:w-1/2 h-20'}>
        <div className={'flex w-full lg:w-2/3 justify-center items-center lg:justify-start'}>
          <NowPlaying additionalClassNames={'ml-2 text-md border border-black rounded-full font-bold bg-kusama'} />
        </div>
        {/* <div className={'flex w-full lg:w-1/3 justify-center items-center lg:justify-end'}>
          {links.map(({path, title}) => <CommonHeaderLink path={path} title={title} key={title} />)}
        </div> */}
      </div>
    </nav>
  )
};

export default CommonHeader;