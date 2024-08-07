import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../lib/db/supabase";

export type PageView = {
  id: number;
  creation_date: string;
  user_ip: string;
  url: string;
};
export type PageViewError = { error: string };
export type PageViewsResponse = PageViewError | { numPageViews: number };

/**
 * Returns the list of page views for the given page.
 */
const pageViews = async (req: NextApiRequest, res: NextApiResponse<PageViewsResponse>) => {
  const pageUrl = req.query.pageUrl ? req.query.pageUrl : "/";
  if (typeof pageUrl !== "string") {
    return res.status(500).json({
      error: "Page url must be a string",
    });
  }

  const { error, count } = await supabase
    .from<PageView>("site_views")
    .select("*", { count: "exact" })
    .eq("url", pageUrl);

  if (error) {
    return res.status(500).json({
      error: "Failed to fetch pageViews.",
    });
  }

  return res.status(200).json({
    numPageViews: count,
  });
};

export default pageViews;
