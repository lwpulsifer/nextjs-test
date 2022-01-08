import useAuth from "../../hooks/useAuth";
import BackToPostsLink from "./BackToPostsLink";
import EditPostButton from "./EditPostButton";

type PostTitleProps = {
	title?: string;
	slug: string;
	tags: string;
};

export default function PostTitle({
	title = "Blog Post",
	slug,
	tags,
}: PostTitleProps) {
	const { user } = useAuth();
	return (
		<div className="title-section w-full mb-3 py-5 bg-sky-300 flex items-center justify-center rounded-t-2xl">
			<span className="flex items-center justify-between w-11/12">
				<span className={"flex flex-col gap-1"}>
					<h1 className="font-bold text-2xl">{title}</h1>
					<p className="italic text-xs">{tags}</p>
				</span>
				<span className="flex flex-col justify-center items-center">
					<BackToPostsLink />
					{user && <EditPostButton slug={slug} />}
				</span>
			</span>
		</div>
	);
}
