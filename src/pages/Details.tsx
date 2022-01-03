import {useLocation, useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function Details(props: any){
    const {id} = useParams()    
    console.log(id)        
   

    return(
        <Box m={2}>
            <h1>Details page</h1>
            User ID: {id}

            <Stack sx={{ width: '100%' }} spacing={2} style={{position: 'fixed', bottom: '0'}}>
                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    The Random user API doesn't have route to get details from user through id user!
                </Alert>
            </Stack>
                                        
        </Box>
    )
}