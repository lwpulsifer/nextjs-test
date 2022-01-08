import { useRef, useEffect } from 'react';
import { capitalize } from '../../../util/StringUtils';

export default function RegisteredStringInput({
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
		<div className={"w-3/4 flex flex-col gap-3"}>
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