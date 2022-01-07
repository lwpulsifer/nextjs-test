import { NextApiRequest, NextApiResponse } from "next";
import { getPostBySlug } from "../../../lib/markdown/api";
import type { FetchPostResponse } from "./post-utils";

export default async function postBySlug(
	req: NextApiRequest,
	res: NextApiResponse<FetchPostResponse>,
) {
	const slug = req.query.slug ? req.query.slug : "";

	const post = await getPostBySlug(
		typeof slug === "string" ? slug : slug.join(""),
	);

	if (!post) {
		return res.status(500).json({
			error: `No post found for slug ${slug}`,
		});
	} else {
		return res.status(200).json({ posts: [post] });
	}
}
