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
import { InputAdornment, FormControlLabel } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

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

export default function EditUser() {
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
                            <Grid item xs={12} lg={6}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={3} md={2} lg={2} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel
                                            horizontal
                                            sx={{ textAlign: { xs: 'left', sm: 'right' }, }}
                                            style={{ marginTop: '20px' }}
                                        >
                                            First name <span style={{ color: 'red' }}>*</span>
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} md={10} lg={10} >
                                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                            <OutlinedInput
                                                id="nikname"
                                                type="text"
                                                autoFocus="false"
                                                placeholder="First Name"
                                                name="firstname"
                                                inputProps={{}}
                                                iconPrimary={ModeEditOutlineIcon}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <FormControlLabel control={<Checkbox />} />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} lg={6}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={3} lg={2} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel
                                            horizontal
                                            sx={{ textAlign: { xs: 'left', sm: 'right' } }}
                                            style={{ marginTop: '20px' }}
                                        >
                                            Last name <span style={{ color: 'red' }}>*</span>
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={10}>
                                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                            <OutlinedInput
                                                id="nikname"
                                                type="text"
                                                autoFocus="false"
                                                placeholder="Last Name"
                                                name="lastname"
                                                inputProps={{}}
                                                iconPrimary={ModeEditOutlineIcon}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <FormControlLabel control={<Checkbox />} />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={12}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={3} lg={1} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel
                                            horizontal
                                            sx={{ textAlign: { xs: 'left', sm: 'right' } }}
                                            style={{ marginTop: '-35px' }}
                                        >
                                            Birth year <span style={{ color: 'red' }}>*</span>
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={11}>
                                        <FormControl sx={{ m: 1, width: '100%' }}>
                                            <InputLabel id="demo-simple-select-label">Birth Year</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={bitrhYear}
                                                label="Birth Year"
                                                onChange={handleChange}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <FormControlLabel control={<Checkbox />} />
                                                    </InputAdornment>
                                                }
                                            >
                                                <MenuItem value={10}>1999</MenuItem>
                                                <MenuItem value={20}>2000</MenuItem>
                                                <MenuItem value={30}>2001</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <p style={{ color: '#02B100', fontSize: '12px' }}>One can be a helper at the age of 14+</p>
                                        <p style={{ color: '#02B100', fontSize: '12px' }}>One can purchase a service at the age of 18+</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={12}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={3} lg={2} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel
                                            horizontal
                                            sx={{ textAlign: { xs: 'left', sm: 'left' } }}
                                            style={{ marginTop: '-35px' }}
                                        >
                                            Phone Number <span style={{ color: 'red' }}>*</span>
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={10}>
                                        <FormControl sx={{ m: 1, width: '100%' }}>
                                            <InputLabel id="demo-simple-select-label">Phone Number</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={phoneNumber}
                                                label="Birth Year"
                                                onChange={handleChange}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <FormControlLabel control={<Checkbox />} />
                                                    </InputAdornment>
                                                }
                                            >
                                                <MenuItem value={10}>Afghanistan (+93) </MenuItem>
                                                <MenuItem value={20}>Albania (+355)</MenuItem>
                                                <MenuItem value={30}>Albania (+355)</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <p style={{ color: 'red', fontSize: '12px' }}>* This field is required!</p>
                                        <p style={{ color: '#02B100', fontSize: '12px' }}>
                                            A check mark next to each item means you want to disclose this info to the public, Some check
                                            marks are grayed out and cannot be changed.
                                        </p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} style={{ marginTop: '50px' }}>
                            <Grid xs={8} lg={10}>
                                <p style={{ color: '#02B100', fontSize: '18px', textAlign: 'right' }}>Skip</p>
                            </Grid>
                            <Grid xs={8} lg={2} style={{ textAlign: 'right', marginTop: '18px' }}>
                                <Link
                                    to="/"
                                    style={{
                                        backgroundColor: '#02B100',
                                        borderRadius: '30px',
                                        padding: '15px 50px',
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Continue
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </MainCard>
    );
}
