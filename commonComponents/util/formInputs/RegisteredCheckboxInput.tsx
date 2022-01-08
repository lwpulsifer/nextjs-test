import { capitalize } from "../../../util/StringUtils";

export default function RegisteredCheckboxInput({
	field,
	def,
	register,
}: {
	field: string;
	def: boolean;
	register;
}) {
	return (
		<div className={"w-3/4 flex flex-col gap-3"}>
			<label className={"w-full"} htmlFor={field}>
				{capitalize(field)}
			</label>
			<input type={"checkbox"} checked={def} {...register(field)} />
		</div>
	);
}