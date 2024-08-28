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
import picture from "assets/images/picture.png"
import { color } from '@mui/system';
// import "./styles.css";
import styled from "styled-components";
// import { FiCamera } from "react-icons/fi";
import ReactFileReader from "react-file-reader";
import SuccessModal from '../../../ui-component/Modals/SuccessModal';
import Swal from 'sweetalert2'
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
export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    object-fit: cover;
    border-radius: 50%;
  }
  .circle {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  label {
    right: 23em !important;
    position: absolute;
    width: 48px;
    height: 48px;
    background: #312e38;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #f4ede8;
    }
    &:hover {
      background: blue;
    }
  }
`;


export default function EditImage() {
    const [url, setUrl] = useState(picture);
   
    

    const handleFiles = (files) => {
        console.log('file data', files.fileList[0].size);
        console.log('file data', files.fileList[0].name);
        const name = files.fileList[0].name.split('.')[1];
        console.log("nameeeee" , name);
       
        if(!(name==="png" || name==="jpg" || name==='jpeng')){
            console.log("correct")

            Swal.fire({
              text:"Invalid file type . Available formats are jpg, png, jpeng .",
              icon: 'error',
              width: 350,
              confirmButtonText: 'Reload',
              confirmButtonColor:"#02B100",
              color:"#FB4B4B"
            })
           
        }else{
            console.log("not correct") 
           
        }
        console.log('sdfsdfsdfs1212121212');
      
        const size = files.fileList[0].size;
        if (size> 1024*10*100){
            console.log("sdfsdsadsad");
              Swal.fire({
              text:"Image should not be more than 10MB , will be compressesd .",
              icon: 'error',
              width: 350,
              confirmButtonText: 'Reload',
              confirmButtonColor:"#02B100",
              color:"#FB4B4B"
            })
        }
        else {
            console.log('Image uploaded successfully');
         
           
        }
      console.log(files);
      setUrl(files.base64);
    };
     const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <MainCard>
            <Card sx={{ minWidth: 275, boxShadow: 3,height:"60vh" }}>
                <CardContent>
                
                <Grid lg={6} style={{justifyContent:"center",textAlign:"center"}}>
                    <Grid  container spacing={2}>
                    <Grid xs={12} lg={12} style={{paddingTop:"14px"}}>
                    <AvatarInput>
                    <img src={url} alt="Avatar Placeholder" />
                    
                    </AvatarInput>
                  </Grid>
                    <Grid xs={12} lg={12} style={{marginBottom:"20px"}}><Typography variant='h3'>John Smith</Typography></Grid>
                    <Grid xs={12} lg={12} style={{display:"flex",marginBottom:"20px"}} ><Grid xs={6} style={{textAlign:"right"}}><Button style={{background:"#02B100" , color:"#FFFF",borderRadius:"9px",marginRight:'10px'}}>Save</Button></Grid>
                    <Grid xs={6} style={{textAlign:"left"}}>
                    <ReactFileReader
                    // fileTypes={[".png",".tif", ".jpg",]}
                    base64='true'
                    handleFiles={handleFiles}
                  ><button style={{background:"#02B100" ,fontWeight:"bold",color:"#FFFF",borderRadius:"9px",marginRight:'10px',padding:"11px",    border: "0" }} type='button' >Upload</button>
                  </ReactFileReader></Grid>
                  </Grid>
                    <Grid xs={12} lg={12}><Typography style={{color:"#02B100",marginBottom:"10px"}}>Image should not br more than 10MB</Typography><Typography style={{color:"#02B100"}}>Allowed formats are jpg,png.</Typography></Grid>
                    </Grid></Grid>
                    
                </CardContent>
            </Card>
          </MainCard>
    );
}
