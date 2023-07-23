import { useState } from "react";
import video from "../styles/images/Work_in_Progress.mp4";
import "../styles/home.css";
import Header from "./header.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MenuIcon from "@mui/icons-material/Menu";
function Home() {
  let [display, setDisplay] = useState(false);
  return (
    <div className="homeContainer">
      {!display && (
        <MenuIcon
          fontSize="large"
          className="menuIcon"
          onClick={() => setDisplay(true)}
        />
      )}
       
      <div className={display ? "showContainer" : "hideContainer"}>
      <ArrowBackIosIcon
          className="arrowIcon"
          onClick={() => setDisplay(false)}
        /> 
        <a href="/work"> student maintaince</a>
        <a href="/work"> staff/teacher maintaince</a>
        <a href="/work"> fee maintaince</a>
        <a href="/work"> timeTable maintaince</a>
        <a href="/work"> exam maintaince</a>
        <a href="/work"> transport maintaince</a>
        <a href="/work"> library maintaince</a>
        <a href="/work"> attendence maintaince</a>

     

        {/* <div className="working"> */}
        {/* <video className = "workinprogress" src={video} autoPlay loop muted />
     <h1 className = "workin">WORK IN PROGRESS..... </h1> */}
        {/* </div> */}
      </div>
      <Header />
    </div>
  );
}

export default Home;
