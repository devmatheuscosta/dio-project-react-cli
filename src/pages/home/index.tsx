import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Container, Title, TextContent, TitleHighlight } from './styles';
import banner from '../../assets/banner.png';
import { Button } from '../../components/Button';

export const Home = () => {
	const navigate = useNavigate();

	const handleClickSignIn = () => {
		navigate('/login');
	};

	return (
		<>
			<Header autenticado={false} />
			<Container>
				<div>
					<Title>
						<TitleHighlight>
							Implemente
							<br />
						</TitleHighlight>
						o seu futuro global agora!
					</Title>
					<TextContent>
						Domine as tecnologias utilizadas pelas empresas mais
						inovadoras do mundo, e encare seu novo desafio
						profissional, evoluindo em comunidade com os melhores
						experts.
					</TextContent>
					<Button
						title="Começar"
						variant="secondary"
						onClick={handleClickSignIn}
					/>
				</div>
				<div>
					<img src={banner} alt="" />
				</div>
			</Container>
		</>
	);
};
