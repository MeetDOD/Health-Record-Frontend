import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Patient from './pages/CRUD/Patient'
import Test from './pages/CRUD/Test'
import Doctor from './pages/CRUD/Doctor'
import Medication from './pages/CRUD/Medication'
import MedRec from './pages/CRUD/MedRec'
import DoctorUpdate from './pages/CRUD/DoctorUpdate'
import PatientUpdate from './pages/CRUD/PatientUpdate'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Main from './pages/Main'
import PatientTable from './pages/tables/PatientTable';
import DoctorTable from './pages/tables/DoctorTable';
import MedRecordTable from './pages/tables/MedRecordTable'
import MedicationTable from './pages/tables/MedicationTable'
import TestTable from './pages/tables/TestTable'
import RecordUpdate from './pages/CRUD/RecordUpdate'
import MedicationUpdate from './pages/CRUD/MedicationUpdate'
import TestUpdate from './pages/CRUD/TestUpdate'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/patient' element={<Patient />}/>
          <Route path='/test' element={<Test />}/>
          <Route path='/doctor' element={<Doctor />}/>
          <Route path='/medication' element={<Medication />}/>
          <Route path='/medRec' element={<MedRec />}/>
          <Route path='/updateDoctor/:id' element={<DoctorUpdate />}/>
          <Route path='/updatePatient/:id' element={<PatientUpdate />}/>
          <Route path='/updateRecord/:id' element={<RecordUpdate />}/>
          <Route path='/updateMedication/:id' element={<MedicationUpdate />}/>
          <Route path='/updateTest/:id' element={<TestUpdate />}/>
          <Route path='/patientData' element={<PatientTable />}/>
          <Route path='/doctorData' element={<DoctorTable />}/>
          <Route path='/medicalrecorddata' element={<MedRecordTable />}/>
          <Route path='/medicationData' element={<MedicationTable />}/>
          <Route path='/testdata' element={<TestTable />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
