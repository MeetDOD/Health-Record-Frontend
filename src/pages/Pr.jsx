import { Typography,Button,Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios'

const Pr = () => {

    const API ="https://health-voxm.onrender.com/api/v1/patients";
    const API1 ="https://health-voxm.onrender.com/api/v1/doctors";
    const API2 ="https://health-voxm.onrender.com/api/v1/medications";
    const API3 ="https://health-voxm.onrender.com/api/v1/tests";

const [pats,setpats] = useState([]);
const [selectpats,setSelectpats] = useState('');

const [docs,setDocs] = useState([]);
const [selectdocs,setSelectdocs] = useState('');

const [med,setMed] = useState([]);
const [selectmed,setSelectmed] = useState('');

const [test,setTest] = useState([]);
const [selecttest,setSelecttest] = useState('');

  const handleChangePats = (event) => {
    setSelectpats(event.target.value);
  }
  const handleChangeDocs = (event) => {
    setSelectdocs(event.target.value);
  }
  const handleChangeMed = (event) => {
    setSelectmed(event.target.value);
  }
  const handleChangeTest = (event) => {
    setSelecttest(event.target.value);
  }

  const handleSubmit = (e) => {

    const doctorData = {selectpats,selectdocs,selectmed,selecttest};

    fetch('https://health-voxm.onrender.com/api/v1/med_records',{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(doctorData)
    }).then((res)=>{
      Swal.fire({
        title:'Record Added',
        icon:'success',
        toast:true,
        timer:3000,
        position:'top-right',
        timerProgressBar: true,
        showConfirmButton: false
    });
    }).catch((err)=>{
      console.log(err);
    })
  }

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

  const fetchTest = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      if(data.length > 0){
        setTest(data);
      }
    }catch(e){
      console.error(e);
    }
  }

  useEffect(() => {
    fetchPatients(API);
    fetchDoctors(API1);
    fetchMedication(API2);
    fetchTest(API3);
  },[]);

  //https://health-voxm.onrender.com/api/v1/med_records


  return (
    <div>
    <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
    Add Medical Record
    </Typography>
  <div class="px-5 mx-5">
    <label for="exampleInputEmail1" class="form-label py-1">Patient Name</label>
  <select value={selectpats} onChange={handleChangePats} class="form-select"  aria-label="Default select example">
    { pats.map((item,index) => {
    return(
        <option key={index} value={item.id}>
            {item.fname} {item.lname}
        </option>
    )
    })}  
  </select>
  </div>

  <div class="px-5 mx-5">
    <label for="exampleInputEmail1" class="form-label py-1">Docotor Name</label>
  <select value={selectdocs} onChange={handleChangeDocs} class="form-select"  aria-label="Default select example">
    { docs.map((item,index) => {
    return(
        <option key={index} value={item.id}>
            {item.fname} {item.lname}
        </option>
    )
    })}  
  </select>
  </div>

  <div class="px-5 mx-5">
    <label for="exampleInputEmail1" class="form-label py-1">Medication Name</label>
  <select value={selectmed} onChange={handleChangeMed} class="form-select"  aria-label="Default select example">
    { med.map((item,index) => {
    return(
        <option key={index} value={item.id}>
            {item.name} {item.description}
        </option>
    )
    })}  
  </select>
  </div>

  <div class="px-5 mx-5">
    <label for="exampleInputEmail1" class="form-label py-1">Test Name</label>
  <select value={selecttest} onChange={handleChangeTest} class="form-select"  aria-label="Default select example">
    { test.map((item,index) => {
    return(
        <option key={index} value={item.id}>
            {item.name}
        </option>
    )
    })}  
  </select>
  </div>

  <div className='pt-3'>
  <Box textAlign='center' >
    <Button type='submit' onClick={handleSubmit}  variant="contained" >Add Record</Button>
  </Box>
  </div>
  </div>
  )
}

export default Pr