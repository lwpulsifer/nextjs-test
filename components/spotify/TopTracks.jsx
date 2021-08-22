import React from 'react';
import Track from './Track';
import useSWR from 'swr';
import fetcher from '../../lib/fetch/fetcher';

const TopTracks = () => {
  const { data } = useSWR('api/top-tracks', fetcher);

  return (
    <aside className={'flex flex-col p-2 rounded-3xl w-1/2 bg-green-300'}>
      <span className={'flex items-center justify-center text-2xl font-bold text-gray-900 m-2'}>
        My Spotify Top Tracks
      </span>
      <ol className={'bg-lightblue p-5 rounded-lg list-decimal'}>
        { data
          ? data.tracks.map(track => <Track {...track} key={track.id} />)
          : null
        }
      </ol>
    </aside>
  )
};

export default TopTracks;