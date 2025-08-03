import { SignUp } from '@clerk/clerk-react'
import React from 'react'

function Signup() {
  return (
    <div className='mx-[10vw] my-[10vh]'>
      <SignUp routing='path' path = "/signup" forceRedirectUrl="/login"/>
    </div>
  )
}

export default Signup
