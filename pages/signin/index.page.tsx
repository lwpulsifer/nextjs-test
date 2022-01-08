import { useForm } from "react-hook-form";
import BaseCard from "../../commonComponents/BaseCard";
import BasePage from "../../commonComponents/BasePage";
import RegisteredStringInput from "../../commonComponents/util/formInputs/RegisteredStringInput";
import useAuth from "../../hooks/useAuth";

export default function SignIn() {
	const { handleSubmit, register } = useForm();
	const { user, signIn } = useAuth();

	const returnToHomePage = () => window.location.assign("/");

	if (user) {
		returnToHomePage();
	}

	const onSubmit = (data) => {
		signIn({ ...data })
			.then(() => {
				returnToHomePage();
			});
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