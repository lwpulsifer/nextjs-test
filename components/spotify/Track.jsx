import React from 'react';

const Track = ({ artist, album, songUrl, title }) => {
  return (
    <li className={'flex border-2 m-2 p-2 rounded border-gray-700'}>
      <div className={'flex flex-col w-full w-full sm:w-3/4'}>
        <div className={'font-bold'}>
          <a 
            href={songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </div>
        <div className={'italic'}>
          {artist}
        </div>
      </div>
      <div className={'flex hidden md:block flex-col items-end font-bold italic w-1/4 text-right'}>
        {album}
      </div>
    </li>
  )
};

export default Track;