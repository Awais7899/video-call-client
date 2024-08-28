

// material-ui
 

import { useState } from 'react';
// project import
import MainCard from 'ui-component/cards/MainCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { InputAdornment} from '@mui/material';
import { Link } from "react-router-dom";

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //


export default function EditLoginCredentials() {

    const [email,setEmail] = useState("");
    const [message,setMessage] = useState(false);

    const emailValidation = (e) => {
        const pattren = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        const emailValue = e.target.value 
        setEmail(emailValue);
        if(email.match(pattren)){
            console.log(true);
            setMessage('The email you entered is valid');
        }else{
            console.log(false);
            setMessage('You have entered an invalid email address.');
            // setMessage('Emial already exist');

        }
    }

    return(
        <MainCard>
            <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <p style={{marginTop:'28px'}}>New Email <span style={{color:'red'}}>*</span></p>
                        </Grid>

                        <Grid item xs={10}>
                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    type="email"
                                    autoFocus='false'
                                    placeholder='email'
                                    name="email"
                                    inputProps={{}}
                                    onChange={emailValidation}
                                    value={email}
                                    iconPrimary={ModeEditOutlineIcon}
                                    endAdornment={
                                        <InputAdornment  position="end">
                                            <ModeEditOutlineIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <p style={{fontWeight:'500' , margin: '5px 12px'}}>{message}</p>
                        </Grid>                                                                 
                    </Grid>
                </CardContent>

                <Grid container spacing={2}>
                    <Grid item xs={12} style={{textAlign:'center',margin:'80px 0'}}>
                        {/* <Button variant="contained" style={{backgroundColor:'#02B100',borderRadius:'30px',padding:'8px 30px',color:'white'}}>Verify</Button> */}
                        <Link to="/edit-login-email-verification" style={{backgroundColor:'#02B100',borderRadius:'30px',padding:'15px 50px',color:'white',textDecoration:'none'}}>Verify</Link>
                    </Grid>
                </Grid>
            </Card>
        </MainCard>
    );
}

