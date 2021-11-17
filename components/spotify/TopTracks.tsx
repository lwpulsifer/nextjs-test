import React from 'react';
import Track from './Track';
import useSWR from 'swr';
import fetcher from '../../lib/fetch/fetcher';
import ExpandableList from '../util/ExpandableList';

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
  const { data, error } = useSWR('api/top-tracks', fetcher);

  const tracks: track[] = data?.tracks;
  const artistWithMoreThanHalf = Object
    .entries(groupBy(tracks, track => track.artist))
    .find(([_, tracks]) => tracks.length / 10 > .5)
    ?.[0];

  return (
    <aside className={'flex flex-col p-2 rounded-3xl w-5/6 lg:w-2/3 xl:w-1/2 bg-highlight'}>
      <span className={'flex items-center justify-center text-2xl font-bold text-highlightHeader m-2'}>
        My Spotify Top Tracks
      </span>
      {tracks
        ? <ExpandableList
            items={tracks.map(track => 
              <Track 
                {...track} 
                key={track.id} 
                additionalClassNames={'w-full'}
              />
            )}
            initialItemsToShow={3}
            itemsIncrement={1}
            additionalClassNames={'p-1 rounded-lg list-decimal min-h-[5rem]'}
            showCollapseButton={false}
          />
        : <div className="flex items-center justify-center text-highlightHeader font-bold">
            {error ? "Error loading top tracks" : "Loading top tracks..."}
          </div>
      }
      {artistWithMoreThanHalf
        ? <div className="text-header text-md text-center mt-3" >
            Yeah, I know it&apos;s embarrassing to have more than half of my top ten 
            be from <span className="italic">{artistWithMoreThanHalf}</span> 🙃
          </div>
        : null
      }
    </aside>
  )
};

export default TopTracks;