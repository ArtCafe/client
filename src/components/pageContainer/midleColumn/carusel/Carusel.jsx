import React from "react";
import {  useSelector } from "react-redux";
//import pasta from "../../../../img/pasta.jpg";
import 'w3-css/w3.css';

function Carusel () {


  const { popularPosts, loading} = useSelector((state) => state.posts)


if (loading){
  return(
    <h2>loading...</h2>
  )
}

if (!popularPosts){
  return(
    <h2>loading...</h2>
  )
}
  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin  "  ><br/>

  {popularPosts?.map((post, idx) => (

  <div className="w3-container w3-card w3-white w3-round w3-margin  w3-col m6 "     key={idx} style={{width:180}}  ><br/>
    <img src="https://res.cloudinary.com/dxdafplzp/image/upload/v1676543424/avatars/orxwhcn5nx37icljbroz.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right w3-green" style={{width:60}}/>

    <h4>{post.title}</h4><br/>
    <hr className="w3-clear"/>
    
    <img src= { post.image.url }  alt="foto" style={{width:100}} className="w3-margin-bottom w3-green "/>
    <p>{post.text}</p>
    </div> 

    
    ))}

    


    

  </div> 
  );
}

export default Carusel;
