import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function Dashboard() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
      async function fetchData () {
          let interactionAPI = await axios.get('https://api2.binance.com/api/v3/ticker/24hr');
          await setInfo(interactionAPI.data);
      }
      fetchData();
    }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Crypto</TableCell>
            <TableCell align="right">Price Change</TableCell>
            <TableCell align="right">Volume</TableCell>
            <TableCell align="right">Last Price</TableCell>
            <TableCell align="right">Bid Price</TableCell>
            <TableCell align="right">High Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {info.map((c) => (
            <TableRow
              key={c.firstId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {c.symbol}
              </TableCell>
              <TableCell align="right">{c.priceChange}</TableCell>
              <TableCell align="right">{c.volume}</TableCell>
              <TableCell align="right">{c.lastPrice}</TableCell>
              <TableCell align="right">{c.bidPrice}</TableCell>
              <TableCell align="right">{c.highPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
