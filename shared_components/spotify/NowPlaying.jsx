import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetch/fetcher';

const NowPlaying = () => {
  const { data } = useSWR('api/now-playing', fetcher);

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default NowPlaying;