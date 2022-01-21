import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { fontWeight } from '@mui/system';

export function Dashboard() {
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  useEffect(() => {
    async function fetchData () {
      let interactionAPI = await axios.get('https://api2.binance.com/api/v3/ticker/24hr');
      await setInfo(interactionAPI.data);
    }
    fetchData();
  }, []);

  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  


  return (
    <div>
  <AppBar position="static">
      <Typography variant="h6" color="inherit" component="div">
       Crypto Dashboard 24 hs. 
      </Typography>
  </AppBar>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: "bolder"}}>Crypto</TableCell>
            <TableCell align="right" style={{fontWeight: "bolder"}}>Price</TableCell>
            <TableCell align="right" style={{fontWeight: "bolder"}}>Last Price</TableCell>
            <TableCell align="right" style={{fontWeight: "bolder"}}>Price change</TableCell>
            <TableCell align="right" style={{fontWeight: "bolder"}}>Price change %</TableCell>
            <TableCell align="right" style={{fontWeight: "bolder"}}>Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {info.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((c) => (
            <TableRow
              key={c.symbol}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {c.symbol}
              </TableCell>
              <TableCell align="right">${c.openPrice}</TableCell>
              <TableCell align="right">${c.lastPrice}</TableCell>
            <TableCell 
            style={{color: c.priceChange[0] === '-' ? 'red' : 'green'}} 
            align="right"> 
            ${c.priceChange}
            </TableCell>
            <TableCell 
            style={{color: c.priceChangePercent[0] === '-' ? 'red' : 'green'}} 
            align="right"> 
            {c.priceChangePercent}%
            </TableCell>
            <TableCell align="right">${c.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
      component="div"
      count={info?.length + 1}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </TableContainer>
    </div>
  );
}
