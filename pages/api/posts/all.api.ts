import { getAllPosts, Post } from "../../../lib/markdown/api";
import { NextApiRequest, NextApiResponse } from "next";
import { FetchPostResponse } from "./post-utils";

export default async function allPosts(
	req: NextApiRequest,
	res: NextApiResponse<FetchPostResponse>,
) {
	const posts = await getAllPosts();

	if (!posts) {
		return res.status(500).json({
			error: `No posts found`,
		});
	} else {
		return res.status(200).json({ posts });
	}
}
