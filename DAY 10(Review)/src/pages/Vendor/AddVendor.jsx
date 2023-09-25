import React from 'react'
import {useState} from "react"
import { addVendor } from '../../redux/userSlice';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Leftbar from '../../components/Leftbar';
import Topbar from '../../components/Topbar';
import img4 from '../../assets/Images/contactus/img4.jpg'


const AddVendor = () => {

    const [vendor,setVendor]=useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange =(e) =>{
        const {name,value}=e.target;
        setVendor({...vendor,[name]:value});
    }
    const AddVendor =(e) =>{
        e.preventDefault();
        dispatch(addVendor(vendor));
        setTimeout(() =>{
            navigate('/vendor')
        },1000);
    }
  return (
    <>
        
        <Leftbar />
        <Topbar title='Add Vendors' />
      


            <div className="pt-44 h-screen pl-[18%] w-full flex ">
                <img className=' h-[400px]' src={img4} alt=''/>
             <form action="" className='flex flex-col shadow-xl h-fit p-10' onSubmit={AddVendor}>
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#8a5eb3] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center'
                onChange={handleChange}
                type="text" name="vendorName"
                placeholder='Vendor Name'
                />
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72] hover:border-[#8a5eb3] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center'
                onChange={handleChange}
                type="text" name=" "
                placeholder='Company Name'
                />
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72] hover:border-[#8a5eb3] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center'
                onChange={handleChange}
                type="text" name="email"
                placeholder='Email'
                />
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72] hover:border-[#8a5eb3] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center'
                onChange={handleChange}
                type="text" name="service"
                placeholder='Service'
                />
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72] hover:bg-[#8a5eb3] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center' type="submit" value='Add Vendor' />

             </form>
            </div>
</>
  )
}

export default AddVendor