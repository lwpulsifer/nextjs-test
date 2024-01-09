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
      <div className={"flex flex-col-reverse md:flex-row w-5/6 max-w-screen-lg justify-between items-center gap-2"}>
        <div
          className={
            "hidden md:flex justify-center items-center lg:justify-start"
          }
        >
          <NowPlaying
            className={
              "ml-2 text-md border border-black rounded-full font-bold bg-background"
            }
          />
        </div>
        <div
          className={
            "flex items-center justify-center lg:justify-end bg-accentBackground rounded-lg p-3"
          }
        >
          {links.map(({ path, title }) => (
            <MyLink
              address={path}
              title={title}
              key={title}
              header={true}
              className={"m-2"}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CommonHeader;
