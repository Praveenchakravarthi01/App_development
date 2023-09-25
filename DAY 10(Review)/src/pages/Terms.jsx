import React from 'react'
import logo from '../assets/Images/Dasboard/logo.svg'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Terms = () => {
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
            
            {/* //1st div/// */}
            
            <div className=" h-[200px] w-full   flex justify-center">
                <p className='m-32 text-6xl font-semibold text-[#a13dff] flex '>Terms and conditions</p>
            </div>

            <div className="h-full w-full flex justify-center  flex-col my-10  ">

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>1. Acceptance of Terms</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> By accessing or using our Vendor Management System ("VMS"), you acknowledge and agree to abide by these terms and conditions. If you do not agree with these terms, please do not use our services.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 '>2. Account Creation and Responsibility</p>  
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> When you create an account, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 my-10]'>3. Privacy and Data</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information. By using our VMS, you consent to our data practices as described in the Privacy Policy.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 my-10]'>4. Intellectual Property</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>All content, logos, trademarks, and intellectual property on our website are either owned by us or licensed to us. You may not use, reproduce, modify, or distribute our intellectual property without our prior written consent.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 my-10]'>5. Limitation of Liability</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> We provide our VMS "as is," and we make no warranties, express or implied, regarding its accuracy, reliability, or suitability for your needs. We shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our services.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 my-10]'>6. Changes and Updates</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>We reserve the right to modify these terms and conditions at any time. Any changes will be posted on our website, and it is your responsibility to review them periodically. Continued use of our VMS after any modifications constitutes your acceptance of the revised terms.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 my-10]'>7. Termination</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '> We may terminate or suspend your account and access to our VMS at our discretion, without notice, for any reason, including a violation of these terms.</p>

                <p className='text-xl font-semibold text-[#240642] flex mx-32 my-10]'>8. Governing Law and Jurisdiction</p>
                <p className='text-lg tracking-wide font-dmsans flex mx-32 my-7 leading-loose '>These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].</p>

            </div>

            {/* //contact us// */}

            <div className=" h-[200px] w-full   flex justify-center">
                <button onClick={()=>navigate('/aboutus')}className='mx-32 text-6xl font-semibold text-[#240642] flex '>About Us <i className="fa-solid fa-arrow-right  ml-3  "></i></button>
            </div>
            
            <Footer/>


            </>
  )
}

export default Terms