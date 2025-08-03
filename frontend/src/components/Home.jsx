import React from 'react'
import robotImg from '../assets/robot.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='home w-[37vw] mx-[200px] my-[100px] flex flex-col gap-[4vh] '>
        <p className='font-bold text-4xl'>ATS Resume Checker:</p>
        <p className='font-bold text-2xl'>Instantly Review, Score & Grade your Resume</p>
        <div className='flex gap-[10px]'>
            <div className="logo"><img src={robotImg} alt="#" className='w-[50px] h-[40px]'/></div>
            <p className='my-[5px] font-bold text-[20px]'>With AI Powered Resume Checker And Suggester</p>
        </div>
        <p className='text-[18px]'>Get hired quickly with an ATS-friendly resume that highlights your unique skill set. Our free ATS resume checker scans for over 30 common resume issues and delivers on-the-spot feedback and optimizations.</p>
        <button className='w-[20vw] h-[5vh] bg-green-500 hover:bg-green-600 text-white text-lg font-bold rounded-xl transition' onClick={()=>{navigate("/upload")}}>Check Your Score</button>
    </div>
    </>
  )
}

export default Home
