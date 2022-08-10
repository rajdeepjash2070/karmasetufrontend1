import axios from "axios"
import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"
const Register = () => {
    const history = useNavigate();
    const [data, setData] = useState({
        mobilenumber:"",
      });
      const handleChange = (name) => (e) => {
        const value =e.target.value;
        setData({ ...data, [name]: value });
      };

const codeInput=document.getElementById("codeInput");
     async function handleSubmit(e){
        e.preventdefault();
        
        try {
            let formData = new FormData();
           
            formData.append("mobilenumber", data.mobilenumber);
            console.log("jsbdcjab")
           const phnumber=data.mobilenumber;

           
           if(isNaN(phnumber)){
            alert("Invalid Mobile Number");
           }
           else{
            const response =sendverificationcode(phnumber);
            if(response.status==="pending"){
codeInput.parentElement.classList.remove("hidden");
            }
           }
           
            
          } catch (error) {
            console.log(error);
          }


      }


      async function sendverificationcode(phnumber){
        const res=await axios.post("http://localhost:8000/send-verification-otp",{
            phnumber,
        })
        if(res.status==200){
            return res.data.verification
        }
        else{
            return res.data
        }
      }
  return (
    <div>
    
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
    <input type="text" class="form-control" id="exampleInputEmail1 " name='mobilenumber'  onChange={handleChange("mobilenumber")} value={data.mobilenumber} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="codeInput" class="form-label hidden">OTP</label>
    <input type="text" class="form-control hidden" id="codeInput"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    
    </div>
  )
}

export default Register
