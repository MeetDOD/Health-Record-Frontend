import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from "sweetalert2";
import VaccinesIcon from '@mui/icons-material/Vaccines';

const DoctorTable = () => {
  const API = "https://health-voxm.onrender.com/api/v1/doctors";

  const navigate = useNavigate();
  const [docs, setDocs] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentpage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = docs.slice(firstIndex, lastIndex);
  const npage = Math.ceil(docs.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const fetchDocs = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setDocs(data);
      }
    } catch (e) {
      console.error(e);
    }
  };


  useEffect(() => {
    fetchDocs(API);
  }, []);

  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentpage !== npage) {
      setCurrentPage(currentpage + 1);
    }
  };
  const prePage = () => {
    if (currentpage !== 1) {
      setCurrentPage(currentpage - 1);
    }
  };

  const handleDelete = (id) => {
    axios.delete('https://health-voxm.onrender.com/api/v1/doctors/'+id)
    .then(res =>{
      Swal.fire({
        title:'Doctor Deleted',
        icon:'success',
        toast:true,
        timer:3000,
        position:'top-right',
        timerProgressBar: true,
        showConfirmButton: false
    });
    navigate('/')
  })
    .catch((err) => console.error(err))
  }

  return (
    <div>
      <div class="text-center">
                <h2 class="mt-3 "><VaccinesIcon fontSize="large" /> Doctors Data</h2>
            </div>
    <div class="table-responsive mx-5 my-3 text-center">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Contact Info</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item) => {
            const { fname, lname, specialization, contact_info } = item;
            return (
              <tr key={fname}>
                <td className="text-center">
                  {fname} {lname}
                </td>
                <td className="text-center">{specialization}</td>
                <td className="text-center">{contact_info}</td>
                <td>
                  <Button onClick={(e) => handleDelete(item._id)}  size="small" color="error">
                    <DeleteIcon/>
                  </Button>
                  <Button size="small">
                    <Link to={`/updateDoctor/${item._id}`}><EditIcon /></Link>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    
    <nav style={{ cursor: "pointer" }} className="mx-5 mb-5">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentpage === n ? "active" : ""}`}
              key={i}
            >
              <a className="page-link" onClick={() => changeCPage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DoctorTable;
