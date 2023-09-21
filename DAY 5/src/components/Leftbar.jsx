import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../redux/userSlice';
import profile from '../assets/Images/Dasboard/h1.jpg'
import logo from '../assets/Images/Dasboard/logo.svg';
import "../App.css"
function Leftbar() {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const dashboardHandler = () => {
        navigate('/Dashboard')
    }
    const orgHandler = () => {
        navigate('/Organizations')
    }
    const vendorsHandler = () => {
        navigate('/Vendors')
    }
    const contractsHandler = () => {
        navigate('/Vendors')
    }

    const logoutHandler = () => {
        dispatch(logout())
        navigate('/')
    }
    return (
        <>

            <div className='fixed   h-full bg-backgroundwhite'>

                <div className='border-b-[1px] border-dashed border-[#e0e0de] p-5 flex justify-between'>


                    <figure className=''>
                        <img className='w-20 ' src={logo} alt="" />
                    </figure>
                    <span className='text-textgray'>
                        <i class="fa-solid fa-gear"></i>
                    </span>
                </div>

                <div className=' border-b-[1px] border-dashed border-[#e0e0de] flex justify-between items-center gap-5 p-5 '>
                    <input placeholder='Search ' className='rounded-lg p-2.5 ' type="text" name="" id="" />
                    <span className='bg-[#f0e8d9] px-3 py-2 text-[#ad957e] rounded-lg'><i class="fa-solid fa-plus"></i></span>
                </div>

                <div className=' h-[30em] overflow-y-scroll'>
                    <div onClick={()=>navigate('/dashboard')} className='  border-dashed border-[#e0e0de] flex gap-3 items-center p-5 '>
                        <span className=' text-xl text-[#ad957e] rounded-lg'><i class="fa-solid fa-chart-pie"></i></span>
                        <span className='font-bold text-[#403d38]'>Dashboards</span>
                    </div>
                    <div onClick={()=>navigate('/organization')} className='  border-dashed border-[#e0e0de] flex gap-3 items-center p-5 '>
                        <span className=' text-xl text-[#ad957e] rounded-lg'><i class="fa-solid fa-layer-group"></i></span>
                        <span className='font-bold text-[#403d38]'>Organizations</span>
                    </div>
                    <div  onClick={()=>navigate('/vendor')}className='  border-dashed border-[#e0e0de] flex gap-3 items-center p-5 '>
                        <span className=' text-xl text-[#ad957e] rounded-lg'><i class="fa-solid fa-rocket"></i></span>
                        <span className='font-bold text-[#403d38]'>Vendors</span>
                    </div>
                    <div className='  border-dashed border-[#e0e0de] flex gap-3 items-center p-5 '>
                        <span className=' text-xl text-[#ad957e] rounded-lg'><i class="fa-solid fa-circle-check"></i></span>
                        <span className='font-bold text-[#403d38]'>Contracts</span>
                    </div>
                    <div className='  border-dashed border-[#e0e0de] flex gap-3 items-center p-5 '>
                        <span className=' text-xl text-[#ad957e] rounded-lg'><i class="fa-solid fa-rectangle-list"></i></span>
                        <span className='font-bold text-[#403d38]'>Complaints</span>
                    </div>
                    <div className='  border-dashed border-[#e0e0de] flex gap-3 items-center p-5 '>
                        <span className=' text-xl text-[#ad957e] rounded-lg'><i class="fa-solid fa-circle-info"></i></span>
                        <span className='font-bold text-[#403d38]'>Support center</span>
                    </div>
                    <div className='  border-dashed border-[#e0e0de] flex gap-3 items-center p-5 '>
                        <span className=' text-xl text-[#ad957e] rounded-lg'><i class="fa-solid fa-magnifying-glass-chart"></i></span>
                        <span className='font-bold text-[#403d38]'>Marketing</span>
                    </div>
                    <div className='  border-dashed border-[#e0e0de] flex gap-3 items-center p-5 '>
                        <span className=' text-xl text-[#ad957e] rounded-lg'><i class="fa-solid fa-message"></i></span>
                        <span className='font-bold text-[#403d38]'>Chat</span>
                    </div>
                </div>
                <div className='p-5 flex items-center  justify-between gap-5'>
                    <div className='flex gap-5'>
                        <figure>
                            <img className='w-12 rounded-xl' src={profile} alt="" />
                        </figure>
                        <div className='flex  flex-col'>
                            <p className='  font-bold text-[#403d38]'>{user?.email}</p>
                            <p className='text-lightgray'>Admin</p>
                        </div>
                    </div>
                    <div onClick={() => navigate("/adminlogin")} className=''>
                        <span className='text-darkgray'><i class="fa-solid fa-right-from-bracket"></i></span>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Leftbar