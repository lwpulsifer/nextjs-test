import { useForm } from "react-hook-form";
import BaseCard from "../../commonComponents/BaseCard";
import BasePage from "../../commonComponents/BasePage";
import RegisteredStringInput from "../../commonComponents/util/formInputs/RegisteredStringInput";
import Fetcher from "../../lib/fetch/fetcher";

export default function SignUp() {
	const { handleSubmit, register } = useForm();

	const onSubmit = (data) => {
		Fetcher("/api/auth/sign-up", { method: 'POST', body: JSON.stringify({ ...data }) })
			.then((s) => console.log(s));
	};

	return (
		<BasePage>
			<BaseCard>
				<form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-3'}>
					<RegisteredStringInput field={'email'} def={''} register={register} />
					<RegisteredStringInput field={'password'} def={''} register={register} />
					<input type={'submit'} />
				</form>
			</BaseCard>
		</BasePage>
	)
}