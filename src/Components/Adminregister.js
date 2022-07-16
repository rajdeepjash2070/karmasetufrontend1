import React from 'react'
import "./Adminregister.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Adminregister = () => {
    const history = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    contactnumber: "",
password: "",
address: "",
image: "",

  });

  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;

    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("contactnumber", data.contactnumber);
      formData.append("address", data.address);

      formData.append("password", data.password);
      const res = await fetch(`https://kajersondhanbackend2.herokuapp.com/adminregister`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", image: "" ,email:"",contactnumber:"",address:""});
        history("/adminhome");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
    <div>
    <div className='mt-4'>
    <form>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name='name'
   
    onChange={handleChange("name")}
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="address" class="form-control" name='email'
   
    onChange={handleChange("email")}
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name='address'

    onChange={handleChange("address")}
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control"  name="password"
   
    onChange={handleChange("password")}
    id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1"  class="form-label">Contact Number</label>
    <input type="text" class="form-control" name="contactnumber"
    onChange={handleChange("contactnumber")}
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
  <label>Upload Your Income Certificate</label>
  <input
    className="form-control"
    type="file"
    accept="image/*"
    name="image"
    onChange={handleChange("image")}
  />
</div>

<button className="btn btn-primary" onClick={handleSubmit}>
Register
</button>
</form>
</div>
</div>
    </div>
  )
}

export default Adminregister