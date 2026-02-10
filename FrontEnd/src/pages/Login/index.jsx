import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BeerBurguerLogo from '../../assets/BeerBurguerLogo.png';
import abstractBackground from '../../assets/abstractBackground.jpg';
import formBackground from '../../assets/formBackground.jpg';
import { Button } from '../../components/Button';
import { useUser } from '../../hooks/UserContext.jsx';
import api from '../../services/api.js';

import * as yup from 'yup';
import {
  Container,
  ContainerInputs,
  DontHaveAccount,
  ForgetPassword,
  Form,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

const schema = yup
  .object({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 dígitos'),
  })
  .required();

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { data: userData } = await toast.promise(
        api.post('/sessions', {
          email: data.email,
          password: data.password,
        }),
        {
          pending: 'Verificando dados🎲',
          success: {
            render() {
              if (userData?.admin) {
                navigate('/admin/produtos');
              } else {
                navigate('/');
              }
              return;
            },
          },
          error: 'Email ou senha incorretos',
        }
      );

      putUserData(userData);
    } catch (error) {
      console.error('Erro na solicitação', error);
    }
  };

  return (
    <Container>
      <LeftContainer $background={abstractBackground}>
        <img src={BeerBurguerLogo} alt="Logo do estabelecimento" className="Logo" />
      </LeftContainer>

      <RightContainer $background={formBackground}>
        <Title>
          Olá seja bem-vindo ao
          <span> Beer Burguer</span>
          <br />
          Entre com seu <span>login e senha!</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerInputs>
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="E-mail" type="email" {...register('email')} />
            <p>{errors.email?.message}</p>
          </ContainerInputs>

          <ContainerInputs>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              placeholder="Sua senha"
              type="password"
              {...register('password')}
            />
            <ForgetPassword href="#">Esqueceu sua senha?</ForgetPassword>
            <p>{errors.password?.message}</p>
          </ContainerInputs>

          <Button type="submit">Entrar</Button>
        </Form>

        <DontHaveAccount>
          Não possui conta? <button onClick={() => navigate('/cadastro')}>Clique aqui</button>
        </DontHaveAccount>
      </RightContainer>
    </Container>
  );
}
