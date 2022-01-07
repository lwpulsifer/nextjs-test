import React from "react";
import NowPlaying from "./spotify/NowPlaying";
import MyLink from "./util/MyLink";

const CommonHeader = () => {
	const links = [
		{
			path: "/",
			title: "Home",
		},
		{
			path: "/fun",
			title: "Fun",
		},
		{
			path: "/posts",
			title: "Blog",
		},
	];

	return (
		<nav className={"flex items-center justify-center my-2 w-full"}>
			<div className={"flex flex-col md:flex-row w-5/6 lg:w-2/3 xl:w-1/2"}>
				<div
					className={
						"flex w-full lg:w-2/3 justify-center items-center lg:justify-start"
					}
				>
					<NowPlaying
						additionalClassNames={
							"ml-2 text-md border border-black rounded-full font-bold bg-background"
						}
					/>
				</div>
				<div
					className={
						"flex w-full xl:w-1/3 items-center justify-center lg:justify-end"
					}
				>
					{links.map(({ path, title }) => (
						<MyLink
							address={path}
							title={title}
							key={title}
							header={true}
							additionalClassNames={"m-2"}
						/>
					))}
				</div>
			</div>
		</nav>
	);
};

export default CommonHeader;
