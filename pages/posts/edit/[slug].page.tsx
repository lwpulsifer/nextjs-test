import { useRouter } from "next/router";
import useSWR from "swr";
import BasePage from "../../../commonComponents/BasePage";
import Fetcher from "../../../lib/fetch/fetcher";
import { FetchPostResponse } from "../../api/posts/post-utils";
import Head from "next/head";
import BaseCard from "../../../commonComponents/BaseCard";
import EditPostPage from "../../../commonComponents/posts/edit/EditPostPage";

export default function EditPost() {
	const router = useRouter();
	const { slug } = router.query;
	const cleanSlug = !slug || typeof slug === "string" ? slug : slug.join("");

	const { error, data } = useSWR<FetchPostResponse>(
		`/api/posts/${cleanSlug}`,
		Fetcher,
		{ isPaused: () => !cleanSlug },
	);

	const post = !data || "error" in data ? null : data.posts[0];

	if (!post) {
		return <BasePage />;
	}

	return (
		<BasePage>
			<Head>
				<title>{post ? `Edit ${post.title}` : "Edit Post"}</title>
			</Head>
			<BaseCard additionalClassNames={"p-5"}>
				<EditPostPage post={post} />
			</BaseCard>
		</BasePage>
	);
}
