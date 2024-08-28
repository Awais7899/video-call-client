

// material-ui
import { Box } from '@mui/material';

import { useState } from 'react';
// project import
import MainCard from 'ui-component/cards/MainCard';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import laptopImg from 'assets/images/laptop-lok.png'
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

  
export default function EditLoginCredentials() {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <MainCard>
            <Card sx={{ minWidth: 275 , boxShadow: 3 }}>
            <CardContent>
                    <Grid container spacing={2}>
                        <Grid item lg={2}>
                            <p style={{marginTop:'28px'}}>Password <span style={{color:'red'}}>*</span></p>
                            <p style={{marginTop:'50px'}}>Confirm Password <span style={{color:'red'}}>*</span></p>
                        </Grid>
                        <Grid item lg={5} md={5} sm={12}>
                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>

                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Grid>

                        <Grid item lg={5} md={5} sm={12} style={{}}>
                            <img src={laptopImg} alt="img" style={{width:'80%',margin:'0 50px'}}/>
                        </Grid>

                    </Grid>
                </CardContent>

                <Grid item lg={12} md={12} sm={12} style={{textAlign:'center',margin:'80px 0'}}>
                    <Button variant="contained" onClick={handleOpen}  style={{backgroundColor:'#02B100',borderRadius:'30px',padding:'8px 50px',color:'white'}}>Confirm</Button>
                    {/* <Link to="/edit-login-email-verification" style={{backgroundColor:'#02B100',borderRadius:'30px',padding:'15px 50px',color:'white',textDecoration:'none'}}>Confirm</Link> */}
                </Grid>

                {/* <Link to="/edit-login-email-verification" >verfication screem</Link> */}
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <h3 style={{textAlign:'center'}}>Change Password</h3>
                    <Box sx={{ borderBottom: 2,borderBottomColor:'#02B100' }} />
                    <img src={tick} alt="successfully-img" width={60} style={{ margin: '29px 0 0 171px'}}/>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{textAlign:'center',padding:'0 55px'}}>
                        Congrats! Your password has been changed successfully.
                    </Typography>
                    <Box sx={{ borderBottom: 2,borderBottomColor:'#02B100',margin: '18px 0' }} />
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <Button variant="contained" style={{backgroundColor:'#02B100',borderRadius:'5px',padding:'8px 50px',color:'white' }}>Ok</Button>
                    </Grid>
                </Box>
            </Modal>
        </MainCard>
    );
}