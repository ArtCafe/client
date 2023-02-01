import React from "react";
import 'w3-css/w3.css';
import Acordinfo from "./acordion/Acordinfo";
import Alert from "./alert/Alert";
import Interests from "./intersts/Interests";
import  Profile from "./profile/Profile"


const Leftside = () =>{


  return (
     <div className="w3-col m3">   
        <Profile/>
        <Acordinfo/>
        <Interests/>
        <Alert/>
      </div>
  );
}

export default Leftside ;