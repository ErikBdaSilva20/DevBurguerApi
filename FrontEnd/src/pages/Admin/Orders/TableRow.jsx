import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SelectStatus } from './styles.js';
import { formatPrice } from '../../../utils/formatPrice.js';
import api from '../../../services/api.js';

export function createData(order) {
  return {
    orderId: order._id,
    name: order.user.name,
    date: order.createdAt,
    status: order.status,
    products: order.products,
  };
}

async function newStatusOrder(orderId, newStatus) {
  try {
    await api.put(`/orders/${orderId}/status`, { status: newStatus });
  } catch (error) {
    console.error('Erro ao atualizar status do pedido', error);
  }
}

export const orderStatusOptions = [
  { id: 0, value: 'Todos', label: 'Todos' },
  { id: 1, value: 'Em preparação', label: 'Em preparação' },
  { id: 2, value: 'Pedido Pronto', label: 'Pedido Pronto' },
  { id: 3, value: 'Pedido a Caminho', label: 'Pedido a Caminho' },
  { id: 4, value: 'Entregue', label: 'Entregue' },
  { id: 5, value: 'Pedido Realizado', label: 'Pedido Realizado' },
  { id: 6, value: 'Pedido cancelado', label: 'Pedido cancelado' },
];
export function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Linha principal */}
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell>{row.orderId}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{new Date(row.date).toLocaleDateString('pt-BR')}</TableCell>
        <TableCell>
          <SelectStatus
            options={orderStatusOptions.filter((status) => status.id !== 0)}
            placeholder="status"
            defaultValue={orderStatusOptions.find((status) => status.value === row.status)}
            onChange={(status) => newStatusOrder(row.orderId, status.value)}
          />
        </TableCell>
      </TableRow>

      {/* Linha expandida */}
      <TableRow>
        <TableCell colSpan={5} sx={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2 }}>
              <Typography variant="h6" gutterBottom>
                Detalhes do pedido
              </Typography>

              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Produto</TableCell>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Preço</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>{formatPrice(product.price)}</TableCell>
                      <TableCell>{formatPrice(product.price * product.quantity)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
