import React from "react";
import { useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import {
    createComment,
    getPostComments,
} from '../../../../../redux/features/comment/commentSlice'
import 'w3-css/w3.css';

function Comment({postId}) {

  const [comment, setComment] = useState('')
  const [username, setUsername] = useState('')

  const { user } = useSelector((state) => state.auth)
  const { comments } = useSelector((state) => state.comment)

  const dispatch = useDispatch()

 
  useEffect(() => {
   setUsername(user.username)
}, [user])


 console.log(postId);

  const handleSubmit = () => {
      try {
   
          dispatch(createComment({ postId, comment, username})) 
          setComment('')
      } catch (error) {
          console.log(error)
      }
  }

  const fetchComments = useCallback(async () => {
      try {
           dispatch(getPostComments(postId))
      } catch (error) {
          console.log(error)
      }
  }, [postId, dispatch])

  

  useEffect(() => {
      fetchComments()
  }, [fetchComments])



 console.log(comments);
  return (
  <>
   <ul className="w3-ul w3-hoverable w3-white">

     {
  
  comments  ? comments.map((comment, idx) => (
                
                  
                <li key={idx} className="w3-padding-16">
            <img  alt="age" className="w3-left w3-margin-right w3-green" style={{width:50}}/>
            <span>{comment.author}</span>
            <span className="w3-large">{comment.username}</span>
            <br/>
      
            <span>{comment.comment}</span>
  
          </li>
          
                
        
            )) : <h2>wrong</h2>

  }

          
             </ul>

     


          <input
           className="w3-input w3-border"
           type="text"
           value={comment}
           onChange={(e) => setComment(e.target.value)}
           placeholder="Name" />

          
     
     
    <button onClick={handleSubmit}
     className="w3-button w3-theme-d2 w3-margin-bottom w3-grey ">
      <i className="fa fa-comment"></i>  Sent</button> 
      
  
  </>
 
  );
}

export default Comment;
