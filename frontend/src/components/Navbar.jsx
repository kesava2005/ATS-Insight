import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { SignOutButton ,SignInButton} from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';
const Navbar = (props) => {
    const {isSignedIn,user} = useUser();
  return (
    <div className='nav px-5 py-4 flex justify-evenly font-bold text-[20px] bg-indigo-800'>
        <h2 className=' '>Check Your ATS Score For Free And Get Valid Suggestions</h2>
      <ul className='flex  gap-[50px]'>
        <li className='hover:text-amber-100'><NavLink to="#">History</NavLink></li>
        <li className='hover:text-amber-100'><NavLink to="#">Contact</NavLink></li>
        {!isSignedIn?<SignInButton className='bg-indigo-400 w-[90px] text-white rounded-xl p-[3px] cursor-pointer hover:bg-indigo-200 hover:text-gray-500'signinfallbackredirecturl = "/login">Login</SignInButton>
         : <SignOutButton className='bg-indigo-400 w-[90px] text-white rounded-xl p-[3px] cursor-pointer hover:bg-indigo-200 hover:text-gray-500' redirectUrl='/signup'>Sign-out</SignOutButton> }
             
         </ul>
    </div>
  )
}

export default Navbar
