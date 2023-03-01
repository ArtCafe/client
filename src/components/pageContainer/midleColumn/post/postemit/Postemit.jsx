import React from "react";
import { useEffect } from 'react'
import  PostItem  from '../PostItem/PostItem'
import 'w3-css/w3.css';
import { useDispatch , useSelector} from "react-redux";
import { getAllPosts  } from "../../../../../redux/features/post/postSlice";



function Postemit () {
  const dispatch = useDispatch();

    const { posts, loading} = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getAllPosts())
       
    }, [dispatch ])


if (loading) {
  return (
      <div className='text-xl text-center text-white py-10'>
          Загрузка...
      </div>
  )}
    return(
    <>
   

   {posts?.map((post, idx) => (
                <PostItem post={post} key={idx} loading={loading} />
            ))}

 
        

  </>
  );
}

export default Postemit;
