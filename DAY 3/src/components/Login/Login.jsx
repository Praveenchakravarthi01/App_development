import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import toast,{Toaster} from 'react-hot-toast';
import './Login.css'
const Login = () => {

    const [login,setLogin]=useState({
        email:"",
        password:"",
    });
    const [loginerror,setLoginerror]=useState("");
    const Validate = () =>{
        setLoginerror({});
        let error ={};
        if(login.email.trim() == ""){
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
    const gotoLogin=()=>{
        
    }  
      const handlSubmit =(e) =>{
        e.preventDefault();
        const error=Validate();
        if(!error.email && error.password) ;
    };

    // const handleLogin=()=>{
    //     toast.success("Login Successfully")
    // };

  return (
    <div className='login'>
      <Toaster/>
        <div className='loginContainer'>
            <h2>DELTA ENTERPRISE</h2>
            <h1>hello,Welcome back</h1>
            <form onSubmit={handlSubmit} className='logincontent'>
              <input type="text" id='email' placeholder='Enter email'>
              </input>
              <input type="text" id="password" placeholder='Enter Password'>
              </input>
              <button type="submit">Submit</button>
            </form>
            <div className='login-to-signup'>
                <text>Don't have a account?<u onClick={gotoLogin}>Sign up</u></text>

            </div>
        </div>
    </div>
  )
}

export default Login