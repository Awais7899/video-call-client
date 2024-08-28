import { useState } from 'react';

// project import
import MainCard from 'ui-component/cards/MainCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

export default function Currency() {
   
   
    return (
        <MainCard>
            <Card sx={{ minWidth: 275, boxShadow: 3,height:"auto" }}>
                <CardContent>
                
                <Grid lg={6} style={{justifyContent:"center",textAlign:"center"}}>
                    <Grid  container spacing={2}>
                   <Grid container style={{padding:"20px" ,}}><Typography sx={{color:"#02B100",fontSize:"21px"}}>Currency</Typography></Grid>
                   <Grid container style={{background:"#EEEEEE" ,margin:"4px 30px" ,borderRadius:"12px"}}>
                   <Grid xs={12} lg={12} style={{padding:"23px 54px" ,textAlign:"left"}}><Typography sx={{color:"#02B100"}}>Currency is set to USD at the moment.</Typography></Grid>
                   <hr style={{width:"100%",margin:"0px" }}/>
                   <Grid xs={12} lg={12} style={{padding:" 23px 30px",textAlign:"center"}}><Typography sx={{color:"#02B100"}}>If your payment account is in another currency,the amount in your transcation will be automatically converted to USD . </Typography></Grid>
                   </Grid>
                   <Grid xs={12} lg={12} style={{textAlign:"center"}}><Button style={{background:"#02B100",color:"#FFFF",marginTop:"196px" ,borderRadius:"24px",width:"170px"}}>Ok</Button>
                   </Grid>
                   </Grid></Grid>
                    
                </CardContent>
            </Card>
          </MainCard>
    );
}
