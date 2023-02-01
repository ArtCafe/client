import React from "react";
import 'w3-css/w3.css';
import Postemit from "./post/postemit/Postemit";
import Postbar from "../midleColumn/postbar/Postbar"
import Carusel from "../midleColumn/carusel/Carusel"
import Profileupdater from "./post/Profilupdater";
import Postfool from "./post/Postfool";
import Postcreate from "./post/Postcreate";
import Posthome from "./post/postemit/Posthome";
import Postvideo from "./post/postemit/Postvideo";
import Postvideocreate  from "./post/Postvideocreate";


function Midleside( {idp}) {


   if(idp === "home"){
      return(
         <> 
   
     <div className="w3-col m7">
       <Carusel/>
       <Postbar />
      <Postemit />
       
    </div>
  
     </>
      )
   }
   if(idp === "profile"){
      return(
         <> 
     <div className="w3-col m7">
      
     <Profileupdater />
     </div>
     </>
      )
   }
   if(idp === "myposts"){
      return(
         <> 
     <div className="w3-col m7">
      
     <Posthome/>
     </div>
     </>
      )
   }
   if(idp === "postcreate"){
      return(
         <> 
     <div className="w3-col m7">
      
     <Postcreate/>

     </div>
     </>
      )
   }
  
   if(idp === "postid"){
      return(
         <> 
     <div className="w3-col m7">
      
     <Postfool/>

     </div>
     </>
      )
   }

   if(idp === "video"){
      return(
         <> 
     <div className="w3-col m7">
      
     <Postvideo/>

     </div>
     </>
      )
   }
   if(idp === "videocreate"){
      return(
         <> 
     <div className="w3-col m7">
      
     <Postvideocreate/>

     </div>
     </>
      )
   }
}
export default Midleside;
