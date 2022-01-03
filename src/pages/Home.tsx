import {useState, useEffect} from 'react'
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux'
import SimpleTable from "../components/SimpleTable"
import TextField from '../components/TextField'
import { Container } from '@mui/material';
import { loadpatients } from "../store/patients";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import RefreshIcon from '@mui/icons-material/Refresh';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function Home() {    
  const dispatch = useDispatch();
  const patients = useSelector((state: RootStateOrAny) => state.list);
  const loading = useSelector((state: RootStateOrAny) => state.loading);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  
  function changeKeyword(value: string){
    console.log('# value '+value)
    setPage(1)
    setKeyword(value)
    console.log('# keyword '+keyword)
    dispatch(loadpatients(page, [], value));
  }

  function nextPage() {
    // setLoading(true);
    setPage(page+1);    
    console.log(page)
  }
  
  useEffect(() => {
      dispatch(loadpatients(page, patients, keyword));
  }, [dispatch, page]);


  return (
    <Container>
      <h2>Dashboard</h2>
      <Box component="form" noValidate autoComplete="off" mb={3}>
        <FormControl sx={{ width: '100%' }} style={{backgroundColor: "#fff"}}>
          <OutlinedInput placeholder="Search" value={keyword} onChange={e => changeKeyword(e.target.value)}/>        
        </FormControl>
      </Box>
      <SimpleTable rows={patients} />             
      <Box sx={{ '& > button': { m: 1 }, display: 'flex', justifyContent: 'center' }} mt={3}>        
        <LoadingButton
          onClick={nextPage}
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