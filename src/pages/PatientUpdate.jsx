import React, { useState,useEffect } from 'react'
import { Typography,Button,Box,Alert, Snackbar } from '@mui/material';
import Swal from 'sweetalert2'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const PatientUpdate = () => {

  const {id} = useParams();
  const [fname,setfname] = useState();
  const [lname,setlname] = useState();
  const [date_of_birth,setdate_of_birth] = useState();
  const [gender,setgender] = useState();
  const [contact_info,setcontact_info] = useState();
  const [insurance_details,setinsurance_details] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://health-voxm.onrender.com/api/v1/patients/'+id)
    .then(result => {
      console.log(result)
      setfname(result.data.fname)
      setlname(result.data.lname)
      setdate_of_birth(result.data.date_of_birth)
      setgender(result.data.gender)
      setcontact_info(result.data.contact_info)
      setinsurance_details(result.data.insurance_details)
    })
    .catch(err => console.error(err))
  }, [])

  const updateForm = (e) => {
    e.preventDefault();
    axios.put('https://health-voxm.onrender.com/api/v1/patients/'+id,{fname,lname,date_of_birth,gender,contact_info,insurance_details})
    .then(result => {
      Swal.fire({
        title:'Patient Updated',
        icon:'success',
        toast:true,
        timer:3000,
        position:'top-right',
        timerProgressBar: true,
        showConfirmButton: false
    });
      navigate('/')
    })
    .catch(err => console.error)
  }

  return (
    <div>
      
    <form>
    <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
    Update Patient 
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
  <Box textAlign='center' className='mb-5' >
    <Button  variant="contained" type='submit' onClick={updateForm}>Update</Button>
  </Box>
  </div>
  </form>
    </div>
  )
}

export default PatientUpdate
