import React, { useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    FilledInput,
    TextField,
    Typography,
    useMediaQuery,
    Input
} from '@mui/material';


// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { MdBlock } from 'react-icons/md';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';


// project imports
import useAuth from 'hooks/useAuth';
import useConfig from 'hooks/useConfig';
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicatorNumFunc } from 'utils/password-strength';
import lock from "assets/images/lock.png";

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SuccessModal from 'ui-component/Modals/SuccessModal';
import { size } from 'lodash';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const AuthNewPassword = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const { borderRadius } = useConfig();
    const [showPassword, setShowPassword] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [passwordAgain, setPasswordAgain] = React.useState("");
    


    const [strength, setStrength] = React.useState(0);
    const [level, setLevel] = React.useState();
    const { firebaseRegister, firebaseGoogleSignIn } = useAuth();
    const nevigate=useNavigate()
    const [password, setPassword] = React.useState('');
    const [confirmPasssword , setConfirmPassword] = React.useState('');

    const [isValid, setIsValid] = React.useState({
        lowercase: false,
        uppercase: false,
        number: false,
        length: false,
        specialChars: false,
    });


    const validatePassword = (value) => {
        console.log("Entered Value" , value);
        
        setPassword(value);

        const specialChars =/[!@#$%^&*(),.?":{}|<>]/;
        const lowercaseRegex = /[a-z]/g;
        const uppercaseRegex = /[A-Z]/g;
        const numberRegex = /[0-9]/g;

        setIsValid({
            specialChars: specialChars.test(value),
            lowercase: lowercaseRegex.test(value),
            uppercase: uppercaseRegex.test(value),
            number: numberRegex.test(value),
            length: value.length >= 8,
        });
    };

    const googleHandler = async () => {

        try {
            await firebaseGoogleSignIn();
        } catch (err) {
            console.error(err);
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicatorNumFunc(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('123456');
    }, []);

    return (
        <>
           

            <Formik
                initialValues={{
                    // email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    // email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    // password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        await firebaseRegister(values.email, values.password).then(
                            () => {
                                // WARNING: do not set any formik state here as formik might be already destroyed here. You may get following error by doing so.
                                // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.
                                // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
                                // github issue: https://github.com/formium/formik/issues/2430
                            },
                            (err) => {
                                if (scriptedRef.current) {
                                    setStatus({ success: false });
                                    setErrors({ submit: err?.response?.data?.message ?? err.message });
                                    setSubmitting(false);
                                }
                            }
                        );
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err?.response?.data?.message ?? err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                  
               
                    <form>
                {/* <FormControl variant="red" fullWidth  error={Boolean(touched.email && errors.email)} >
                <OutlinedInput
                id="outlined-adornment-email"
                type="email"
                autoFocus='false'
                placeholder='Email'
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
                iconPrimary={EmailTwoToneIcon}
                startAdornment={
                    <InputAdornment  position="start">
                      <EmailTwoToneIcon />
                    </InputAdornment>
                  }
              
                />
                {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text--register">
                        {errors.email}
                    </FormHelperText>
                )}
                </FormControl> */}

                <Grid style={{color:"#02B100",marginTop:"12px" }}>NEW PASSWORD</Grid>
              <FormControl fullWidth   error={Boolean(touched.password && errors.password)} variant="outlined">
              <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              name="password"
              placeholder='Password'
              onBlur={handleBlur}
              onChange={(e) => {
                //   handleChange(e);
                //   changePassword(e.target.value);
                  validatePassword(e.target.value);
              }}
              
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="start"
                    size="large"
                    backgroundColor="#DCFFDC"
                    >
                      {showPassword ? <Visibility /> :<VisibilityOff /> }
                    </IconButton>
                  </InputAdornment>
                }
               />
               {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-register1">
                    {errors.password}
                </FormHelperText>
            )}

            </FormControl>

            <Grid style={{color:"#02B100" ,marginTop:"15px" ,}}>CONFIRM PASSWORD</Grid>

              <FormControl fullWidth style={{marginBottom:"16px" }}  variant="outlined">
            
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              placeholder='Re-type password'
              onChange={e => setPasswordAgain(e.target.value)}
              
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="start"
                  size="large"
                  backgroundColor="#DCFFDC"
                  >
                    {showPassword ? <Visibility /> :<VisibilityOff /> }
                  </IconButton>
                </InputAdornment>
              }
              
            />
          </FormControl>
            </form>
            <Grid container alignItems="center" justifyContent="space-between">
         <Grid xs={12} style={{display:'flex'}}><Grid xs={1}>{isValid.length?<IoMdCheckmarkCircleOutline style={{color:"#02B100"}} />:<MdBlock style={{color:"#7D7D7D"}}/>}</Grid><Grid xs={12} style={{color: isValid.length ?  "#02B100" : '#7D7D7D',fontSize:"11px"}}>Must be atleast 8 characters.</Grid></Grid> 
         <Grid xs={12} style={{display:'flex'}}><Grid xs={1}>{isValid.number?<IoMdCheckmarkCircleOutline style={{color:"#02B100"}} />:<MdBlock style={{color:"#7D7D7D"}}/>}</Grid><Grid xs={12} style={{color: isValid.number ?  "#02B100" : '#7D7D7D',fontSize:"11px"}}>Must contain 1 number.</Grid></Grid>
         <Grid xs={12} style={{display:'flex'}}><Grid xs={1}>{isValid.uppercase?<IoMdCheckmarkCircleOutline style={{color:"#02B100"}} />:<MdBlock style={{color:"#7D7D7D"}}/>}</Grid><Grid xs={12} style={{color: isValid.uppercase ?  "#02B100" : '#7D7D7D',fontSize:"11px"}}>Must contain alteast 1 captial.</Grid></Grid>
         <Grid xs={12} style={{display:'flex'}}><Grid xs={1}>{isValid.lowercase?<IoMdCheckmarkCircleOutline style={{color:"#02B100"}} />:<MdBlock style={{color:"#7D7D7D"}}/>}</Grid><Grid xs={12} style={{color: isValid.lowercase ?  "#02B100" : '#7D7D7D',fontSize:"11px"}}>Must contain atleast 1 letter small.</Grid></Grid>
         <Grid xs={12} style={{display:'flex'}}><Grid xs={1}>{isValid.specialChars?<IoMdCheckmarkCircleOutline style={{color:"#02B100"}} />:<MdBlock style={{color:"#7D7D7D"}}/>}</Grid><Grid xs={12} style={{color: isValid.specialChars ?  "#02B100" : '#7D7D7D',fontSize:"11px"}}>Must contain atleast 1 spectial.</Grid></Grid>
         <Grid xs={12} style={{display:'flex'}}><Grid xs={1}>{isValid.specialChars?<IoMdCheckmarkCircleOutline style={{color:"#02B100"}} />:<MdBlock style={{color:"#7D7D7D"}}/>}</Grid><Grid xs={12} style={{color: isValid.specialChars ?  "#02B100" : '#7D7D7D',fontSize:"11px"}}>Password should match each other.</Grid></Grid>
         </Grid>

                       
                        

                        <Box sx={{ mt: 2 }}>
                        <Grid lg={9} style={{textAlign:"center"}}>
                        <SuccessModal title="Password reset successful" description="Awesome,you&apos;ve successfully updated your password." btnName="OK" img={lock} />
                           {/* <AnimateButton>
                                <Button
                                
                                
                                style={{color:"#FFFF",background:"#02B100",width:"170px",height:"35px"}}
                                    disableElevation
                                    disabled={isSubmitting}
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                   
                                     >
                                   Confirm
                                </Button>
                           </AnimateButton> */}
                            </Grid>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthNewPassword;
