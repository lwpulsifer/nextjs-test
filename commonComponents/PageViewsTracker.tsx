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
	}, []);

	// Log a page hit
	useEffect(() => {
		Fetcher(`/api/log-page-view/${createSitePathKey()}`);
	}, []);

	// Return the number of page views
	const { data, error } = useSWR(`/api/page-views/${pageStorageKey}`, {
		isPaused: () => pageStorageKey === null, // Wait to fetch until the page storage key is populated
	});

	const numPageViews = data?.numPageViews;

	let displayContent;
	if (!numPageViews) {
		displayContent = "Loading page views...";
	} else if (error) {
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
