import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import toast,{Toaster} from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { login1 } from '../../redux/userSlice';
// import "./Login.css"
const AdminLogin = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
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
        dispatch(login1({
            email:login.email
        }))      
          const error=Validate();
        if(!error.email && error.password) navigate("/dashboard") ;
    };
  return (
    <div className='login border-2 h-screen flex justify-center items-center '>
      <Toaster/>
        <div className='loginContainer '>
          {/* <div className='loginleft'>
          
          </div> */}
          <div className=''>
            
            <form onSubmit={handlSubmit} className='logincontent'>
                    <h1>DELTA ENTERPRISE</h1>
                    <h2>ADMIN LOG</h2>
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
            
          </div>
        </div>
    </div>
  )
}

export default AdminLogin