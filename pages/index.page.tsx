import React from "react";
import BaseCard from "../commonComponents/BaseCard";
import BasePage from "../commonComponents/BasePage";
import Timeline from "../commonComponents/timeline/Timeline";
import Image from "next/image";

const Home = () => {
	return (
		<BasePage>
			<div className={"flex flex-col items-center justify-center w-full mt-4"}>
				<BaseCard>
					<div className="flex items-center justify-center">
						<div className="flex gap-1 flex-col w-3/4 items-center">
							<h1
								className={
									"text-4xl font-medium text-highlightHeader text-center"
								}
							>
								Hi, I&apos;m Liam Pulsifer
							</h1>
							<div className={"w-full md:w-11/12 rounded-xl text-center p-3"}>
								I&apos;m a software engineer, writer, and amateur{" "}
								<a
									className={"text-link hover:underline"}
									href={"https://www.strava.com/athletes/47580246"}
								>
									athlete
								</a>
								. When I&apos;m not working at my day job at{" "}
								<a
									className={"text-link hover:underline"}
									href={"https://www.ixl.com/"}
								>
									IXL Learning
								</a>
								, you can often find me reading, playing tennis, or surfing
								around the San Francisco bay area. I&apos;m always looking for
								new connections, so don&apos;t be shy about getting in touch,
								and please feel free to peruse the various links on this site to
								get a sense of who I am and what I&apos;m doing.
							</div>
						</div>
						<div className="relative rounded-full overflow-hidden flex justify-center items-center my-2">
							<Image
								src={"/grad_cropped.jpg"}
								width={192}
								height={208}
								alt={"Me"}
							/>
						</div>
					</div>
				</BaseCard>
				<BaseCard>
					<Timeline />
				</BaseCard>
			</div>
		</BasePage>
	);
};

export default Home;
