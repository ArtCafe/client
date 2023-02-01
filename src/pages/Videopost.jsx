import React from "react";
//import Navbar from "../components/navbar/navbar";
import LeftsideHome from "../components/Home/LeftsideHome";
import Midleside from "../components/pageContainer/midleColumn/Midleside";
import 'w3-css/w3.css';


function Videopost () {
 
  const idp = "video"
  
  
  return (

  
    <>
    
    <div className="w3-container w3-content" style={{ maxWidth: 1400, marginTop: 80}}>
    <div className="w3-row">
   <LeftsideHome />
   <Midleside idp={idp}/>
  
   </div>
   <br/>
  
    </div>
 </>
 
  );
}

export default Videopost;
