import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let redirect = () => {
    navigate("/register");
  };
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
  let submitHander = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:3000/user/" + username)
        .then((res) => res.json())
        .then((res) => {
          if (Object.keys(res).length === 0) {
            toast.error("Please Enter valid username");
          } else {
            if (res.password === password) {
              toast.success("success");
              sessionStorage.setItem("username", username);
              sessionStorage.setItem("userrole", res.role);
              navigate("/home");
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };
  return (
    <div className="container">
      <form onSubmit={submitHander}>
      <h1>please login </h1>

        <div className="inputField">
        <label>
          user name
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="user name"
          className="input"
        ></input>
       </div>
       <div className="inputField2" >
        <label>
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="input"
        ></input></div>
          <button type="submit" className="button-self">
            Login
          </button>{" "}
          {/* <button type="submit" className="button-self" onClick={redirect}>
            Register
          </button>{" "} */}
      </form>
    </div>
  );
}

export default Login;
