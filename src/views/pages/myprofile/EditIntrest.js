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

export default function EditIntrest() {
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
                                    <Grid item xs={12} sm={3} lg={3}>
                                        <Typography variant="h3" style={{ color: '#02B100' }}>
                                            Intrested catagories
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={9} style={{ paddingTop: '31px' }}>
                                        <Grid
                                            sx={{ border: '1px solid #02B100', padding: '7px', paddingBottom: '18px', borderRadius: '7px' }}
                                        >
                                            <Grid
                                                style={{
                                                    borderBottom: '1px solid #EEEEEE',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    padding: '0px 3px'
                                                }}
                                            >
                                                <Grid style={{ padding: '12px' }}>Travel</Grid>
                                                <Grid>
                                                    <Checkbox
                                                        sx={{
                                                            color: '#02B100',
                                                            '&.Mui-checked': {
                                                                color: '#02B100'
                                                            }
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid
                                                style={{
                                                    borderBottom: '1px solid #EEEEEE',
                                                    display: 'flex',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <Grid style={{ padding: '12px' }}>Germany</Grid>
                                                <Grid>
                                                    <Checkbox
                                                        sx={{
                                                            color: '#02B100',
                                                            '&.Mui-checked': {
                                                                color: '#02B100'
                                                            }
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>{' '}
                                            <Grid
                                                style={{
                                                    borderBottom: '1px solid #EEEEEE',
                                                    display: 'flex',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <Grid style={{ padding: '12px' }}>Italian</Grid>
                                                <Grid>
                                                    <Checkbox
                                                        sx={{
                                                            color: '#02B100',
                                                            '&.Mui-checked': {
                                                                color: '#02B100'
                                                            }
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>{' '}
                                            <Grid
                                                style={{
                                                    borderBottom: '1px solid #EEEEEE',
                                                    display: 'flex',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <Grid style={{ padding: '12px' }}>Korean</Grid>
                                                <Grid>
                                                    <Checkbox
                                                        sx={{
                                                            color: '#02B100',
                                                            '&.Mui-checked': {
                                                                color: '#02B100'
                                                            }
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Typography style={{paddingTop:"7px" ,color:"#02B100"}}>You are encourage to answer but it is not required and will not be disclosed to the public</Typography>
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
