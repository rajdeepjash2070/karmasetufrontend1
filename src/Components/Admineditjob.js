
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import "./About.css"
import { updatedata } from './Contextprovider'
const Admineditjob = () => {
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


    const updateuser = async(e)=>{
        e.preventDefault();

        const {name,address,description,timedu,basis,compensation,avatar,phnumber} = inpval;

        const res2 = await fetch(`http://localhost:8000/admin/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,
                address,
                phnumber,
                description,
                basis,
                timedu,
                compensation,
                avatar
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
           
            setUPdata(data2);
        }

    }
  return (
    <div className="container">
    <NavLink to="/">home2</NavLink>
    <form className="mt-4">
        <div className="row">
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Address</label>
                <input type="email" value={inpval.address} onChange={setdata} name="address" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Duration</label>
                <input type="text" value={inpval.timedu} onChange={setdata} name="timedu" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="form-group mb-3">
            <label for="exampleFormControlSelect1">select on which basis you want to give compensation to workers</label>
            <select id="inputState" className="form-select"  name="basis"  value={inpval.basis} onChange={setdata}>
                      <option>Select</option>
                      <option>Per Day</option>
                      <option>Per Week</option>
                      <option>Per Month</option>
                    </select>
          </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Description</label>
                <input type="text" value={inpval.description} onChange={setdata} name="description" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Contact Number</label>
                <input type="text" value={inpval.phnumber} onChange={setdata} name="phnumber" class="form-control" id="exampleInputPassword1" />
            </div>
            

            <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
  )
}

export default Admineditjob