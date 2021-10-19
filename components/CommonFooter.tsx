import AboutLinks from './AboutLinks';
import ThemeInfo from './ThemeInfo';

type commonFooterProps = {
  isHomePage: boolean,
};

const CommonFooter = ({ isHomePage } : commonFooterProps ) => {
  return (
    <footer className={'flex flex-col items-center mt-3'}>
      <AboutLinks />
      <ThemeInfo />
    </footer>
  )
}

export default CommonFooter;