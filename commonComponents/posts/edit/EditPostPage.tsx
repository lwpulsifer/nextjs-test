import { Post } from "../../../lib/markdown/api";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useRef } from "react";
import { supabase } from "../../../lib/db/supabase";
import Fetcher from "../../../lib/fetch/fetcher";

function capitalize(s: string) {
	return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function RegisteredStringInput({
	field,
	def,
	register,
}: {
	field: string;
	def: string;
	register;
}) {
	const { ref, ...rest } = register(field);
	const textAreaRef = useRef(null);

	useEffect(() => {
		textAreaRef.current.style.height = "auto";
		textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
	}, []);

	return (
		<div className={"w-3/4 gap-3 grid grid-cols-2"}>
			<label className={"w-full"} htmlFor={field}>
				{capitalize(field)}
			</label>
			<textarea
				className={"w-full p-3"}
				id={field}
				type={"text"}
				defaultValue={def}
				ref={(e) => {
					ref(e);
					textAreaRef.current = e;
				}}
				onInput={() => {
					if (!textAreaRef.current) {
						console.log("Ref not registered");
						return;
					}
					textAreaRef.current.style.height = "auto";
					textAreaRef.current.style.height =
						textAreaRef.current.scrollHeight + "px";
				}}
				{...rest}
			/>
		</div>
	);
}

function RegisteredCheckboxInput({
	field,
	def,
	register,
}: {
	field: string;
	def: boolean;
	register;
}) {
	return (
		<div className={"w-3/4 gap-3 grid grid-cols-2"}>
			<label className={"w-full"} htmlFor={field}>
				{field}
			</label>
			<input type={"checkbox"} checked={def} {...register(field)} />
		</div>
	);
}

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
			<input type="submit" />
		</form>
	);
}
