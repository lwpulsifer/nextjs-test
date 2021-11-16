import { isDev } from './../../../util/IsDev';
import { supabase } from '../../../lib/db/supabase';

export type PageView = { id: number, creation_date: string, user_ip: string, url: string };
export type PageViewError = { error: string };
export type PageViewsResponse = PageViewError | { pageViews: PageView[] };

const pageViews = async(req, res): Promise<PageViewsResponse> => {
  const pageUrl = req.query.pageUrl
    ? req.query.pageUrl
    : "/";

  if (!isDev()) {
    const { status } = await supabase
      .from('site_views')
      .insert({ 
        user_ip: req.headers.host, 
        url: pageUrl, 
      });
    
    if (status !== 201) {
      return res.status(status).json({
        error: 'Failed to add page view',
      })
    }
  } 

  const { data: pageViews, error } = await supabase
    .from('site_views')
    .select("*")
    .eq('url', pageUrl);

  if (error) {
    return res.status(404).json({
      error: 'Failed to fetch pageViews.'
    });
  }

  return res.status(200).json({
    pageViews
  });
}

export default pageViews;