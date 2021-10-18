import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetch/fetcher';
import Image from 'next/image';

type nowPlayingProps = {
  additionalClassNames: string,
  includeImage: boolean,
};

const NowPlaying = ({ additionalClassNames = '', includeImage = true } : nowPlayingProps) => {
  const { data } = useSWR('api/now-playing', fetcher);

  const nowPlayingElement = (
    data?.isPlaying 
      ? (
        <>
          <span className={'flex justify-center items-center ml-3 overflow-hidden truncate whitespace-no-wrap'}>
            <span className={'font-bold'}>{data.title}</span>
            <span className={'mx-2'}>{'—'}</span>
            <span className={'italic'}>{data.artist}</span>
          </span>
        </>
      )
      : <span className={'m-2'}>Nothing playing at the moment</span>
  );

  return (
    <div className={`flex flex-row p-3 items-center ${additionalClassNames}`}>
      {includeImage && <Image src={'/spotify.png'} height={32} width={32} layout={'fixed'} className={'h-10 w-10'} />}
      {nowPlayingElement}
    </div>
  )
}

export default NowPlaying;