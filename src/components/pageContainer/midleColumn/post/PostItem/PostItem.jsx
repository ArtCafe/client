import React from "react";
import { useDispatch } from 'react-redux'
import { Link, } from 'react-router-dom'
import { removePost } from '../../../../../redux/features/post/postSlice'
import CommentModal from '../../modal/CommenModal'

import { getAllPosts , liked } from "../../../../../redux/features/post/postSlice";
import 'w3-css/w3.css';


function PostItem ({ post, loading}) { 
   const dispatch = useDispatch()
 if (!post) {
    return (
        <div className='text-xl text-center text-white py-10'>
            Загрузка...
        </div>
    )}
   

    
 const id = post._id

   const removePostHandler = () => {
    try {
        dispatch(removePost(id))
        dispatch(getAllPosts())
     
    } catch (error) {
        console.log(error)
    }
}
const likedHandler = () => {
  try {
      dispatch(liked(id))
     
   
  } catch (error) {
      console.log(error)
  }
} 
 
if (loading) {
  return(
  <h2>.....</h2>
  )
  }
   return (
    <>
    <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
     
     <button className="w3-right w3-opacity" onClick={removePostHandler}>x</button>

     <h4>{post.username}</h4><br/>
     <hr className="w3-clear"/>
     <Link to={`/foto/${post._id}`}>
     <p>{post.title}</p>
     <img alt={post.imgUrl} src={post.image.url} style={{width:655}} className="w3-margin-bottom w3-green"/>
     
    
     <p>{post.text}</p>
</Link>
<span>vazut{post.views}</span>
     <span >
       <i className="fa fa-thumbs-up"></i>  Laicuri{post.likes}</span> 
      <span  >
       <i className="fa fa-comment"></i> <span>comenturi{post.comments?.length || 0} </span> 
  <button onClick={likedHandler}>like</button>
 </span> 

 <CommentModal 
   postId={post._id} />
  
   
   </div> 

   
    
    </>
    );
  }
  
  export default PostItem;
  
  