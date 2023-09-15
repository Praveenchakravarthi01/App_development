import React from 'react'

import './Signup.css'
import toast,{Toaster} from 'react-hot-toast';

const Signup = () => {

  const handleSignup=()=>{
      toast.success("Signup Successfully")
  }
  return (
    <div className='signup'>
      <Toaster/>
        <div className='signupContainer'>
            <h1>WELCOME TO DELTA ENTERPRISE</h1>
            <h2>hi,Delta is at your Service</h2>
            <div className='signupcontent'>
              <input type="text" id='FirstName' placeholder='Enter FirstName'>
              </input>
              <input type="text" id='LastName' placeholder='Enter LastName'>
              </input>
              <input type="text" id='email' placeholder='Enter email'>
              </input>
              <input type="text" id="password" placeholder='Enter Password'>
              </input>
              <button type="submit" onClick={handleSignup}>Submit</button>
              
            </div>

            <div>
              Already have an account ?
               <span>Login</span>
               </div>
        </div>
    </div>
  )
}

export default Signup