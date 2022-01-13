import {useState, useEffect} from 'react'
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux'
import SimpleTable from "../components/SimpleTable/SimpleTable"
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Home() {    
  const dispatch = useDispatch();
  const patients = useSelector((state: RootStateOrAny) => state.list);
  const loading = useSelector((state: RootStateOrAny) => state.loading);
  
  const [page, setPage] = useState(1);
  const [nationality, setNationality] = useState('');
  const [gender, setGender] = useState('');  

  const changeNationality = (event: SelectChangeEvent) => {
    console.log('# value '+event.target.value)    
    setNationality(event.target.value)
    console.log('# nationality '+nationality)
    dispatch(loadpatients(page, [], gender, event.target.value));
  };

  const changeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
    console.log(event.target.value)    
    dispatch(loadpatients(page, [], event.target.value, nationality));
  };  

  function nextPage() {
    // setLoading(true);
    setPage(page+1);    
    console.log(page)
  }
  
  useEffect(() => {
      dispatch(loadpatients(page, patients, gender, nationality));
  }, [dispatch, page]);


  return (
    <Container>
      <h2>Dashboard</h2>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-filled-label">Nationality</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={nationality}
          onChange={changeNationality}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>          
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="BR">Brazil</MenuItem>
          <MenuItem value="CA">Canada</MenuItem>
          <MenuItem value="CH">Switzerland</MenuItem>
          <MenuItem value="DE">Germany</MenuItem>
          <MenuItem value="DK">Denmark</MenuItem>
          <MenuItem value="ES">Spain</MenuItem>
          <MenuItem value="FI">Finland</MenuItem>
          <MenuItem value="FR">France</MenuItem>
          <MenuItem value="GB">United Kingdom</MenuItem>
          <MenuItem value="IE">Ireland</MenuItem>
          <MenuItem value="IR">Iran</MenuItem>
          <MenuItem value="NO">Norway</MenuItem>
          <MenuItem value="NL">Netherlands</MenuItem>
          <MenuItem value="NZ">New Zealand</MenuItem>
          <MenuItem value="TR">Turkey</MenuItem>
          <MenuItem value="US">United States</MenuItem>
        </Select>
      </FormControl>
      <FormControl component="fieldset" sx={{ my: 2 }}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel 
            value="female" 
            label="Female" 
            control={
              <Radio
                checked={gender === 'female'}
                onChange={changeGender}
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
                onChange={changeGender}
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