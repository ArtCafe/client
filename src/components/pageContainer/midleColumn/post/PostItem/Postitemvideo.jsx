import React from "react";
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removePost } from '../../../../../redux/features/post/postSlice'
import 'w3-css/w3.css';
import { getAllvideo } from "../../../../../redux/features/post/postSlice";



function Postitemvideo ({ video}) {

 
  const dispatch = useDispatch()
    
 const id = video._id

   const removePostHandler = () => {
    try {
        dispatch(removePost(id))
        dispatch(getAllvideo())
     
    } catch (error) {
        console.log(error)
    }
}

  if (!video) {
    return (
        <div className='text-xl text-center text-white py-10'>
            Загрузка...
        </div>
    )}
 
   return (
    <>
    <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
     
     <button className="w3-right w3-opacity" onClick={removePostHandler}>x</button>

     <h4>{video.username}</h4><br/>
     <hr className="w3-clear"/>
     <Link to={`/foto/${video._id}`}>
     <p>{video.title}</p>
   
    
<video width="665" height="440" controls>
  <source src={`http://localhost:5000/${video.videoUrl}`} type="video/mp4"/>

</video>

     <p>{video.text}</p>
</Link>
<span>{video.views}</span>
     <button  className="w3-button w3-theme-d1 w3-margin-bottom w3-grey"  >
       <i className="fa fa-thumbs-up"></i>  Like</button> 
     <button  className="w3-button w3-theme-d2 w3-margin-bottom w3-grey ">
       <i className="fa fa-comment"></i> <span>{video.comments?.length || 0} </span>  Comment</button> 
   </div> 
  
    
    </>
    );
  }
  
  export default Postitemvideo;
  
  