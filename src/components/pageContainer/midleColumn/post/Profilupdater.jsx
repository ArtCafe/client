import React, { useState,}  from "react";
import { useDispatch, useSelector  } from 'react-redux'
import {updateUser } from '../../../../redux/features/auth/authSlice'
import 'w3-css/w3.css';
//import { useEffect } from "react";
//import axios from '../../../../axios'

function Profileupdater () {

  const [meserie, setMeserie] = useState('')
  const [locatie, setLocatie] = useState('')
  const [image, setImage] = useState('')
  const [avatarPrev, setAvatarPrev] = useState(image);

  const dispatch = useDispatch()
  //const navigate = useNavigate()
 /*  
  useEffect(()=>{
    dispatch(getMe())
  },[dispatch])
*/
  const {user} = useSelector((state) => state.auth)

  const submitHandler = () => {
      try {
          const data = new FormData()
          data.append('locatie', locatie)
          data.append('meserie', meserie)
          data.append('image', image)
          data.append('userId', user._id)
          dispatch(updateUser(data))
        //  navigate('/')
     } catch (error) {
         console.log(error)
      }
  }
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatarPrev(Reader.result);

        setImage(Reader.result);
      }
    };
  };
/*
   const updateUser =  async () => {
        try {
            const { resdata } = await axios.put('/auth/updateuser',data)  
          
            return resdata
        } catch (error) {
            console.log(error)
        }
    }
*/


 // const clearFormHandler = () => {
   //   setMeserie('')
  //    setLocatie('')
  //}
  return (
   <>
      <div className="w3-row-padding">

      <div className="w3-card w3-round w3-white">
      <p className="w3-center">
        {<img src={avatarPrev}className="w3-circle w3-green" style={{height:106 , width:106}} alt="Avatar"/>
}</p>
         <hr/>
      <div className="w3-container w3-padding-32" >
    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Postare</h3>
    <p>next project.</p>
    <form   onSubmit={(e) => e.preventDefault()} >

      <input
       className="w3-input w3-border" 
       onChange={(e) => setMeserie(e.target.value)}
       type="text"
       placeholder="meserie" 
       
       />
      <input
       className="w3-input w3-section w3-border" 
       onChange={handleImageChange }
    
       type="file" 
       placeholder="avatar"
        />

      <input
       className="w3-input w3-section w3-border" 
       onChange={(e) => setLocatie(e.target.value)}
       type="text" 
       placeholder="locatie"
        />

    
      <button 
      className ="w3-button w3-black w3-section"
      onClick={submitHandler}
      type="submit">
        <i className="fa fa-paper-plane"></i> SEND 
      </button>
    </form>
  </div>
          </div>
          </div>
          
          
    </>
  );
}

export default Profileupdater;
