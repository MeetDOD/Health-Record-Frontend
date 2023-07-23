import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import Swal from "sweetalert2";

const DoctorUpdate = () => {

    const {id} = useParams();
    const [for_patient,setfor_patient] = useState();
    const [record_date,setrecord_date] = useState();
    const [assigned_by_doctor,setassigned_by_doctor] = useState();
    const [prescription,setprescription] = useState();
    const [test_assigned,settest_assigned] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://health-voxm.onrender.com/api/v1/med_records/'+id)
        .then(result => {
          console.log(result)
          setfor_patient(result.data.for_patient)
          setrecord_date(result.data.record_date)
          setassigned_by_doctor(result.data.assigned_by_doctor)
          setprescription(result.data.prescription)
          settest_assigned(result.data.test_assigned)
        })
        .catch(err => console.error(err))
      },[])

      const updateForm = (e) => {
        e.preventDefault();
        axios.put('https://health-voxm.onrender.com/api/v1/med_records/'+id,{for_patient,record_date,assigned_by_doctor,prescription,test_assigned})
        .then(result => {
            Swal.fire({
                title:'Record Updated',
                icon:'success',
                toast:true,
                timer:3000,
                position:'top-right',
                timerProgressBar: true,
                showConfirmButton: false
            });
          navigate('/medicalrecorddata')
        })
        .catch(err => console.error)
      }

  return (
    <div>
    <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
    Update Record 
    </Typography>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Patient Name</label>
    <input type="text" value={for_patient} onChange={(e)=>setfor_patient(e.target.value)} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Date</label>
    <input type="text" value={record_date} onChange={(e)=>setrecord_date(e.target.value)} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Assign Doctor</label>
    <input type="text" value={assigned_by_doctor} onChange={(e)=>setassigned_by_doctor(e.target.value)} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Prescription</label>
    <input type="text" value={prescription} onChange={(e)=>setprescription(e.target.value)} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Test</label>
    <input type="text" value={test_assigned} onChange={(e)=>settest_assigned(e.target.value)} class="form-control"/>
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
