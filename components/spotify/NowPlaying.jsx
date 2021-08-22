import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetch/fetcher';
import Image from 'next/image';

const NowPlaying = () => {
  const { data } = useSWR('api/now-playing', fetcher);

  const nowPlayingElement = (
    data?.isPlaying 
      ? (
        <>
          <span className={'flex justify-center m-2.5 font-bold'}>Now playing</span>
          <span className={'italic flex justify-center items-center'}>
            {`${data.title} by ${data.artist}`}
          </span>
        </>
      )
      : <span>Nothing playing at the moment</span>
  );

  return (
    <div className={'flex flex-row m-2 p-3 rounded-lg bg-green-800 text-white'}>
      {nowPlayingElement}
    </div>
  )
}

export default NowPlaying;