import React, { useState,}  from "react";
import { useDispatch, useSelector  } from 'react-redux'
import {getMe, updateUser} from '../../../../redux/features/auth/authSlice'
import 'w3-css/w3.css';
import { useEffect } from "react";


function Profileupdater () {
 

  const [meserie, setMeserie] = useState('')
  const [locatie, setLocatie] = useState('')
  const [avatar, setAvatar] = useState('')
 // const [avatarPrev, setAvatarPrev] = useState(avatar);

  const dispatch = useDispatch()
 // const navigate = useNavigate()
    
  useEffect(()=>{
    dispatch(getMe())
  },[dispatch])

  const {user} = useSelector((state) => state.auth)
  console.log(user);
  const submitHandler = () => {
      try {
          const updatedUser = new FormData()
          updatedUser.append('locatie', locatie)
          updatedUser.append('meserie', meserie)
          updatedUser.append('avatar', avatar)
          dispatch(updateUser(updatedUser))
         // navigate('/')
      } catch (error) {
          console.log(error)
      }
  }
  /*
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatarPrev(Reader.result);

        setAvatar(Reader.result);
      }
    };
  };
*/
  console.log(user);

 // const clearFormHandler = () => {
   //   setMeserie('')
  //    setLocatie('')
  //}
  return (
   <>
      <div className="w3-row-padding">

      <div className="w3-card w3-round w3-white">
      <p className="w3-center">
        {/*<img src={avatarPrev}className="w3-circle w3-green" style={{height:106 , width:106}} alt="Avatar"/>
        */}</p>
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
       //onChange={handleImageChange }
       onChange={(e) => setAvatar(e.target.files[0])}
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
