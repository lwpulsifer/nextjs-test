import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CommonFooter from '../components/CommonFooter'
import CommonHeader from '../components/CommonHeader'
import TopTracks from '../components/spotify/TopTracks'

export default function Home() {
  return (
    <div className={'flex flex-col items-center bg-gray-50'}>
      <Head>
        <title>Liam Pulsifer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonHeader />

      <main className={'w-9/12 flex flex-col justify-center items-center'}>
        <h1 className={'text-4xl font-medium m-4'}>
          Hi, I'm Liam Pulsifer
        </h1>
        <div className={'bg-gray-100 w-2/3 rounded-xl text-center p-3 m-3'}>
          I'm a software engineer, writer, and amateur <a className={'text-blue-600 hover:underline'} href={'https://www.strava.com/athletes/47580246'}>runner</a>. 
          When I'm not working at my day job at <a className={'text-blue-600 hover:underline'} href={'https://www.ixl.com/'}>IXL Learning</a>,
          you can often find me reading, playing tennis, or surfing around the San Francisco bay area.
          I'm always looking for new connections, so don't be shy about getting in 
          touch, and please feel free to peruse the various sections of this site to get 
          a sense of who I am and what I'm doing. 
        </div>
      </main>

      <CommonFooter isHomePage={true} />
    </div>
  )
}
