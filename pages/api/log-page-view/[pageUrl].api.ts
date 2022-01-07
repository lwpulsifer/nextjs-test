import { isDev } from "../../../util/IsDev";
import { supabase } from "../../../lib/db/supabase";
import { NextApiRequest, NextApiResponse } from "next";
import { PageView } from "../page-views/[pageUrl].api";

export default async function logPageView(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const pageUrl = req.query.pageUrl ? req.query.pageUrl : "/";
	if (typeof pageUrl !== "string") {
		return res.status(500).json({
			error: "Page url must be a string",
		});
	}

	if (!isDev()) {
		const { status } = await supabase.from<PageView>("site_views").insert({
			user_ip: req.headers.host,
			url: pageUrl,
		});

		if (status !== 201) {
			return res.status(status).json({
				error: "Failed to add page view",
			});
		} else {
			return res.status(status).json({
				data: `Logged page view for ${pageUrl}`,
			});
		}
	}
	return res.status(201).json({ data: `No page view logged due to dev mode.` });
}
