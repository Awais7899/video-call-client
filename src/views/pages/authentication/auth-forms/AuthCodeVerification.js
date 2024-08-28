import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Stack, Typography } from '@mui/material';

// third-party
import OtpInput from 'react18-input-otp';
import { Link } from 'react-router-dom';
import VerificationModal from '../../../../ui-component/Modals/VerificationModal';

// ============================|| STATIC - CODE VERIFICATION ||============================ //

const AuthCodeVerification = ({setOtp,otp}) => {
    const theme = useTheme();
    
    const borderColor = theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[300];
    return (
        <Grid container spacing={3}>
       
            <Grid item xs={12}>
                <OtpInput
                    value={otp}
                    onChange={(otpNumber) => setOtp(otpNumber)}
                    numInputs={4}
                    containerStyle={{ justifyContent: 'space-around' }}
                    inputStyle={{
                        background:"#DCFFDC",
                        width: '50px',
                        margin: '8px',
                        padding: '10px',
                        border: `1px solid ${borderColor}`,
                        borderRadius: 4,
                        height:"45px",
                        
                        ':hover': {
                            borderColor: theme.palette.primary.main
                        }
                    }}
                    focusStyle={{
                        outline: 'none',
                        border: '2px solid #DCFFDC'
                    }}
                />
            </Grid>
           
         
        </Grid>
    );
};
export default AuthCodeVerification;
