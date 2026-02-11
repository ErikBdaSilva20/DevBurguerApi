import { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { createData, orderStatusOptions, Row } from './TableRow.jsx';
import api from '../../../services/api.js';
import { Container, SelectButton, SelectProductsByFilter } from './styles.js';

export function Orders() {
  // backup completo das ordens
  const [orders, setOrders] = useState([]);

  // ordens filtradas que vão para a tabela
  const [filteredOrdersMenu, setFilteredOrdersMenu] = useState([]);

  // status do pedido ativo
  const [activeStatus, setActiveStatus] = useState(0); // 0 = Todos

  useEffect(() => {
    async function newStatusOrder() {
      try {
        const { data } = await api.get('/orders');

        const mappedRows = data.map(createData);

        setOrders(mappedRows); // backup
        setFilteredOrdersMenu(mappedRows); // inicialmente mostra todas
      } catch (error) {
        console.error('Erro ao carregar pedidos:', error);
      }
    }

    newStatusOrder();
  }, []);

  function handleStatus(status) {
    setActiveStatus(status.id); // define qual status está ativo

    if (status.id === 0) {
      setFilteredOrdersMenu(orders); // mostra todas
    } else {
      const filtered = orders.filter((order) => order.status === status.value);
      setFilteredOrdersMenu(filtered); // filtra localmente
    }
  }

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrdersMenu(orders);
    } else {
      const statusIndex = orderStatusOptions.findIndex((item) => item.id === activeStatus);

      const newFilteredOrders = orders.filter((order) => {
        return order.status === orderStatusOptions[statusIndex].value;
      });
      setFilteredOrdersMenu(newFilteredOrders);
    }
  }, [activeStatus, orders]);

  return (
    <Container>
      <SelectProductsByFilter>
        {orderStatusOptions.map((option) => (
          <SelectButton
            key={option.id}
            $activeStatus={activeStatus === option.id ? 'active' : 'inactive'}
            onClick={() => handleStatus(option)}
          >
            {option.label}
          </SelectButton>
        ))}
      </SelectProductsByFilter>

      <TableContainer className="TableContainer" component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell className="Tc" />
              <TableCell className="Tc">ID do pedido</TableCell>
              <TableCell className="Tc">Cliente</TableCell>
              <TableCell className="Tc">Data</TableCell>
              <TableCell className="Tc">Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredOrdersMenu.map((row) => (
              <Row key={row.orderId} row={row} setOrders={setOrders} orders={orders} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
