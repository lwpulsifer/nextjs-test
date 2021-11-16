import useSWR from "swr";
import { supabase } from "../lib/db/supabase";
import Fetcher from "../lib/fetch/fetcher";
import { useEffect, useState } from 'react';
import { PageViewsResponse, PageViewError } from "../pages/api/page-views/[pageUrl]";

export default function PageViewsTracker() {

  const [encodedUrl, setEncodedUrl] = useState('/');

  useEffect(() => {
    setEncodedUrl(encodeURI(window.location.pathname));
  })

  const { data: pageViewData, error } = useSWR<PageViewsResponse>(`api/page-views/${encodedUrl}`, Fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  let displayContent;
  if (!pageViewData) {
    displayContent = "Loading page views..."
  }
  else if (error || 'error' in pageViewData) {
    displayContent = "Error: could not fetch page view data."
  }
  else {
    displayContent = `Page views: ${pageViewData.pageViews.length}`;
  }

  return (
    <section className={'m-3 bg-offset rounded-md px-5 py-2 flex justify-center items-center'}>
      {displayContent}
    </section>
  )
}
