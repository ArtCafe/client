
import React from "react";
import 'w3-css/w3.css';
import Ads from "./ads/Ads";
import Frendreqwest from "./frendreqwest/Frendreqwest";
import Info from "./info/Info";

function RightSide() {
  return (
<>
<div className="w3-col m2">
   <Info/>
   <Frendreqwest/>
   <Ads />
    </div>
</>
 
  );
}

export default RightSide ;
