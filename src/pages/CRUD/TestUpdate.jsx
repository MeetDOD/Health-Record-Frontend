import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import Swal from "sweetalert2";

const TestUpdate = () => {

    const {id} = useParams();
    const [name,setname] = useState();
    const [price,setprice] = useState();
    const [description,setdescription] = useState();
    const [category,setcategory] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://health-voxm.onrender.com/api/v1/tests/'+id)
        .then(result => {
          console.log(result)
          setname(result.data.name)
          setprice(result.data.price)
          setdescription(result.data.description)
          setcategory(result.data.category)
        })
        .catch(err => console.error(err))
      },[])

      const updateForm = (e) => {
        e.preventDefault();
        axios.put('https://health-voxm.onrender.com/api/v1/tests/'+id,{name,price,description,category})
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
          navigate('/testdata')
        })
        .catch(err => console.error)
      }

  return (
    <div>
    <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
    Update Test 
    </Typography>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Test Name</label>
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Price</label>
    <input type="text" value={price} onChange={(e)=>setprice(e.target.value)} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <input type="text" value={description} onChange={(e)=>setdescription(e.target.value)} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Category</label>
    <input type="text" value={category} onChange={(e)=>setcategory(e.target.value)} class="form-control"/>
  </div>
  <div className='pt-3'>
  <Box textAlign='center' >
    <Button  type='submit' onClick={updateForm} variant="contained" >Update</Button>
  </Box>
  </div>
  </div>
  )
}

export default TestUpdate
