import React, { useState } from 'react';
import axios from 'axios';
import {
  FormControl, InputLabel, Input, Button, TextField, Container,
  Grid, Typography, makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    backgroundColor: 'white',
    borderRadius: '5px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray',
      },
      '&:hover fieldset': {
        borderColor: '#3f51b5', // Change this if you want a different hover color.
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3f51b5', // Change this if you want a different focus color.
      },
    },
  },
}));


function Form() {
  console.log('Rendering Form component');
  const initialState = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    mobileNumber: '',
    email: '',
    streetNumber: '',
    streetName: '',
    cityName: '',
    pinCode: '',
    dateOfBirth: '',
    yearlyFees: '',
    functionFees: ''
};

const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data...');
    console.log('Form Data:', formData);

    try {
      const response = await axios.post('http://localhost:5001/register', formData);
      console.log(response.data);
      if (response && response.data) {
        console.log(response.data);
        console.log('Resetting form data...');
        setFormData(initialState); // This resets the form data to its initial state
    }
 
    } catch (error) {
      console.error("Error registering user:", error.response?.data || error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.length <= 20 || ['contactNumber', 'mobileNumber', 'pinCode', 'yearlyFees', 'functionFees'].includes(name)) {
      setFormData(prevState => ({ ...prevState, [name]: value }));
    } else {
      alert('Input should not exceed 20 characters');
    }
  };
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Gujarati Community Registration Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} direction="column">
          <Grid item xs={12}>
            <TextField className={classes.textField} variant="outlined" fullWidth name="firstName" label="First Name" value={formData.firstName} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textField} variant="outlined" fullWidth name="lastName" label="Last Name" value={formData.lastName} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textField} variant="outlined" fullWidth name="contactNumber" label="Contact Number" value={formData.contactNumber} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textField} variant="outlined" fullWidth name="mobileNumber" label="Mobile Number" value={formData.mobileNumber} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textField} variant="outlined" fullWidth name="email" label="Email" type="email" value={formData.email} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <TextField className={classes.textField} variant="outlined" fullWidth name="streetNumber" label="Street Number" value={formData.streetNumber} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12} >
            <TextField className={classes.textField} variant="outlined" fullWidth name="streetName" label="Street Name" value={formData.streetName} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textField} variant="outlined" fullWidth name="cityName" label="City" value={formData.cityName} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12} >
            <TextField className={classes.textField} variant="outlined" fullWidth name="pinCode" label="Pin Code" value={formData.pinCode} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textField} variant="outlined" fullWidth id="dateOfBirth" name="dateOfBirth" label="Date of Birth" type="date" value={formData.dateOfBirth} onChange={handleInputChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
);
  
}

export default Form;