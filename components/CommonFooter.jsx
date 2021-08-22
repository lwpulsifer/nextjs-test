import Link from 'next/link';
import NowPlaying from './spotify/NowPlaying';

function CommonFooter({ isHomePage }) {
  return (
    <footer>
      {!isHomePage && <Link href={'/'}>Back to home</Link>}
      <NowPlaying />
    </footer>
  )
}

export default CommonFooter;