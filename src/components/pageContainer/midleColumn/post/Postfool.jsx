import React from "react";
import { useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import {  useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import axios from '../../../../axios'
import 'w3-css/w3.css';
import CommentModal from "../modal/CommenModal";




function Postfool () {

    const { comments } = useSelector((state) => state.comment)
  const [post, setPost] = useState(null)
  
  const params = useParams()
  

  const postId = params.id

  const fetchPost = useCallback(async () => {
      const { data } = await axios.get(`/posts/${params.id}`)
      setPost(data)
  }, [params.id])

  useEffect(() => {
      fetchPost()
  }, [fetchPost])

 console.log("comments", post);
  if (!post) {
      return (
          <div className='text-xl text-center text-white py-10'>
              Загрузка...
          </div>
      )
  }
 
  return (
 
  <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
    <img alt="Avatar" className="w3-left w3-circle w3-margin-right w3-green" style={{width:60}}/>
    <span className="w3-right w3-opacity">{post.createdAt}</span>
    <h4>{post.username}</h4><br/>
    <h4>{post.title}</h4><br/>
    <hr className="w3-clear"/>
    <p>Have you seen this?</p>
    <img src ={`http://localhost:5000/${post.imgUrl}`} alt="foto" style={{width:655}} className="w3-margin-bottom w3-green" />
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
       
        <p>{post.comments}</p>
        <ul className="w3-ul w3-hoverable w3-white">

{

comments  ? comments.map((comment, idx) => (
           
             
           <li key={idx} className="w3-padding-16">
       <img  alt="age" className="w3-left w3-margin-right w3-green" style={{width:50}}/>
     
       <span className="w3-large">{comment.username}</span>
       <br/>
 
       <span>{comment.comment}</span>

     </li>
     
           
   
       )) : <h2>wrong</h2>

}

     
        </ul>

   <CommentModal 
  postId={postId}
   />

  </div> 

  );
}


export default Postfool;
/*  <button 
     className="w3-button w3-theme-d2 w3-margin-bottom w3-grey ">
      <i className="fa fa-comment"></i>  Comment</button> 


      {comments?.map((cmt) => (
                        <Comment key={cmt._id} cmt={cmt} />
                    ))}
  </div> */


  /* 
    <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
    <img  alt="Avatar" className="w3-left w3-circle w3-margin-right w3-green" style={{width:60}}/>
    <span className="w3-right w3-opacity">32 min</span>
    <h4>Angie Jane{post.title}</h4><br/>
    <hr className="w3-clear"/>
    <p>Have you seen this?</p>
    <img alt="foto"  className="w3-margin-bottom w3-green"/>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
  
  */