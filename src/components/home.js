import React from "react";
import video from "../styles/images/Work_in_Progress.mp4";

function Home() {
  return <div className="working">
     <video className = "workinprogress" src={video} autoPlay loop muted />
     <h1 className = "workin">WORK IN PROGRESS..... </h1>
         </div>;
}

export default Home;
