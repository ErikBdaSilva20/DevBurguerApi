import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Wrrapper, ErrorMessage, Form, SubmitButton, SeePaymentMethods } from './styles.js';
import { useCart } from '../../../hooks/CartContext.jsx';
import api from '../../../services/api.js';

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const { cartProducts, clearCart } = useCart();

  async function createOrder() {
    const products = cartProducts.map((product) => ({
      id: product.id,
      quantity: product.quantity,
      price: product.price,
    }));

    return api.post('/orders', { products }, { validateStatus: () => true });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);
    setMessage(null);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message);
      toast.error(error.message);
      setIsLoading(false);
      return;
    }

    if (!paymentIntent) {
      toast.warn('Pagamento em processamento ou aguardando ação.');
      setIsLoading(false);
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      toast.success('Pagamento realizado com sucesso!');
      navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`, {
        state: { status: 'success' },
      });

      try {
        const { status } = await createOrder();

        if (status === 200 || status === 201) {
          toast.success('Pedido realizado com sucesso!');
          clearCart();
          setTimeout(() => navigate('/'), 10000);
        } else if (status === 409) {
          toast.error('Falha ao realizar pedido, tente novamente');
        } else {
          navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
        }
      } catch {
        toast.error('Erro crítico no sistema. Tente novamente mais tarde.');
      }
    }

    setIsLoading(false);
    console.log(paymentIntent);
  };

  return (
    <Wrrapper>
      <Form onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />

        {message && <ErrorMessage>{message}</ErrorMessage>}

        <SubmitButton type="submit" disabled={!stripe || isLoading}>
          {isLoading ? 'Processando...' : 'Pagar Agora'}
        </SubmitButton>
      </Form>

      <p>Os métodos de pagamento aceitos são atualizados de acordo com a sua região.</p>
      <SeePaymentMethods>Ver os métodos de pagamento</SeePaymentMethods>
    </Wrrapper>
  );
}

export default CheckoutForm;
