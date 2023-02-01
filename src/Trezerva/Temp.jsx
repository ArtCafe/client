import React from "react";
import 'w3-css/w3.css';
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import Leftside from "../components/pageContainer/leftColumn/Leftside";
import Midleside from "../components/pageContainer/midleColumn/Midleside";
import RightSide from "../components/pageContainer/rigtColumn/Rightside";

function Temp () {
  return (
    <>
    <Navbar></Navbar>
    <div class="w3-container w3-content" style={{ maxWidth: 1400, marginTop: 80}}>
    <div class="w3-row">
   <Leftside/>
   <Midleside/>
   <RightSide/>
   </div>
   <br/>
   <Footer/>
    </div>
 </>
  );
}

export default Temp;
