import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import BeerBurguerLogo from '../../assets/BeerBurguerLogo.png';
import { Button } from '../../components/Button';
import api from '../../services/api.js';
import {
  Container,
  ContainerInputs,
  DontHaveAccount,
  Form,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

const schema = yup
  .object({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 dígitos'),
    confirmPassword: yup
      .string()
      .required('Confirmação de senha obrigatória')
      .oneOf([yup.ref('password')], 'As senhas não coincidem'),
  })
  .required();

export function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const request = api.post('/users', {
        email: data.email,
        password: data.password,
        name: data.name,
      });

      toast.promise(request, {
        pending: 'Verificando dados...',
        success: {
          render() {
            setTimeout(() => navigate('/login'), 2000);
            return 'Cadastro realizado com sucesso!';
          },
        },
      });
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error('Email já cadastrado');
      } else {
        toast.error('Erro no sistema');
      }
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={BeerBurguerLogo} alt="Logo do estabelecimento" className="Logo" />
      </LeftContainer>

      <RightContainer>
        <Title>Crie sua conta!</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerInputs>
            <label htmlFor="name">Nome</label>
            <input id="name" placeholder="Nome" type="text" {...register('name')} />
            <p>{errors.name?.message}</p>
          </ContainerInputs>

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
            <p>{errors.password?.message}</p>
          </ContainerInputs>

          <ContainerInputs>
            <label htmlFor="password">Confirme sua senha</label>
            <input
              id="password"
              placeholder="Confirme sua senha"
              type="password"
              {...register('confirmPassword')}
            />
            <p>{errors.confirmPassword?.message}</p>
          </ContainerInputs>

          <Button type="submit">Registrar</Button>
        </Form>

        <DontHaveAccount>
          Já possui conta? <button onClick={() => navigate('/login')}>Clique aqui</button>
        </DontHaveAccount>
      </RightContainer>
    </Container>
  );
}
