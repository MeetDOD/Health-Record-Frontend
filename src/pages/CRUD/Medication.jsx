import React, { useState } from 'react'
import { Typography,Button,Box } from '@mui/material';
import Swal from 'sweetalert2';

const Medication = () => {

  const [name, setMedName] = useState("");
  const [description, setDesc] = useState("");
  const [dosage_instructions, setDosgIns] = useState("");

  const addMedication = async () => {

      const medData = {name, description, dosage_instructions}
      await fetch('https://health-voxm.onrender.com/api/v1/medications',{
        method: "POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(medData)
      }).then((res)=>{
        
          if(res.status === 200){
            Swal.fire({
              title:'Medication Added',
              icon:'success',
              toast:true,
              timer:3000,
              position:'top-right',
              timerProgressBar: true,
              showConfirmButton: false
            });
          }else if(res.status === 400){
            Swal.fire({
              title: "Sahil kya kiya tune??",
              icon:'warning',
              toast:true,
              timer:3000,
              position:'top-right',
              timerProgressBar: true,
              showConfirmButton: false
            });
          }
      }).catch((err)=>{
        console.log(err)
      })
      
  }




  return (
    <div className='my-5'>
    <Typography textAlign={'center'} variant='h3'  fontFamily={'quicksand'} padding={1}>
    Medication 
    </Typography>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Medicine Name</label>
    <input type="text" name="title" value={name} onChange={e => {setMedName(e.target.value)}} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <input type="text" name="title" value={description} onChange={e => {setDesc(e.target.value)}} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label"> Dosage Instructions</label>
    <input type="text" name="title" value={dosage_instructions} onChange={e => {setDosgIns(e.target.value)}} class="form-control"/>
  </div>

  

  <div className='pt-3'>
  <Box textAlign='center' >
    <Button  variant="contained" onClick={addMedication} type = "submit">Add medication</Button>
  </Box>
  </div>
  </div>
  )
}

export default Medication