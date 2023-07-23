import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import Swal from "sweetalert2";

const MedicationUpdate = () => {

    const {id} = useParams();
    const [name,setname] = useState();
    const [description,setdescription] = useState();
    const [dosage_instructions,setdosage_instructions] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://health-voxm.onrender.com/api/v1/medications/'+id)
        .then(result => {
          console.log(result)
          setname(result.data.medication.name)
          setdescription(result.data.medication.description)
          setdosage_instructions(result.data.medication.dosage_instructions)
        })
        .catch(err => console.error(err))
      },[])

      const updateForm = (e) => {
        e.preventDefault();
        axios.put('https://health-voxm.onrender.com/api/v1/medications/'+id,{name,description,dosage_instructions})
        .then(result => {
            Swal.fire({
                title:'Medication Updated',
                icon:'success',
                toast:true,
                timer:3000,
                position:'top-right',
                timerProgressBar: true,
                showConfirmButton: false
            });
          navigate('/medicationData')
        })
        .catch(err => console.error)
      }

  return (
    <div>
    <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
    Update Medication 
    </Typography>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Medicine Name</label>
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <input type="text" value={description} onChange={(e)=>setdescription(e.target.value)} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Dosage Instructions</label>
    <input type="text" value={dosage_instructions} onChange={(e)=>setdosage_instructions(e.target.value)} class="form-control"/>
  </div>
  <div className='pt-3'>
  <Box textAlign='center' >
    <Button  type='submit' onClick={updateForm} variant="contained" color='secondary'  >Update</Button>
  </Box>
  </div>
  </div>
  )
}

export default MedicationUpdate
