import { Post } from "../../lib/markdown/api";

export default function PostFooter({ post }: { post: Post }) {
	const formattedDate = new Date(Date.parse(post.created_at)).toLocaleString(
		"en-US",
		{
			year: "numeric",
			month: "long",
			day: "numeric",
		},
	);

	return (
		<div className={"w-full flex justify-end"}>
			<span>{`— ${post.author.split(" ")[0]}, ${formattedDate}`}</span>
		</div>
	);
}
