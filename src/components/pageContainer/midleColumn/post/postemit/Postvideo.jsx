import React from "react";
import { useEffect } from 'react'
import { useDispatch , useSelector} from "react-redux";
import { getAllvideo  } from "../../../../../redux/features/post/postSlice";
import Postitemvideo from "../PostItem/Postitemvideo";
import 'w3-css/w3.css';


function Postvideo () {
  const dispatch = useDispatch();

    const { videos, loading} = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getAllvideo())
       
    }, [dispatch,  ])


if (loading) {
  return (
      <div className='text-xl text-center text-white py-10'>
          Загрузка...
      </div>
  )}
    return(
    <>
   

   {videos?.map((video, idx) => (
                <Postitemvideo video={video} key={idx} />
            ))}

 
        

  </>
  );
}

export default Postvideo;
