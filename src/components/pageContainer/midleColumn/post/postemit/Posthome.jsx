import React from "react";
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
//import {getMe, } from '../../../../../redux/features/auth/authSlice'
import {postHome } from '../../../../../redux/features/post/postSlice'
//import axios from '../../../../../axios'
import 'w3-css/w3.css';
import PostItemhome from "../PostItem/PostItemhome";


function Posthome () {

    const dispatch =useDispatch()

  const { posts , loading } = useSelector((state) => state.posts)
  const { user  } = useSelector((state) => state.auth)
  /*
const [posts, setPosts] = useState([])
const [loading, setLoading] = useState([])

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
*/
useEffect(() => {
    dispatch(postHome(user._id))
}, [dispatch, user._id])





if (loading) {
    return (
        <div className='text-xl text-center text-white py-10'>
                loading...
        </div>
    )}
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

