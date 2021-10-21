import React from 'react';
import Track from './Track';
import useSWR from 'swr';
import fetcher from '../../lib/fetch/fetcher';

const groupBy = <T,>(arr: T[], groupingFunction: (groupItem: T) => string): { [key: string]: T[] } => {
  const groups = {};
  arr?.forEach(item => {
    const groupKey = groupingFunction(item);
    if (groups[groupKey]) {
      groups[groupKey].push(item);
    }
    else {
      groups[groupKey] = [item];
    }
  });
  return groups;
};

type track = {
  artist: string,
  album: string,
  songUrl: string,
  title: string,
  id: string,
}

const TopTracks = () => {
  const { data } = useSWR('api/top-tracks', fetcher);

  const tracks: track[] = data?.tracks;
  const artistWithMoreThanHalf = Object
    .entries(groupBy(tracks, track => track.artist))
    .find(([_, tracks]) => tracks.length / 10 > .5)
    ?.[0];

  return (
    <aside className={'flex flex-col p-2 rounded-3xl w-1/2 bg-background'}>
      <span className={'flex items-center justify-center text-2xl font-bold text-header m-2'}>
        My Spotify Top Tracks
      </span>
      <ol className={'p-5 rounded-lg list-decimal'}>
        { tracks
          ? tracks.map(track => <Track {...track} key={track.id} />)
          : 'Loading top tracks...'
        }
      </ol>
      {artistWithMoreThanHalf
        ? <div className="text-header text-md text-center" >
            Yeah, I know it&apos;s embarrassing to have more than half of my top ten 
            be from <span className="italic">{artistWithMoreThanHalf}</span> :p
          </div>
        : null
      }
    </aside>
  )
};

export default TopTracks;