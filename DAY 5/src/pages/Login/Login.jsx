import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import toast,{Toaster} from 'react-hot-toast';
import './Login.css'
const Login = () => {
const navigate=useNavigate();
    const [login,setLogin]=useState({
        email:"",
        password:"",
    });
    const [loginerror,setLoginerror]=useState("");
    const Validate = () =>{
        setLoginerror({});
        let error ={};
        if(login.email.trim() === ""){
            error.email =true;
            toast.error("Enter Email");
        }
        if(login.password.trim() === ""){
            error.password =true;
            toast.error("Enter Password");
        } else if(login.password.length < 6 || login.password.length >15){
            toast.error("Password length must be 6 to 15");
            error.password=true;
        }
        setLoginerror(error);
        console.log(error);
        return error;
    };
    const handleChange=(e) =>{
        const{name,value}=e.target;
        setLogin({...login,[name]:value});
    };

      const handlSubmit =(e) =>{
        e.preventDefault();
        const error=Validate();
        if(!(error.email && error.password)) navigate("/home") ;
    };

    // const handleLogin=()=>{
    //     toast.success("Login Successfully")
    // };

  return (
    <div className='login flex w-screen h-screen justify-center items-center bg-loginbackground'>
      <Toaster/>
        <div className='loginContainer'>
          {/* <div className='loginleft'>
          
          </div> */}
          <div className='login-right'>
            
            <form onSubmit={handlSubmit} className='logincontent'>
                    <h1>hello,Welcome back</h1>
                    <h2>DELTA ENTERPRISE</h2>
               <input
                placeholder="Email"
                type="email"
                className="login-email"
                id="email"
                onChange={handleChange}
                value={login.email}
                name="email"
                required={true}
             ></input>

              <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              value={login.password}
              className="login-password"
            ></input>
              <button type="submit" onClick={handlSubmit}>Submit</button>
            </form>
            <div className='login-to-signup'>
                <text>Don't have a account?<u onClick={()=>navigate("/signup")}>Sign up</u></text>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Login