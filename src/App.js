import "./App.css";
import Login from "./components/login.js";
import Register from "./components/register.js";
import { ToastContainer } from "react-toastify";
import Appheader from "./components/appheader.js";
import Employee from "./components/employeeview.js";

import Home from "./components/home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <BrowserRouter>
        <Appheader />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employeeview" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
