import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import "./About.css"
import { updatedata } from './Contextprovider'
import Footer from './Footer';
const Workapply = () => {
  const {updata, setUPdata} = useContext(updatedata)
    

   

  const [inpval, setINP] = useState({
      name: "",
      address: "",
      phnumber: "",
      description: "",
      basis: "",
      timedu: "",
      compensation: "",
      avatar:""
  })

  const setdata = (e) => {
      console.log(e.target.value);
      const { name, value } = e.target;
      setINP((preval) => {
          return {
              ...preval,
              [name]: value
          }
      })
  }


  const { id } = useParams("");
  console.log(id);



  const getdata = async () => {

      const res = await fetch(`http://localhost:8000/admin/${id}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
          console.log("error ");

      } else {
          setINP(data)
          console.log("get data");

      }
  }

  useEffect(() => {
      getdata();
  }, []);

  console.log(inpval)

  return (
    <div>
   <Navbar/>
 
  <form className='form-img '>
  <img src={inpval.avatar} style={{marginLeft:"130px"}} className="img-fluid"/>
  </form>
    <form className="mt-4">
    <h1 className='text-center'>{inpval.name}</h1>
   <h4 className='text-center'>Location: {inpval.address}</h4>
   <h4 className='text-center'>Description: {inpval.description}</h4>
   <h4 className='text-center'>Time Duration: {inpval.timedu}</h4>
   <h4 className='text-center'>Type of Salary: {inpval.basis}</h4>
   <h4 className='text-center'>Contact Number: {inpval.phnumber}</h4>
   <h2 className='text-center' style={{fontWeight:"bolder"}}>Salary: {inpval.compensation} {inpval.basis}</h2>

    </form>
  
   <form className='mt-4 mb-4 form-desc'>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Contact Number</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">What type of work you want</label>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
     Select
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="#">Per Day Salary</a></li>
      <li><a class="dropdown-item" href="#">Per Week Salary</a></li>
      
      <li><a class="dropdown-item" href="#">Per Month Salary</a></li>
    </ul>
  </li>
    </div>

 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    <Footer/>
    </div>
  )
}

export default Workapply