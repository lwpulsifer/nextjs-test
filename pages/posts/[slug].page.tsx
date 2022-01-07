import BasePage from "../../commonComponents/BasePage";
import BaseCard from "../../commonComponents/BaseCard";
import Head from "next/head";
import useSWR from "swr";
import Fetcher from "../../lib/fetch/fetcher";
import { useRouter } from "next/router";
import { FetchPostResponse } from "../api/posts/post-utils";
import PostDisplay from "../../commonComponents/posts/PostDisplay";

function BlogPost() {
	const router = useRouter();
	const { slug } = router.query;

	const cleanSlug = !slug || typeof slug === "string" ? slug : slug.join("");
	const { error, data } = useSWR<FetchPostResponse>(
		`/api/posts/${cleanSlug}`,
		Fetcher,
		{ isPaused: () => !cleanSlug },
	);

	const post = !data || "error" in data ? null : data.posts[0];

	return (
		<BasePage>
			<Head>
				<title>{post ? `${post.title} — ${post.author}` : "Blog Post"}</title>
			</Head>
			<BaseCard additionalClassNames={"font-serif font-thin"}>
				{!post || error ? null : <PostDisplay post={post} />}
			</BaseCard>
		</BasePage>
	);
}

export default BlogPost;
