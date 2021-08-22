import React from 'react';
import NowPlaying from '../../components/spotify/NowPlaying';
import TopTracks from '../../components/spotify/TopTracks';
import CommonHeader from '../../components/CommonHeader';
import CommonFooter from '../../components/CommonFooter';

const AboutMe = () => {
  return (
    <>
    <CommonHeader />
    <main className={'flex flex-col items-center bg-gray-50'}>
      <h1 className={'text-3xl text-blue-600 font-bold m-5'}>Fun Stuff</h1>
      <TopTracks />
      <NowPlaying />
    </main>
    <CommonFooter />
    </>
  )
};

export default AboutMe;