import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NowPlaying from './spotify/NowPlaying';
import RotatingComponents from './RotatingComponents';
import MyLink from './MyLink';

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
    // {
    //   path: '/fun',
    //   title: 'Fun'
    // },
  ];

  return (
    <nav className={'flex items-center justify-center my-2 w-full h-20'}>
      <div className={'flex flex-col lg:flex-row w:full lg:w-1/2 h-20'}>
        <div className={'flex w-full lg:w-2/3 justify-center items-center lg:justify-start'}>
          <NowPlaying additionalClassNames={'ml-2 text-md border border-black rounded-full font-bold bg-background'} />
        </div>
        <div className={'flex w-full lg:w-1/3 items-center lg:justify-end'}>
          {links.map(({path, title}) => <MyLink address={path} title={title} key={title} header={true} additionalClassNames={'m-2'} />)}
        </div>
      </div>
    </nav>
  )
};

export default CommonHeader;