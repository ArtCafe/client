import React from "react";
import { Outlet, Link,  useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/auth/authSlice";
import {  useSelector } from 'react-redux'
import { checkIsAuth} from '../../redux/features/auth/authSlice'
import { useDispatch } from "react-redux";
import 'w3-css/w3.css';



function Navbar() {
 
  const isAuth = useSelector(checkIsAuth)

const dispatch = useDispatch();
 

const {user} = useSelector((state) => state.auth)

const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login')
  // alert.success("Logged out successfully");
  };
if(!user){
 return(
  <>
   <nav>
    <div className="w3-top">
    <div className="w3-bar w3-theme-d2 w3-left-align w3-large w3-grey">
   
       <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
        <i className="fa fa-home w3-margin-right"></i>Home</Link>

      <Link to="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >
        login<i className="fa fa-globe"></i></Link>

     <Link to="/register"
      className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >
       register<i className="fa fa-user"></i></Link>  

    </div>
   </div>

<div  className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">

</div>
</nav>
<Outlet />
   </>

 )
}
  return (
    <>
    <nav>
    <div className="w3-top">
    <div className="w3-bar w3-theme-d2 w3-left-align w3-large w3-grey">
     <p className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"  ><i className="fa fa-bars"></i></p>
     <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
      <i className="fa fa-home w3-margin-right"></i>Home</Link>
     <Link to="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >login<i className="fa fa-globe"></i></Link>
     <Link to="/register"
      className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >
       register<i className="fa fa-user"></i></Link>
      { isAuth ? 
        <button onClick={logoutHandler}
      className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >
        esire<i className="fa fa-user"></i></button> : <h2>login</h2>
}
     <div className="w3-dropdown-hover w3-hide-small">
       <button className="w3-button w3-padding-large" >Notifications<i className="fa fa-bell"></i><span className="w3-badge w3-right w3-small w3-green">3</span></button>     
       <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{width:300}} >
         <p  className="w3-bar-item w3-button">One new friend request</p>
       </div>
     </div>
    
     <div className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" >
      
       {isAuth ? <div>{user.username}</div> : <h2>nu auth</h2>}
      
    {/*<img src={pasta} className="w3-circle w3-green" alt="Avatar" style={{height:23, width:23 }}/>*/}  
     </div>
    </div>
   </div>

<div  className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">

<p className="w3-bar-item w3-button w3-padding-large">My Profile</p>
</div>
</nav>
<Outlet />
   </>
  );
}

export default Navbar;


