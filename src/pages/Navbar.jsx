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
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/allData'>All Data</Link>
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