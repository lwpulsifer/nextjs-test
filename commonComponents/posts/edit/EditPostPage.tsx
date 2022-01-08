import { Post } from "../../../lib/markdown/api";
import { useForm, SubmitHandler } from "react-hook-form";
import Fetcher from "../../../lib/fetch/fetcher";
import BackToPostLink from "./BackToPostLink";
import RegisteredStringInput from "../../util/formInputs/RegisteredStringInput";
import RegisteredCheckboxInput from "../../util/formInputs/RegisteredCheckboxInput";

type Inputs = Post;

export default function EditPostPage({ post }: { post: Post }) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const newPostParams: Post = {
			...data,
			last_updated_at: new Date().toISOString().toLocaleString(),
		};
		Fetcher(`/api/posts/edit/${data.slug}`, {
			method: "POST",
			body: JSON.stringify(newPostParams),
		}).then(() => {
			window.location.assign(`/posts/${data.slug}`);
		});
	};

	return (
		<>
			<span className="flex flex-col justify-between items-center text-center gap-3">
				<h1 className="text-lg font-bold text-highlightHeader">{`Edit ${post.title}`}</h1>
			</span>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={
					"relative flex flex-col justify-center items-center gap-3 text-thin w-full"
				}
			>
				<RegisteredStringInput
					field={"title"}
					def={post.title}
					register={register}
				/>
				<RegisteredStringInput
					field={"slug"}
					def={post.slug}
					register={register}
				/>
				<RegisteredStringInput
					field={"description"}
					def={post.description}
					register={register}
				/>
				<RegisteredStringInput
					field={"author"}
					def={post.author}
					register={register}
				/>
				<RegisteredStringInput
					field={"tags"}
					def={post.tags}
					register={register}
				/>
				<RegisteredStringInput
					field={"content"}
					def={post.raw_content}
					register={register}
				/>
				<RegisteredCheckboxInput
					field={"display"}
					def={post.display}
					register={register}
				/>
				<span className="flex justify-between w-3/4">
					<BackToPostLink slug={post.slug}/>
					<span className={"bg-green-500 rounded-full py-1 px-2 border-green-600 shadow-md cursor-pointer"}>
						<input type="submit" className="cursor-pointer" />
					</span>
				</span>
			</form>
		</>
	);
}
