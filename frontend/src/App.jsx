import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Upload from './components/Upload'
import Signup from './components/Signup'
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useLocation } from 'react-router-dom'
import VerifyEmailPage from './components/VerifyEmail'
import Results from './components/Results'

function App() {

  const location = useLocation();
  const hideNavbarRoutes = ["/","/signup","/login"];
  
  return (
    <>
        {!hideNavbarRoutes.includes(location.pathname)  && <Navbar/>}
        <Routes>
          <Route path = "/" element = {<Signup/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element = {<Login/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/upload" element = {<Upload/>}/>
          <Route path = "/verify-email-address" element = {<VerifyEmailPage/>}/>
          <Route path = "/results" element = {<Results/>}/>
        </Routes>
    </>
  )
}

export default App;
