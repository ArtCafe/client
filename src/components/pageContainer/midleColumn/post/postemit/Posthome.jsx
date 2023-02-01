import React from "react";
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import {getMe, } from '../../../../../redux/features/auth/authSlice'
import axios from '../../../../../axios'
import 'w3-css/w3.css';
import PostItemhome from "../PostItem/PostItemhome";


function Posthome () {
  
const [posts, setPosts] = useState([])
const [loading, setLoading] = useState([])
const dispatch = useDispatch()
useEffect(() => {
dispatch(getMe())
}, [dispatch])

const fetchMyPosts = async () => {
    try {
          setLoading(true)
        const { data } = await axios.get('/posts/user/me')
        setPosts(data)

        setLoading(false)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    fetchMyPosts()
}, [])
console.log(posts);

if (!posts) {
    return (
        <div className='text-xl text-center text-white py-10'>
                nus postari...
        </div>
    )}
    
return (

    <div className='w-1/2 mx-auto py-10 flex flex-col gap-10'>
        {posts?.map((post, idx) => (
            <PostItemhome  loading={loading} post={post} key={idx} />
        ))}
    </div>
)
}
export default Posthome;


/* {
  
  myposts  ? myposts.map((post, idx) => (
                <PostItemhome post={post} key={idx} />
            )) : <h2>wrong</h2>

  }
             
       {
  myposts ? myposts.map((item, index) => (
                <PostItemhome post={item} key={index} />
            )) : <h2>wrong</h2>
            
            } 
 
 */
   
