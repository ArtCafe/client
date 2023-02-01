import React from "react";
import pasta from "../../../../img/pasta.jpg";
import 'w3-css/w3.css';

function Carusel () {
  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin  "  ><br/>
  <div className="w3-container w3-card w3-white w3-round w3-margin  w3-col m6 "  style={{width:180}}  ><br/>

    <img src={pasta} alt="Avatar" className="w3-left w3-circle w3-margin-right w3-green" style={{width:60}}/>

    <h4>Angie Jane</h4><br/>
    <hr className="w3-clear"/>
    
    <img alt="foto" style={{width:100}} className="w3-margin-bottom w3-green "/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    </div> 

    <div className="w3-container w3-card w3-white w3-round w3-margin w3-col m6  "  style={{width:180}}  ><br/>
    <img  alt="Avatar" className="w3-left w3-circle w3-margin-right w3-green " style={{width:60}}/>

    <h4>Angie Jane</h4><br/>
    <hr className="w3-clear"/>
    
    <img alt="foto" style={{width:100}} className="w3-margin-bottom"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    </div>

    <div className="w3-container w3-card w3-white w3-round w3-margin w3-col m6  "  style={{width:180}}  ><br/>
    <img  alt="Avatar" className="w3-left w3-circle w3-margin-right w3-green" style={{width:60}}/>

    <h4>Angie Jane</h4><br/>
    <hr className="w3-clear"/>
    
    <img alt="foto" style={{width:100}} className="w3-margin-bottom"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    </div>

  </div> 
  );
}

export default Carusel;
