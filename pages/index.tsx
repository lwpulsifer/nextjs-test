import Head from 'next/head'
import React from 'react';
import BasePage from '../components/BasePage';

const Home = () => {
  return (
    <BasePage>
      <div className={'flex flex-col items-center justify-center w-full'}>
        <Head>
          <title>Liam Pulsifer</title>
          <meta name="description" content="Liam Pulsifer Personal Website" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <main className={'w-1/2 bg-background flex flex-col justify-center items-center rounded-lg'}>
          <h1 className={'text-4xl font-medium m-4 text-header text-center'}>
            Hi, I&apos;m Liam Pulsifer
          </h1>
          <div className={'w-full md:w-11/12 rounded-xl text-center p-3 m-3'}>
            I&apos;m a software engineer, writer, and amateur <a className={'text-link hover:underline'} href={'https://www.strava.com/athletes/47580246'}>athlete</a>. 
            When I&apos;m not working at my day job at <a className={'text-link hover:underline'} href={'https://www.ixl.com/'}>IXL Learning</a>,
            you can often find me reading, playing tennis, or surfing around the San Francisco bay area.
            I&apos;m always looking for new connections, so don&apos;t be shy about getting in 
            touch, and please feel free to peruse the various links on this site to get 
            a sense of who I am and what I&apos;m doing. 
          </div>
        </main>
      </div>
    </BasePage>
  )
}

export default Home;