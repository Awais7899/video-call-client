// import { Link } from 'react-router-dom';

// // material-ui
// import { useTheme } from '@mui/material/styles';
// import { Button, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// // project imports
// import AuthWrapper1 from '../AuthWrapper1';
// import AuthCardWrapper from '../AuthCardWrapper';
// import Logo from 'ui-component/Logo';
// import AnimateButton from 'ui-component/extended/AnimateButton';
// import AuthCodeVerification from './auth-forms/AuthCodeVerification';
// import AuthFooter from 'ui-component/cards/AuthFooter';

// // assets

// // ===========================|| AUTH3 - CODE VERIFICATION ||=========================== //

// const CodeVerification = () => {
//     const theme = useTheme();
//     const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

//     return (
//         <AuthWrapper1>
//             <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
//                 <Grid item xs={12}>
//                     <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
//                         <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
//                             <AuthCardWrapper>
//                                 <Grid container spacing={2} alignItems="center" justifyContent="center">
//                                     <Grid item sx={{ mb: 3 }}>
//                                         <Link to="#">
//                                             <Logo />
//                                         </Link>
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Grid
//                                             container
//                                             direction={matchDownSM ? 'column-reverse' : 'row'}
//                                             alignItems="center"
//                                             justifyContent="center"
//                                         >
//                                             <Grid item>
//                                                 <Stack alignItems="center" justifyContent="center" spacing={1}>
//                                                     <Typography
//                                                         color={theme.palette.secondary.main}
//                                                         gutterBottom
//                                                         variant={matchDownSM ? 'h3' : 'h2'}
//                                                     >
//                                                         Enter Verification Code
//                                                     </Typography>
//                                                     <Typography variant="subtitle1" fontSize="1rem">
//                                                         We send you on mail.
//                                                     </Typography>
//                                                     <Typography
//                                                         variant="caption"
//                                                         fontSize="0.875rem"
//                                                         textAlign={matchDownSM ? 'center' : 'inherit'}
//                                                     >
//                                                         We’ve send you code on jone.****@company.com
//                                                     </Typography>
//                                                 </Stack>
//                                             </Grid>
//                                         </Grid>
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <AuthCodeVerification />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Divider />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Grid item container direction="column" alignItems="center" xs={12}>
//                                             <Typography
//                                                 component={Link}
//                                                 to="#"
//                                                 variant="subtitle1"
//                                                 sx={{ textDecoration: 'none' }}
//                                                 textAlign={matchDownSM ? 'center' : 'inherit'}
//                                             >
//                                                 Did not receive the email? Check your spam filter, or
//                                             </Typography>
//                                         </Grid>
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <AnimateButton>
//                                             <Button
//                                                 disableElevation
//                                                 fullWidth
//                                                 size="large"
//                                                 type="submit"
//                                                 variant="outlined"
//                                                 color="secondary"
//                                             >
//                                                 Resend Code
//                                             </Button>
//                                         </AnimateButton>
//                                     </Grid>
//                                 </Grid>
//                             </AuthCardWrapper>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//                 <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
//                     <AuthFooter />
//                 </Grid>
//             </Grid>
//         </AuthWrapper1>
//     );
// };

// export default CodeVerification;






import {useEffect} from "react"
import { Link ,useNavigate} from 'react-router-dom';
import Countdown from 'react-countdown';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery ,Button} from '@mui/material';
import newOne from 'assets/images/newOne.png';
import newTwo from 'assets/images/newTwo.png';
// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AuthRegister from './auth-forms/AuthRegister';
import AuthFooter from 'ui-component/cards/AuthFooter';
import useAuth from 'hooks/useAuth';
import emailVerify from 'assets/images/verify-code-img.png'
import lock from "assets/images/lock.png";
import tick from "assets/images/tick.png";
import img1 from 'assets/images/img-1.png';

import AuthWrapper2 from '../AuthWrapper2';
import AuthHeader from 'ui-component/cards/AuthHeader';
import FirebaseLogin from './auth-forms/AuthLogin';
import AuthCodeVerification from './auth-forms/AuthCodeVerification';
// assets
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FailedModal from '../../../ui-component/Modals/FailedModal';
import * as React from 'react';
import SuccessModal from '../../../ui-component/Modals/SuccessModal';
// ===============================|| AUTH3 - REGISTER ||=============================== //

const CodeVerification3 = () => {
    const theme = useTheme();
    const { isLoggedIn } = useAuth();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
   

    const [otp, setOtp] = React.useState();
    const [minutes, setMinutes] =React.useState(1);
    const [seconds, setSeconds] =React.useState(59);    
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
  
    useEffect(() => {
        const interval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
      
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(interval);
            } else {
              setSeconds(59);
              setMinutes(minutes - 1);
            }
          }
        }, 1000);
      
        return () => {
          clearInterval(interval);
        };
      }, [seconds]);

    return (
        <>
            <AuthHeader title='Sign up' to="/register"/>
            <AuthWrapper1>
               <Grid item lg={12} xs={12} style={{background:"white"}} container>
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
                            sx={{ minHeight: 'calc(100vh - 168px)', mt: '100px',zIndex:"100" }}
                        >
                           <Grid container >
                                <Grid item xs={6} >
                            
                                <Typography
                                variant="h1" sx={{color:"#02B100",}}>Verify</Typography>
                                <Typography
                                variant="h1" sx={{color:"#707070"}}>your Code</Typography>
                                </Grid>
                                <Grid item xs={6} sx={{textAlign:'right'}}>
                                <img src={emailVerify} alt="verify"style={{width:'80px', height:'80px'}}/>
                                </Grid>
                                <Grid><Typography sx={{pl:'20px',pt:'10px'}}>Please check your email to take 4 digit code for contin</Typography></Grid>
                               </Grid>
                                      <Grid item xs={12}>
                                        <AuthCodeVerification otp={otp} setOtp={setOtp}/>
                                        <Typography  style={{color:"#0FE90D",textAlign:'right',paddingRight:"31px",marginTop:"10px"}}><Link onClick= {()=>setOtp("")} style={{color:"#0FE90D" ,textDecoration:"none"}}>Clear</Link></Typography>
                                    </Grid>
                                    
                             {otp<1000? <Grid>
                              <img
                                  alt="not found"
                                  src={img1}
                                  style={{ height: '21px', width: '15px' ,paddingTop:"9px"}}
                              /><span style={{paddingLeft:"9px",fontSize:"12px"}}> verfication code invalid you have 2 more attempts</span>
                          </Grid>:" " }
                                    <Grid item xs={12}>

                                    <Grid container spacing={2}>
                                    <Grid item xs={6} md={6} textAlign='right'>
                                    <p><AccessTimeIcon style={{fontSize:'19px'}}/></p>
                                    </Grid>
                                    <Grid item xs={6} md={6} style={{paddingLeft:"10px"}}>
                                    <p style={{fontSize:'16px',color:'#8B8B8B',marginBottom:"30px"}}>
                                    {minutes < 10 ? `0${minutes}` : minutes}:
                                    {seconds < 10 ? `0${seconds}` : seconds}
                                    </p>
                                    </Grid>

                                    </Grid>
                                            
                                   
                                <Grid item xs={12} style={{textAlign:'center'}}>
    {/* <Button variant="contained" onClick={handleOpen} style={{backgroundColor:'#02B100',borderRadius:'5px',padding:'8px 50px',color:'white'}}>Confirm</Button> */} 
  {/* {setOpen &&  <FailedModal open={open} handleClose={handleClose}/>} */}   
     {otp>1000 ?<SuccessModal title='Verification Success' description="Congratulations! You have Successfully verfication your account" btnName="OK" img={tick}/>:<FailedModal/>}        
                                </Grid> 
                                <Grid item xs={12} style={{textAlign:'center',marginTop:"10px" ,marginBottom:"80px"}}>
                                    <Typography style={{marginTop:"20px"}}>Didn&#39;t get code yet? <Link style={{ color: '#02B100',paddingLeft:"7px" }}>Resend Code</Link></Typography>
                                </Grid> 
                                    </Grid>
                                    
                             
                            
                        </Grid>

                        <Grid lg={4} xs={2} sx={{ mt:"70px", position: 'relative'  }}>
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

export default CodeVerification3;
