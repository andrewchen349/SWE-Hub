import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Jobs from '../assets/morejob.json';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.back,
    fontWeight: 700,
    fontSize: 16,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

export default function CustomizedTables() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell align="center">Application Period</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Jobs.map(row => (
            <StyledTableRow key={row.Name}>
              <a href={row.Link} target="_blank" rel="noopener noreferrer">
                <StyledTableCell align="center" component="th" scope="row">
                  {row.Name}
                </StyledTableCell>
              </a>
              <StyledTableCell align="center">{row.Period}</StyledTableCell>
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}