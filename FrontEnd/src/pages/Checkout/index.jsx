import { ArrowBack } from '@mui/icons-material';
import { Elements } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckoutForm } from '../../components';
import { appearance } from '../../components/Stripe/appearance';
import { stripePromise } from '../../components/Stripe/stripePromise';

import { BackButton, Container, Content, RedirectContainer, Title } from './styles';

export function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const clientSecret = location.state?.clientSecret;

  useEffect(() => {
    if (!clientSecret) {
      const timer = setTimeout(() => {
        navigate('/carrinho');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [clientSecret, navigate]);

  if (!clientSecret) {
    return (
      <Container>
        <Content>
          <RedirectContainer>
            <h2>Pagamento indisponível</h2>
            <p>Você será redirecionado ao carrinho.</p>
          </RedirectContainer>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <BackButton onClick={() => navigate('/carrinho')}>
          <ArrowBack /> Voltar ao carrinho
        </BackButton>
        <Title>Finalizar Pagamento</Title>
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance,
          }}
        >
          <CheckoutForm />
        </Elements>
      </Content>
    </Container>
  );
}
