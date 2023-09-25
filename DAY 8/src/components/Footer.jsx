import React from 'react'
import logo13 from '../assets/Images/home/logo13.svg'
import logo14 from '../assets/Images/home/logo14.svg'
import logo15 from '../assets/Images/home/logo15.svg'
import logo16 from '../assets/Images/home/logo16.svg'
import logo17 from '../assets/Images/home/logo17.svg'
import img2 from '../assets/Images/home/img2.svg'
import img3 from '../assets/Images/home/img3.svg'
import img4 from '../assets/Images/home/img4.svg'
import { useNavigate } from 'react-router-dom'


const Footer = () => {

    const navigate = useNavigate();

  return (
    <div className="h-full w-full flex  flex-col bg-[#240642]">
                
    <div className="h-[180px] w-full flex  items-center">
        <p className='flex mx-24  text-[#ffffff] text-2xl font-dmsans '>Stay up to date with everything Delta  </p>
        <img className='p-10 flex' src={logo13} alt=''/>
        <input placeholder='Email*' className='w-[20%]  text-white text-[17 px] rounded p-5 bg-[#240642] border-[#66517b] border-2 outline-none' type='text' name='' id=''></input>
        <button className='flex w-[15%] text-white text-2xl h-16 rounded  p-4 m-4 font-poppins shadow-sm bg-[#a13dff] justify-center hover:bg-white  hover:text-[#240642]'>Subscribe <i className="fa-solid fa-arrow-right pt-[6px] ml-3"></i></button>
    </div>
            <div className='  border-[3px] border-[#503868] mx-24'></div>


    <div className="ml-24 m-10 h-full max-w-full flex">
            <div className="h-full w-[17%] font-dmsans tracking-wide justify-center items-center mr-8 ">
                <p className='text-white font-extrabold pb-3 hover:text-[#786091]'>Product</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Trust Management Platform</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Access Management</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Risk Management</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Trust Reports</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Questionnaires</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Integrations</p>
            </div>
            <div className="h-full w-[10%] font-dmsans tracking-wide justify-center items-center mr-8 ">
                <p className='text-white font-extrabold pb-3 hover:text-[#786091]'>Frameworks</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>SOC 2</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>ISO 27001</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>HIPAA</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>GDPR</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>CCPA/USDP</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>All Frameworks</p>

            </div>
            <div className="h-full w-[9%] font-dmsans tracking-wide justify-center items-center mr-8">
                <p className='text-white font-extrabold pb-3 hover:text-[#786091]'>Solutions</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Startup</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Hyper Growth</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Enterprise</p>
            </div>
            <div className="h-full w-[12%] font-dmsans tracking-wide justify-center items-center mr-8">
                <p className='text-white font-extrabold pb-3 hover:text-[#786091]'>Customers</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Customer Stories</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Release Notes</p>

            </div>
            <div className="h-full w-[11%] font-dmsans tracking-normal justify-center items-center mr-8">
                <p className='text-white font-extrabold pb-3 hover:text-[#786091]'>Partners</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Become a Partner</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Partner Network</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Find a Partner</p>

            </div>
            <div className="h-full w-[13%] font-dmsans tracking-wide justify-center items-center mr-8 ">
                <p className='text-white font-extrabold pb-3 hover:text-[#786091]'>Resources</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>All Resources</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Help Center</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Delta Learning</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Community</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Delta for Developers</p>

            </div>
            <div className="h-full w-[12%] font-dmsans tracking-wide justify-center items-center mr-8 ">
                <p className='text-white font-extrabold pb-3 hover:text-[#786091]'>Company</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>About</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Careers</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Press</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Security</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>System Status</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Support Status</p>
                <p className='text-white font-medium py-2 hover:text-[#b88fe3] '>Trust Report</p>

            </div>
    </div>
            <div className='  border-[3px] border-[#503868] mx-24'></div>


    <div className="ml-24 m-10 h-44 max-w-full flex ">
        <div className="h-[45px] w-1/2 flex flex-col">
            <div className='flex'>
            <a href='https://www.linkedin.com/in/praveen-chakravarthi-6b3b571b1/'>
                <img className="px-2" src={logo14} alt=''/>
            </a>

            <a href='https://www.facebook.com/praveen.chakravarthi.5249'>
                <img className="px-2" src={logo15} alt=''/>
            </a>

            <a href='https://twitter.com/PC_1504?t=J99nWGvDIo0JSggwXIbNjg&s=09'>
                <img className="px-2" src={logo16} alt=''/>
            </a>

            <a href='https://www.instagram.com/s_praveen_18/'>      
                <img className="px-2" src={logo17} alt=''/>
            </a>

            </div>
            <div className='w-[700px] flex my-5 mr-24 '>
            <p onClick={()=>navigate('/terms')} className='text-white font-medium py-2 hover:text-[#b88fe3] mr-5 cursor-pointer'>Terms </p>
            <p onClick={()=>navigate('/privacy')} className='text-white font-medium py-2 hover:text-[#b88fe3] mr-5 cursor-pointer'>Privacy</p>
            <p onClick={()=>navigate('/aboutus')}className='text-white font-medium py-2 hover:text-[#b88fe3] mr-5 cursor-pointer'>About Us</p>
            <p onClick={()=>navigate('/faq')}className='text-white font-medium py-2 hover:text-[#b88fe3] mr-5 cursor-pointer'>FAQ's</p>
            <p className='text-white font-medium py-2 hover:text-[#b88fe3] mr-20 cursor-pointer'>Do Not Sell or Share My Personal Information</p>
            </div>
            <p className='text-xs text-[#b88fe3]'>© 2023 Delta. All rights reserved</p>
        </div>
        <div className=" h-full w-1/2 flex justify-center py-5 ">
        <img className="h-[100px] px-5  " src={img2} alt=''/>
        <img className="h-[100px] px-5 " src={img3} alt=''/>
        <img className="h-[100px] px-5 " src={img4} alt=''/>
        </div>
    </div>
</div>
  )
}

export default Footer