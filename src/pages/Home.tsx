import {useState, useEffect} from 'react'
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux'
import SimpleTable from "../components/SimpleTable"
import TextField from '../components/TextField'
import { Container } from '@mui/material';
import { loadpatients } from "../store/patients";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import RefreshIcon from '@mui/icons-material/Refresh';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Home() {    
  const dispatch = useDispatch();
  const patients = useSelector((state: RootStateOrAny) => state.list);
  const loading = useSelector((state: RootStateOrAny) => state.loading);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [nationality, setNationality] = useState('');
  const [gender, setGender] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
    console.log(event.target.value)    
    dispatch(loadpatients(page, [], event.target.value, nationality));
  };
  
  function changeNationality(value: string){
    console.log('# value '+value)
    setPage(1)
    setNationality(value)
    console.log('# nationality '+nationality)
    dispatch(loadpatients(page, [], value));
  }

  function nextPage() {
    // setLoading(true);
    setPage(page+1);    
    console.log(page)
  }
  
  useEffect(() => {
      dispatch(loadpatients(page, patients, gender, nationality));
  }, [dispatch, page, nationality]);


  return (
    <Container>
      <h2>Dashboard</h2>
      <TextField />
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel 
            value="female" 
            label="Female" 
            control={
              <Radio
                checked={gender === 'female'}
                onChange={handleChange}
                value="female"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'female' }}
              />
            } 
          />
          <FormControlLabel 
            value="male" 
            label="Male"
            control={ 
              <Radio
                checked={gender === 'male'}
                onChange={handleChange}
                value="male"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'male' }}
              />
            }  
          />                  
        </RadioGroup>
      </FormControl>
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