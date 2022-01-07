import { Post } from "../../lib/markdown/api";
import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ post }: { post: Post }) {
	return (
		<section className={markdownStyles["markdown"]}>
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</section>
	);
}
