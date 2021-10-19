import React from 'react';
import Track from './Track';
import useSWR from 'swr';
import fetcher from '../../lib/fetch/fetcher';

const TopTracks = () => {
  const { data } = useSWR('api/top-tracks', fetcher);

  return (
    <aside className={'flex flex-col p-2 rounded-3xl w-1/2 bg-green-300'}>
      <span className={'flex items-center justify-center text-2xl font-bold text-header m-2'}>
        My Spotify Top Tracks
      </span>
      <ol className={'bg-sky p-5 rounded-lg list-decimal'}>
        { data
          ? data.tracks.map(track => <Track {...track} key={track.id} />)
          : 'Loading top tracks...'
        }
      </ol>
    </aside>
  )
};

export default TopTracks;