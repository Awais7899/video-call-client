import { Box } from '@mui/material';
import { useState } from 'react';

// project import
import MainCard from 'ui-component/cards/MainCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import tick from 'assets/images/tick.png'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius:3,
    paddingTop:0,
    paddingBottom:2,
};

export default function SuccessModal() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 /* eslint-disable import/first */
    return(
        <MainCard>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <h3 style={{textAlign:'center'}}>thisisthenickname123</h3>
                    <Box sx={{ borderBottom: 2,borderBottomColor:'#02B100' }} />
                    <img src={tick} alt="successfully-img" width={60} style={{ margin: '29px 0 0 171px'}}/>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{textAlign:'center',padding:'0 55px'}}>
                    You have chosen the above nickname. It will not be changed with the exception of purchasing a premium nickname.
                    </Typography>
                    <Box sx={{ borderBottom: 2,borderBottomColor:'#02B100',margin: '18px 0' }} />
                    <Grid item xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                        <Button variant="contained" style={{backgroundColor:'#02B100',borderRadius:'30px',padding:'8px 50px',color:'white' }}>Ok</Button>
                        <Button variant="contained" style={{backgroundColor:'#02B100',borderRadius:'30px',padding:'8px 40px',color:'white' }}>Cancel</Button>
                    </Grid>
                </Box>
            </Modal>
        </MainCard> 
    );
}