import React, { useState } from 'react'
import { Typography,Button,Box,Alert, Snackbar } from '@mui/material';
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

const Patient = () => {

  const [fname,setfname] = useState('');
  const [lname,setlname] = useState('');
  const [date_of_birth,setdate_of_birth] = useState('');
  const [gender,setgender] = useState('');
  const [contact_info,setcontact_info] = useState('');
  const [insurance_details,setinsurance_details] = useState('');
  const navigate = useNavigate();

  const formSubmit=(e)=>{
    e.preventDefault();

    const patientData={fname,lname,date_of_birth,gender,contact_info,insurance_details};

    fetch("https://health-voxm.onrender.com/api/v1/patients",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(patientData)
    }).then((res) => {
        Swal.fire({
            title:'Patient Added',
            icon:'success',
            toast:true,
            timer:3000,
            position:'top-right',
            timerProgressBar: true,
            showConfirmButton: false
        });
        navigate('/')
    }).catch((err)=>{
      console.log(err)
    })
  };

  return (
    <form>
    <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
    Add Patient 
    </Typography>
  <div className="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" className="form-label">First Name</label>
    <input type="text"  value={fname} onChange={e=>setfname(e.target.value)} className="form-control"/>
  </div>
  <div className="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" className="form-label">Last Name</label>
    <input type="text" value={lname} onChange={e=>setlname(e.target.value)} className="form-control"/>
  </div>
  <div className="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" className="form-label">Date of Birth</label>
    <input type="text"  onChange={e=>setdate_of_birth(e.target.value)} value={date_of_birth} className="form-control"/>
  </div>
  <div className="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" className="form-label">Gender</label>
    <input type="text" value={gender}  onChange={e=>setgender(e.target.value)}  className="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Contact Info</label>
    <input type="text" value={contact_info}  onChange={e=>setcontact_info(e.target.value)} className="form-control"/>
  </div>
  <div className="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" className="form-label">Insurance Details</label>
    <input type="text" value={insurance_details} onChange={e=>setinsurance_details(e.target.value)} className="form-control"/>
  </div>
  <div className='pt-3'>
  <Box textAlign='center' >
    <Button  variant="contained" type='submit' onClick={formSubmit} >Add patient</Button>
  </Box>
  </div>
  </form>
  )
}

export default Patient;