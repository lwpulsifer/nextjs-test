import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Fetcher from "../lib/fetch/fetcher";

/**
 * Creates a key from a site path.
 * Example: /home => "home", /home/about => "home|about", / => ""
 */
const createSitePathKey = (pathName: string) => encodeURI(pathName).split("/").slice(1).join("|");

export default function PageViewsTracker() {
  const pathName = usePathname();

  // Log a page hit and return the number of page views for this site path.
  useEffect(() => {
    Fetcher(`/api/log-page-view/${createSitePathKey(pathName)}`);
  }, [pathName]);

  const { data, error, isLoading } = useSWR(
    `/api/page-views/${createSitePathKey(pathName)}`,
    Fetcher,
  );

  const numPageViews = data?.numPageViews;

  let displayContent;
  if (isLoading) {
    displayContent = "...";
  } else if (!data || error) {
    displayContent = "";
  } else {
    displayContent = `${numPageViews} views`;
  }

  return (
    <section
      className={
        "m-3 rounded-md px-5 py-2 flex justify-center items-center text-sm font-extralight"
      }
    >
      {displayContent}
    </section>
  );
}
