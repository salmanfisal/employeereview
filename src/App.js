import "./App.css";
import Login from "./components/login.js";
import { ToastContainer } from "react-toastify";
import Appheader from "./components/appheader.js";
import Employee from "./components/employeeview.js";
import {useContext} from "react";
import Home from "./components/home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
      
        <Appheader />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/employeeview" element={<Employee />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
