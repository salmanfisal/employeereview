import React, { useState, useEffect,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import mongoose from "mongoose";
import "../styles/login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let [form,setForm] = useState({})
  let navigate = useNavigate();
  let redirect = () => {
    navigate("/register");
  };
  let nameref =useRef();
  let pswdref =useRef();

  useEffect(() => {
    sessionStorage.clear();
  }, []);
  let validate = () => {
    let isvalid = true;
    if (username === "" || username === null) {
      isvalid = false;
      toast.warning("enter valid email id");
    }
    if (password === "" || password === null) {
      isvalid = false;
      toast.warning("enter valid password");
    }
    return isvalid;
  };

  let submitHandler = (e) => {
    e.preventDefault();
    // if (validate()) {
    //   fetch("http://localhost:3000/user/" + username)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       if (Object.keys(res).length === 0) {
    //         toast.error("Please Enter valid username");
    //       } else {
    //         if (res.password === password) {
    //           toast.success("success");
    //           sessionStorage.setItem("username", username);
    //           sessionStorage.setItem("userrole", res.role);
    //           navigate("/home");
    //         } else {
    //           toast.error("Please Enter valid credentials");
    //         }
    //       }
    //     })
    //     .catch((err) => {
    //       toast.error("Login Failed due to :" + err.message);
    //     });
    // }
   
  };
  async function inputHandler(e){
    await fetch("http://localhost:8080/login",{
      method:"POST",
      body:JSON.stringify(form),
      headers:{
        "Content-Type":"application/json"
      }
    })
}
// async function server(){
//   await fetch("http://localhost:8080/login")
 
//   .then((res)=>console.log(res))
// }
  return (
    <div className="container">
      <form onSubmit={submitHandler} className="login-form">
        
        {/* <h1>{JSON.stringify(form)}</h1> */}
         
        <h1>please login </h1>
        <div className="inputField">
          <label className = "label">user name</label>
          <input
            name="username"
            onChange={(e)=>setForm({...form,[e.target.name]:e.target.value})}
            placeholder="user name"
            className="input-box"
          ></input>
        </div>
        <div className="inputField2">
          <label className = "label">Password</label>
          <input
            name="password"
            onChange={(e)=>setForm({...form,[e.target.name]:e.target.value})}
            type="password"
            placeholder="Password"
            className="input-box"
          ></input>
           
        </div>
        <button type="submit" className="button-self" onClick={inputHandler}>
          Login
        </button>
       {" "}
        {/* <button type="submit" className="button-self" onClick={redirect}>
            Register
          </button>{" "} */}
      </form>
    </div>
  );
}

export default Login;
