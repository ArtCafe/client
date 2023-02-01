import React, {useState, useEffect} from "react";
//import Navbar from "../components/navbar/navbar";
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, checkIsAuth } from '../redux/features/auth/authSlice'
import { Link , useNavigate} from "react-router-dom";
import 'w3-css/w3.css';


function Register () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
     
      if (isAuth) navigate('/')
  }, [status, isAuth, navigate])

  const handleSubmit = () => {
      try {
          dispatch(registerUser({ email, username, password }))
          setPassword('')
          setUsername('')
          setEmail('')
      } catch (error) {
          console.log(error)
      }
  }
  console.log(username, password, email)
  return (
  
         <> 
          
     <div className="w3-container w3-content" style={{ maxWidth: 1400, marginTop: 80, marginLeft: 250}}>
    <div className="w3-row">
    <div className="w3-col m7">

    
        <div className="w3-card w3-round w3-white">
        <div className="w3-row-padding">


<h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Registare</h3>
<form    onSubmit={(e) => e.preventDefault()} >
<input
 className="w3-input w3-section w3-border"
 
  type="file" 
  placeholder="avatar"
   />

<input
 className="w3-input w3-border"
 value={username}
 onChange={(e) => setUsername(e.target.value)}
  type="text"
   placeholder="Name" 
   
   />
<input
 className="w3-input w3-section w3-border" 
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 type="text" 
 placeholder="email" 
 
 />
<input 
className="w3-input w3-section w3-border" 
value={password}
 onChange={(e) => setPassword(e.target.value)}
type="text"
 placeholder="password" 
 
 />
<button className="w3-button w3-black w3-section"
 type='submit'
 onClick={handleSubmit}
>
  <i className="fa fa-paper-plane"></i> SEND 
</button>
</form>

</div>
<Link to="/login">Login</Link>
    </div>
    </div>
        </div>
      </div>
           
  
      
          
           </>
  );
}

export default Register ;
