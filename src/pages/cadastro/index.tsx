import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import {
	Column,
	Container,
	CriarText,
	Row,
	SubtitleLogin,
	Title,
	TitleLogin,
	Wrapper,
} from './styles';
import { Input } from '../../components/Input';
import { MdAccountBox, MdEmail, MdLock } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

const schema = yup.object({
	name: yup
		.string()
		.min(10, 'No minimo 10 letras')
		.required('Campo obrigatório'),
	email: yup.string().email('Email inválido').required('Campo obrigatório'),
	password: yup
		.string()
		.min(3, 'No minimo 3 letras')
		.required('Campo obrigatório'),
});

export const Cadastro = () => {
	const navigate = useNavigate();

	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	const onSubmit = async (dataForm: any) => {
		try {
			const response = await api.post('/users', dataForm);
			console.log(response.data);
			if (response.status === 201) {
				alert('Usário criado com sucesso!');
				navigate('/login');
			}
		} catch (error) {
			alert('Houve um erro, tente novamente.');
		}
	};

	return (
		<>
			<Header autenticado={false} />
			<Container>
				<Column>
					<Title>
						A plataforma para você aprender com experts, dominar as
						principais tecnologias e entrar mais rápido nas empresas
						mais desejadas.
					</Title>
				</Column>
				<Column>
					<Wrapper>
						<TitleLogin>Comece agora grátis</TitleLogin>
						<SubtitleLogin>
							Crie sua conta e make the change.
						</SubtitleLogin>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Input
								type="text"
								placeholder="Nome"
								leftIcon={<MdAccountBox />}
								name="name"
								control={control}
								errorMessage={errors.name?.message}
							/>
							<Input
								type="email"
								placeholder="Email"
								leftIcon={<MdEmail />}
								name="email"
								control={control}
								errorMessage={errors.email?.message}
							/>
							<Input
								type="password"
								placeholder="Senha"
								leftIcon={<MdLock />}
								name="password"
								control={control}
								errorMessage={errors.password?.message}
							/>
							<Button
								title="Criar minha conta"
								variant="secondary"
								type="submit"
							/>
						</form>

						<Row>
							Ao clicar em "criar minha conta grátis", declaro que
							aceito as Política de Privacidade e os Termos de Uso
							do projeto.
						</Row>

						<Row>
							<CriarText onClick={() => navigate('/login')}>
								<span>Ja possui conta?</span> Fazer login
							</CriarText>
						</Row>
					</Wrapper>
				</Column>
			</Container>
		</>
	);
};
