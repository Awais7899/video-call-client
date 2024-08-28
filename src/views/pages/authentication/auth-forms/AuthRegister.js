import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordChecklist from 'react-password-checklist';
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
import AccountCircle from '@mui/icons-material/AccountCircle';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { MdBlock } from 'react-icons/md';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

// project imports
import useAuth from 'hooks/useAuth';
import useConfig from 'hooks/useConfig';
import useScriptRef from 'hooks/useScriptRef';
import Google from 'assets/images/icons/google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicatorNumFunc } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const { borderRadius } = useConfig();
    const [showPassword, setShowPassword] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [passwordAgain, setPasswordAgain] = React.useState('');

    const [strength, setStrength] = React.useState(0);
    const [level, setLevel] = React.useState();
    const { firebaseRegister, firebaseGoogleSignIn } = useAuth();
    const navigate = useNavigate();
    const [password, setPassword] = React.useState('');
    const [confirmPasssword, setConfirmPassword] = React.useState('');

    const [isValid, setIsValid] = React.useState({
        lowercase: false,
        uppercase: false,
        number: false,
        length: false,
        specialChars: false
    });

    const validatePassword = (value) => {

        setPassword(value);

        const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
        const lowercaseRegex = /[a-z]/g;
        const uppercaseRegex = /[A-Z]/g;
        const numberRegex = /[0-9]/g;

        setIsValid({
            specialChars: specialChars.test(value),
            lowercase: lowercaseRegex.test(value),
            uppercase: uppercaseRegex.test(value),
            number: numberRegex.test(value),
            length: value.length >= 8
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
            <Grid container direction="column" justifyContent="center" spacing={2}>
                {/* <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={googleHandler}
                            size="large"
                            sx={{
                                color: 'grey.700',
                                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
                                borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 20 : theme.palette.grey[100]
                            }}
                        >
                            <Box sx={{ display: 'flex', mr: { xs: 1, sm: 2, width: 20 } }}>
                                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                            </Box>
                            Sign up with Google
                        </Button>
                    </AnimateButton>
                        </Grid> */}
                {/* <Grid item xs={12}>
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                        <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor:
                                    theme.palette.mode === 'dark'
                                        ? `${theme.palette.dark.light + 20} !important`
                                        : `${theme.palette.grey[100]} !important`,
                                color: `${theme.palette.grey[900]} !important`,
                                fontWeight: 500,
                                borderRadius: `${borderRadius}px`
                            }}
                            disableRipple
                            disabled
                        >
                            OR
                        </Button>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                        </Grid> */}
                {/* <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Sign up with Email address</Typography>
                    </Box>
                    </Grid> */}
            </Grid>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
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
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.email}
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
                                value={password}
                                name="password"
                                placeholder="Password"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    //   handleChange(e);
                                    //   changePassword(e.target.value);
                                    validatePassword(e.target.value);
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
                                <FormHelperText error id="standard-weight-helper-text-password-register1">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth style={{ marginTop: '12px', marginBottom: '16px' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Re-type password"
                                onChange={(e) => setPasswordAgain(e.target.value)}
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
                        </FormControl>

                        {/*   <PasswordChecklist

        rules={["minLength","specialChar","number","capital","match","lowercase"]}
        minLength={8}
        value={values.password}
        valueAgain={passwordAgain}
    
        messages={{
        minLength: "La contraseña tiene más de 8 caracteres",
        specialChar: "La contraseña tiene caracteres especiales.",
        number: "La contraseña tiene un número.",
        capital: "La contraseña tiene una letra mayúscula.",
        match: "Las contraseñas coinciden.",
    }}

/> */}

                        {/* {strength !== 0 && (
                            <FormControl fullWidth>
                                <Box sx={{ mb: 2 }}>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box
                                                style={{ backgroundColor: level?.color }}
                                                sx={{ width: 85, height: 8, borderRadius: '7px' }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
            </Box> 
                            </FormControl>
        )} */}

                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid xs={12} style={{ display: 'flex' }}>
                                <Grid xs={1}>
                                    {isValid.length ? (
                                        <IoMdCheckmarkCircleOutline style={{ color: '#02B100' }} />
                                    ) : (
                                        <MdBlock style={{ color: '#7D7D7D' }} />
                                    )}
                                </Grid>
                                <Grid xs={12} style={{ color: isValid.length ? '#02B100' : '#7D7D7D', fontSize: '11px' }}>
                                    Must be atleast 8 characters.
                                </Grid>
                            </Grid>
                            <Grid xs={12} style={{ display: 'flex' }}>
                                <Grid xs={1}>
                                    {isValid.number ? (
                                        <IoMdCheckmarkCircleOutline style={{ color: '#02B100' }} />
                                    ) : (
                                        <MdBlock style={{ color: '#7D7D7D' }} />
                                    )}
                                </Grid>
                                <Grid xs={12} style={{ color: isValid.number ? '#02B100' : '#7D7D7D', fontSize: '11px' }}>
                                    Must contain 1 number.
                                </Grid>
                            </Grid>
                            <Grid xs={12} style={{ display: 'flex' }}>
                                <Grid xs={1}>
                                    {isValid.uppercase ? (
                                        <IoMdCheckmarkCircleOutline style={{ color: '#02B100' }} />
                                    ) : (
                                        <MdBlock style={{ color: '#7D7D7D' }} />
                                    )}
                                </Grid>
                                <Grid xs={12} style={{ color: isValid.uppercase ? '#02B100' : '#7D7D7D', fontSize: '11px' }}>
                                    Must contain alteast 1 captial.
                                </Grid>
                            </Grid>
                            <Grid xs={12} style={{ display: 'flex' }}>
                                <Grid xs={1}>
                                    {isValid.lowercase ? (
                                        <IoMdCheckmarkCircleOutline style={{ color: '#02B100' }} />
                                    ) : (
                                        <MdBlock style={{ color: '#7D7D7D' }} />
                                    )}
                                </Grid>
                                <Grid xs={12} style={{ color: isValid.lowercase ? '#02B100' : '#7D7D7D', fontSize: '11px' }}>
                                    Must contain atleast 1 letter small.
                                </Grid>
                            </Grid>
                            <Grid xs={12} style={{ display: 'flex' }}>
                                <Grid xs={1}>
                                    {isValid.specialChars ? (
                                        <IoMdCheckmarkCircleOutline style={{ color: '#02B100' }} />
                                    ) : (
                                        <MdBlock style={{ color: '#7D7D7D' }} />
                                    )}
                                </Grid>
                                <Grid xs={12} style={{ color: isValid.specialChars ? '#02B100' : '#7D7D7D', fontSize: '11px' }}>
                                    Must contain atleast 1 spectial.
                                </Grid>
                            </Grid>
                            <Grid xs={12} style={{ display: 'flex' }}>
                                <Grid xs={1}>
                                    {isValid.specialChars ? (
                                        <IoMdCheckmarkCircleOutline style={{ color: '#02B100' }} />
                                    ) : (
                                        <MdBlock style={{ color: '#7D7D7D' }} />
                                    )}
                                </Grid>
                                <Grid xs={12} style={{ color: isValid.specialChars ? '#02B100' : '#7D7D7D', fontSize: '11px' }}>
                                    Password should match each other.
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={checked}
                                            onClick={() => setChecked(true)}
                                            name="checked"
                                            color="primary"
                                        />
                                    }
                                    label={
                                        <Typography variant="subtitle1">
                                            I Agree with the &nbsp;
                                            <Typography variant="subtitle1" sx={{ color: '#02B100' }} component={Link} to="#">
                                                Terms & Policy
                                            </Typography>
                                        </Typography>
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Typography variant="subtitle1" style={{ color: '#FB4B4B', marginTop: '-8px' }}>
                            Please accept terms & policy
                        </Typography>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <Grid lg={9} style={{ textAlign: 'center' }}>
                                <AnimateButton>
                                    <Button
                                        onClick={() => navigate('/verfication-code')}
                                        style={{ background: '#02B100', borderRadius: '20px', width: '170px', height: '35px' }}
                                        disableElevation
                                        disabled={isSubmitting}
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Sign up
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

export default FirebaseRegister;
