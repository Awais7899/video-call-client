// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput , InputAdornment,Grid } from '@mui/material';
import { useDispatch } from 'store';
import { useNavigate } from 'react-router-dom';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import { openSnackbar } from 'store/slices/snackbar';

import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import ModeIcon from '@mui/icons-material/Mode';
import img1 from 'assets/images/img-1.png';

// ========================|| FIREBASE - FORGOT PASSWORD ||======================== //

const AuthForgotPassword = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const nevigate=useNavigate()

    const { resetPassword } = useAuth();

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email box should not be empty')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    await resetPassword(values.email);

                    if (scriptedRef.current) {
                        setStatus({ success: true });
                        setSubmitting(false);
                        dispatch(
                            openSnackbar({
                                open: true,
                                message: 'Check mail for reset password link',
                                variant: 'alert',
                                alert: {
                                    color: 'success'
                                },
                                close: false
                            })
                        );
                        setTimeout(() => {
                            navigate('/login', { replace: true });
                        }, 1500);
                    }
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

                <FormControl variant="red" fullWidth  error={Boolean(touched.email && errors.email)} >
                <OutlinedInput
                id="outlined-adornment-email"
                type="email"
                autoFocus='false'
                placeholder='ENTER YOUR EMAIL'
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
                  }     />
                {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text--register">
                        
                        <Grid>
                <img
                    alt="not found"
                    src={img1}
                    style={{ height: '21px', width: '15px' ,paddingTop:"9px"}}
                /><span style={{paddingLeft:"9px",fontSize:"12px"}}>{errors.email}</span>
            </Grid>
                    </FormHelperText>
                )}
                </FormControl> 




                   {/* <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-email-forgot">Email Address / Username</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email-forgot"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="Email Address / Username"
                            inputProps={{}}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-email-forgot">
                                {errors.email}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {errors.submit && (
                        <Box sx={{ mt: 3 }}>
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        </Box>
                    )} */}

                    <Box sx={{ mt: 9 ,textAlign:'center'}} >
                        <AnimateButton>
                            <Button
                            onClick={()=>navigate('/login-verfication-code')}
                                disableElevation
                                disabled={isSubmitting}
                                size="large"
                                type="submit"
                                variant="contained"
                                
                               style={{background:"#02B100"}}
                            >
                               Reset Password
                            </Button>
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default AuthForgotPassword;
