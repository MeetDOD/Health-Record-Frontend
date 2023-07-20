import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Patient from './pages/Patient'
import Test from './pages/Test'
import Doctor from './pages/Doctor'
import Medication from './pages/Medication'
import MedRec from './pages/MedRec'
import Navbar from './pages/Navbar'
import DoctorUpdate from './pages/DoctorUpdate'
import PatientUpdate from './pages/PatientUpdate'
import Main from './pages/Main'
import Footer from './pages/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/allData' element={<Home />}/>
          <Route path='/patient' element={<Patient />}/>
          <Route path='/test' element={<Test />}/>
          <Route path='/doctor' element={<Doctor />}/>
          <Route path='/medication' element={<Medication />}/>
          <Route path='/medRec' element={<MedRec />}/>
          <Route path='/updateDoctor/:id' element={<DoctorUpdate />}/>
          <Route path='/updatePatient/:id' element={<PatientUpdate />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
