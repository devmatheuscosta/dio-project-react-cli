import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import {
	CardContainer,
	ImageBackground,
	Content,
	UserInfo,
	UserPicture,
	PostInfo,
	HasInfo,
} from './styles';

import capa from '../../assets/api.png';
export const Card = () => {
	return (
		<CardContainer>
			<ImageBackground src={capa} alt="Capa do post" />
			<Content>
				<UserInfo>
					<UserPicture src="https://avatars.githubusercontent.com/u/24852345?v=4&size=64" />
					<div>
						<h4>Matheus Costa</h4>
						<p>Há 8 minutos</p>
					</div>
				</UserInfo>
				<PostInfo>
					<h4>Projeto para curso de HTML e CSS </h4>
					<p>
						Projeto feito no curso de html e css no bootcamp da dio
						do Global avanade...<strong>Saiba Mais</strong>
					</p>
				</PostInfo>
				<HasInfo>
					<h4>#HTML #CSS #Javascript</h4>
					<p>
						<FiThumbsUp /> 10 <FiThumbsDown /> 0
					</p>
				</HasInfo>
			</Content>
		</CardContainer>
	);
};
