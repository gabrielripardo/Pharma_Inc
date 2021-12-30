import {useState, useEffect} from 'react'
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux'
import SimpleTable from "../components/SimpleTable"
import TextField from '../components/TextField'
import { Container } from '@mui/material';
import { loadpatients } from "../store/patients";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Home() {    
  const dispatch = useDispatch();
  const patients = useSelector((state: RootStateOrAny) => state.list);
  const loading = useSelector((state: RootStateOrAny) => state.loading);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  
  function handleClick() {
    // setLoading(true);
    setPage(page+1);
    console.log(page)
  }
  
  useEffect(() => {
      dispatch(loadpatients(page, patients));
  }, [dispatch, page]);


  return (
    <Container>
      <h2>Dashboard</h2>
      <TextField />
      <SimpleTable rows={patients} />             
      <Box sx={{ '& > button': { m: 1 }, display: 'flex', justifyContent: 'center' }} mt={3}>        
        <LoadingButton
          onClick={handleClick}
          startIcon={<RefreshIcon />}
          loading={loading}
          loadingPosition="start"
          variant="contained"
          color="inherit"
        >
          Loading more...
        </LoadingButton>
        
      </Box>
    </Container>  
  )
}