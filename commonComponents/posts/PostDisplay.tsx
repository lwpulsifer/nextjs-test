import type { Post } from "../../lib/markdown/api";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

export default function PostDisplay({ post }: { post: Post }) {
	return (
		<>
			<PostTitle title={post.title} slug={post.slug} tags={post.tags} />
			<section className="w-11/12 p-3">
				<PostBody post={post} />
				<PostFooter post={post} />
			</section>
		</>
	);
}
