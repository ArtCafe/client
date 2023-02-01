import React from "react";
import {  Link } from "react-router-dom";
import 'w3-css/w3.css';

function Postbar () {



  

  return (
   
  <div className="w3-container w3-card w3-white w3-round w3-margin w3-grey"  style={{height:80}}><br/>
 
 <div className="w3-col m4 ">    <Link to="/foto"
      className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >
  
        <i className="fa fa-user"></i></Link> </div>
<div className="w3-col m4 ">    <Link to="/videocreate"
      className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >
       newVideo<i className="fa fa-user"></i></Link> </div>
       
 <div className="w3-col m4 ">    <Link to="/postcreate"
      className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >
       newPost <i className="fa fa-user"></i></Link> </div>
 
 
  </div> 
  );
}

export default Postbar;


