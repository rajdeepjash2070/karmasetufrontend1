import React from 'react'
import Navbar from './Navbar'
import landingimg from "./work-logo.webp"
import "./Home.css"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:8000/admin');
      const data = await res.json();
      setUsers(data);
     
    };
    fetchUsers();
  }, []);


  return (
    <div id='home'>
    <Navbar/>
    <div className='d-flex justify-content-center'>
    <div class="row header">
<div class="col-md-6">
<img src={landingimg} class="img-fluid" alt="home-image"/>
</div>
<div class="col-md-6 header-text">
  <div id="div1">বেকারত্ব সমস্যার সমাধান</div>

  <button class="btn text-center"  style={{color:"white"}}>রেজিসটার করুন</button>
</div>
</div>
</div>
<h1 className='text-center'>দিনের উপর ভিত্তি করে
</h1>
<div className='m-2'>
<div className="row">

      {
        users && users.filter((user)=>{
          if(user.basis=="Per Day"){
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
          
        <h4 className="card-title">{user.name}</h4>
        <p class="card-text">{user.description}</p>
        <p class="card-text">{user.phnumber}</p>
          <p class="card-text">{user.basis}</p>
          <p class="card-text">{user.timedu}</p>
          <p class="card-text">{user.compensation}</p>
         
        </div>
      </div>
        </div>
      ))
        
    
    }
        
      </div>
      </div>
<h1 className='text-center'>সপ্তাহের উপর ভিত্তি করে</h1>
<div className="row">

      {
        users && users.filter((user)=>{
          if(user.basis=="Per Week"){
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
          
        <h4 className="card-title">{user.name}</h4>
        <p class="card-text">{user.description}</p>
        <p class="card-text">{user.phnumber}</p>
          <p class="card-text">{user.basis}</p>
          <p class="card-text">{user.timedu}</p>
          <p class="card-text">{user.compensation}</p>
         
        </div>
      </div>
        </div>
      ))
        
    
    }
        
      </div>
<h1 className='text-center'>মাসের উপর ভিত্তি করে</h1>
<div className="row">

      {
        users && users.filter((user)=>{
          if(user.basis=="Per Month"){
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
          
        <h4 className="card-title">{user.name}</h4>
        <p class="card-text">{user.description}</p>
        <p class="card-text">{user.phnumber}</p>
          <p class="card-text">{user.basis}</p>
          <p class="card-text">{user.timedu}</p>
          <p class="card-text">{user.compensation}</p>
         
        </div>
      </div>
        </div>
      ))
        
    
    }
        
      </div>

    </div>
  )
}

export default Home