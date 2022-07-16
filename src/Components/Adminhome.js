import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Adminhome = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:8000/admin');
      const data = await res.json();
      setUsers(data);
      console.log(users);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/admin/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const updatedUsers = users.filter((user) => user._id !== id);
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
    <h5>Post a Job Here</h5>
    <a href="/adminaddjob"><button className="btn btn-primary">Post Here <i class="fa-solid fa-circle-plus"></i></button></a>
    <div className="row">
      {users?.map((user) => (
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
          <Link className="btn btn-primary m-2" to={`/admineditjob/${user._id}`} >
                Edit
              </Link>
              <button
                className="btn p-2 btn-danger btn-sm"
                onClick={() => handleDelete(user._id)}
              >
                X
              </button>
        </div>
      </div>
      
        </div>
      
      ))}
    </div>
    </div>
  )
}

export default Adminhome;