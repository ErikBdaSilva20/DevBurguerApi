import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PropTypes from 'prop-types';
import { useCart } from '../../hooks/CartContext.jsx';
import { formatPrice } from '../../utils/formatPrice.js';
import { CardImage, Container, ContainerItems } from './styles.js';

export function CardProduct({ product, $imageurl }) {
  const { putAProductInCart } = useCart();

  return (
    <Container>
      <CardImage $imageurl={product.url} className="menuImage" />

      <ContainerItems>
        <p>{product.name}</p>
        <strong>{formatPrice(product.price)}</strong>
      </ContainerItems>

      <button
        type="button"
        onClick={() => {
          putAProductInCart(product);
        }}
      >
        <AddShoppingCartIcon />
      </button>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
  $imageurl: PropTypes.string,
};
