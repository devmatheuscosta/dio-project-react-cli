import { Button } from '../Button';
import logo from '../../assets/logo.png';
import {
	BuscarInputContainer,
	Container,
	MenuRight,
	Row,
	Wrapper,
	Input,
	Menu,
	Logo,
	UserPicture,
} from './styles';
import { useNavigate } from 'react-router-dom';

export interface HeaderProps {
	autenticado: boolean;
}

export const Header = ({ autenticado }: HeaderProps) => {
	const navigate = useNavigate();
	return (
		<Wrapper>
			<Container>
				<Row>
					<Logo src={logo} alt="Logo" />
					{autenticado ? (
						<>
							<BuscarInputContainer>
								<Input placeholder="Buscar..." />
							</BuscarInputContainer>
							<Menu>Live Code</Menu>
							<Menu>Global</Menu>
						</>
					) : null}
				</Row>
				<Row>
					{autenticado ? (
						<UserPicture src="https://avatars.githubusercontent.com/u/24852345?v=4&size=64" />
					) : (
						<>
							<MenuRight
								variant="primary"
								active
								onClick={() => navigate('/')}
							>
								Home
							</MenuRight>
							<Button
								variant="secondary"
								title="Entrar"
								onClick={() => navigate('/login')}
							/>

							<Button
								variant="secondary"
								title="Cadastrar"
								onClick={() => navigate('/cadastro')}
							/>
						</>
					)}
				</Row>
			</Container>
		</Wrapper>
	);
};
