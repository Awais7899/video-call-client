


// material-ui
 
import { useTheme } from '@mui/material/styles';

import { useState } from 'react';
// project import
import MainCard from 'ui-component/cards/MainCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'; 
import emailVerify from 'assets/images/verify-code-img.png'
import OtpInput from 'react18-input-otp';
import Button from '@mui/material/Button';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

export default function EditLoginCredentials() {

    const theme = useTheme();
    const [otp, setOtp] = useState();
    const borderColor = theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[300];

    return(
        <MainCard>
            <Card sx={{ boxShadow: 3 ,padding:0}}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <p style={{}}>New Email <span style={{color:'red'}}>*</span></p>
                        </Grid>

                        <Grid item xs={3}>
                          <p>john.sm45@gmail.com</p>
                        </Grid>  
                    </Grid>
                    <Box sx={{ borderBottom: 1 ,color:'#CED4DA'}} />                                                       

                    <Grid container spacing={2} style={{marginTop:'10px'}}>
                        <Grid item   lg={6} md={6} sm={12}>
                            <Card style={{maxWidth:'500px',border:'1px solid #CED4DA'}}>
                                <h3 style={{padding:'0 20px'}}>Verify your Code</h3>
                                <Box sx={{ borderBottom: 1 ,color:'#CED4DA'}} />   
                                <p style={{fontSize:'12px',padding:'0 20px'}}>Please check your email to take 4 digit code to continue.</p>                                                    
                                <OtpInput
                                    value={otp}
                                    onChange={(otpNumber) => setOtp(otpNumber)}
                                    numInputs={4}
                                    containerStyle={{ justifyContent: 'space-between' }}
                                    inputStyle={{
                                        background:"#DCFFDC",
                                        width: '100%',
                                        margin: '18px',
                                        padding: '20px',
                                        border: `1px solid ${borderColor}`,
                                        borderRadius: 4,
                                        ':hover': {
                                            borderColor: theme.palette.primary.main
                                        }
                                    }}
                                    focusStyle={{
                                        outline: 'none',
                                        border: '2px solid #DCFFDC'
                                    }}
                                />
                                <p style={{fontSize:'12px',padding:'0 20px'}}>Your email address will not change until its been verified.  </p>         
                                <p style={{fontSize:'12px',padding:'0 20px',coloe:'red'}}>Resend verification email</p>  
                                
                                <div style={{textAlign:'center'}}>
                                    <p style={{fontSize:'14px',color:'#8B8B8B'}}><AccessTimeIcon style={{fontSize:'14px'}}/> 01.59</p>
                                </div>
                                <Grid item xs={12} style={{textAlign:'center',margin:'20px 0'}}>
                                    <Button variant="contained" style={{backgroundColor:'#02B100',borderRadius:'5px',padding:'8px 50px',color:'white'}}>Confirm</Button>
                                </Grid>                                                  
                            </Card>
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}> 
                            <img src={emailVerify} alt="verify"style={{width:'200px', height:'200px'}}/>
                        </Grid>                                                                 
                    </Grid>
                </CardContent>
            </Card>
        </MainCard>
    );
}