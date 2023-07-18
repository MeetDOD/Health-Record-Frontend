import React, { useEffect, useState } from 'react'
import DoctorTable from './DoctorTable';
import PatientTable from './PatientTable';

const Home = () => {
  return (
    <>
    <DoctorTable />
    <PatientTable />
    </>
  )
}

export default Home