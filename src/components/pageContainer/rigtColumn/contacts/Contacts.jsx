import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallUser} from "../../../../redux/features/auth/authSlice"
import 'w3-css/w3.css';

function  Contacts  () {
      const {allusers, loadingallusers} = useSelector((state) => state.auth)
   
const dispatch = useDispatch()
      
useEffect(() => {
dispatch( getallUser())
},[dispatch])
console.log(allusers);
if (!allusers)
{
      return(
            <>
            <h2>loading...</h2>
            </>
      )
}
if (loadingallusers){
      return(
        <h2>loading...</h2>
      )
    }
    
  return (
   <>
   <div className="w3-container ">
   <h2>frends</h2>




</div>
{allusers?.map((user, idx) => (
               <>

       <div className="w3-container "key={idx}  >
             <  div  className=" w3-col m6 w3-row  w3-round w3-white"> 

    <img  src={user.avatar} className="w3-greenw w3-round  "alt="Avatar" style={{width:50}}/>
    </div>
    <div className=" w3-col m6 ">
          <span>{user.username}</span>
    </div>
    </div>
        </>
            ))}


   
      
   
      <br/>
   </>
 
  );
}

export default  Contacts  ;
/*
   {allusers?.map((user, idx) => (
               <>

       <div className="w3-container "key={idx}  >
             <  div  className=" w3-col m6 w3-row "> 

    <img  src={`http://localhost:5000/${user.avatar}`} className="w3-green "alt="Avatar" style={{width:50}}/>
    </div>
    <div className=" w3-col m6 ">
          <span>{user.username}</span>
    </div>
    </div>
        </>
            ))}




</div>
  
   
      
   
      <br/> */