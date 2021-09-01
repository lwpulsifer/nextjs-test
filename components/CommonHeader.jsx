import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NowPlaying from './spotify/NowPlaying';
import RotatingComponents from './RotatingComponents';

const CommonHeaderLink = ({ path, title }) => (
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

const RotatingCardItem = ({ children }) => {
  return (
    <div className={'w-full flex items-center'}>
      {children}
    </div>
  );
};

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
    <nav className={'flex items-center justify-center w-full m-3 block h-20'}>
      <div className={'flex flex-col lg:flex-row w:full lg:w-1/2 h-20'}>
        <div className={'flex w-full lg:w-2/3 justify-center lg:justify-start'}>
          <div className={'bg-gray-700 rounded-full flex pr-5 flex items-center'}>
              <RotatingComponents additionalClassNames={'flex rounded-full'}>
                <RotatingCardItem>
                  <Image 
                    className={'rounded-full'}
                    src={'/grad_cropped.jpg'} 
                    height={64}
                    width={64}
                    position={'fixed'}
                    alt={'Liam Pulsifer, professional headshot photo.'}
                  />
                  <div className={'mr-5 flex justify-center items-center'}>We rotating!</div>
                </RotatingCardItem>
                <RotatingCardItem>
                  <Image src={'/spotify.png'} layout={'fixed'} width={64} height={64} position={'relative'} />
                  <NowPlaying additionalClassNames={['ml-2', 'text-white', 'text-md']} includeImage={false} />
                </RotatingCardItem>
              </RotatingComponents>
          </div>
        </div>
        <div className={'flex w-full lg:w-1/3 justify-center lg:justify-end'}>
          {links.map(({path, title}) => <CommonHeaderLink path={path} title={title} key={title} />)}
        </div>
      </div>
    </nav>
  )
};

export default CommonHeader;