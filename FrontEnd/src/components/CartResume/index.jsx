import {
  Button,
  Container,
  ContainerBottom,
  ContainerTop,
  DeliveryTax,
  DeliveryTaxPrice,
  Items,
  ItemsPrice,
  Title,
  Total,
} from './styles.js';

import api from '../../services/api.js';
import { useCart } from '../../hooks/CartContext.jsx';
import { useEffect, useState } from 'react';
import { formatPrice } from '../../utils/formatPrice.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function CartResume() {
  const Navigate = useNavigate();
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(200);
  const { cartProducts } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });

    try {
      const { data } = await api.post('/create-payment-intent', { products });

      Navigate('/checkout', {
        state: {
          clientSecret: data.clientSecret,
          dpmCheckerLink: data.dpmCheckerLink,
        },
      });
    } catch (error) {
      console.log(error);
      toast.error('Erro no sistema. Tente novamente');
    }
  };

  return (
    <>
      <Container>
        <ContainerTop>
          <Title>Resumo do pedido</Title>
          <Items>Itens</Items>
          <ItemsPrice>{formatPrice(finalPrice)}</ItemsPrice>
          <DeliveryTax>Taxa de Entrega</DeliveryTax>
          <DeliveryTaxPrice>{formatPrice(deliveryTax)}</DeliveryTaxPrice>
        </ContainerTop>

        <ContainerBottom>
          <Total>Total</Total>
          <Total>{formatPrice(finalPrice + deliveryTax)}</Total>
        </ContainerBottom>
        <Button onClick={submitOrder}>Finalizar Pedido</Button>
        <button onClick={() => Navigate('/menu')} className="backToAddMoreProducts">
          Adicionar mais produtos?
        </button>
      </Container>
    </>
  );
}
