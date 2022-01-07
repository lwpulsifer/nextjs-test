import { useState } from "react";
import useSWR from "swr";
import Fetcher from "../../lib/fetch/fetcher";
import { Post } from "../../lib/markdown/api";
import MinimalPost from "./MinimalPost";
import LoadingMessage from "./Loading";
import ErrorMessage from "./ErrorMessage";

function getTags(post: Post) {
	return post.tags.split(",");
}

function hasTagWithPrefix(post: Post, prefix: string) {
	return getTags(post).some((tag) => tag.startsWith(prefix));
}

function comparePostsByDateReverseChronologicalOrder(post1: Post, post2: Post) {
	const createdAt1 = Date.parse(post1.created_at);
	const createdAt2 = Date.parse(post2.created_at);
	return createdAt2 - createdAt1;
}

export default function PostsList() {
	const { data, error } = useSWR("/api/posts/all", Fetcher);

	const [postFilter, setPostFilter] = useState("");

	if (!data) {
		return <LoadingMessage />;
	} else if (error) {
		return <ErrorMessage />;
	}

	const filteredPosts = data?.posts
		.filter((post) => post.display)
		.filter((post) => !postFilter || hasTagWithPrefix(post, postFilter));

	filteredPosts.sort(comparePostsByDateReverseChronologicalOrder);

	const listDisplay =
		filteredPosts?.length > 0 ? (
			<ol
				className={
					"font-thin font-serif flex flex-col w-full justify-center items-center my-2"
				}
			>
				{filteredPosts.map((post) => (
					<MinimalPost key={post.slug} post={post} />
				))}
			</ol>
		) : (
			<div
				className={
					"font-thin font-serif flex flex-col justify-center items-center my-2 h-24"
				}
			>
				{`No post has a tag that begins with "${postFilter}"`}
			</div>
		);

	return (
		<section className="w-full">
			<div className="w-full mb-3 py-3 px-8 bg-sky-300 flex items-center justify-between rounded-t-2xl">
				<h1 className="font-bold text-2xl">Blog Posts</h1>
				<span>
					<label htmlFor={"filter-posts"} className={"mr-2 font-serif"}>
						Filter posts by tag
					</label>
					<input
						id={"filter-posts"}
						type={"search"}
						value={postFilter}
						onChange={(e) => setPostFilter(e.target.value)}
						className={
							"py-1 px-2 rounded-md focus:border-non focus:outline-none bg-sky-200 focus:shadow-md"
						}
					/>
				</span>
			</div>
			{listDisplay}
		</section>
	);
}
