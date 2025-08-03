import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function Login() {
  return (
    <div className='mx-[10vw] my-[10vh]'>
      <SignIn routing='path' path = '/login' forceRedirectUrl="/home"/>
    </div>
  )
}

export default Login
