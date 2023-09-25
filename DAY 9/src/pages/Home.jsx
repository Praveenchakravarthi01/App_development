import React from 'react'
import logo from '../assets/Images/Dasboard/logo.svg'
import logo2 from '../assets/Images/home/logo2.svg'
import logo3 from '../assets/Images/home/logo3.png'
import logo4 from '../assets/Images/home/logo4.svg'
import logo5 from '../assets/Images/home/logo5.svg'
import logo6 from '../assets/Images/home/logo6.svg'
import logo7 from '../assets/Images/home/logo7.svg'
import logo8 from '../assets/Images/home/logo8.svg'
import logo9 from '../assets/Images/home/logo9.svg'
import logo10 from '../assets/Images/home/logo10.svg'
import logo11 from '../assets/Images/home/logo11.svg'
import logo12 from '../assets/Images/home/logo12.svg'
import logo13 from '../assets/Images/home/logo13.svg'
import logo14 from '../assets/Images/home/logo14.svg'
import logo15 from '../assets/Images/home/logo15.svg'
import logo16 from '../assets/Images/home/logo16.svg'
import logo17 from '../assets/Images/home/logo17.svg'
import img1 from '../assets/Images/home/img1.png'
import img2 from '../assets/Images/home/img2.svg'
import img3 from '../assets/Images/home/img3.svg'
import img4 from '../assets/Images/home/img4.svg'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* //navbar// */}
            <div className='border-[1px] fixed w-full z-10 bg-[#ffffff] border-solid border-[#e5e5e5] flex justify-between'>
                <figure className='mxy-5 '>
                    <img className='w-40 p-5 ' src={logo} alt='' />
                </figure>

                <div className='font-semibold font-poppins flex text-[#171717] gap-10 items-center'>
                    <span className='flex p-2 '>Product</span>
                    <span className='flex p-2  '>Solutions</span>
                    <span className='flex p-2 '>Customers</span>
                    <span className='flex p-2  '>Partners</span>
                    <span className='flex p-2 '>Resources</span>
                    <span className='flex p-2  '>Company</span>
                </div>
                <div className='m-1 flex items-center   '>
                    <span className='text-[#171717] p-5 font-semibold cursor-pointer'>Login</span>
                    <button className='flex w-2/3 rounded-lg px-8 py-3 m-3 font-poppins shadow-sm hover:bg-[#240642] text-[#ffffff] font-semibold bg-[#a13dff]'> Start trail</button>
                </div>
            </div>

            {/* //firstdiv// */}

            <div className=" h-screen w-full flex">
                <div className="  h-screen w-1/2 flex  flex-col items-start ml-10">
                    <p className='mt-40 w-[7.5em]  text-6xl text-[#240642] '>Your security </p>
                    <p className=' w-[7.5em] text-6xl text-[#240642] '>and compliance</p>
                    <p className='pt-3 h-20 text-6xl text-[#a13dff]  flex '>verified<img className='w-[35px]  pl-2 mb-5' src="https://assets-global.website-files.com/64009032676f24f376f002fc/6400ac82429afb400831fa6d_trust-icon.svg"></img></p>
                    <p className='max-w-lg py-2  text-xl text-[#240642]  tracking-wide'>Automate compliance and streamline security reviews with the leading trust management platform. Vanta helps SaaS businesses of all sizes manage risk and prove security in real time.</p>
                    <div className="flex">
                        <button className=' flex text-xl antialiased rounded px-10 py-5 m-5 shadow-sm hover:bg-[#a13dff] text-[#ffffff] font-semibold bg-[#240642]' >Request for Demo <i className="fa-solid fa-arrow-right pt-[6px] ml-2"></i></button>
                        <p className='text-[#a171fc] m-5 pt-5 font-medium text-xl hover:underline '>Watch On-Demand Demo<i className="fa-solid fa-arrow-right pt-[6px] ml-2"></i></p>

                    </div>
                </div>
                <div className="flex justify-center items-center w-1/2 h-full">
                    <img className='w-[500px] h-[500px] ' src='https://assets-global.website-files.com/64009032676f24f376f002fc/641ad753cec88a1caea8e8bf_home-hero-illus-p-800.png'></img>
                </div>
            </div>

            {/* //second div// */}

            <div className="flex h-[200px]  w-full bg-[#240642] flex-col mt-20 ">
                <p className='flex font-semibold text-[#ffffff] p-5 mb-5 justify-center'>The security and compliance platform trusted by more than 5,000 customers.</p>
                <marquee className="" direction="500">

                    <div className="flex justify-center  items-center ">
                        <img className='h-14 mx-10 object-contain ' src={logo8} alt='' />
                        <img className='h-14 mx-10 object-contain ' src={logo2} alt='' />
                        <img className='h-14 mx-10 object-contain ' src={logo3} alt='' />
                        <img className='h-14 mx-10 object-contain ' src={logo4} alt='' />
                        <img className='h-14 mx-10 object-contain ' src={logo5} alt='' />
                        <img className='h-14 mx-10 object-contain ' src={logo6} alt='' />
                        <img className='h-14 mx-10 object-contain ' src={logo7} alt='' />
                    </div>
                </marquee>
            </div>

            {/* //third div// */}

            <div className="h-[600px] flex flex-col w-full ">
                <div className="flex  h-1/2 w-[40em] px-10 pt-10 flex-col">
                    <p className='text-start text-[#9789a6] flex font-productsansr text-lg'>Our products</p>
                    <p className='text-start text-6xl text-[#240642] pt-5  '>Explore the Delta platform </p>
                </div>
                <div className="flex justify-center items-center ">
                    <div className="h-[273px] w-[200px] items-center mx-10 ">
                        <img className='mb-7 ' src={logo9} alt='' />
                        <p className='text-2xl font-poppins text-[#240642] '>Frameworks</p>
                        <p className='text-base font-dmsans text-[#9789a6] py-4'>Build a flexible and comprehensive compliance program</p>
                    </div>
                    <div className="h-[273px] w-[200px] items-center mx-10">
                        <img className='mb-7 h-[86px] w-[86px] ' src={logo12} alt='' />
                        <p className='text-2xl font-poppins text-[#240642] '>Integrations</p>
                        <p className='text-base font-dmsans text-[#9789a6] py-4'>Monitor and secure the tools your business relies on</p>

                    </div>
                    <div className="h-[273px] w-[200px] items-center mx-10">
                        <img className='mb-7 h-[86px] w-[86px] ' src={logo10} alt='' />
                        <p className='text-2xl font-poppins text-[#240642] '>Features</p>
                        <p className='text-base font-dmsans text-[#9789a6] py-4'>Get up and running with these core capabilities</p>

                    </div>
                    <div className="h-[273px] w-[200px] items-center mx-10">
                        <img className='mb-7 h-[86px] w-[86px] ' src={logo11} alt='' />
                        <p className='text-2xl font-poppins text-[#240642] '>Questionnaire Automation</p>
                        <p className='text-base font-dmsans text-[#9789a6] py-4'>Establish trust by proactively sharing your security program</p>
                    </div>
                </div>
            </div>
            <div className=' mt-10 border-2 border-[#e9e6ec] mx-10'></div>


            {/* //forth div// */}

            <div className="h-screen w-full flex ">
                <div className="flex flex-col w-1/2 ">

                    <div className="h-1/3  font-poppins justify-center items-center ">
                        <p className='text-lg text-[#9789a6] mx-10 font-dmsans mt-3'>Solutions</p>
                        <p className='text-6xl text-[#240642] pt-5 mx-10 '>We scale with you at every stage</p>
                    </div>
                    <div className="h-full pt-4  justify-center items-center">
                        <p className='text-2xl text-[#240642] ml-10 pb-2 items-center'>Startup</p>
                        <p className=' justify-center text-[17px] tracking-wide ml-10 text-[#9789a6] '>Secure new deals, validate market fit, and reach the milestones you need to unlock funding.</p>

                        <div className=' m-10 border-[3px] border-[#e9e6ec] mx-10'></div>

                        <p className='text-2xl text-[#240642] ml-10 pb-2 items-center '>Hyper Growth</p>
                        <p className=' justify-center text-[17px] tracking-wide ml-10 text-[#9789a6] '>Enter - and win - new markets with a security compliance program that adapts to your changing needs.</p>

                        <div className=' m-8 border-[3px] border-[#e9e6ec] mx-10'></div>

                        <p className='text-2xl text-[#240642] ml-10 pb-2 items-center '>Enterprise</p>
                        <p className=' justify-center text-[17px] tracking-wide ml-10 text-[#9789a6] '>Drive efficiency in your security program and reduce risk with better visibility into your people, vendors, and assets.</p>

                        <div className=' m-8 border-[3px] border-[#e9e6ec] mx-10'></div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-1/2 h-full">
                    <img className='justify-center flex' src={img1} alt='' />
                </div>
            </div>

            {/* //footer// */}
            
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
                    <img className="h-[100px] px-5 " src={img2} alt=''/>
                    <img className="h-[100px] px-5 " src={img3} alt=''/>
                    <img className="h-[100px] px-5 " src={img4} alt=''/>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Home