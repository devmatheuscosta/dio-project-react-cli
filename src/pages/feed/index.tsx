import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

export const Feed = () => {
	return (
		<>
			<Header autenticado={true} />
			<Container>
				<Column flex={3}>
					<Title>Feed</Title>
					<Card />
				</Column>
				<Column flex={1}>
					<TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
					<UserInfo
						nome="Matheus Costa"
						image="https://avatars.githubusercontent.com/u/24852345?v=4&size=64"
						percentual={25}
					/>
					<UserInfo
						nome="Matheus Costa"
						image="https://avatars.githubusercontent.com/u/24852345?v=4&size=64"
						percentual={65}
					/>
					<UserInfo
						nome="Matheus Costa"
						image="https://avatars.githubusercontent.com/u/24852345?v=4&size=64"
						percentual={45}
					/>
					<UserInfo
						nome="Matheus Costa"
						image="https://avatars.githubusercontent.com/u/24852345?v=4&size=64"
						percentual={72}
					/>
				</Column>
			</Container>
		</>
	);
};
