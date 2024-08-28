import { Link ,useNavigate} from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import newOne from 'assets/images/newOne.png';
import newTwo from 'assets/images/newTwo.png';
// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AuthRegister from './auth-forms/AuthRegister';
import AuthFooter from 'ui-component/cards/AuthFooter';
import useAuth from 'hooks/useAuth';

import AuthWrapper2 from '../AuthWrapper2';
import AuthHeader from 'ui-component/cards/AuthHeader';
import AuthNewPassword from './auth-forms/AuthNewPassword';
// assets

// ===============================|| AUTH3 - REGISTER ||=============================== //

const NewPassword = () => {
    const theme = useTheme();
    const { isLoggedIn } = useAuth();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
   

    return (
        <>
            <AuthHeader title='Login' to='/login'/>
            <AuthWrapper1>
               <Grid item lg={12} xs={12} container>
                        <Grid lg={4} xs={2} sx={{ mt: '100px', position: 'relative' }}>
                            <img
                                alt="not found"
                                src={newTwo}
                                style={{ height: '450px', width: '250px', position: 'absolute', bottom: '70px' }}
                            />
                        </Grid>

                        <Grid
                            // style={{ marginTop: '70px' }}
                            lg={4}
                            xs={8}
                            container
                            justifyContent="center"
                            alignItems="center"
                            sx={{ minHeight: 'calc(100vh - 68px)', mt: '70px',zIndex:"100" }}
                        >
                            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                  
                        <Grid item xs={12}>
                            <Grid item style={{textAlign:"center"}} >
                            <Grid container spacing={2}>
  <Grid item xs={6} md={6}>
  <Grid sx={6} fontSize="25px" style={{color:"#02B100",textAlign:"right"}}>New </Grid>
  </Grid>
  <Grid item xs={6} md={6} style={{textAlign:"left",paddingLeft:"4px"}}>
  <Grid sx={6} fontSize="25px"  >Password  </Grid>
  </Grid>
  
</Grid>
                                       
                                                
<Typography
fontSize="14px"
color="#8B8B8B"
paddingTop="5px"
>
Reset your password to recovery & login to your account
</Typography> 
</Grid>
                                       
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthNewPassword/>
                                    </Grid>
                                    
                                   
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid lg={4} xs={2} sx={{ mt:"72px", position: 'relative'  }}>
                        <img
                            alt="not found"
                            src={newOne}
                            style={{  position:'absolute',right:'0',top:'0',width:'350px' }}
                        />
                    </Grid>




                    </Grid>
                     <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                        <AuthFooter />
                    </Grid>
               </AuthWrapper1>
        </>
    );
};

export default NewPassword;
