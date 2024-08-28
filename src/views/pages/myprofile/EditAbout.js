import { useState } from 'react';

// project import
import MainCard from 'ui-component/cards/MainCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputAdornment, FormControlLabel, Typography, Button } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius: 3,
    paddingTop: 0,
    paddingBottom: 2
};

export default function EditAbout() {
    const [bitrhYear, setBirthYear] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChange = (event) => {
        setBirthYear(event.target.value);
        setPhoneNumber(event.target.value);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <MainCard>
            <Card sx={{ minWidth: 275, boxShadow: 3 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={12}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={12} lg={12} style={{ paddingTop: '31px',paddingLeft:"35px" }}>
                                        <Typography variant="h3" style={{ color: '#02B100' }}>
                                            Tell something about yourself
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={12} style={{ paddingTop: '15px',paddingLeft:"35px"  }}>
                                        <Grid>
                                           <textarea placeholder="I chose field of study because I've always been  intrested in finance and money , and a couple of family members told me it leads to great options to. If you have 1-8 years of experinence start with the moment you graduated and" style={{border:"1px solid green",background:"#EEEEEE",borderRadius: '7px',height:"50vh",width:"70vw" ,padding:"30px" }}/>
                                           </Grid>
                                        </Grid>
                                    
                                </Grid>
                                
                            </Grid>
                            
                        </Grid>

                        <Grid container spacing={2} style={{ marginTop: '50px' }}>
                            <Grid xs={8} lg={10} style={{textAlign:"right",paddingTop:"24px",}}>
                                <Link to="/" style={{ color: '#02B100', fontSize: '18px', textAlign: 'right' }}>Skip</Link>
                            </Grid>
                            <Grid xs={4} lg={2} style={{ textAlign: 'right', marginTop: '18px' }}>
                                <Button
                                    style={{
                                        backgroundColor: '#02B100',
                                        borderRadius: '30px',
                                        padding: '7px 40px',
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Continue
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </MainCard>
    );
}
