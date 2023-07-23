import { Typography,Button,Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom';


const MedRec = () => {

    const API ="https://health-voxm.onrender.com/api/v1/patients";
    const API1 ="https://health-voxm.onrender.com/api/v1/doctors";
    const API2 ="https://health-voxm.onrender.com/api/v1/medications";
    const API3 ="https://health-voxm.onrender.com/api/v1/tests";

    const [pats,setpats] = useState([]);
    const [for_patient,setSelectpats] = useState('');

    const [docs,setDocs] = useState([]);
    const [assigned_by_doctor,setSelectdocs] = useState('');

    const [med,setMed] = useState([]);
    const [prescription,setSelectmed] = useState('');

    const [test,setTest] = useState([]);
    const [test_assigned,setSelecttest] = useState('');

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

  const handleSubmit = (e) => {

    const doctorData = {for_patient,assigned_by_doctor,prescription,test_assigned};

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
    navigate('/medicalrecorddata')
    }).catch((err)=>{
      console.log(err);
    })
  }


  useEffect(() => {
    fetchData(API,API1,API2,API3)
  },[]);




  return (
    <>
    {!loading ? (<div>
      <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
      Add Medical Record
      </Typography>
    <div className="px-5 mx-5">
      <label htmlFor="exampleInputEmail1" className="form-label py-1">Patient Name</label>
    <select value={for_patient} onChange={e => {setSelectpats(e.target.value)}} className="form-select"  aria-label="Default select example">
    <option selected value = "">Select patient name</option>
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
      <label htmlFor="exampleInputEmail1" className="form-label py-1">Docotor Name</label>
    <select value={assigned_by_doctor} onChange={e => {setSelectdocs(e.target.value)}} className="form-select"  aria-label="Default select example">
      <option selected value = "">Select doctor name</option>
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
      <label htmlFor="exampleInputEmail1" className="form-label py-1">Medication Name</label>
    <select value={prescription} onChange={e => {setSelectmed(e.target.value)}} className="form-select"  aria-label="Default select example">
    <option selected value = "">Select medication name</option>
      { med.map((item,index) => {
      return(
          <option key={index} value={item._id}>
              {item.name} {item.description}
          </option>
      )
      })}  
    </select>
    </div>
  
    <div className="px-5 mx-5">
      <label htmlFor="exampleInputEmail1" className="form-label py-1">Test Name</label>
    <select value={test_assigned} onChange={e => {setSelecttest(e.target.value)}} className="form-select"  aria-label="Default select example">
    <option selected value = "">Select test to assign</option>
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
      <Button type='submit' onClick={handleSubmit}  variant="contained" >Add Record</Button>
    </Box>
    </div>
    </div>) : (<Loading/>)}
    </>
  )
}

export default MedRec