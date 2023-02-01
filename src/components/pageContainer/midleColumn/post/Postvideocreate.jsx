import React, { useState,}  from "react";
import { createVideo } from '../../../../redux/features/post/postSlice';
import { useNavigate } from 'react-router-dom'
import { useDispatch,  } from 'react-redux'
import 'w3-css/w3.css';


function Postvideocreate () {
  const [title, setTitle] = useState('test')
  const [text, setText] = useState('test test')
  const [video, setVideo] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = () => {
      try {
          const data = new FormData()
          data.append('title', title)
          data.append('text', text)
          data.append('video', video)
          dispatch(createVideo(data))
          navigate('/')
      } catch (error) {
          console.log(error)
      }
  }
 // const clearFormHandler = () => {
  //    setText('')
  //    setTitle('')
 // }
  return (
   <>
      <div className="w3-row-padding">

      <div className="w3-card w3-round w3-white">
     
      <div className="w3-container w3-padding-32" >
    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Postare</h3>
    <p>next project.</p>
    <form   onSubmit={(e) => e.preventDefault()} >

      <input
       className="w3-input w3-border" 
       onChange={(e) => setTitle(e.target.value)}
       type="text"
       placeholder="title" 
       value={title}
       />
      <input
       className="w3-input w3-section w3-border" 
       onChange={(e) => setVideo(e.target.files[0])}
       type="file" 
       placeholder="file"
        />

      <input
       className="w3-input w3-section w3-border" 
       onChange={(e) => setText(e.target.value)}
       type="text" 
       placeholder="Subiect"
       value={text}
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

export default Postvideocreate;
