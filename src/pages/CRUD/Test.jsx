import React, { useState } from 'react'
import { Typography,Button,Box } from '@mui/material';
import Swal from 'sweetalert2';

const Test = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDesc] = useState("");
  const [category, setCtgry] = useState("");

  const addTest = async() => {
    const testData = {name,price,description,category};
    await fetch("https://health-voxm.onrender.com/api/v1/tests",{
      method: "POST",
      headers:{"content-type":"application/json"},
      body: JSON.stringify(testData)
    }).then((res)=>{
        if(res.status === 200){
          Swal.fire({
            title:'Test Added',
            icon:'success',
            toast:true,
            timer:3000,
            position:'top-right',
            timerProgressBar: true,
            showConfirmButton: false
          });
        }else{
          Swal.fire({
            title:'Something went wrong',
            icon:'error',
            toast:true,
            timer:3000,
            position:'top-right',
            timerProgressBar: true,
            showConfirmButton: false
          });
        }
    })
  }

  return (
    <div>
    <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
    Test 
    </Typography>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" name="title" value={name} onChange={e => {setName(e.target.value)}} class="form-control"/>
  </div>

  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Price</label>
    <input type="number" name="image" value={price} onChange={e => {setPrice(e.target.value)}} class="form-control"/>
  </div>

  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <input type="text" name="image" value={description} onChange={e => {setDesc(e.target.value)}} class="form-control"/>
  </div>
  <div class="px-5 mx-5 py-2">
    <label for="exampleInputEmail1" class="form-label">Category</label>
    <input type="text" name="image" value={category} onChange={e => {setCtgry(e.target.value)}} class="form-control"/>
  </div>
  <div className='pt-3'>
  <Box textAlign='center' >
    <Button  variant="contained" type='submit' onClick={addTest}>Add test</Button>
  </Box>
  </div>
  </div>
  )
}

export default Test