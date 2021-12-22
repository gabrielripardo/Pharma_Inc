import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Patient from '../models/Patient.model'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DetailsModal(props: any) {
  const {data, open, handleClose} = props
  console.log(data)

  return (
    <div>      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Detalhes do paciente
            </Typography>
            <Typography id="transition-modal-description" component={'span'} sx={{ mt: 2 }}>              
              <img src={data.picture.medium}></img>
              <p>Nome: <span>{`${data.name.title} ${data.name.first} ${data.name.last}`}</span></p>                           
              <p>Email: <span>{data.email}</span> </p>
              <p>Gênero: <span>{data.gender}</span></p>
              <p>Data de nascimento: <span>{data.dob.date}</span></p>
              <p>Telefone: <span>{data.phone}</span> </p>
              <p>Nacionalidade: <span>{data.location.country}</span> </p>
              <p>Endereço: <span>{`${data.location.state} - ${data.location.city} - ${data.location.street.name} - ${data.location.street.number}`}</span> </p>
              <p>ID (Número de identificação): <span>{data.id.value}</span></p>
              <p>URL para compartilhamento: </p>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}