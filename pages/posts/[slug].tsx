import BasePage from "../../components/BasePage";
import BaseCard from "../../components/BaseCard";
import Head from "next/head";
import PostBody from "../../components/posts/PostBody";
import PostTitle from "../../components/posts/PostTitle";
import PostFooter from "../../components/posts/PostFooter";
import useSWR from "swr";
import Fetcher from "../../lib/fetch/fetcher";
import { useRouter } from "next/router";

function BlogPost() {
	const router = useRouter();
	const { slug } = router.query;

	const cleanSlug = typeof slug === "string" || !slug ? slug : slug.join("");
	const { error, data } = useSWR(`/api/posts/${cleanSlug}`, Fetcher);
	const post = data?.post;

	const cardContent =
		!post || error ? null : (
			<>
				<PostTitle title={post.title} />
				<section className="w-11/12 p-3">
					<PostBody post={post} />
					<PostFooter post={post} />
				</section>
			</>
		);

	return (
		<BasePage>
			<Head>
				<title>{post ? `${post.title} — ${post.author}` : "Blog Post"}</title>
			</Head>
			<BaseCard additionalClassNames={"font-serif font-thin"}>
				{cardContent}
			</BaseCard>
		</BasePage>
	);
}

export default BlogPost;
