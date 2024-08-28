import { useState } from 'react';

// project import
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import UserDetailsCard from 'ui-component/cards/UserDetailsCard';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const userDetails = {
    id: '#1Card_Phoebe',
    // avatar: 'user-2.png',
    name: 'Gaetano',
    role: 'Investor Division Strategist',
    about: 'Try to connect the SAS transmitter, maybe it will index the optical hard drive!',
    email: 'alia_shields25@yahoo.com',
    contact: '253-418-5940',
    location: 'Herminahaven'
};

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

export default function MyServices() {
    return (
        <MainCard>
            <Card sx={{ minWidth: 275, boxShadow: 3, height: 'auto', padding: '0px' }}>
                <CardContent>
                    <Grid lg={6} style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <Grid container spacing={2}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} md={2} lg={2} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel
                                        horizontal
                                        sx={{ textAlign: { xs: 'left', sm: 'right', lg: 'center' } }}
                                        style={{ marginTop: '20px' }}
                                    >
                                        Nickname
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} md={10} lg={10}>
                                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                        <OutlinedInput
                                            id="nikname"
                                            type="text"
                                            autoFocus="false"
                                            placeholder="thisisthenickname123"
                                            name="firstname"
                                            inputProps={{}}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} md={2} lg={2} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel
                                        horizontal
                                        sx={{ textAlign: { xs: 'left', sm: 'right', lg: 'center' } }}
                                        style={{ marginTop: '20px' }}
                                    >
                                        True name
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} md={10} lg={10}>
                                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                        <OutlinedInput
                                            id="truename"
                                            type="text"
                                            autoFocus="false"
                                            placeholder="John dee on thirty letters"
                                            name="firstname"
                                            inputProps={{}}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid xs={12} lg={12} style={{ paddingLeft: '45px' }}>
                                <Grid>
                                    <Typography style={{ color: '#02B100', fontSize: '21px', textAlign: 'left' }}>Availaibility</Typography>
                                </Grid>
                            </Grid>
                            <Grid xs={12} lg={12} style={{ paddingLeft: '45px' ,marginTop:"14px" }}>
                                <Grid style={{ background: '#EEEEEE', padding: '10px', borderRadius: '7px', border: '1px solid #9B9B9B' }}>
                                    <Grid style={{ background: '#FFFFFF' ,textAlign:"left" ,padding:"10px 30px",border:"1px solid "}}>
                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel
                                                    value="female"
                                                    control={<Radio sx={{
                                                        '& .MuiSvgIcon-root': {
                                                          fontSize: 32,
                                                        },
                                                      }}/>}
                                                    label=<p style={{fontSize:"18px",paddingLeft:"30px"}}>I can be called and show my current status.</p>
                                                />
                                                <FormControlLabel
                                                    value="male"
                                                    control={<Radio sx={{
                                                        '& .MuiSvgIcon-root': {
                                                          fontSize: 32,
                                                        },
                                                      }}/>}
                                                    label=<p style={{fontSize:"18px",paddingLeft:"30px"}}>I can be called but show me offline.</p>
                                                />
                                                <FormControlLabel
                                                    value="other"
                                                    control={<Radio sx={{
                                                        '& .MuiSvgIcon-root': {
                                                          fontSize: 32,
                                                        },
                                                      }}/>}
                                                    label=<p style={{fontSize:"18px",paddingLeft:"30px"}}>I don&#39;t receive call and show me offline</p>
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                           <Grid xs={12} sm={12} md={12} lg={12} style={{marginTop:'20px'}}> 
                          <button type='submit' style={{color:"#FFFF",background:"#02B100",float:'right',borderRadius:"30px",padding:"12px 17px",border:"none"}}>
                           <Typography sx={{fontSize:"20px"}}>Announce services</Typography>
                           </button> 
                            </Grid>

                            <Grid item xs={12} lg={4}>
                            <SubCard title="Basic Card Style 1">
                                <UserDetailsCard {...userDetails} />
                            </SubCard>
                        </Grid>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </MainCard>
    );
}
