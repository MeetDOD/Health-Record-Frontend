import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import Swal from "sweetalert2";

const DoctorUpdate = () => {

    const {id} = useParams();
    const [fname,setfname] = useState();
    const [lname,setlname] = useState();
    const [specialization,setspecialization] = useState();
    const [contact_info,setcontact_info] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://health-voxm.onrender.com/api/v1/doctors/'+id)
        .then(result => {
          console.log(result)
          setfname(result.data.fname)
          setlname(result.data.lname)
          setspecialization(result.data.specialization)
          setcontact_info(result.data.contact_info)
        })
        .catch(err => console.error(err))
      },[])

      const updateForm = (e) => {
        e.preventDefault();
        axios.put('https://health-voxm.onrender.com/api/v1/doctors/'+id,{fname,lname,specialization,contact_info})
        .then(result => {
            Swal.fire({
                title:'Doctor Updated',
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
    <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
    Update Doctor 
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
    <Button  type='submit' onClick={updateForm} variant="contained" >Update</Button>
  </Box>
  </div>
  </div>
  )
}

export default DoctorUpdate
