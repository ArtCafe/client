import React, {useEffect, } from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Postme from "./pages/Postme";
import Login from "./pages/Login";
import Postid from "./pages/Postid";
import Register from "./pages/Register"
import Postcreate from "./pages/Postcreate"
import Fotopostare from "./pages/Fotopostare";
import Profileupdate from "./pages/Profileupdate";
import Videopost from "./pages/Videopost"
import Videocreate from "./pages/Videocreate";
//import { useNavigate } from 'react-router-dom'
import {  useSelector, useDispatch } from 'react-redux'
import { checkIsAuth, getMe} from './redux/features/auth/authSlice'
import 'w3-css/w3.css';
import Navbar from "./components/navbar/navbar";


function App() {
    const dispatch = useDispatch()
    // const navigate = useNavigate()
 
     useEffect(() => {
         dispatch(getMe())
     }, [dispatch])
 
     const { status } = useSelector((state) => state.auth)
     const isAuth = useSelector(checkIsAuth)
     
 
 
     useEffect(() => {
        
      //   if (!isAuth) navigate('/login')
     }, [status, isAuth, ])
   
  return (
    <>
      
      <Routes>
     

        <Route>
            <Route path="/" element={<Navbar /> } >
            <Route index element={<Home />} />
            <Route path="/:id" element={isAuth ? <Postme /> : <Register/>} />
            <Route path="foto" element={isAuth ? <Fotopostare/> : <Login />} />
            <Route path="/foto/:id" element={isAuth ? <Postid/> : <Register/>} />
            <Route path="register" element={  <Register /> } />
            <Route path="login" element={<Login />} />
            <Route path="postcreate" element={isAuth ? <Postcreate /> : <Login /> } />
            <Route path="profile" element={isAuth ? <Profileupdate /> : <Register/>} />
            <Route path="video" element={isAuth ? <Videopost/> : <Login/>} />
            <Route path="videocreate" element={isAuth ? <Videocreate /> : <Register/>} />
            </Route>
        </Route>
      </Routes>
  
  
     </>
  );
}

export default App;
