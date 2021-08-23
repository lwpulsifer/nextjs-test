import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetch/fetcher';
import Image from 'next/image';

const NowPlaying = ({ additionalClassNames = [] }) => {
  const { data } = useSWR('api/now-playing', fetcher);

  const nowPlayingElement = (
    data?.isPlaying 
      ? (
        <>
          <span className={'italic flex justify-center items-center ml-3 overflow-hidden truncate whitespace-no-wrap'}>
            {`${data.title} by ${data.artist}`}
          </span>
        </>
      )
      : <span className={'m-2'}>Nothing playing at the moment</span>
  );

  return (
    <div className={`flex flex-row p-3 rounded-lg bg-green-800 text-white ${additionalClassNames.join(" ")}`}>
      <Image src={'/spotify.png'} height={20} width={40} className={'h-10 w-10'} />
      {nowPlayingElement}
    </div>
  )
}

export default NowPlaying;