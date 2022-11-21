import { getTopTracks } from "../../../lib/spotify";
import { NextApiRequest, NextApiResponse } from "next";

function stringify(s: string | string[]) {
  return typeof s === 'string' ? s : s.join(",");
}

const topTracks = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const { numTracks } = req.query;
  const tracks = items?.slice(0, Number.parseInt(stringify(numTracks), 10)).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    album: track.album.name,
    songUrl: track.external_urls.spotify,
    title: track.name,
    id: track.id,
  }));

  return res.status(200).json({ tracks });
};

export default topTracks;
