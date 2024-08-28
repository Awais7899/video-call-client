import { Link ,useNavigate} from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import newOne from 'assets/images/newOne.png';
import newTwo from 'assets/images/newTwo.png';
import Forgret from 'assets/images/Forgret.png';
// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AuthRegister from './auth-forms/AuthRegister';
import AuthFooter from 'ui-component/cards/AuthFooter';
import useAuth from 'hooks/useAuth';

import AuthWrapper2 from '../AuthWrapper2';
import AuthHeader from 'ui-component/cards/AuthHeader';
import FirebaseLogin from './auth-forms/AuthLogin';
import AuthForgotPassword from './auth-forms/AuthForgotPassword';
// assets

// ===============================|| AUTH3 - REGISTER ||=============================== //

const Forgetpassword = () => {
    const theme = useTheme();
    const { isLoggedIn } = useAuth();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
   

    return (
        <>
            <AuthHeader title='Sign up' to="/register"/>
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
                            lg={4}
                            xs={8}
                            container
                            justifyContent="center"
                            alignItems="center"
                            sx={{ minHeight: 'calc(100vh - 68px)', mt: '70px',zIndex:"100" }}
                        >
                            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                     <Grid item sx={{ mb: 3 }}>
                                     <img
                            alt="not found"
                            src={Forgret}
                            style={{  width:'130px', }}
                        />
                                     </Grid> 
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <h1 style={{fontSize:"50px"}}>
                                                      Forgot password?   
                                                    </h1>
                                                    <Typography
                                                        variant="caption"
                                                        fontSize="14px"
                                                       
                                                    >
                                                     No worries! Enter your email and we will send you a reset
                                                   </Typography> 
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthForgotPassword/>
                                    </Grid>
                                   {/* <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                 variant="subtitle1"
                                                sx={{ textDecoration: 'none',paddingRight:{lg:13}}}
                                            >
                                               Don&#39;t have an account?<Link style={{ color: '#02B100',paddingLeft:"7px" }} to="/register">
                                                Sign up
                                            </Link>
                                                </Typography>
                                        </Grid>
                                                </Grid> */}
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

export default Forgetpassword;