import React, { useEffect, useState } from 'react'
import VaccinesIcon from '@mui/icons-material/Vaccines';
const DoctorTable = () => {
  const API ="https://health-voxm.onrender.com/api/v1/doctors";

  const [docs,setDocs] = useState([]);
  const [currentpage,setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentpage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = docs.slice(firstIndex,lastIndex);
  const npage = Math.ceil(docs.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const fetchUsers = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      if(data.length > 0){
        setDocs(data);
      }
    }catch(e){
      console.error(e);
    }
  }

  useEffect(() => {
    fetchUsers(API);
  },[]);

  const changeCPage = (id) => {
    setCurrentPage(id)
  }
  const nextPage = () => {
    if(currentpage !== npage){
      setCurrentPage(currentpage + 1)
    }
  }
  const prePage = () => {
    if(currentpage !== 1){
      setCurrentPage(currentpage - 1)
    }
  }

  return (
    <div>
      <div className='justify-content-center text-center my-4'>
        <div className='row row justify-content-center'>
            <section className='col-md-9'>
                <div className='card'>
                    <h5 className='card-header'><VaccinesIcon className='mx-2'/>Doctors  Data</h5>
                    <div className='card-body table-responsive'>
                        <table className='table table-striped table-hover'>
                            <thead>
                              <tr>
                                    <th  className='text-center'>Name</th>
                                    <th className='text-center'>Specialization</th>
                                    <th  className='text-center'>Contact Info</th>
                              </tr>
                              </thead>
                            <tbody>
                            {
                              records.map((item) => {
                                  const{fname,lname,specialization,contact_info} = item;
                                  return(
                                      <tr key={fname}>
                                          <td className='text-center'>{fname} {lname}</td>
                                          <td className='text-center'>{specialization}</td>
                                          <td className='text-center'>{contact_info}</td>
                                      </tr>
                                  )
                              })
                            }
                            </tbody>
                        </table>
                        <nav style={{cursor:'pointer'}}>
                          <ul className='pagination'>
                            <li className='page-item'>
                              <a className='page-link' onClick={prePage}>Prev</a>
                            </li>
                            {
                              numbers.map((n,i) => (
                                <li className={`page-item ${currentpage === n ? 'active' : ''}`} key={i}>
                                  <a className='page-link' onClick={()=>changeCPage(n)}>{n}</a>
                                </li>
                              ))
                            }
                            <li className='page-item'>
                              <a className='page-link' onClick={nextPage}>Next</a>
                            </li>
                          </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    </div>
    </div>
  )
}

export default DoctorTable
