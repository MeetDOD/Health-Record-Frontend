import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import Swal from "sweetalert2";

const DoctorUpdate = () => {

    const {id} = useParams();
    const [for_patient,setfor_patient] = useState();
    const [assigned_by_doctor,setassigned_by_doctor] = useState();
    const [prescription,setprescription] = useState();
    const [test_assigned,settest_assigned] = useState();

    const [pId,setPid] = useState()
    const [dId,setDid] = useState()
    const [mId,setMid] = useState()
    const [tId,setTid] = useState()

    
    const API ="https://health-voxm.onrender.com/api/v1/patients";
    const API1 ="https://health-voxm.onrender.com/api/v1/doctors";
    const API2 ="https://health-voxm.onrender.com/api/v1/medications";
    const API3 ="https://health-voxm.onrender.com/api/v1/tests";

    const [pats,setpats] = useState([]);
    const [patient,setSelectpats] = useState('');

    const [docs,setDocs] = useState([]);
    const [doctor,setSelectdocs] = useState('');

    const [med,setMed] = useState([]);
    const [pres,setSelectpres] = useState('');

    const [test,setTest] = useState([]);
    const [tests,setSelecttest] = useState('');

    const [loading,setLoading] = useState(false)
    const navigate = useNavigate();

    

    const fetchData = async (url1,url2,url3,url4) => {
        try{

          setLoading(true)
          //for fetching patient data
          const res1 = await fetch(url1);
          const data1 = await res1.json();
          if(data1.length > 0){
            setpats(data1);
          }

          //for fetching doctor data
          const res2 = await fetch(url2);
          const data2 = await res2.json();
          if(data2.length > 0){
            setDocs(data2);
          }


          //for fetching medications data

          const res3 = await fetch(url3);
          const data3 = await res3.json();
          if(data3.length > 0){
            setMed(data3);
          }

          //for fetching tests data

          const res4 = await fetch(url4);
          const data4 = await res4.json();
          if(data4.length > 0){
            setTest(data4);
          }


        }catch(e){
          console.error(e);
        }finally{
          setLoading(false);
        }
    }

    const updateForm = (e) => {
      e.preventDefault();
      axios.put('http://localhost:5000/api/v1/med_records/'+id,{for_patient,assigned_by_doctor,prescription,test_assigned})
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
    useEffect(() => {
     

      fetchData(API,API1,API2,API3);
      axios.get('http://localhost:5000/api/v1/med_records/'+id)
      .then(result => {
        console.log(result)
        setfor_patient(result.data.for_patient.fname)
        setassigned_by_doctor(result.data.assigned_by_doctor.fname)
        setprescription(result.data.prescription.name)
        settest_assigned(result.data.test_assigned.name)
        setDid(result.data.assigned_by_doctor._id)
        setPid(result.data.for_patient._id)
        setMid(result.data.prescription._id)
        setTid(result.data.test_assigned._id)
      })
      .catch(err => console.error(err))
    },[])

  return (
    <div>
    <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
    Update Record 
    </Typography>
 
  <div className="px-5 mx-5">
      <label htmlFor="exampleInputEmail1" className="form-label py-1">Patient Name</label>
  <select value={patient} onChange={e => {setSelectpats(e.target.value)}} className="form-select"  aria-label="Default select example">
    <option selected value = {pId}>{for_patient}</option>
      { pats.map((item,index) => {
      return(
        <option key={index} value={item._id}>
              {item.fname} {item.lname}
          </option>
      )
      })}  
  
    </select>
    </div>
    <div className="px-5 mx-5">
      <label htmlFor="exampleInputEmail1" className="form-label py-1">Doctor Name</label>
    <select value={doctor} onChange={e => {setSelectdocs(e.target.value)}} className="form-select"  aria-label="Default select example">
    <option selected value = {dId}>{assigned_by_doctor}</option>
      { docs.map((item,index) => {
      return(
        <option key={index} value={item._id}>
              {item.fname} {item.lname}
          </option>
      )
      })}  
  
    </select>
    </div>
    <div className="px-5 mx-5">
      <label htmlFor="exampleInputEmail1" className="form-label py-1">Prescription assigned</label>
    <select value={pres} onChange={e => {setSelectpres(e.target.value)}} className="form-select"  aria-label="Default select example">
    <option selected value = {mId}>{prescription}</option>
      { med.map((item,index) => {
      return(
        <option key={index} value={item._id}>
              {item.name}
          </option>
      )
      })}  
  
    </select>
    </div>
    <div className="px-5 mx-5">
      <label htmlFor="exampleInputEmail1" className="form-label py-1">Test assigned</label>
    <select value={tests} onChange={e => {setSelecttest(e.target.value)}} className="form-select"  aria-label="Default select example">
    <option selected value = {tId}>{test_assigned}</option>
      { test.map((item,index) => {
      return(
        <option key={index} value={item._id}>
              {item.name} 
          </option>
      )
      })}  
  
    </select>
    </div>
  <div className='pt-3'>
  <Box textAlign='center' >
    <Button  type='submit' onClick={updateForm} variant="contained" color='secondary' >Update</Button>
  </Box>
  </div>
  </div>
  )
}

export default DoctorUpdate
