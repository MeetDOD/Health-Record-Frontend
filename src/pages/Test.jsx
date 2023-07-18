import React from 'react'
import { Typography,Button,Box } from '@mui/material';

const Test = () => {
  return (
    <div>
    <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
    Test 
    </Typography>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Disease Name</label>
    <input type="text" name="title" class="form-control"/>
  </div>

  <div class="px-5 mx-5">
    <label for="exampleInputEmail1" class="form-label">Doctor Name</label>
  </div>
  <div class="dropdown px-5 mx-5 ">
    <button class="btn btn-primary dropdown-toggle mb-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Doctor
  </button> 
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item">Action</a></li>
  </ul> 
  </div>

  <div class="px-5 mx-5">
    <label for="exampleInputEmail1" class="form-label py-1">Patient Name</label>
  </div>
  <div class="dropdown px-5 mx-5">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Patient
  </button> 
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item">Action</a></li>
  </ul> 
  </div>

  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Result</label>
    <input type="text" name="image" class="form-control"/>
  </div>
  <div className='pt-3'>
  <Box textAlign='center' >
    <Button  variant="contained" >report</Button>
  </Box>
  </div>
  </div>
  )
}

export default Test