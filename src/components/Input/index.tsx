import { IconContainer, InputContainer, InputText, ErrorText } from './styles';
import { Controller } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	leftIcon?: React.ReactNode | null;
	control?: any;
	name?: string;
	errorMessage?: string;
}

export const Input = ({
	leftIcon,
	name,
	control,
	errorMessage,
	...rest
}: InputProps) => {
	return (
		<>
			<InputContainer>
				{leftIcon && <IconContainer>{leftIcon}</IconContainer>}
				<Controller
					name={name ?? ''}
					control={control}
					rules={{ required: true }}
					render={({ field }) => <InputText {...field} {...rest} />}
				/>
			</InputContainer>
			{errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
		</>
	);
};
