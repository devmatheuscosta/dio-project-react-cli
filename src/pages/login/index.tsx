import { MdEmail, MdLock } from 'react-icons/md';
import { Header } from '../../components/Header';
import { useForm } from 'react-hook-form';
import {
	Column,
	Container,
	CriarText,
	EsqueciText,
	Row,
	SubtitleLogin,
	Title,
	TitleLogin,
	Wrapper,
} from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../services/api';

const schema = yup
	.object({
		email: yup.string().email().required("Campo 'email' é obrigatório"),
		password: yup
			.string()
			.min(3, 'No minimo 3 letras')
			.required("Campo 'password' é obrigatório"),
	})
	.required();

export const Login = () => {
	const navigate = useNavigate();

	const {
		control,
		handleSubmit,

		formState: { isValid, errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	const onSubmit = async (dataForm: any) => {
		try {
			const { data } = await api.get(
				`users?email=${dataForm.email}&password=${dataForm.password}`
			);
			if (data.length === 1) {
				handleClickSignIn();
			} else {
				alert('Houve um erro, tente novamente');
			}
		} catch (error) {
			alert('Houve um erro, tente novamente');
		}
	};
	const handleClickSignIn = () => {
		navigate('/feed');
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
						<TitleLogin>Faça seu login</TitleLogin>
						<SubtitleLogin>
							Faça seu login e make the change.
						</SubtitleLogin>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Input
								type="email"
								placeholder="E-mail"
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
								title="Entrar"
								variant="secondary"
								type="submit"
							/>
						</form>
						<Row>
							<EsqueciText>Esqueci minha senha</EsqueciText>
							<CriarText onClick={() => navigate('/cadastro')}>
								Criar Conta
							</CriarText>
						</Row>
					</Wrapper>
				</Column>
			</Container>
		</>
	);
};
