import React from "react";
import { useDispatch, useSelector } from "react-redux";
import pasta from "../../../../img/pasta.jpg";
import 'w3-css/w3.css';
import { useEffect } from "react";
import { getMe } from "../../../../redux/features/auth/authSlice";

const Profile = () =>{

const dispatch =useDispatch()


const {user} = useSelector((state) => state.auth)
useEffect(() =>{
dispatch(getMe())
},[dispatch])

if (!user){
  return (
    <>
       <div className="w3-card w3-round w3-white">
         <div className="w3-container"   style={{ backgroundImage: `url(${pasta})` }} >
       
          <h4 className="w3-center">My Profile</h4>
          <p className="w3-center"><img src="https://res.cloudinary.com/dxdafplzp/image/upload/v1676543424/avatars/orxwhcn5nx37icljbroz.jpg" className="w3-circle w3-green" style={{height:106 , width:106}} alt="Avatar"/></p>
          <hr/>
          <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Designer, UI</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> London, UK</p>
          <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 1, 1988</p>
         </div>
       </div>
       <br/> 
       </> 
  ) 
}
  return (
   <>
      <div className="w3-card w3-round w3-white">
        <div className="w3-container"   style={{ backgroundImage: `url(${pasta})` }} >
      
         <h4 className="w3-center">My Profile</h4>
         <p className="w3-center">
          <img src={user.avatar}
          className="w3-circle w3-green" style={{height:106 , width:106}} alt="Avatar"/></p>
         <hr/>
         <p>
          <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> {user.meserie}</p>
         <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> {user.locatie}</p>
         <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 1, 1988</p>
        </div>
      </div>
      <br/> 
      </> 
    
  );
}

export default Profile ;
