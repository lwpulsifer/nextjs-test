import React from 'react';
import styles from '../../styles/shared_components/spotify/Track.module.css';

const Track = ({ artist, album, songUrl, title }) => {
  return (
    <div className={styles.track} >
      <div className={styles.left}>
        <div className={styles.title}>
          <a 
            href={songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </div>
        <div
          className={styles.artist}
        >
          {artist}
        </div>
      </div>
      <div>
        <div className={styles.album}>
          {album}
        </div>
      </div>
    </div>
  )
};

export default Track;