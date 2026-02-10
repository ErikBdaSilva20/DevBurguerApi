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

import { SelectStatus } from './styles.js';
export function Orders() {
  const [row, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('/orders');
      const mappedRows = data.map(createData);
      setRows(mappedRows);
    }

    loadOrders();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID do pedido</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {row.map((row) => (
            <Row key={row.orderId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
