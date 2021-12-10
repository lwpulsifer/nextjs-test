import Fetcher from "../lib/fetch/fetcher";
import { useEffect, useState } from "react";
import useSWR from "swr";

/**
 * Creates a key from a site path.
 * Example: /home => "home", /home/about => "home|about", / => ""
 */
const createSitePathKey = () =>
  encodeURI(window.location.pathname).split("/").slice(1).join("|");

export default function PageViewsTracker() {
  const [pageStorageKey, setPageStorageKey] = useState(null);

  useEffect(() => {
    setPageStorageKey(createSitePathKey());
  }, [])

  // Log a page hit and return the number of page views for this site path.
  useEffect(() => {
    Fetcher(`/api/log-page-view/${createSitePathKey()}`);
  }, []);

  const { data, error } = useSWR(`/api/page-views/${pageStorageKey}`, { isPaused: () => pageStorageKey === null });

  const numPageViews = data?.numPageViews;

  let displayContent;
  if (!numPageViews) {
    displayContent = "Loading page views...";
  } else if (error)  {
    displayContent = "Failed to load page views :(";
  } else {
    displayContent = `Page views: ${numPageViews}`;
  }

  return (
    <section
      className={
        "m-3 bg-offset rounded-md px-5 py-2 flex justify-center items-center"
      }
    >
      {displayContent}
    </section>
  );
}
