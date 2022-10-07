import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Adminlogin.css"

const Adminlogin = () => {
	const [admin,setAdmin]=useState();
	const [data, setData] = useState({ email: "", password: "" });
	
	useEffect(() => {
		const fetchUsers = async () => {
		  const res = await fetch('http://localhost:8000/adminregister');
		  const data = await res.json();
		  console.log(data)
		  setAdmin(data);
		 
		};
		fetchUsers();
	  }, []);
	 
console.log(admin)

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	

	return (
		<div>
			<form>
			<div className="p-4">
			<input type="email" name="email" placeholder="Write your email" value={data.email}/>
			</div>
			<div className="p-4">
			<input type="password" name="password" placeholder="write your password" value={data.password}/>
			</div>
			</form>
		</div>
	);
};

export default Adminlogin;