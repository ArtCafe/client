import React from "react";
import 'w3-css/w3.css';
//import Navbar from "../components/navbar/navbar";
import Leftside from "../components/pageContainer/leftColumn/Leftside";
import Midleside from "../components/pageContainer/midleColumn/Midleside";


function Profileupdate () {
  const idp = "profile"
  return (
    <>
   
    <div className="w3-container w3-content" style={{ maxWidth: 1400, marginTop: 80}}>
    <div className="w3-row">
   <Leftside/>
   <Midleside idp = {idp}/>

   </div>
   <br/>
   
    </div>
 </>
  );
}

export default Profileupdate;
