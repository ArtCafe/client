import React from "react";
import 'w3-css/w3.css';
import Acordinfo from "./acordion/Acordinfo";
import Alert from "./alert/Alert";


const Leftside = () =>{


  return (
     <div className="w3-col m3">   
     
        <Acordinfo/>
        
        <Alert/>
      </div>
  );
}

export default Leftside ;