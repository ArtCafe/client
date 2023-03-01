import React from "react";
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removePost, liked } from '../../../../../redux/features/post/postSlice'
import pasta from "../../../../../img/pasta.jpg";
import 'w3-css/w3.css';


function PostItemhome ({loading, post}) {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  

  
if (!post) {
  return (
      <div className='text-xl text-center text-white py-10'>
        
      </div>
  )
}

    
 const id = post._id

   const removePostHandler = () => {
    try {
        dispatch(removePost(id))
        navigate('/')
     
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
      <Link to={'/'}>home</Link>
     <button className="w3-right w3-opacity" onClick={removePostHandler}>x</button>

     <h4>{post.username}</h4><br/>
     <hr className="w3-clear"/>
     <Link to={`${post._id}`}>
     <p>{post.title}</p>
     <img alt={post.title} src={ post.image.url } style={{width:655}} className="w3-margin-bottom w3-green"/>
  
   
     <p>{post.text}</p>
</Link>
<p>au vazut<span>{post.views}</span></p>
<p>laicuri<span>{post.likes}</span></p>
<button onClick={likedHandler}>like</button>
    
       <i className="fa fa-comment"><span>comentarii{post.comments?.length || 0} </span> </i> 
    </div>
    </>
    );}
  
  
  export default PostItemhome;
  