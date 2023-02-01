import React from "react";
//import Navbar from "../components/navbar/navbar";
import LeftsideHome from "../components/Home/LeftsideHome";
import Midleside from "../components/pageContainer/midleColumn/Midleside";
import RightSideHome from "../components/Home/RightsideHome";
import 'w3-css/w3.css';



function Postme () {
  const idp = "postme"


  return (

  
    <>

    <div className="w3-container w3-content" style={{ maxWidth: 1400, marginTop: 80}}>
    <div className="w3-row">
   <LeftsideHome/>
   <Midleside idp={idp}/>
   <RightSideHome />
   </div>
   <br/>
  
    </div>
 </>
 
  );
}

export default Postme;
