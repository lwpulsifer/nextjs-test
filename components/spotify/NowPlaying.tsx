import React from "react";
import useSWR from "swr";
import fetcher from "../../lib/fetch/fetcher";
import Image from "next/image";
import { BaseComponentProps } from "../../types/BaseComponent";
import { joinClasses } from "../../util/ClassNames";

type NowPlayingProps = BaseComponentProps & {
  includeImage?: boolean;
};

const NowPlaying = ({
  additionalClassNames = "",
  includeImage = true,
}: NowPlayingProps) => {
  const { data } = useSWR("/api/now-playing", fetcher);

  const nowPlayingElement = data?.isPlaying ? (
    <>
      <span
        className={
          "flex justify-center items-center ml-3 overflow-hidden truncate whitespace-no-wrap"
        }
      >
        <span className={"font-bold"}>{data.title}</span>
        <span className={"mx-2"}>{"—"}</span>
        <span className={"italic"}>{data.artist}</span>
      </span>
    </>
  ) : (
    <span className={"m-2 text-header"}>Nothing playing at the moment</span>
  );

  return (
    <div
      className={`${joinClasses(
        additionalClassNames,
      )} flex flex-row p-3 items-center`}
    >
      {includeImage && (
        <Image
          src={"/spotify.png"}
          height={32}
          width={32}
          layout={"fixed"}
          className={"h-10 w-10"}
          alt={"Spotify logo"}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      )}
      {nowPlayingElement}
    </div>
  );
};

export default NowPlaying;
