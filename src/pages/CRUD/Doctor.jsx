import React, { useState } from 'react'
import { Typography,Button,Box } from '@mui/material';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'

const Doctor = () => {

  const [fname,setfname] = useState('');
  const [lname,setlname] = useState('');
  const [specialization,setspecialization] = useState('');
  const [contact_info,setcontact_info] = useState('');
  const navigate = useNavigate();

  const formSubmit = async (e) => {

    const doctorData = {fname,lname,specialization,contact_info};

    await fetch('https://health-voxm.onrender.com/api/v1/doctors',{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(doctorData)
    }).then((res)=>{
      Swal.fire({
        title:'Doctor Added',
        icon:'success',
        toast:true,
        timer:3000,
        position:'top-right',
        timerProgressBar: true,
        showConfirmButton: false
    });
    navigate('/doctorData')
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
    <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
    Add Doctor 
    </Typography>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input type="text" value={fname} onChange={(e)=>setfname(e.target.value)} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Last Name</label>
    <input type="text" value={lname} onChange={(e)=>setlname(e.target.value)} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Specialization</label>
    <input type="text" value={specialization} onChange={(e)=>setspecialization(e.target.value)} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Contact Info</label>
    <input type="text" value={contact_info} onChange={(e)=>setcontact_info(e.target.value)} class="form-control"/>
  </div>
  <div className='pt-3'>
  <Box textAlign='center' >
    <Button  type='submit' onClick={formSubmit} variant="contained" color='secondary' >Add Doctor</Button>
  </Box>
  </div>
  </div>
  )
}

export default Doctor