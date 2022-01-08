import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { supabase } from "../../../../lib/db/supabase";

export default async function updatePost(
	req: NextApiRequest,
	res: NextApiResponse,
) {

	const { body: data } = req;
	if (!data || typeof data !== "string") {
		return res.status(500).json({ error: "No data found" });
	}

	const updatedPostFields = JSON.parse(data);
	const { data: supabaseData, error } = await supabase
		.from("blog_posts")
		.update({ ...updatedPostFields })
		.match({ slug: updatedPostFields.slug });

	if (!error) {
		return res.status(200).json({ ...supabaseData });
	}
}
