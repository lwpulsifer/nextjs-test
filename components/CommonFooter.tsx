import AboutLinks from './AboutLinks';

type commonFooterProps = {
  isHomePage: boolean,
};

const CommonFooter = ({ isHomePage } : commonFooterProps ) => {
  return (
    <footer className={'flex flex-col items-center mt-3'}>
      <AboutLinks />
    </footer>
  )
}

export default CommonFooter;