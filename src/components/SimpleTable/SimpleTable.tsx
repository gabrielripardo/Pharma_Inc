import {useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DetailsModal from '../DetailsModal/DetailsModal';
import Patient from '../../models/Patient.model';

export default function SimpleTable(props: any) {
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState<Patient[]>([]);

  const handleOpen = (row: Patient[]) => {
    setOpen(true)
    setRow(row)    
  }

  const handleClose = () => setOpen(false);  

  return (
    <>
      {
        open && <DetailsModal open={open} handleClose={handleClose} data={row}/> 
      }
      
      <TableContainer component={Paper} data-testid="table_container">      
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Birth</TableCell>
              <TableCell align="right">Actions</TableCell>            
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row: any) => (
              <TableRow key={row.login.uuid} 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                
              >
                <TableCell component="th" scope="row" role="patient_name">{`${row.name.title} ${row.name.first} ${row.name.last}`}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.registered.age}</TableCell>
                <TableCell align="right">                             
                  <Button variant="contained" size="small" onClick={() => handleOpen(row)} data-testid="button_view"> 
                    View
                  </Button>
                </TableCell>              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>    
  );
}