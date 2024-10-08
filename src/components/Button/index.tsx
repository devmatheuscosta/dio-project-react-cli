import { ButtonContainer } from './styles';

interface ButtonProps {
	title: string;
	variant?: 'primary' | 'secondary';
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	title,
	variant = 'primary',
	type = 'button',
	onClick,
}) => {
	return (
		<ButtonContainer variant={variant} onClick={onClick} type={type}>
			{title}
		</ButtonContainer>
	);
};
