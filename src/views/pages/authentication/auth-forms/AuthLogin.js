import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, Grid, IconButton, InputAdornment, OutlinedInput, useMediaQuery } from '@mui/material';

import img1 from 'assets/images/img-1.png';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import ModeIcon from '@mui/icons-material/Mode';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// project imports
import useAuth from 'hooks/useAuth';
import useConfig from 'hooks/useConfig';
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicatorNumFunc } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const { borderRadius } = useConfig();
    const [showPassword, setShowPassword] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [passwordAgain, setPasswordAgain] = React.useState('');

    const { firebaseRegister, firebaseGoogleSignIn } = useAuth();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email should not be empty.'),
                    password: Yup.string().max(255).required('Password should not be empty.')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        console.log('submitting');
                    } catch (err) {
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
                        {/*  <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    margin="normal"
                                    name="fname"
                                    type="text"
                                    defaultValue=""
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    margin="normal"
                                    name="lname"
                                    type="text"
                                    defaultValue=""
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                </Grid> */}

                        <form>
                            <FormControl variant="red" fullWidth error={Boolean(touched.email && errors.email)}>
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    type="email"
                                    autoFocus="false"
                                    placeholder="Email"
                                    value={values.email}
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    inputProps={{}}
                                    iconPrimary={EmailTwoToneIcon}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <EmailTwoToneIcon />
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <ModeIcon />
                                        </InputAdornment>
                                    }
                                />
                                {touched.email && errors.email && (
                                    <FormHelperText error id="standard-weight-helper-text--register">
                                        <Grid>
                                            <img alt="not found" src={img1} style={{ height: '21px', width: '15px', paddingTop: '9px' }} />
                                            <span style={{ paddingLeft: '9px', fontSize: '12px' }}>{errors.email}</span>
                                        </Grid>
                                    </FormHelperText>
                                )}
                            </FormControl>

                            <FormControl
                                fullWidth
                                style={{ marginTop: '12px' }}
                                error={Boolean(touched.password && errors.password)}
                                variant="outlined"
                            >
                                <OutlinedInput
                                    id="outlined-adornment-password-register1"
                                    type={showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    name="password"
                                    placeholder="Password"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon />
                                        </InputAdornment>
                                    }
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
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                {touched.password && errors.password && (
                                    <FormHelperText style={{ marginLeft: '0px' }} error id="standard-weight-helper-text-password-register1">
                                        <Grid>
                                            <img alt="not found" src={img1} style={{ height: '21px', width: '15px', paddingTop: '9px' }} />
                                            <span style={{ paddingLeft: '9px', fontSize: '12px' }}>{errors.password}</span>
                                        </Grid>
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </form>

                        {showPassword ? (
                            <>
                                {' '}
                                <Grid>
                                    <img alt="not found" src={img1} style={{ height: '21px', width: '15px', paddingTop: '9px' }} />{' '}
                                    <span style={{ color: '#FB4B4B', paddingLeft: '9px', fontSize: '12px' }}>
                                        The email and password is incorrect
                                    </span>
                                </Grid>
                                <Grid>
                                    <img alt="not found" src={img1} style={{ height: '21px', width: '15px', paddingTop: '9px' }} />{' '}
                                    <span style={{ color: '#FB4B4B', marginTop: '8px', paddingLeft: '9px', fontSize: '12px' }}>
                                        Your account is locked, 20 minutes left.
                                    </span>
                                </Grid>
                            </>
                        ) : (
                            ''
                        )}
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}
                        <Grid style={{ textAlign: 'right', paddingTop: '8px' }}>
                            <Link style={{ color: '#02B100' }} to="/forget-password">
                                Forget password?
                            </Link>
                        </Grid>

                        <Box sx={{ mt: 10 }}>
                            <Grid lg={12} style={{ textAlign: 'center' }}>
                                <AnimateButton>
                                    <Button
                                        style={{ background: '#02B100', borderRadius: '20px', width: '170px', height: '35px' }}
                                        disableElevation
                                        disabled={isSubmitting}
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Log in
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseLogin;
