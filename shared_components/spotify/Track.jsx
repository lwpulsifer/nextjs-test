import React from 'react';
import styles from '../../styles/shared_components/spotify/Track.module.css';

const Track = ({ artist, songUrl, title }) => {
  return (
    <div className={styles.track} >
      <span>{artist}</span>
      <a 
        href={songUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </div>
  )
};

export default Track;