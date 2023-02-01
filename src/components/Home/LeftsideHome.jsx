import React from "react";
import 'w3-css/w3.css';
import Acordinfo from "../pageContainer/leftColumn/acordion/Acordinfo";
import  Profile from "../pageContainer/leftColumn/profile/Profile"


const LeftsideHome = () =>{


  return (
     <div className="w3-col m3">   
        <Profile/>
        <Acordinfo/>
       
      </div>
  );
}

export default LeftsideHome ;