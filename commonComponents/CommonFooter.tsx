import useAuth from "../hooks/useAuth";
import AboutLinks from "./AboutLinks";
import PageViewsTracker from "./PageViewsTracker";
import MyLink from "./util/MyLink";

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
