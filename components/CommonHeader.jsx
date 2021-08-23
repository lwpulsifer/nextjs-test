import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NowPlaying from './spotify/NowPlaying';
import RotatingComponents from './RotatingComponents';

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
      title: 'About me',
    },
    {
      path: '/fun',
      title: 'Fun'
    },
  ];

  return (
    <nav className={'flex h-20 items-center justify-center w-full'}>
      <div className={'flex w-1/2'}>
        <div className={'flex w-2/3 justify-start'}>
          <div className={'bg-gray-700 rounded-full flex'}>
            <Image 
              className={'rounded-full'}
              src={'/grad_cropped.jpg'} 
              height={30} 
              width={60} 
              alt={'Liam Pulsifer, professional headshot photo.'}
              />
            <RotatingComponents>
              <NowPlaying additionalClassNames={['ml-2', 'text-white', 'mr-5']} />
            </RotatingComponents>
          </div>
        </div>
        <div className={'flex w-1/3 justify-end'}>
          {links.map(({path, title}) => <CommonHeaderLink path={path} title={title} key={title} />)}
        </div>
      </div>
    </nav>
  )
};

export default CommonHeader;