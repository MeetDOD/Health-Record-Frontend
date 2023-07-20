import { Typography,Button,Box } from '@mui/material';
import React, { useEffect, useState } from 'react'

const MedRec = () => {

  const API ="https://health-voxm.onrender.com/api/v1/patients";
  const API1 ="https://health-voxm.onrender.com/api/v1/doctors";
  const API2 ="https://health-voxm.onrender.com/api/v1/medications";

  const [pats,setpats] = useState([]);
  const [docs,setDocs] = useState([]);
  const [med,setMed] = useState([]);

  const fetchPatients = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      if(data.length > 0){
        setpats(data);
      }
    }catch(e){
      console.error(e);
    }
  }

  const fetchDoctors = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      if(data.length > 0){
        setDocs(data);
      }
    }catch(e){
      console.error(e);
    }
  }

  const fetchMedication = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      if(data.length > 0){
        setMed(data);
      }
    }catch(e){
      console.error(e);
    }
  }

  useEffect(() => {
    fetchPatients(API);
    fetchDoctors(API1);
    fetchMedication(API2);
  },[]);

  return (
    <div>
    <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
    Medical Record
    </Typography>
  <div class="px-5 mx-5">
    <label for="exampleInputEmail1" class="form-label py-1">Patient Name</label>
  <select class="form-select" aria-label="Default select example">
{ pats.map((item) => {
  const{fname,lname} = item;
  return(
    <option value="1">{fname} {lname}</option>
  )
})}  
  </select>
  </div>

  <div class="px-5 mx-5">
    <label for="exampleInputEmail1" class="form-label py-1">Doctor Name</label>
  <select class="form-select" aria-label="Default select example">
  { docs.map((item) => {
  const{fname,lname} = item;
  return(
    <option value="1">{fname} {lname}</option>
  )
})}    
  </select>
  </div>

  <div class="px-5 mx-5">
    <label for="exampleInputEmail1" class="form-label py-1">Medication</label>
  <select class="form-select" aria-label="Default select example">
  { med.map((item) => {
  const{name,description} = item;
  return(
    <option value="1">{name} {description}</option>
  )
  })}    
  </select>
  </div>

  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Disease Name</label>
    <input type="text" name="title" class="form-control"/>
  </div>

  <div className='pt-3'>
  <Box textAlign='center' >
    <Button  variant="contained" >Medication</Button>
  </Box>
  </div>
  </div>
  )
}

export default MedRec