import React from "react";
import BasePage from "../../commonComponents/BasePage";
import Timeline from "../../commonComponents/timeline/Timeline";

const AboutMe = () => {
	return (
		<BasePage isHomePage={false} title={"About Me"}>
			<main className={"flex flex-col justify-center items-center"}>
				<Timeline />
			</main>
		</BasePage>
	);
};

export default AboutMe;
