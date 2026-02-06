import { useEffect, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { formatPrice } from '../../utils/formatPrice';
import {
  Container,
  Card,
  StatusIcon,
  Title,
  DetailsBox,
  Table,
  TableLabel,
  TableContent,
  Link,
  ButtonText,
} from './styles';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

const STATUS_CONTENT_MAP = {
  succeeded: {
    text: 'Pagamento realizado com sucesso!',
    iconColor: '#22c55e',
    icon: CheckCircleIcon,
    buttonText: 'Ir para a home',
    url: '/',
  },
  processing: {
    text: 'Seu pagamento está sendo processado.',
    iconColor: '#64748b',
    icon: InfoIcon,
    buttonText: 'Ir para a home',
    url: '/',
  },
  requires_payment_method: {
    text: 'Seu pagamento foi cancelado ou falhou.',
    iconColor: '#ef4444',
    icon: ErrorIcon,
    buttonText: 'Voltar ao carrinho',
    url: '/carrinho',
  },
  default: {
    text: 'Eita, algo deu errado, tente novamente.',
    iconColor: '#ef4444',
    icon: ErrorIcon,
    buttonText: 'Voltar ao carrinho',
    url: '/carrinho',
  },
};

export function CompletePayment() {
  const stripe = useStripe();
  const [status, setStatus] = useState('default');
  const [intentId, setIntentId] = useState(null);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) return;

      setStatus(paymentIntent.status);
      setIntentId(paymentIntent.id);
      setAmount(paymentIntent.amount);
    });
  }, [stripe]);

  const content = STATUS_CONTENT_MAP[status] || STATUS_CONTENT_MAP.default;

  return (
    <Container>
      <Card>
        <StatusIcon color={content.iconColor}>
          <content.icon className="status-icon" />
        </StatusIcon>

        <Title>{content.text}</Title>

        {intentId && (
          <DetailsBox>
            <Table>
              <tbody>
                <tr>
                  <TableLabel>ID</TableLabel>
                  <TableContent>{intentId}</TableContent>
                </tr>
                <tr>
                  <TableLabel>Status</TableLabel>
                  <TableContent>{status}</TableContent>
                </tr>

                {amount && (
                  <tr>
                    <TableLabel>Valor</TableLabel>
                    <TableContent>{formatPrice(amount)}</TableContent>
                  </tr>
                )}
              </tbody>
            </Table>
          </DetailsBox>
        )}

        <ButtonText as="a" href={content.url}>
          {STATUS_CONTENT_MAP[status].buttonText}
        </ButtonText>
      </Card>
    </Container>
  );
}
