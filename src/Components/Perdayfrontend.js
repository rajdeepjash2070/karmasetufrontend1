import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import { useEffect, useState } from "react";
import Footer from './Footer';
const Perdayfrontend = () => {
    const [users, setUsers] = useState();
    const [searchtext,setSearchtext]=useState('')
    useEffect(() => {
      const fetchUsers = async () => {
        const res = await fetch('http://localhost:8000/admin');
        const data = await res.json();
        setUsers(data);
       
      };
      fetchUsers();
    }, []);
  
  return (
    <div>
    <Navbar/>
   
        <div className='search-container'>
         <input type="text" name="search" placeholder="Search by Salary or Location" className="search-input" onChange={event=>{setSearchtext(event.target.value)}}/>
       
                <i class="fas fa-search"></i> 
                <button className='btn btn-primary bg-light'><a href='/nearest1perdayjob' target="_blank">30 KM from you</a> </button>    
       
    </div>
    
    
    <h1 className='text-center m-2'>দিনের উপর ভিত্তি করে</h1>
    <div className='m-2'>
<div className="row">

      {
        users && users.filter((user)=>{
          if(user.basis=="Per Day"){
            return users
          }
          else if(user.address==(searchtext) || user.salary==(searchtext) && user.basis=="Per Day"){
            // console.log(hospital.district.toLowerCase().includes(searchtext.toLocaleLowerCase()))
    
              return users
          
          }
          
          // else if(hospital.state.toLowerCase().includes(searchstate.toLocaleLowerCase()) ){
          //   console.log(hospital.state.toLowerCase().includes(searchstate.toLocaleLowerCase()))
          //      return hospital
          // }
        }).map((user) => (
        <div className="col-md-3" key={user._id}>



        <div class="card mt-4" style={{width:"18rem"}}>
        <img src={user.avatar} class="card-img-top" alt="..."/>
        <hr/>
        <div class="card-body">
          
        <h4 className="card-title" style={{color:"red"}}>Organisation Name: {user.name}</h4>
      
        <p class="card-text" style={{color:"blue"}}><i class="fa-solid fa-phone"></i> Call Now: {user.phnumber}</p>
        <p class="card-text" style={{color:"green"}}><i class="fa-solid fa-location-dot"></i> Location: {user.address}</p>
          <p class="card-text" style={{color:"green"}}><i class="fa-solid fa-calendar-days"></i> Duration: {user.timedu}</p>
          <p class="card-text" style={{color:"green"}}><i class="fa-solid fa-indian-rupee-sign"></i> Salary: {user.compensation} {user.basis}</p>
           <a href={`/apply/${user._id}`} style={{marginLeft:"100px"}}><button className='btn btn-primary'>Apply</button></a>
         
        </div>
      </div>
        </div>
      ))
        
    
    }
        
      </div>
      </div>
    
    <Footer/>
    </div>
  )
}

export default Perdayfrontend