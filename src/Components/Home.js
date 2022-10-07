import React from 'react'
import Navbar from './Navbar'
import landingimg from "./work-logo.webp"
import "./Home.css"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./Footer"
import useGeoLocation from "./LocationGeo";
import haversine from 'haversine-distance'
const Home = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState();
  const [searchtext,setSearchtext]=useState('')
  const location = useGeoLocation();
 

//console.log(location.coordinates)


const getdistance=(a1,a2)=>{
  const b1=parseFloat(a1);
  const b2=parseFloat(a2);
console.log(b1,b2)
  const d1=parseFloat(`${location.coordinates.lat}`)
  const d2=parseFloat(`${location.coordinates.lng}`)
  console.log(d1,d2)
  const a = [b1, b2]
  const d=[d1,d2]
console.log("Distance is")
 const dist=haversine(a,d)
 return (dist/1000)

}

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:8000/admin');
      const data = await res.json();
      setUsers(data);
     
    };
    fetchUsers();
  }, []);

  location.loaded?JSON.stringify(location.coordinates):console.log("Location data not available yet")
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

  <a href='/register'><button class="btn text-center"  style={{color:"white"}}>রেজিসটার করুন</button></a>
</div>
</div>
</div>
<h1 className='text-center'>দিনের উপর ভিত্তি করে
</h1>

<div className='row'>

<div className='col-md-4'></div>
</div>
<div className='m-2'>
<div className="row">

      {
        users && users.filter((user)=>{
         
        if(user.basis=="Per Day" && getdistance(user.lati,user.longi)<=30){
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

{getdistance(user.lati,user.longi)} KM From You
           <a href={`/apply/${user._id}`} style={{marginLeft:"100px"}}><button className='btn btn-primary'>Apply</button></a>
        </div>
      </div>
        </div>
      ))
        
    
    }
    <i class="fa-solid fa-circle-phone"></i> 
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
<Footer/>
    </div>
  )
}

export default Home