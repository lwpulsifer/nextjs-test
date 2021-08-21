import React from 'react';
import Track from './Track';
import useSWR from 'swr';
import fetcher from '../../lib/fetch/fetcher';
import styles from '../../styles/shared_components/spotify/TopTracks.module.css'

const TopTracks = () => {
  const { data } = useSWR('api/top-tracks', fetcher);

  return (
    <aside className={styles.header}>
      My Spotify Top Tracks
      { data
        ? data.tracks.map(track => <Track {...track} />)
        : null
      }
    </aside>
  )
};

export default TopTracks;