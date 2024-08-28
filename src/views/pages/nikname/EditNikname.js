import { Box } from '@mui/material';
import { useState } from 'react';

// project import
import MainCard from 'ui-component/cards/MainCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import background from 'assets/images/shape-img.png'
import imgError from 'assets/images/error-img.png'
import tick from 'assets/images/tick.png'
import closeImg from 'assets/images/close.png'
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

export default function EditNikname() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <MainCard>
            <Card sx={{ minWidth: 275 , boxShadow: 3 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <p style={{marginTop:'28px'}}>Email <span style={{color:'red'}}>*</span></p>
                        </Grid>

                        <Grid item xs={10}>
                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                <OutlinedInput
                                    id="nikname"
                                    type="text"
                                    autoFocus='false'
                                    value="Johndee..."
                                    name="nikname"
                                    inputProps={{}}
                                    iconPrimary={ModeEditOutlineIcon}
                                    endAdornment={
                                        <InputAdornment  position="end">
                                            <ModeEditOutlineIcon />
                                        </InputAdornment>
                                }
                                />
                            </FormControl>
                            <p style={{fontSize:'12px',color:'#02B100',marginLeft:'40px'}}>Nickname can contain lower case letters, numbers and underscores.</p>
                            <p style={{fontSize:'12px',color:'red', marginTop:'40px'}}>* This field is required!</p>
                            <p style={{fontSize:'12px',color:'#02B100',}}>The nickname will be shown to the public. The nickname cannot be changed with the <br />
                            exception of purchasing a premium nickname. </p>
                            <p style={{fontSize:'12px',color:'#02B100', marginTop:'40px'}}>Nicknames containing 4 or less characters are premium nicknames.</p>
                        
                            <div style={{backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat',backgroundSize:'cover',height: '192px', width: '350px',position:'absolute', left: '576px'}}> 
                                <div style={{marginTop:'30px',marginLeft:'30px'}}>
                                    <img src={imgError} alt='error-img' width={30} style={{marginTop:'15px'}}/>
                                    <p style={{marginLeft:'20px',fontSize:'10px'}}>This function is not available for now.</p>
                                    <p style={{textAlign:'right',fontSize:'10px', margin:'28px 22px 0 0',color:'#2965BA'}} ><u>Purchase premium nickname.</u></p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>

                <Grid container spacing={2}>
                    <Grid item xs={12} style={{textAlign:'center',marginTop:'220px',marginBottom:'20px'}}>
                        <Button variant="contained" onClick={handleOpen} style={{backgroundColor:'#02B100',borderRadius:'30px',padding:'8px 70px',color:'white'}}>Ok</Button>
                    </Grid>
                </Grid>
            </Card>

             {/* nikname modal  */}
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