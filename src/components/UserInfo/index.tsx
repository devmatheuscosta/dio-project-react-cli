import { Container, NameText, Progress, UserPicture } from './styles';

export interface UserInfoProps {
	nome: string;
	image: string;
	percentual: number;
}

export const UserInfo = ({ nome, image, percentual }: UserInfoProps) => {
	return (
		<Container>
			<UserPicture src={image} />
			<div>
				<NameText>{nome}</NameText>
				<Progress percentual={percentual} />
			</div>
		</Container>
	);
};
