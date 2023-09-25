import React from 'react'
import logo from '../assets/Images/Dasboard/logo.svg'
import img5 from '../assets/Images/home/img5.png'
import img6 from '../assets/Images/home/img6.png'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
    const navigate = useNavigate();
  return (
        <>
         {/* //navbar// */}
         <div className='border-[1px] fixed w-full z-10 bg-[#ffffff] border-solid border-[#e5e5e5] flex justify-between'>
                <figure className='mxy-5 '>
                    <img className='w-40 p-5 ' src={logo} alt='' />
                </figure>

                <div className='font-semibold font-poppins flex text-[#171717] gap-10 items-center'>
                    <span className='flex p-2 cursor-pointer'>Product</span>
                    <span className='flex p-2 cursor-pointer '>Solutions</span>
                    <span className='flex p-2 cursor-pointer'>Customers</span>
                    <span className='flex p-2 cursor-pointer '>Partners</span>
                    <span className='flex p-2 cursor-pointer'>Resources</span>
                    <span className='flex p-2 cursor-pointer '>Company</span>
                </div>
                <div className='m-1 flex items-center   '>
                    <span className='text-[#171717] p-5 font-semibold cursor-pointer'>Login</span>
                    <button className='flex w-2/3 rounded-lg px-8 py-3 m-3 font-poppins shadow-sm hover:bg-[#240642] text-[#ffffff] font-semibold bg-[#a13dff]'> Start trail</button>
                </div>
            </div>

            <div className=" h-[200px] w-full   flex justify-center">
                <p className='m-32 text-6xl font-semibold text-[#a13dff] flex '>About Us</p>
            </div>

            <div className="h-full w-full flex justify-center  my-10">
                <div className='h-full w-1/2 flex  flex-col justify-center '>
                    
                    <p className='text-4xl font-productsansb font-semibold text-[#332a5d] flex mx-32 '>Mission</p>
                    <p className='text-xl tracking-wide font-dmsans  flex my-7 leading-normal mx-32 text-[#6c6a72] '>Managing teams is challenging — now more than ever — so we simplify the work. Our platform makes it easy to schedule in line with demand, prepare accurate payroll, and communicate clearly. We streamline employee admin, so you and your team can focus on what matters.</p>

                    <p className='text-4xl font-productsansb font-semibold text-[#332a5d] flex mx-32 '>Vision</p>
                    <p className='text-xl tracking-wide font-dmsans flex my-7 leading-normal mx-32 text-[#6c6a72]'>Thriving workplaces in every community™ Delta helps businesses become more profitable, connected, and trusted by each team member — our goal is to make that happen for workplaces in every community, worldwide.</p>

                </div>

                <div className="h-full w-1/2 flex justify-center">

                    <img className=' w-[650px] object-contain' src={img5} alt='' />

                </div>
            </div>

                <div className='h-full w-full flex  flex-col justify-center items-center '>
                    <p className='text-4xl flex font-productsansb font-semibold text-[#332a5d] mx-32 '>Our offices</p>
                </div>
                    <p className='text-xl font-dmsans  my-7 leading-normal mx-32 text-[#6c6a72] justify-center flex'>We are stronger together across our global locations.We also have a number of Delta's in remote locations across the Tamil Nadu.Other Branches over Mumbai ,Banglore ,Hydrabad</p>
                <div className="h-full w-full flex justify-center  my-10">
                    <div className="h-full w-1/2 flex justify-center">
                        <img className='h-[300px] w-[650px] ' src={img6} alt='' />
                    </div>
                    <div className="h-full w-1/2 flex  flex-col justify-center">
                    <p className='text-4xl font-semibold text-[#332a5d] flex mx-32 '>Now an award-winning global business</p>
                    <p className='text-xl tracking-wide font-dmsans  flex my-7 leading-normal mx-32 text-[#6c6a72] '>Managing teams is challenging — now more than ever — so we simplify the work. Our platform makes it easy to schedule in line with demand, prepare accurate payroll, and communicate clearly. We streamline employee admin, so you and your team can focus on what matters.</p>

                    </div>
                </div>
          
            <div className=" h-[200px] w-full   flex justify-center">
                <button onClick={()=>navigate('/contactus')}className='mx-32 text-6xl font-semibold text-[#240642] flex '>Contact Us <i className="fa-solid fa-arrow-right  ml-3  "></i></button>
            </div>


        <Footer/>

        </>

  )
}

export default AboutUs