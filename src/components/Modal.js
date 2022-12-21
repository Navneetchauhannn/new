import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import loginImage from './images/login.svg';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{ backgroundColor: 'purple' }}>
          
          <div className='header'>
          <img src={loginImage} className="loginImage" alt='login'></img>
          <div className='login'>Login</div>
          </div>
          <div className='close'>
          <IconButton onClick={handleClose} >
          <CloseIcon style={{color:'white'}} />
          </IconButton >
          </div>
        </Modal.Header>
        <Modal.Body>
          <Box component="form" noValidate >
            <Grid container spacing={1}>
            <Grid item xs={12}>
            <FormControl fullWidth >
              <TextField  margin="normal" size="small" required id="email" label="Email Address" name="email" autoComplete="email" />
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <FormControl  fullWidth >
              <InputLabel size='small' htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={'password'}
                size="small"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                    onClick={()=>{console.log("ihi")}}
                      aria-label="toggle password visibility"
                      edge="end"
                      
                    >
                      <Visibility  fontSize='small'/>
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            </Grid>
            <Grid item xs={8}>
            <FormControlLabel
                control={<Checkbox size='small' value="remember" color="primary" />}
                label="I accept Term and Conditions"
              />
            </Grid>
            <a href='#' style={{marginTop:'2px'}}>Forgot Password?</a>
            </Grid>
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;