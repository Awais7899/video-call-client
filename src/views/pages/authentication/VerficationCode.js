import { Link } from 'react-router-dom';
import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Button, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AnimateButton from 'ui-component/extended/AnimateButton';
import AuthCodeVerification from 'views/pages/authentication/auth-forms/AuthCodeVerification';

import verification from "assets/images/verification.png";
import VerificationModal from '../../../ui-component/Modals/VerificationModal';
// ===========================|| AUTH1 - CODE VERIFICATION ||=========================== //

const VerficationCode = () => {
    const theme = useTheme();
    const [otp, setOtp] =useState();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ minHeight: '100vh' ,width:"100vw"}}>
                <Grid item container justifyContent="center" md={12} lg={12} sx={{ my: 3 }}>
                    <AuthCardWrapper>
                        <Grid container spacing={2} justifyContent="center">
                           
                            
                            <Grid lg={12}>
                            <Grid lg={12} sx={{marginLeft:{lg:16}}}>
                              <img alt="not" src={verification}  style={{textAlign:"center",height:"308px",width:"303px"}}/>
                             </Grid>
                            </Grid>   
                             <Grid item xs={12}>
                                <Grid container sx={{marginLeft:{lg:18,sm:8}}}> 
                                 <Typography
                                           color="#4A4A4A"
                                                gutterBottom
                                                variant={matchDownSM ? 'h2' : 'h1'}
                                            >
                                                Verify Your Email
                                            </Typography>
                                  </Grid>
                                  </Grid>
                            <Grid item>
                                <Stack direction="row" justifyContent={matchDownSM ? 'center' : 'flex-start'}>
                                    <Typography style={{paddingTop:"0px"}} variant="caption" fontSize="0.875rem" textAlign={matchDownSM ? 'center' : 'inherit'}>
                                        Please enter the 4 digit code sent to you mail@gmail.com
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <AuthCodeVerification otp={otp} setOtp={setOtp}/>
                            </Grid>
                            <Grid item xs={12}style={{textAlign:"center"}}>
                            <Typography variant="body1" component={Link} sx={{alignSelf:"center",  cursor: 'pointer' }} color="#0FE90D">
                                   Resend code
                               </Typography>
                          </Grid>
                           <Grid item xs={12} style={{textAlign:"center",paddingTop: '6px'}}>
                          {otp>1000? <VerificationModal/>: <VerificationModal/>}
                              {/* <Button disableElevation  type="submit" variant="contained" style={{background:"#02B100"}}>
                                   Confirm
                               </Button> */}
                           </Grid>
                            
                           
                        </Grid>
                    </AuthCardWrapper>
                </Grid>
               
            </Grid>
        </AuthWrapper1>
    );
};

export default VerficationCode;
