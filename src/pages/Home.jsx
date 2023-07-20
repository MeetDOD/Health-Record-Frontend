import React, { useEffect, useState } from 'react'
import DoctorTable from './DoctorTable';
import PatientTable from './PatientTable';

const Home = () => {
  return (
    <div>
    <DoctorTable/>
    <PatientTable/>
    </div>
  )
}

export default Home