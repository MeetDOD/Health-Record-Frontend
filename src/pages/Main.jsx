import React from 'react'
import './main.css'
import docs from './docs.jpg'
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <>
  <div class="col-md-5 p-5 mx-auto d-block">
    <img src={docs} class="img-fluid d-block"
      alt="Responsive image"/>
          <h3 class=" text-center " style={{color:'blueviolet'}}>Your Health, Connected</h3>
    <div class="text-center">
      <Link to='/patientData'><Button variant='contained' color='secondary' className='my-3'>Track Now</Button></Link>
    </div>
  </div>
  </>
  )
}

export default Main
