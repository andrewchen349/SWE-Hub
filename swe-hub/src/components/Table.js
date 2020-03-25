import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Jobs from '../assets/jobs.json';



// function createJobs(arr) {
//   const result = [];
//   arr.map(({Name, Position}) => {
//     result.push({Name, Position});
//   })
//   return result;
// }



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
            <StyledTableCell align="left">Position</StyledTableCell>
            <StyledTableCell align="left">Location</StyledTableCell>
            <StyledTableCell align="left">Year</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Jobs.map(row => (
            <StyledTableRow key={row.Name}>
              <a href={row.URL} target="_blank"><StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell></a>
              <StyledTableCell align="left">{row.Position}</StyledTableCell>
              <StyledTableCell align="left">{row.Location}</StyledTableCell>
              <StyledTableCell align="left">{row.Class}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
