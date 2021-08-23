import AboutLinks from './AboutLinks';
import CommonDivider from './CommonDivider';

function CommonFooter({ isHomePage }) {
  return (
    <footer className={'flex flex-col items-center mt-3'}>
      <CommonDivider color={'blue-400'}/>
      <AboutLinks />
    </footer>
  )
}

export default CommonFooter;