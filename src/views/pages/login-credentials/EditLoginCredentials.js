import { useState } from 'react';
// project import
import MainCard from 'ui-component/cards/MainCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
 

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

export default function EditLoginCredentials() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
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
                                {/* <InputLabel htmlFor="outlined-adornment-email">Email </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    placeholder='John.smith10@gmail.com'
                                    label="Email"
                                /> */}

                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    type="email"
                                    autoFocus='false'
                                    placeholder='email'
                                    name="email"
                                    inputProps={{}}
                                    iconPrimary={ModeEditOutlineIcon}
                                    endAdornment={
                                        <InputAdornment  position="end">
                                        <ModeEditOutlineIcon />
                                        </InputAdornment>
                                }
                            
                                />

                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>

                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <p style={{marginTop:'28px'}}>Password <span style={{color:'red'}}>*</span></p>
                        </Grid>
                        <Grid item xs={10}>
                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            
                                <OutlinedInput
                                id="outlined-adornment-password-register1"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder='password'
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
                                } />

                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>

                <Grid container spacing={2}>
                    <Grid item xs={12} style={{textAlign:'center',margin:'80px 0'}}>
                        <Button variant="contained" style={{backgroundColor:'#02B100',borderRadius:'30px',padding:'8px 30px',color:'white'}}>Authenticate</Button>
                    </Grid>
                </Grid>
            </Card>
        </MainCard>
    );
}