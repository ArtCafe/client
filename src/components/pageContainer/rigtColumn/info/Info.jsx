import React from "react";
import 'w3-css/w3.css';

function Info() {
  return (
    
   <>
      <div className="w3-card w3-round w3-white w3-center">
        <div className="w3-container">
          <p>Upcoming Events:</p>
          <img alt="Forest" style={{width:100}}/>
          <p><strong>Holiday</strong></p>
          <p>Friday 15:00</p>
          <p><button className="w3-button w3-block w3-theme-l4">Info</button></p>
        </div>
      </div>
      <br/> 
      </>
  );
}

export default Info;


