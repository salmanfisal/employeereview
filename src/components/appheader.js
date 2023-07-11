import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/appheader.css";
function Appheader() {
  let [display, setDisplay] = useState("");
  let [menu, setMenu] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setMenu(false);
      
    } else {
      setMenu(true);
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        navigate("/login");
      } else {
        setDisplay(username);
      }
    }
  }, [location]);
  return (
    <div>
      {menu && (
        <div className="header">
          <Link to={"/"}>Home</Link>
          <Link to={"/employeeview"}>employee reviews</Link>
          <span>
            Welcome <b>{display}</b>
          </span>
          <Link to={"/login"}>Logout</Link>
          <Link to ={"/register"}>Register</Link>
        </div>
        
      )}
    </div>
  );
}

export default Appheader;
