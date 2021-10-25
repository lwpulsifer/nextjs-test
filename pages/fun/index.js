import React from 'react';
import NowPlaying from '../../components/spotify/NowPlaying';
import TopTracks from '../../components/spotify/TopTracks';
import BasePage from '../../components/BasePage';
import ToolsDisplay from '../../components/toolsDisplay/ToolsDisplay';

const Fun = () => {
  return (
    <BasePage isHomePage={false}>
      <main className={'flex flex-col items-center'}>
        <h1 className={'text-3xl text-header font-bold m-5'}>Fun Stuff</h1>
        <TopTracks />
        <ToolsDisplay />
      </main>
    </BasePage>
  )
};

export default Fun;