import React from 'react';
import BaseCard from '../BaseCard';
import useSWR from 'swr';
import Fetcher from '../../lib/fetch/fetcher';
import { groupBy } from '../../util/ArrayUtils';

export default function PageViewsDisplay({

}) {
	const { data, error, isLoading } = useSWR('api/all-page-views', Fetcher);

	if (isLoading || !data) {
		return 'Could not fetch views';
	}

	const viewGroups = Object.entries(groupBy(data, view => view.url));
	console.log(viewGroups);
	return (
		<BaseCard>
			<>
				{
					viewGroups.map(([url, views]) => {
						<div className='view-group' key={url}>
							{`URL: ${url}, Num views: ${views.length}`}
						</div>
					})
				}
			</>
		</BaseCard>
	)
}