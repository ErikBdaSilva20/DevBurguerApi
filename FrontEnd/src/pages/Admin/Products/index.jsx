import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { formatPrice } from '../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Container, NotOfferIcon, OfferIcon, ProductImage } from './styles';

export function Products() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    }

    loadProducts();
  }, []);

  function editProduct(product) {
    navigate(`/admin/editar-produto`, { state: { product } });

    console.log(product);
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Produto em oferta</TableCell>
              <TableCell align="center"></TableCell>

              <TableCell align="center">Imagem do produto</TableCell>
              <TableCell align="center">Id do produto</TableCell>

              <TableCell align="center">Editar item</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((products) => (
              <TableRow
                key={products.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="products" align="center">
                  {products.name}
                </TableCell>
                <TableCell align="center">{formatPrice(products.price)}</TableCell>
                <TableCell align="center">
                  {products.offer ? <OfferIcon /> : <NotOfferIcon />}
                </TableCell>

                <TableCell align="center">
                  <ProductImage src={products.url} alt={products.name} />
                </TableCell>
                <TableCell align="center">{products.category_id}</TableCell>
                <TableCell align="center">
                  <ModeEditIcon className="icon" onClick={() => editProduct(products)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
