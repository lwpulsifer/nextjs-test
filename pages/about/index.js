import React from "react";
import BasePage from "../../components/BasePage";
import Timeline from "../../components/timeline/Timeline";

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
