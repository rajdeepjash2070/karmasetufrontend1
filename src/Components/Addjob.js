import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGeoLocation from "./LocationGeo";
const Addjob = () => {
  const history = useNavigate();
  const location = useGeoLocation();
  const [data, setData] = useState({
    name: "",
    address:"",
    image: "",
    description: "",
    phnumber: "",
basis: "",
timedu: "",
compensation: "",
longi:"",
lati:"",
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
      formData.append("address", data.address);
      formData.append("description", data.description);
      formData.append("phnumber", data.phnumber);
      formData.append("basis", data.basis);
      formData.append("timedu", data.timedu);
      formData.append("longi", location.coordinates.lng);
      formData.append("lati", location.coordinates.lat);
      formData.append("compensation", data.compensation);
      const res = await fetch(`http://localhost:8000/admin`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", image: "" ,address:"", description:"",phnumber:"",basis:"",timedu:"",compensation:"",longi:"",lati:""});
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  location.loaded
  ? JSON.stringify(location.coordinates)
  : console.log("Location data not available yet.")
  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
    <div className="mt-4">
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
        
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Work Address"
      type="text"
      name="address"
      value={data.address}
      onChange={handleChange("address")}
    />
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Give a description in Bengali of your Job"
      type="text"
      name="description"
      value={data.description}
      onChange={handleChange("description")}
    />
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Give Your Phone number so they can contact you"
      type="text"
      name="phnumber"
      value={data.phnumber}
      onChange={handleChange("phnumber")}
    />
      </div>
      <div class="form-group mb-3">
    <label for="exampleFormControlSelect1">select on which basis you want to give compensation to workers</label>
    <select id="inputState" className="form-select"  name="basis" value={data.basis} onChange={handleChange("basis")}>
              <option>Select</option>
              <option>Per Day</option>
              <option>Per Week</option>
              <option>Per Month</option>
            </select>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Time Duration"
  type="text"
  name="timedu"
  value={data.timedu}
  onChange={handleChange("timedu")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Conpensation or Salary"
  type="text"
  name="compensation"
  value={data.compensation}
  onChange={handleChange("compensation")}
/>
  </div>

      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange("image")}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
         Post
        </button>
      </div>
      </div>
     
      
    </div>
  );
};

export default Addjob;