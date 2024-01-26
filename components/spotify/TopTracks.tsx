import React from "react";
import Track from "./Track";
import useSWR from "swr";
import Fetcher from "../../lib/fetch/fetcher";
import ExpandableList from "../util/ExpandableList";
import BaseCard from "../BaseCard";
import { groupBy } from "../../util/ArrayUtils";

type track = {
  artist: string;
  album: string;
  songUrl: string;
  title: string;
  id: string;
};

type TopTracksProps = {
  initialItemsToShow?: number,
  itemsIncrement?: number,
  numTracks?: number,
}

const TopTracks = ({ initialItemsToShow = 3, itemsIncrement = 10, numTracks = 10 }: TopTracksProps) => {
  const { data, error } = useSWR(`api/top-tracks/${numTracks}`, Fetcher);

  const tracks: track[] = data?.tracks;
  const artistWithMoreThanHalf = Object.entries(
    groupBy(tracks, (track) => track.artist),
  ).find(([_, tracks]) => tracks.length / 10 > 0.5)?.[0];

  return (
    <BaseCard className={"flex flex-col p-2 rounded-3xl w-full"}>
      <span
        className={
          "flex items-center justify-center text-2xl font-bold text-highlightHeader m-2"
        }
      >
        My Spotify Top Tracks
      </span>
      {tracks ? (
        <ExpandableList
          items={tracks.map((track) => (
            <Track {...track} key={track.id} className={"w-full"} />
          ))}
          initialItemsToShow={initialItemsToShow}
          itemsIncrement={itemsIncrement}
          className={"top-tracks-list p-1 rounded-lg list-decimal min-h-[5rem] w-full"}
          showCollapseButton={false}
        />
      ) : (
        <div className="flex items-center justify-center text-highlightHeader font-bold">
          {error ? "Error loading top tracks" : "Loading top tracks..."}
        </div>
      )}
      {artistWithMoreThanHalf ? (
        <div className="font-serif text-md text-center mt-3">
          Yeah, I know it&apos;s embarrassing to have more than half of my top
          ten be from <span className="italic">{artistWithMoreThanHalf}</span>{" "}
          🙃
        </div>
      ) : null}
    </BaseCard>
  );
};

export default TopTracks;
