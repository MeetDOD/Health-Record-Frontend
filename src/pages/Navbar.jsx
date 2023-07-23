import React from 'react'
import { Link } from 'react-router-dom'
import Diversity1Icon from '@mui/icons-material/Diversity1';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand mx-4" to='/'><Diversity1Icon fontSize='large' style={{ color: 'blueviolet' }}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All Data
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link class="nav-link active" aria-current="page" to='/patientData'>Patient</Link>
            <Link class="nav-link active" aria-current="page" to='/doctorData'>Doctor</Link>
            <Link class="nav-link active" aria-current="page" to='/medicationData'>Medication</Link>
            <Link class="nav-link active" aria-current="page" to='/medicalrecorddata'>MedicalRecord</Link>
            <Link class="nav-link active" aria-current="page" to='/testdata'>Test</Link>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/patient'>Patient</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/doctor'>Doctor</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/test'>Report</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/medication'>Medication</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/medRec'>MedicalRec</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar