import React from "react";
import { useDispatch } from 'react-redux'
import { Link, } from 'react-router-dom'
import { removePost } from '../../../../../redux/features/post/postSlice'
import 'w3-css/w3.css';

import { getAllPosts  } from "../../../../../redux/features/post/postSlice";



function PostItem ({ post}) {

  const dispatch = useDispatch()
    
 const id = post._id

   const removePostHandler = () => {
    try {
        dispatch(removePost(id))
        dispatch(getAllPosts())
     
    } catch (error) {
        console.log(error)
    }
}

  if (!post) {
    return (
        <div className='text-xl text-center text-white py-10'>
            Загрузка...
        </div>
    )}
   
   return (
    <>
    <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
     
     <button className="w3-right w3-opacity" onClick={removePostHandler}>x</button>

     <h4>{post.username}</h4><br/>
     <hr className="w3-clear"/>
     <Link to={`/foto/${post._id}`}>
     <p>{post.title}</p>
     <img alt={post.imgUrl} src={`http://localhost:5000/${post.imgUrl}`} style={{width:655}} className="w3-margin-bottom w3-green"/>
     
    
     <p>{post.text}</p>
</Link>
<span>{post.views}</span>
     <button  className="w3-button w3-theme-d1 w3-margin-bottom w3-grey"  >
       <i className="fa fa-thumbs-up"></i>  Like</button> 
     <button  className="w3-button w3-theme-d2 w3-margin-bottom w3-grey ">
       <i className="fa fa-comment"></i> <span>{post.comments?.length || 0} </span>  Comment</button> 
   </div> 
  
    
    </>
    );
  }
  
  export default PostItem;
  
  