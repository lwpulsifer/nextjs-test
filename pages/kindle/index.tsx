import React from "react";
import TopTracks from "../../components/spotify/TopTracks";
import BasePage from "../../components/BasePage";
import NowPlaying from "../../components/spotify/NowPlaying";

const Fun = () => {
  return (
    <BasePage isHomePage={false} title={"Kindle"} includeHeaderAndFooter={false} includeBackground={false}>
      <main
        className={"flex flex-col items-center gap-5 w-5/6 lg:w-2/3 xl:w-1/2 "}
      >
        <h1 className={"text-5xl text-header font-bold"}>Kindle</h1>
				<h2 className="text-3xl text-header font-bold">{new Date().toLocaleTimeString(globalThis?.navigator?.language, {hour: '2-digit', minute:'2-digit'})}</h2>
        <TopTracks initialItemsToShow={5} itemsIncrement={5} numTracks={5} />
				<NowPlaying
            className={
              "ml-2 text-md border border-black rounded-full font-bold"
            }
				/>
      </main>
    </BasePage>
  );
};

export default Fun;