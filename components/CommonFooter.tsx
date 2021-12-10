import AboutLinks from "./AboutLinks";
import PageViewsTracker from "./PageViewsTracker";

type commonFooterProps = {
    isHomePage: boolean;
};

const CommonFooter = ({ isHomePage }: commonFooterProps) => {
    return (
        <footer className={"flex flex-col items-center mt-3"}>
            <AboutLinks />
            <PageViewsTracker />
        </footer>
    );
};

export default CommonFooter;
