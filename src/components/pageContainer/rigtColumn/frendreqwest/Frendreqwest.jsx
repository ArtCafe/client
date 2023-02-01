import React from "react";
import 'w3-css/w3.css';

function  Frendreqwest  () {
  return (
   <>
   <div class="w3-container">
          <p>Friend Request</p>
          <img alt="Avatar" style={{width:50}}/><br/>
          <span>Jane Doe</span>
          <div class="w3-row w3-opacity">
            <div class="w3-half">
              <button class="w3-button w3-block w3-green w3-section" >Accept<i class="fa fa-check"></i></button>
            </div>
            <div class="w3-half">
              <button class="w3-button w3-block w3-red w3-section" >Decline<i class="fa fa-remove"></i></button>
            </div>
          </div>
        </div>
   
      <br/>
   </>
 
  );
}

export default  Frendreqwest  ;
