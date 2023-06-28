import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/register.css";

const Register = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += " Fullname";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email };
    if (IsValidate()) {
      //console.log(regobj);
      fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={handlesubmit}>
          <div className="header">
            <h1>User Registeration</h1>
          </div>

          <label>
            User Name <span className="errmsg">*</span>
          </label>
          <input
            value={id}
            className="input"
            onChange={(e) => idchange(e.target.value)}
            placeholder="user name"
          ></input>

          <br />
          <br />

          <label>
            Full Name <span className="errmsg">*</span>
          </label>
          <input
            value={name}
            onChange={(e) => namechange(e.target.value)}
            placeholder="full name"
            className="input"
          ></input>
          <br />
          <br />

          <label>
            Email <span className="errmsg">*</span>
          </label>
          <input
            value={email}
            onChange={(e) => emailchange(e.target.value)}
            placeholder="Email"
            className="input"
          ></input>
          <br />
          <br />
          <label>
            Password <span className="errmsg">*</span>
          </label>
          <input
            value={password}
            type="password"
            onChange={(e) => passwordchange(e.target.value)}
            placeholder="Password"
            className="input"
          ></input>
          <div className="button">
            <button type="submit" className="button-self">
              Register
            </button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
