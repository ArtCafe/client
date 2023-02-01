import React, { useState, useEffect } from 'react'
//import Navbar from '../components/navbar/navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, loginUser } from '../redux/features/auth/authSlice'
import 'w3-css/w3.css';

function Login () {
  const [username, setUsername] = useState('art')
  const [password, setPassword] = useState('1234567')

  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    
      if (isAuth) navigate('/')
  }, [status, isAuth, navigate])

  const handleSubmit = () => {
      try {
          dispatch(loginUser({ username, password }))
      } catch (error) {
          console.log(error)
      }
  }
  return (
  
         <> 
     
     <div className="w3-container w3-content" style={{ maxWidth: 1400, marginTop: 80, marginLeft: 250}}>
    <div className="w3-row">
    <div className="w3-col m7">

    
        <div className="w3-card w3-round w3-white">
        <div className="w3-row-padding">


<h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Login</h3>

       <form    onSubmit={(e) => e.preventDefault()}>
         <input
           className="w3-input w3-border"
           type="text"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           placeholder="Name" />

         <input
         className="w3-input w3-section w3-border" 
         type="text" 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="password" />

       <button 
       className="w3-button w3-black w3-section" 
       onClick={handleSubmit}
       type="submit">
         <i className="fa fa-paper-plane"></i> SEND 
       </button>
      </form>
    </div>
   <Link to="/register">Register</Link>
    </div>
    </div>
        </div>
      </div>
           
  
      
          
           </>
  );
}

export default Login ;
