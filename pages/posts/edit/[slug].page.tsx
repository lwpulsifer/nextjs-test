import { useRouter } from "next/router";
import useSWR from "swr";
import BasePage from "../../../commonComponents/BasePage";
import Fetcher from "../../../lib/fetch/fetcher";
import { FetchPostResponse } from "../../api/posts/post-utils";
import Head from "next/head";
import BaseCard from "../../../commonComponents/BaseCard";
import EditPostPage from "../../../commonComponents/posts/edit/EditPostPage";
import useAuth from "../../../hooks/useAuth";

export default function EditPost() {
	const router = useRouter();
	const { user } = useAuth();
	const { slug } = router.query;
	const cleanSlug = !slug || typeof slug === "string" ? slug : slug.join("");

	const { error, data } = useSWR<FetchPostResponse>(
		cleanSlug ? `/api/posts/${cleanSlug}` : null,
		Fetcher,
	);

	const post = !data || "error" in data ? null : data.posts[0];

	if (!user) {
		window.location.assign("/posts");
	}

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
