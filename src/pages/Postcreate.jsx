import React from "react";
import 'w3-css/w3.css';
//import Navbar from "../components/navbar/navbar";
import LeftsidePost from "../components/pageContainer/leftColumn/LeftsidePost";
import Midleside from "../components/pageContainer/midleColumn/Midleside";


function Postcreate () {
const idp = "postcreate"

  return (
    <>
   
    <div className="w3-container w3-content" style={{ maxWidth: 1400, marginTop: 80}}>
    <div className="w3-row">
   <LeftsidePost/>
   <Midleside idp={idp}/>

   </div>
   <br/>
    </div>
 </>
  );
}

export default Postcreate;
