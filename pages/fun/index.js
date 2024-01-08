import React from "react";
import TopTracks from "../../components/spotify/TopTracks";
import BasePage from "../../components/BasePage";

const Fun = () => {
  return (
    <BasePage isHomePage={false} title={"Fun Stuff"}>
      <main
        className={"flex flex-col items-center gap-5 w-full"}
      >
        <h1 className={"text-3xl text-header font-bold"}>Fun Stuff</h1>
        <TopTracks />
      </main>
    </BasePage>
  );
};

export default Fun;
