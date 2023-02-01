import React from "react";
import 'w3-css/w3.css';
import Carusel from "../pageContainer/midleColumn/carusel/Carusel";
import Postfool from "../pageContainer/midleColumn/post/Postfool";
import Postbar from "../pageContainer/midleColumn/postbar/Postbar";

const MidlesideHome = () =>{


   

  return (
   <>
    <div className="w3-col m7">
       <Carusel/>
       <Postbar />
      <Postfool />
       
    </div>
   
   </>
  );
}

export default MidlesideHome ;