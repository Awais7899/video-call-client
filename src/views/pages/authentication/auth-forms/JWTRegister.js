import React, { useEffect } from 'react';
import { useDispatch } from 'store';
import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import { strengthColor, strengthIndicatorNumFunc } from 'utils/password-strength';
import { openSnackbar } from 'store/slices/snackbar';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Create from '@mui/icons-material/Create';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { MdBlock } from 'react-icons/md';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const JWTRegister = ({ ...others }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const scriptedRef = useScriptRef();
    const dispatch = useDispatch();

    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const [showPassword, setShowPassword] = React.useState(false);
    const [checked, setChecked] = React.useState(true);
    const [validated, setValidated] = React.useState(false);

    const [strength, setStrength] = React.useState(0);
    const [level, setLevel] = React.useState();
    const { register } = useAuth();

    const [isValid, setIsValid] = React.useState({
        lowercase: false,
        uppercase: false,
        number: false,
        length: false,
        specialChars: false
    });

    const validatePassword = (value) => {

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

        setValidated(true)
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
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Sign up with Email address</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    email: '',
                    firstName: '',
                    lastName: '',
                    password: '',
                    confirmPassword: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    firstName: Yup.string().max(255).required('First name is required'),
                    lastName: Yup.string().max(255).required('Last name is required'),
                    password: Yup.string().max(255).required('Password is required'),
                    confirmPassword: Yup.string().max(255).required('Confirm password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        await register(values.email, values.firstName, values.lastName, values.password);
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                            dispatch(
                                openSnackbar({
                                    open: true,
                                    message: 'Your registration has been successfully completed.',
                                    variant: 'alert',
                                    alert: {
                                        color: 'success'
                                    },
                                    close: false
                                })
                            );
                        }
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
                        <FormControl variant="red" fullWidth error={Boolean(touched.email && errors.email)}>
                            <OutlinedInput
                                id="outlined-adornment-email"
                                type="email"
                                autoFocus="false"
                                placeholder="Email"
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
                        <FormControl variant="red" style={{ marginTop: '12px' }} fullWidth error={Boolean(touched.firstName && errors.firstName)}>
                            <OutlinedInput
                                id="outlined-adornment-email"
                                type="text"
                                autoFocus="false"
                                placeholder="First name"
                                name="firstName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                                iconPrimary={Create}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Create />
                                    </InputAdornment>
                                }
                            />
                            {touched.firstName && errors.firstName && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.firstName}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl variant="red" style={{ marginTop: '12px' }} fullWidth error={Boolean(touched.lastName && errors.lastName)}>
                            <OutlinedInput
                                id="outlined-adornment-email"
                                type="text"
                                autoFocus="false"
                                placeholder="Last name"
                                name="lastName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                                iconPrimary={Create}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Create />
                                    </InputAdornment>
                                }
                            />
                            {touched.lastName && errors.lastName && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.lastName}
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
                                name="password"
                                placeholder="Password"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
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
                        <FormControl 
                            fullWidth 
                            style={{ marginTop: '12px', marginBottom: '16px' }} 
                            variant="outlined"
                            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                        >
                            <OutlinedInput
                                id="outlined-adornment-password-register2"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Re-type password"
                                name="confirmPassword"
                                onBlur={handleBlur}
                                onChange={handleChange}
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
                            {touched.confirmPassword && errors.confirmPassword && (
                                <FormHelperText error id="standard-weight-helper-text-password-register2">
                                    {errors.confirmPassword}
                                </FormHelperText>
                            )}
                        </FormControl>

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
                                        style={{ background: '#02B100', borderRadius: '20px', width: '170px', height: '35px' }}
                                        disableElevation
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        disabled={!validated && isSubmitting}
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

export default JWTRegister;
