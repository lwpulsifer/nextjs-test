import { supabase } from "../../lib/db/supabase";
import type { PageView } from './page-views/[pageUrl]';

async function allPageViews(req, res) {
	const { error, data } = await supabase
	.from<PageView>("site_views")
	.select("*");

	if (error) {
    return res.status(500).json({
      error: "Failed to fetch pageViews.",
    });
  }

	return res.status(200).json(data);
}

export default allPageViews;