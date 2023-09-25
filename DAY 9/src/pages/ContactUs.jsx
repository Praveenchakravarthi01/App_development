import React from 'react'
import logo from '../assets/Images/Dasboard/logo.svg'
import img001 from '../assets/Images/contactus/img001.png'
import img02 from '../assets/Images/contactus/img02.jpg'
import img01 from '../assets/Images/contactus/img01.jpg'
import img03 from '../assets/Images/contactus/img03.jpg'
import {FaLocationDot} from 'react-icons/fa6'
import Footer from '../components/Footer'

const ContactUs = () => {
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
                <p className='m-32 text-6xl font-semibold text-[#a13dff] flex '>Contact Us</p>
            </div>

            <div className="h-[500px] w-full flex items-center">
                <div className="h-[500px] w-1/2 flex justify-center flex-col mx-20">
                    <p className='text-xl font-dmsans text-[#616163] p-3'> Your Feedbacks and Complaints about Our Platform</p>

                    <div className='flex mt-5'>
                    <input placeholder='First Name' className='w-[40%] m-3 text-[18 px] rounded p-3  border-2 outline-none border-[#6c6a72] hover:border-blue flex border-opacity-20' type='text' name='' id=''></input>
                    <input placeholder='Last Name' className='w-[40%] m-3 text-[18 px] rounded p-3  border-2 outline-none border-[#6c6a72] hover:border-blue flex border-opacity-20' type='text' name='' id=''></input>
                    </div>
                    <input placeholder='Email*' className='w-[40%] m-3 text-[18 px] rounded p-3  border-2 outline-none border-[#6c6a72] hover:border-blue flex border-opacity-20' type='text' name='' id=''></input>
                    <div className="flex">
                    <input placeholder='Description' className='w-[60%] h-18 m-3 text-[18 px] rounded p-3  border-2 outline-none border-[#6c6a72] hover:border-blue flex border-opacity-20' type='text' name='' id=''></input>
                    <button className='flex w-[25%] h-16 text-xl rounded  p-4 m-4 font-poppins justify-center hover:bg-[#cf9effe3] '>Submit <i className="fa-solid fa-arrow-right pt-[6px] ml-3"></i></button>

                    </div>
                    <p className='text-start font-productsansr p-5'>***We can help through your Suggestions***</p>
                </div>
                <div className="w-1/2 flex justify-center ">
                    <img src={img001} alt=''/>
                </div>
            </div>
            <div className="h-[550px] w-full flex justify-center items-center ">
                <div className=" mr-32">
                    <div className="h-[300px] w-[300px] flex justify-center flex-col hover:-translate-y-2 transition-all  delay-100 ease-in-out shadow-md rounded-lg">
                    <img className='object-contain h-[300px] rounded-xl  ' src={img02} alt=''/>
                    </div>
                    <p className='text-xl font-productsansr flex pt-2 justify-center '>Paranthaman L</p>
                    <p className='text-xl font-dmsans flex p-3 justify-center '>paranthamanl2004@gamil.com</p>
                </div>
                <div className="mr-32">
                    <div className="h-[300px] w-[300px] flex justify-center flex-col hover:-translate-y-2 transition-all  delay-100 ease-in-out shadow-md rounded-lg ">
                    <img className=' h-[300px] rounded-xl  ' src={img01} alt=''/>
                    </div>
                    <p className='text-xl font-productsansr flex pt-2 justify-center pr-5'>Praveen Chakravarthi S</p>
                    <p className='text-xl font-dmsans flex p-3 justify-center '>praveenchakravarthi@gamil.com</p>
                </div>
                <div className="">
                    <div className="h-[300px] w-[300px] flex justify-center flex-col hover:-translate-y-2 transition-all  delay-100 ease-in-out shadow-md rounded-lg ">
                    <img className='object-contain h-[300px] rounded-xl  ' src={img03} alt=''/>
                    </div>
                    <p className='text-xl font-productsansr flex pt-2 justify-center '>Mohan K</p>
                    <p className='text-xl font-dmsans flex p-3 justify-center '>mohank@gamil.com</p>
                </div>    
                    
            </div>
            <div className="h-[200px] w-full flex justify-center items-center flex-col">
                <FaLocationDot className='text-5xl text-[#a13dffbf] m-5'/>
                <p className='text-lg text-[#616163] tracking-wide py-1 flex font-dmsans '>103, C-Block, Boys Hostel</p>
                <p className='text-lg text-[#616163] tracking-wide py-1 flex font-dmsans '>Sri Krishna College Of Technology</p>
                <p className='text-lg text-[#616163] tracking-wide py-1 flex font-dmsans '>Kovaipudur, Coimbatore-64142</p>
            </div>
    <Footer/>
    </>

  )
}

export default ContactUs