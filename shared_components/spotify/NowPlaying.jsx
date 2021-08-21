import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetch/fetcher';
import Image from 'next/image';
import styles from '../../styles/shared_components/spotify/NowPlaying.module.css';

const NowPlaying = () => {
  const { data } = useSWR('api/now-playing', fetcher);

  if (!data?.isPlaying) {
    return (
      <div className={styles.nowPlaying}>
        <span className={styles.nothingPlaying}>Nothing playing at the moment</span>
      </div>
    )
  }

  return (
    <div className={styles.nowPlaying}>
      <span className={styles.nowPlayingIndicator}>Now playing</span>
      <span className={styles.nowPlayingInformation}>
        {`${data.title} by ${data.artist}`}
      </span>
    </div>
  )
}

export default NowPlaying;