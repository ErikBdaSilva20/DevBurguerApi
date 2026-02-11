import PropTypes from 'prop-types';
import * as React from 'react';

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
import api from '../../../services/api.js';
import { formatDate } from '../../../utils/formatDate.js';
import { formatPrice } from '../../../utils/formatPrice.js';
import { SelectStatus } from './styles.js';

// Opções de status do pedido
export const orderStatusOptions = [
  { id: 0, value: 'Todos', label: 'Todos' },
  { id: 1, value: 'Em preparação', label: 'Em preparação' },
  { id: 2, value: 'Pedido Pronto', label: 'Pedido Pronto' },
  { id: 3, value: 'Pedido a Caminho', label: 'Pedido a Caminho' },
  { id: 4, value: 'Entregue', label: 'Entregue' },
  { id: 5, value: 'Pedido Realizado', label: 'Pedido Realizado' },
  { id: 6, value: 'Pedido cancelado', label: 'Pedido cancelado' },
];

// Função auxiliar para criar objeto de pedido
export function createData(order) {
  return {
    orderId: order._id,
    name: order.user.name,
    date: order.createdAt,
    status: order.status,
    products: order.products,
  };
}

// Componente da linha da tabela
export function Row({ row, setOrders, orders }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // Atualiza status do pedido
  async function newStatusOrder(orderId, status) {
    try {
      setLoading(true);
      await api.put(`/orders/${orderId}`, { status });

      // Atualiza o estado local para refletir a mudança na UI
      const updatedOrders = orders.map((order) =>
        order.orderId === orderId ? { ...order, status } : order
      );

      setOrders(updatedOrders);
    } catch (error) {
      console.error('Erro ao atualizar status do pedido', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Linha principal */}
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell className="Tc">{row.orderId}</TableCell>
        <TableCell className="TcName">{row.name}</TableCell>
        <TableCell className="Tc">{formatDate(row.date)}</TableCell>
        <TableCell>
          <SelectStatus
            options={orderStatusOptions.filter((option) => option.id !== 0)}
            defaultValue={orderStatusOptions.find((option) => option.value === row.status)}
            onChange={(e) => newStatusOrder(row.orderId, e.value)}
            placeholder={row.status}
            isLoading={loading}
            menuPortalTarget={document.body}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: 9999 }),
              control: (base) => ({
                ...base,
                border: 'none',
                boxShadow: 'none',
                backgroundColor: 'black',
              }),
            }}
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
                    <TableRow key={product.id || product._id}>
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

// PropTypes corretos
Row.propTypes = {
  setOrders: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        _id: PropTypes.string,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
